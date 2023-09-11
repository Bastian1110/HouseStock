'use client'
import React, { useState } from 'react';
import Step1 from './Step1';


const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [savedHouse, setSavedHouse] = useState({
    // Typescript dice que es asi o me mato
    data: {
        HouseName:"",
        MSSubClass: '',
        MSZoning: '',
        LotFrontage: '',
        LotArea: '',
        Street: '',
        Alley: '',
        LotShape: '',
        LandContour: '',
        Utilities: '',
        LotConfig: '',
        LandSlope: '',
        Neighborhood: '',
        Condition1: '',
        Condition2: '',
        BldgType: '',
        HouseStyle: '',
        OverallQual: '',
        OverallCond: '',
        YearBuilt: '',
        YearRemodAdd: '',
        RoofStyle: '',
        RoofMatl: '',
        Exterior1st: '',
        Exterior2nd: '',
        MasVnrType: '',
        MasVnrArea: '',
        ExterQual: '',
        ExterCond: '',
        Foundation: '',
        BsmtQual: '',
        BsmtCond: '',
        BsmtExposure: '',
        BsmtFinType1: '',
        BsmtFinSF1: '',
        BsmtFinType2: '',
        BsmtFinSF2: '',
        BsmtUnfSF: '',
        TotalBsmtSF: '',
        Heating: '',
        HeatingQC: '',
        CentralAir: '',
        Electrical: '',
        firstFlrSF: '',
        secondndFlrSF: '',
        LowQualFinSF: '',
        GrLivArea: '',
        BsmtFullBath: '',
        BsmtHalfBath: '',
        FullBath: '',
        HalfBath: '',
        BedroomAbvGr: '',
        KitchenAbvGr: '',
        KitchenQual: '',
        TotRmsAbvGrd: '',
        Functional: '',
        Fireplaces: '',
        FireplaceQu: '',
        GarageType: '',
        GarageYrBlt: '',
        GarageFinish: '',
        GarageCars: '',
        GarageArea: '',
        GarageQual: '',
        GarageCond: '',
        PavedDrive: '',
        WoodDeckSF: '',
        OpenPorchSF: '',
        EnclosedPorch: '',
        _3SsnPorch: '',
        ScreenPorch: '',
        PoolArea: '',
        PoolQC: '',
        Fence: '',
        MiscFeature: '',
        MiscVal: '',
        MoSold: '',
        YrSold: '',
        SaleType: '',
        SaleCondition: '',      
    },
  });

  //Agregar useEffect para tomar los datos de la base de datos.

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target;
    // Update the formData with the data entered in the current step
    setSavedHouse((prevData) => ({
      ...prevData,
      data: {
        ...prevData.data,
        [id]: value,
      },
    }));

    console.log(savedHouse)
  };

  const handleNextStep = () => {
    //Agregar algo para mandar datos a la base de datos.
    if (step < 7) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission when all steps are completed
    // You can submit the form data to your prediction logic here
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1 savedHouse={savedHouse} handleFormChange={handleFormChange} setSavedHouse={setSavedHouse} handleNextStep={handleNextStep}></Step1>
        );
      case 2:
        return (
          <div>
            {/* Step 2 form fields */}
            <button onClick={handlePrevStep}>Previous</button>
            <button onClick={handleNextStep}>Next</button>
          </div>
        );
      // Repeat for other steps

      case 7:
        return (
          <div>
            {/* Step 7 form fields */}
            <button onClick={handlePrevStep}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );

      default:
        return null;
    }
  };

  const renderStepIndicator = () => {
    const stepIndicators = [];
    for (let i = 1; i <= 7; i++) {
      stepIndicators.push(
        <div
          key={i}
          className={`step-indicator ${i === step ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} text-xl h-12 w-12 flex items-center justify-center rounded-full ml-30 cursor-pointer`}
          onClick={() => setStep(i)}
          style={{ marginRight: '50px' }}
        >
          {i}
        </div>
      );
    }
    return <div className="flex flex-col items-center space-y-4">{stepIndicators}</div>;
  };
  

  return (
    <div className="flex items-center space-x-4">
      <div className="step-navigation">
        {renderStepIndicator()}
      </div>
      <div className="form-content">
        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepForm;