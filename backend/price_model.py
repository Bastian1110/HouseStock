import numpy as np
import pandas as pd
import seaborn as sns
from sklearn.base import BaseEstimator, TransformerMixin, RegressorMixin, clone
from sklearn.model_selection import KFold
from scipy.special import boxcox1p
import warnings


def ignore_warn(*args, **kwargs):
    pass


warnings.warn = ignore_warn


class HousePricePredictor(BaseEstimator, RegressorMixin, TransformerMixin):
    def __init__(
        self,
        base_models,
        meta_model,
        neighborhood_medians,
        default_median_value,
        column_modes,
        encoders,
        skewed_features,
        dummy_columns,
        n_folds=5,
    ):
        self.base_models = base_models
        self.meta_model = meta_model
        self.n_folds = n_folds

        self.neighborhood_medians = neighborhood_medians
        self.default_median_value = default_median_value
        self.column_modes = column_modes
        self.encoders = encoders
        self.skewed_features = skewed_features
        self.dummy_columns = dummy_columns

    # We again fit the data on clones of the original models
    def fit(self, X, y):
        self.base_models_ = [list() for x in self.base_models]
        self.meta_model_ = clone(self.meta_model)
        kfold = KFold(n_splits=self.n_folds, shuffle=True, random_state=156)

        # Train cloned base models then create out-of-fold predictions
        # that are needed to train the cloned meta-model
        out_of_fold_predictions = np.zeros((X.shape[0], len(self.base_models)))
        for i, model in enumerate(self.base_models):
            for train_index, holdout_index in kfold.split(X, y):
                instance = clone(model)
                self.base_models_[i].append(instance)
                instance.fit(X[train_index], y[train_index])
                y_pred = instance.predict(X[holdout_index])
                out_of_fold_predictions[holdout_index, i] = y_pred

        # Now train the cloned  meta-model using the out-of-fold predictions as new feature
        self.meta_model_.fit(out_of_fold_predictions, y)
        return self

    def preprocess_input(self, X):
        if isinstance(X, dict):
            expected_columns = [
                "MSSubClass",
                "MSZoning",
                "LotFrontage",
                "LotArea",
                "Street",
                "Alley",
                "LotShape",
                "LandContour",
                "Utilities",
                "LotConfig",
                "LandSlope",
                "Neighborhood",
                "Condition1",
                "Condition2",
                "BldgType",
                "HouseStyle",
                "OverallQual",
                "OverallCond",
                "YearBuilt",
                "YearRemodAdd",
                "RoofStyle",
                "RoofMatl",
                "Exterior1st",
                "Exterior2nd",
                "MasVnrType",
                "MasVnrArea",
                "ExterQual",
                "ExterCond",
                "Foundation",
                "BsmtQual",
                "BsmtCond",
                "BsmtExposure",
                "BsmtFinType1",
                "BsmtFinSF1",
                "BsmtFinType2",
                "BsmtFinSF2",
                "BsmtUnfSF",
                "TotalBsmtSF",
                "Heating",
                "HeatingQC",
                "CentralAir",
                "Electrical",
                "1stFlrSF",
                "2ndFlrSF",
                "LowQualFinSF",
                "GrLivArea",
                "BsmtFullBath",
                "BsmtHalfBath",
                "FullBath",
                "HalfBath",
                "BedroomAbvGr",
                "KitchenAbvGr",
                "KitchenQual",
                "TotRmsAbvGrd",
                "Functional",
                "Fireplaces",
                "FireplaceQu",
                "GarageType",
                "GarageYrBlt",
                "GarageFinish",
                "GarageCars",
                "GarageArea",
                "GarageQual",
                "GarageCond",
                "PavedDrive",
                "WoodDeckSF",
                "OpenPorchSF",
                "EnclosedPorch",
                "3SsnPorch",
                "ScreenPorch",
                "PoolArea",
                "PoolQC",
                "Fence",
                "MiscFeature",
                "MiscVal",
                "MoSold",
                "YrSold",
                "SaleType",
                "SaleCondition",
            ]

            # Fill missing keys with a null value
            for col in expected_columns:
                if col not in X:
                    X[col] = None

            # Convert dictionary to DataFrame for further processing
            X = pd.DataFrame([X])

        # Ensure X is a DataFrame. If it's a Series (one row), convert to DataFrame
        elif isinstance(X, pd.Series):
            X = X.to_frame().transpose()

        for col in [
            "PoolQC",
            "MiscFeature",
            "Alley",
            "Fence",
            "FireplaceQu",
            "GarageType",
            "GarageFinish",
            "GarageQual",
            "GarageCond",
            "BsmtQual",
            "BsmtCond",
            "BsmtExposure",
            "BsmtFinType1",
            "BsmtFinType2",
            "MasVnrType",
            "MSSubClass",
        ]:
            X[col] = X[col].fillna("None")

        # Fill specific columns with 0
        for col in [
            "GarageYrBlt",
            "GarageArea",
            "GarageCars",
            "BsmtFinSF1",
            "BsmtFinSF2",
            "BsmtUnfSF",
            "TotalBsmtSF",
            "BsmtFullBath",
            "BsmtHalfBath",
            "MasVnrArea",
        ]:
            X[col] = X[col].fillna(0)

        # Fill columns using the stored mode
        for col in [
            "MSZoning",
            "Electrical",
            "KitchenQual",
            "Exterior1st",
            "Exterior2nd",
            "SaleType",
        ]:
            X[col] = X[col].fillna(self.column_modes[col])

        try:
            # Fill LotFrontage based on stored neighborhood medians
            for idx, row in X.iterrows():
                if pd.isna(row["LotFrontage"]):
                    X.at[idx, "LotFrontage"] = self.neighborhood_medians[
                        row["Neighborhood"]
                    ]
        except:
            for idx, row in X.iterrows():
                if pd.isna(row["LotFrontage"]):
                    X.at[idx, "LotFrontage"] = self.default_median_value

        # Drop the Utilities column
        X = X.drop(["Utilities"], axis=1)

        # Other specific transformations
        X["Functional"] = X["Functional"].fillna("Typ")

        X["MSSubClass"] = X["MSSubClass"].apply(str)
        X["OverallCond"] = X["OverallCond"].astype(str)
        X["YrSold"] = X["YrSold"].astype(str)
        X["MoSold"] = X["MoSold"].astype(str)

        for c, encoder in self.encoders.items():
            X[c] = X[c].astype(str)  # Ensuring data is string type for label encoding
            try:
                X[c] = encoder.transform(X[c].values)
            except ValueError:
                # Handle unknown labels
                X[c] = [self.column_modes.get(c, "Unknown") for _ in X[c].values]

        X["TotalSF"] = X["TotalBsmtSF"] + X["1stFlrSF"] + X["2ndFlrSF"]

        for feat in self.skewed_features:
            if (
                feat in X and X[feat].dtype.kind in "if"
            ):  # 'i' is for int, 'f' is for float
                # Handle NaN values or use a placeholder. Here, I'm filling NaN values with the median
                X[feat].fillna(X[feat].median(), inplace=True)
                X[feat] = boxcox1p(X[feat], 0.15)

        # Proceed to one-hot encoding
        X_dummies = pd.get_dummies(X)

        # Check for missing dummy columns and add them if they are missing
        for col in self.dummy_columns:
            if col not in X_dummies:
                X_dummies[col] = 0

        # Reorder columns to match the training order
        X_dummies = X_dummies[self.dummy_columns]

        return pd.DataFrame([X_dummies.iloc[0].to_dict()])

    # Do the predictions of all base models on the test data and use the averaged predictions as
    # meta-features for the final prediction which is done by the meta-model
    def predict(self, X):
        meta_features = np.column_stack(
            [
                np.column_stack([model.predict(X) for model in base_models]).mean(
                    axis=1
                )
                for base_models in self.base_models_
            ]
        )
        return self.meta_model_.predict(meta_features)

    def denormalization(self, X):
        return np.expm1(X)
