import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import warnings
from scipy.stats import norm, skew


def ignore_warn(*args, **kwargs):
    pass


warnings.warn = ignore_warn

train = pd.read_csv("./dataset/train.csv")
test = pd.read_csv("./dataset/test.csv")

train_ID = train["Id"]
test_ID = test["Id"]

train.drop("Id", axis=1, inplace=True)
test.drop("Id", axis=1, inplace=True)

# Removing outliers in GrLivArea
fig, ax = plt.subplots()
ax.scatter(x=train["GrLivArea"], y=train["SalePrice"])
plt.ylabel("SalePrice", fontsize=13)
plt.xlabel("GrLivArea", fontsize=13)
plt.show()

train = train.drop(
    train[(train["GrLivArea"] > 4000) & (train["SalePrice"] < 300000)].index
)

# Normalizing the target variable
# Aplly log transformation
train["SalePrice"] = np.log1p(train["SalePrice"])

# Filling missing values, converting to categorical
ntrain = train.shape[0]
ntest = test.shape[0]
y_train = train.SalePrice.values
all_data = pd.concat((train, test)).reset_index(drop=True)
all_data.drop(["SalePrice"], axis=1, inplace=True)
print(all_data.shape)

x_test_export = all_data[:5]
x_test_export

all_data["PoolQC"] = all_data["PoolQC"].fillna("None")
all_data["MiscFeature"] = all_data["MiscFeature"].fillna("None")
all_data["Alley"] = all_data["Alley"].fillna("None")
all_data["Fence"] = all_data["Fence"].fillna("None")
all_data["FireplaceQu"] = all_data["FireplaceQu"].fillna("None")

neighborhood_medians = all_data.groupby("Neighborhood")["LotFrontage"].median()
default_median_value = all_data["LotFrontage"].median()

column_modes = {}
for col in [
    "MSZoning",
    "Electrical",
    "KitchenQual",
    "Exterior1st",
    "Exterior2nd",
    "SaleType",
]:
    column_modes[col] = all_data[col].mode()[0]

all_data["LotFrontage"] = all_data.groupby("Neighborhood")["LotFrontage"].transform(
    lambda x: x.fillna(x.median())
)
for col in ("GarageType", "GarageFinish", "GarageQual", "GarageCond"):
    all_data[col] = all_data[col].fillna("None")
for col in ("GarageYrBlt", "GarageArea", "GarageCars"):
    all_data[col] = all_data[col].fillna(0)
for col in (
    "BsmtFinSF1",
    "BsmtFinSF2",
    "BsmtUnfSF",
    "TotalBsmtSF",
    "BsmtFullBath",
    "BsmtHalfBath",
):
    all_data[col] = all_data[col].fillna(0)
for col in ("BsmtQual", "BsmtCond", "BsmtExposure", "BsmtFinType1", "BsmtFinType2"):
    all_data[col] = all_data[col].fillna("None")
all_data["MasVnrType"] = all_data["MasVnrType"].fillna("None")
all_data["MasVnrArea"] = all_data["MasVnrArea"].fillna(0)
all_data["MSZoning"] = all_data["MSZoning"].fillna(all_data["MSZoning"].mode()[0])
all_data = all_data.drop(["Utilities"], axis=1)
all_data["Functional"] = all_data["Functional"].fillna("Typ")
all_data["Electrical"] = all_data["Electrical"].fillna(all_data["Electrical"].mode()[0])
all_data["KitchenQual"] = all_data["KitchenQual"].fillna(
    all_data["KitchenQual"].mode()[0]
)
all_data["Exterior1st"] = all_data["Exterior1st"].fillna(
    all_data["Exterior1st"].mode()[0]
)
all_data["Exterior2nd"] = all_data["Exterior2nd"].fillna(
    all_data["Exterior2nd"].mode()[0]
)
all_data["SaleType"] = all_data["SaleType"].fillna(all_data["SaleType"].mode()[0])
all_data["MSSubClass"] = all_data["MSSubClass"].fillna("None")

# Transoforming numerical values to categorical
all_data["MSSubClass"] = all_data["MSSubClass"].apply(str)
all_data["OverallCond"] = all_data["OverallCond"].astype(str)
all_data["YrSold"] = all_data["YrSold"].astype(str)
all_data["MoSold"] = all_data["MoSold"].astype(str)

from sklearn.preprocessing import LabelEncoder

cols = (
    "FireplaceQu",
    "BsmtQual",
    "BsmtCond",
    "GarageQual",
    "GarageCond",
    "ExterQual",
    "ExterCond",
    "HeatingQC",
    "PoolQC",
    "KitchenQual",
    "BsmtFinType1",
    "BsmtFinType2",
    "Functional",
    "Fence",
    "BsmtExposure",
    "GarageFinish",
    "LandSlope",
    "LotShape",
    "PavedDrive",
    "Street",
    "Alley",
    "CentralAir",
    "MSSubClass",
    "OverallCond",
    "YrSold",
    "MoSold",
)

encoders = {}
for c in cols:
    lbl = LabelEncoder()
    lbl.fit(list(all_data[c].values))
    all_data[c] = lbl.transform(list(all_data[c].values))
    encoders[c] = lbl

all_data["TotalSF"] = (
    all_data["TotalBsmtSF"] + all_data["1stFlrSF"] + all_data["2ndFlrSF"]
)

# Normalizing that features
numeric_feats = all_data.dtypes[all_data.dtypes != "object"].index

skewed_feats = (
    all_data[numeric_feats]
    .apply(lambda x: skew(x.dropna()))
    .sort_values(ascending=False)
)
skewness = pd.DataFrame({"Skew": skewed_feats})

skewness = skewness[abs(skewness) > 0.75]
from scipy.special import boxcox1p

skewed_features = skewness.index
lam = 0.15
for feat in skewed_features:
    all_data[feat] = boxcox1p(all_data[feat], lam)

all_data = pd.get_dummies(all_data)
dummy_columns = all_data.columns.tolist()
train = all_data[:ntrain]
test = all_data[ntrain:]


from sklearn.linear_model import ElasticNet, Lasso, BayesianRidge, LassoLarsIC
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.kernel_ridge import KernelRidge
from sklearn.pipeline import make_pipeline
from sklearn.svm import SVR
from sklearn.preprocessing import RobustScaler
from sklearn.base import BaseEstimator, TransformerMixin, RegressorMixin, clone
from sklearn.model_selection import KFold, cross_val_score, train_test_split
from sklearn.metrics import mean_squared_error
from catboost import CatBoostRegressor


def rmsle(y, y_pred):
    return np.sqrt(mean_squared_error(y, y_pred))


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

        # Fill LotFrontage based on stored neighborhood medians
        for idx, row in X.iterrows():
            if pd.isna(row["LotFrontage"]):
                X.at[idx, "LotFrontage"] = self.neighborhood_medians[
                    row["Neighborhood"]
                ]

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
            X[c] = encoder.transform(X[c].values)

        X["TotalSF"] = X["TotalBsmtSF"] + X["1stFlrSF"] + X["2ndFlrSF"]

        for feat in self.skewed_features:
            if feat in X:
                X[feat] = boxcox1p(X[feat], 0.15)

        X_dummies = pd.get_dummies(X)

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


lasso = make_pipeline(RobustScaler(), Lasso(alpha=0.0005, random_state=1))

GBoost = GradientBoostingRegressor(
    n_estimators=3000,
    learning_rate=0.05,
    max_depth=4,
    max_features="sqrt",
    min_samples_leaf=15,
    min_samples_split=10,
    loss="huber",
    random_state=5,
)

KRR = KernelRidge(alpha=0.6, kernel="polynomial", degree=2, coef0=2.5)


cat = CatBoostRegressor(
    iterations=2000, learning_rate=0.05, depth=6, loss_function="RMSE", verbose=200
)


stacked_averaged_models = HousePricePredictor(
    base_models=(lasso, GBoost, KRR),
    meta_model=cat,
    neighborhood_medians=neighborhood_medians,
    default_median_value=default_median_value,
    column_modes=column_modes,
    encoders=encoders,
    skewed_features=skewed_features,
    dummy_columns=dummy_columns,
)


stacked_averaged_models.fit(train.values, y_train)
stacked_train_pred = stacked_averaged_models.predict(train.values)
stacked_pred = np.expm1(stacked_averaged_models.predict(test.values))
print(rmsle(y_train, stacked_train_pred))

test_input = stacked_averaged_models.preprocess_input(x_test_export[:1])
test_prediction = stacked_averaged_models.predict(test_input)
print(stacked_averaged_models.denormalization(test_prediction))

from joblib import dump

dump(stacked_averaged_models, "HousePricePredictor.pkl")
