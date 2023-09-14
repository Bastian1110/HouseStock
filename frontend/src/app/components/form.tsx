'use client'
import { useState } from "react";

const Form:React.FC = () => {
    const optionalQuestionsData = {
        MSSubClass: {
          desc: "Identifies the type of dwelling involved in the sale.",
          option1: {
            value: 20,
            text: "1-STORY 1946 & NEWER ALL STYLES",
          },
          option2: {
            value: 30,
            text: "1-STORY 1945 & OLDER",
          },
          option3: {
            value: 40,
            text: "1-STORY W/FINISHED ATTIC ALL AGES",
          },
          option4: {
            value: 45,
            text: "1-1/2 STORY - UNFINISHED ALL AGES",
          },
          option5: {
            value: 50,
            text: "1-1/2 STORY FINISHED ALL AGES",
          },
          option6: {
            value: 60,
            text: "2-STORY 1946 & NEWER",
          },
          option7: {
            value: 70,
            text: "2-STORY 1945 & OLDER",
          },
          option8: {
            value: 75,
            text: "2-1/2 STORY ALL AGES",
          },
          option9: {
            value: 80,
            text: "SPLIT OR MULTI-LEVEL",
          },
          option10: {
            value: 85,
            text: "SPLIT FOYER",
          },
          option11: {
            value: 90,
            text: "DUPLEX - ALL STYLES AND AGES",
          },
          option12: {
            value: 120,
            text: "1-STORY PUD (Planned Unit Development) - 1946 & NEWER",
          },
          option13: {
            value: 150,
            text: "1-1/2 STORY PUD - ALL AGES",
          },
          option14: {
            value: 160,
            text: "2-STORY PUD - 1946 & NEWER",
          },
          option15: {
            value: 180,
            text: "PUD - MULTILEVEL - INCL SPLIT LEV/FOYER",
          },
          option16: {
            value: 190,
            text: "2 FAMILY CONVERSION - ALL STYLES AND AGES",
          },
        },
        MSZoning: {
            desc: "Identifies the general zoning classification of the sale.",
            option1: { value: "A", text: "Agriculture" },
            option2: { value: "C", text: "Commercial" },
            option3: { value: "FV", text: "Floating Village Residential" },
            option4: { value: "I", text: "Industrial" },
            option5: { value: "RH", text: "Residential High Density" },
            option6: { value: "RL", text: "Residential Low Density" },
            option7: { value: "RP", text: "Residential Low Density Park" },
            option8: { value: "RM", text: "Residential Medium Density" },
          },
          Street: {
            desc: "Type of road access to property",
            option1: { value: "Grvl", text: "Gravel" },
            option2: { value: "Pave", text: "Paved" },
          },
          Alley: {
            desc: "Type of alley access to property",
            option1: { value: "Grvl", text: "Gravel" },
            option2: { value: "Pave", text: "Paved" },
            option3: { value: "NA", text: "No alley access" },
          },
          LotShape: {
            desc: "General shape of property",
            option1: { value: "Reg", text: "Regular" },
            option2: { value: "IR1", text: "Slightly irregular" },
            option3: { value: "IR2", text: "Moderately Irregular" },
            option4: { value: "IR3", text: "Irregular" },
          },
          LandContour: {
            desc: "Flatness of the property",
            option1: { value: "Lvl", text: "Near Flat/Level" },
            option2: { value: "Bnk", text: "Banked - Quick and significant rise from street grade to building" },
            option3: { value: "HLS", text: "Hillside - Significant slope from side to side" },
            option4: { value: "Low", text: "Depression" },
          },
          Utilities: {
            desc: "Type of utilities available",
            option1: { value: "AllPub", text: "All public Utilities (E,G,W,& S)" },
            option2: { value: "NoSewr", text: "Electricity, Gas, and Water (Septic Tank)" },
            option3: { value: "NoSeWa", text: "Electricity and Gas Only" },
            option4: { value: "ELO", text: "Electricity only" },
          },
          LotConfig: {
            desc: "Lot configuration",
            option1: { value: "Inside", text: "Inside lot" },
            option2: { value: "Corner", text: "Corner lot" },
            option3: { value: "CulDSac", text: "Cul-de-sac" },
            option4: { value: "FR2", text: "Frontage on 2 sides of property" },
            option5: { value: "FR3", text: "Frontage on 3 sides of property" },
          },
          LandSlope: {
            desc: "Slope of property",
            option1: { value: "Gtl", text: "Gentle slope" },
            option2: { value: "Mod", text: "Moderate Slope" },
            option3: { value: "Sev", text: "Severe Slope" },
          },
          Neighborhood: {
            desc: "Physical locations within Ames city limits",
            option1: { value: "Blmngtn", text: "Bloomington Heights" },
            option2: { value: "Blueste", text: "Bluestem" },
            option3: { value: "BrDale", text: "Briardale" },
            option4: { value: "BrkSide", text: "Brookside" },
            option5: { value: "ClearCr", text: "Clear Creek" },
            option6: { value: "CollgCr", text: "College Creek" },
            option7: { value: "Crawfor", text: "Crawford" },
            option8: { value: "Edwards", text: "Edwards" },
            option9: { value: "Gilbert", text: "Gilbert" },
            option10: { value: "IDOTRR", text: "Iowa DOT and Rail Road" },
            option11: { value: "MeadowV", text: "Meadow Village" },
            option12: { value: "Mitchel", text: "Mitchell" },
            option13: { value: "Names", text: "North Ames" },
            option14: { value: "NoRidge", text: "Northridge" },
            option15: { value: "NPkVill", text: "Northpark Villa" },
            option16: { value: "NridgHt", text: "Northridge Heights" },
            option17: { value: "NWAmes", text: "Northwest Ames" },
            option18: { value: "OldTown", text: "Old Town" },
            option19: { value: "SWISU", text: "South & West of Iowa State University" },
            option20: { value: "Sawyer", text: "Sawyer" },
            option21: { value: "SawyerW", text: "Sawyer West" },
            option22: { value: "Somerst", text: "Somerset" },
            option23: { value: "StoneBr", text: "Stone Brook" },
            option24: { value: "Timber", text: "Timberland" },
            option25: { value: "Veenker", text: "Veenker" },
          },
          Condition1: {
            desc: "Proximity to various conditions",
            option1: { value: "Artery", text: "Adjacent to arterial street" },
            option2: { value: "Feedr", text: "Adjacent to feeder street" },
            option3: { value: "Norm", text: "Normal" },
            option4: { value: "RRNn", text: "Within 200' of North-South Railroad" },
            option5: { value: "RRAn", text: "Adjacent to North-South Railroad" },
            option6: { value: "PosN", text: "Near positive off-site feature--park, greenbelt, etc." },
            option7: { value: "PosA", text: "Adjacent to positive off-site feature" },
            option8: { value: "RRNe", text: "Within 200' of East-West Railroad" },
            option9: { value: "RRAe", text: "Adjacent to East-West Railroad" },
          },
          Condition2: {
            desc: "Proximity to various conditions (if more than one is present)",
            option1: { value: "Artery", text: "Adjacent to arterial street" },
            option2: { value: "Feedr", text: "Adjacent to feeder street" },
            option3: { value: "Norm", text: "Normal" },
            option4: { value: "RRNn", text: "Within 200' of North-South Railroad" },
            option5: { value: "RRAn", text: "Adjacent to North-South Railroad" },
            option6: { value: "PosN", text: "Near positive off-site feature--park, greenbelt, etc." },
            option7: { value: "PosA", text: "Adjacent to positive off-site feature" },
            option8: { value: "RRNe", text: "Within 200' of East-West Railroad" },
            option9: { value: "RRAe", text: "Adjacent to East-West Railroad" },
          },
          BldgType: {
            desc: "Type of dwelling",
            option1: { value: "1Fam", text: "Single-family Detached" },
            option2: { value: "2FmCon", text: "Two-family Conversion; originally built as one-family dwelling" },
            option3: { value: "Duplx", text: "Duplex" },
            option4: { value: "TwnhsE", text: "Townhouse End Unit" },
            option5: { value: "TwnhsI", text: "Townhouse Inside Unit" },
          },
          HouseStyle: {
            desc: "Style of dwelling",
            option1: { value: "1Story", text: "One story" },
            option2: { value: "1.5Fin", text: "One and one-half story: 2nd level finished" },
            option3: { value: "1.5Unf", text: "One and one-half story: 2nd level unfinished" },
            option4: { value: "2Story", text: "Two story" },
            option5: { value: "2.5Fin", text: "Two and one-half story: 2nd level finished" },
            option6: { value: "2.5Unf", text: "Two and one-half story: 2nd level unfinished" },
            option7: { value: "SFoyer", text: "Split Foyer" },
            option8: { value: "SLvl", text: "Split Level" },
          },
          OverallQual: {
            desc: "Rates the overall material and finish of the house",
            option1: { value: 10, text: "Very Excellent" },
            option2: { value: 9, text: "Excellent" },
            option3: { value: 8, text: "Very Good" },
            option4: { value: 7, text: "Good" },
            option5: { value: 6, text: "Above Average" },
            option6: { value: 5, text: "Average" },
            option7: { value: 4, text: "Below Average" },
            option8: { value: 3, text: "Fair" },
            option9: { value: 2, text: "Poor" },
            option10: { value: 1, text: "Very Poor" },
          },
          OverallCond: {
            desc: "Rates the overall condition of the house",
            option1: { value: 10, text: "Very Excellent" },
            option2: { value: 9, text: "Excellent" },
            option3: { value: 8, text: "Very Good" },
            option4: { value: 7, text: "Good" },
            option5: { value: 6, text: "Above Average" },
            option6: { value: 5, text: "Average" },
            option7: { value: 4, text: "Below Average" },
            option8: { value: 3, text: "Fair" },
            option9: { value: 2, text: "Poor" },
            option10: { value: 1, text: "Very Poor" },
          },
          RoofStyle: {
            desc: "Type of roof",
            option1: { value: "Flat", text: "Flat" },
            option2: { value: "Gable", text: "Gable" },
            option3: { value: "Gambrel", text: "Gabrel (Barn)" },
            option4: { value: "Hip", text: "Hip" },
            option5: { value: "Mansard", text: "Mansard" },
            option6: { value: "Shed", text: "Shed" },
          },
          RoofMatl: {
            desc: "Roof material",
            option1: { value: "ClyTile", text: "Clay or Tile" },
            option2: { value: "CompShg", text: "Standard (Composite) Shingle" },
            option3: { value: "Membran", text: "Membrane" },
            option4: { value: "Metal", text: "Metal" },
            option5: { value: "Roll", text: "Roll" },
            option6: { value: "Tar&Grv", text: "Gravel & Tar" },
            option7: { value: "WdShake", text: "Wood Shakes" },
            option8: { value: "WdShngl", text: "Wood Shingles" },
          },
          Exterior1st: {
            desc: "Exterior covering on house",
            option1: { value: "AsbShng", text: "Asbestos Shingles" },
            option2: { value: "AsphShn", text: "Asphalt Shingles" },
            option3: { value: "BrkComm", text: "Brick Common" },
            option4: { value: "BrkFace", text: "Brick Face" },
            option5: { value: "CBlock", text: "Cinder Block" },
            option6: { value: "CemntBd", text: "Cement Board" },
            option7: { value: "HdBoard", text: "Hard Board" },
            option8: { value: "ImStucc", text: "Imitation Stucco" },
            option9: { value: "MetalSd", text: "Metal Siding" },
            option10: { value: "Other", text: "Other" },
            option11: { value: "Plywood", text: "Plywood" },
            option12: { value: "PreCast", text: "PreCast" },
            option13: { value: "Stone", text: "Stone" },
            option14: { value: "Stucco", text: "Stucco" },
            option15: { value: "VinylSd", text: "Vinyl Siding" },
            option16: { value: "Wd Sdng", text: "Wood Siding" },
            option17: { value: "WdShing", text: "Wood Shingles" },
          },
          Exterior2nd: {
            desc: "Exterior covering on house (if more than one material)",
            option1: { value: "AsbShng", text: "Asbestos Shingles" },
            option2: { value: "AsphShn", text: "Asphalt Shingles" },
            option3: { value: "BrkComm", text: "Brick Common" },
            option4: { value: "BrkFace", text: "Brick Face" },
            option5: { value: "CBlock", text: "Cinder Block" },
            option6: { value: "CemntBd", text: "Cement Board" },
            option7: { value: "HdBoard", text: "Hard Board" },
            option8: { value: "ImStucc", text: "Imitation Stucco" },
            option9: { value: "MetalSd", text: "Metal Siding" },
            option10: { value: "Other", text: "Other" },
            option11: { value: "Plywood", text: "Plywood" },
            option12: { value: "PreCast", text: "PreCast" },
            option13: { value: "Stone", text: "Stone" },
            option14: { value: "Stucco", text: "Stucco" },
            option15: { value: "VinylSd", text: "Vinyl Siding" },
            option16: { value: "Wd Sdng", text: "Wood Siding" },
            option17: { value: "WdShing", text: "Wood Shingles" },
          },
          MasVnrType: {
            desc: "Masonry veneer type",
            option1: { value: "BrkCmn", text: "Brick Common" },
            option2: { value: "BrkFace", text: "Brick Face" },
            option3: { value: "CBlock", text: "Cinder Block" },
            option4: { value: "None", text: "None" },
            option5: { value: "Stone", text: "Stone" },
          },
          MasVnrArea: { desc: "Masonry veneer area in square feet" },
          ExterQual: {
            desc: "Evaluates the quality of the material on the exterior",
            option1: { value: "Ex", text: "Excellent" },
            option2: { value: "Gd", text: "Good" },
            option3: { value: "TA", text: "Average/Typical" },
            option4: { value: "Fa", text: "Fair" },
            option5: { value: "Po", text: "Poor" },
          },
          ExterCond: {
            desc: "Evaluates the present condition of the material on the exterior",
            option1: { value: "Ex", text: "Excellent" },
            option2: { value: "Gd", text: "Good" },
            option3: { value: "TA", text: "Average/Typical" },
            option4: { value: "Fa", text: "Fair" },
            option5: { value: "Po", text: "Poor" },
          },
          Foundation: {
            desc: "Type of foundation",
            option1: { value: "BrkTil", text: "Brick & Tile" },
            option2: { value: "CBlock", text: "Cinder Block" },
            option3: { value: "PConc", text: "Poured Concrete" },
            option4: { value: "Slab", text: "Slab" },
            option5: { value: "Stone", text: "Stone" },
            option6: { value: "Wood", text: "Wood" },
          },
          BsmtQual: {
            desc: "Evaluates the height of the basement",
            option1: { value: "Ex", text: "Excellent (100+ inches)" },
            option2: { value: "Gd", text: "Good (90-99 inches)" },
            option3: { value: "TA", text: "Typical (80-89 inches)" },
            option4: { value: "Fa", text: "Fair (70-79 inches)" },
            option5: { value: "Po", text: "Poor (<70 inches)" },
            option6: { value: "NA", text: "No Basement" },
          },
          BsmtCond: {
            desc: "Evaluates the general condition of the basement",
            option1: { value: "Ex", text: "Excellent" },
            option2: { value: "Gd", text: "Good" },
            option3: { value: "TA", text: "Typical - slight dampness allowed" },
            option4: { value: "Fa", text: "Fair - dampness or some cracking or settling" },
            option5: { value: "Po", text: "Poor - Severe cracking, settling, or wetness" },
            option6: { value: "NA", text: "No Basement" },
          },
          BsmtExposure: {
            desc: "Refers to walkout or garden level walls",
            option1: { value: "Gd", text: "Good Exposure" },
            option2: { value: "Av", text: "Average Exposure (split levels or foyers typically score average or above)" },
            option3: { value: "Mn", text: "Minimum Exposure" },
            option4: { value: "No", text: "No Exposure" },
            option5: { value: "NA", text: "No Basement" },
          },
          BsmtFinType1: {
            desc: "Rating of basement finished area",
            option1: { value: "GLQ", text: "Good Living Quarters" },
            option2: { value: "ALQ", text: "Average Living Quarters" },
            option3: { value: "BLQ", text: "Below Average Living Quarters" },
            option4: { value: "Rec", text: "Average Rec Room" },
            option5: { value: "LwQ", text: "Low Quality" },
            option6: { value: "Unf", text: "Unfinished" },
            option7: { value: "NA", text: "No Basement" },
          },
          BsmtFinType2: {
            desc: "Rating of basement finished area (if multiple types)",
            option1: { value: "GLQ", text: "Good Living Quarters" },
            option2: { value: "ALQ", text: "Average Living Quarters" },
            option3: { value: "BLQ", text: "Below Average Living Quarters" },
            option4: { value: "Rec", text: "Average Rec Room" },
            option5: { value: "LwQ", text: "Low Quality" },
            option6: { value: "Unf", text: "Unfinished" },
            option7: { value: "NA", text: "No Basement" },
          },
      };
      const[optional,setOptional] = useState(false)

    const handleSubmit = (event: any) => {
        event.preventDefault();
        //Agregar lo que pasa con el submit

        const formData = new FormData(event.currentTarget);

        // Create an empty object to store form data
        const formDataObject: { [key: string]: any } = {};

        // Iterate over the form elements and add them to the formDataObject
        formData.forEach((value, key) => {
            console.log(key)
            formDataObject[key] = isNaN(value as any) ? value : parseFloat(value as string);

        });

        // Now, formDataObject contains the form data as a JSON object
        console.log(formDataObject);
        const cleanFormDataObject = { ...formDataObject };
        console.log(cleanFormDataObject);

        fetch("https://predict.cem-link.fun/predict-price",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cleanFormDataObject
            })
        })
        .then((response) =>response.json())
        .then((data) =>{
            if(data.stausCode === 400){
                console.log("NO HAY CONEXION")
            }
            else{
                console.log(data)
            }
        })

      };

      const handleOptions = () =>{
        console.log("CAMBIO")
        setOptional(!optional)
      }

    const renderOptional = () =>{
        return(
            <div>

            </div>
        );
    }
      
    const renderQuestions = () =>{
        return(
            <section className="bg-gray-900 text-white">
  <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
    <h2 className="mb-4 text-xl font-bold">Property Information</h2>
    <form action="#" onSubmit={handleSubmit}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
        <div className="sm:col-span-2">
          <label htmlFor="Neighborhood" className="block mb-2 text-sm font-medium">
            Neighorhood
          </label>
          <select
            id="Neighborhood"
            name="Neighborhood"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required
          >
            <option value="Blmngtn">Bloomington Heights</option>
                        <option value="Blueste">Bluestem</option>
                        <option value="BrDale">Briardale</option>
                        <option value="BrkSide">Brookside</option>
                        <option value="ClearCr">Clear Creek</option>
                        <option value="CollgCr">College Creek</option>
                        <option value="Crawfor">Crawford</option>
                        <option value="Edwards">Edwards</option>
                        <option value="Gilbert">Gilbert</option>
                        <option value="IDOTRR">Iowa DOT and Rail Road</option>
                        <option value="MeadowV">Meadow Village</option>
                        <option value="Mitchel">Mitchell</option>
                        <option value="Names">North Ames</option>
                        <option value="NoRidge">Northridge</option>
                        <option value="NPkVill">Northpark Villa</option>
                        <option value="NridgHt">Northridge Heights</option>
                        <option value="NWAmes">Northwest Ames</option>
                        <option value="OldTown">Old Town</option>
                        <option value="SWISU">South & West of Iowa State University</option>
                        <option value="Sawyer">Sawyer</option>
                        <option value="SawyerW">Sawyer West</option>
                        <option value="Somerst">Somerset</option>
                        <option value="StoneBr">Stone Brook</option>
                        <option value="Timber">Timberland</option>
                        <option value="Veenker">Veenker</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="OverallQual" className="block mb-2 text-sm font-medium">
            Overall Quality
          </label>
          <select
            id="OverallQual"
            name="OverallQual"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="10">Very Excellent</option>
                    <option value="9">Excellent</option>
                    <option value="8">Very Good</option>
                    <option value="7">Good</option>
                    <option value="6">Above Average</option>
                    <option value="5">Average</option>
                    <option value="4">Below Average</option>
                    <option value="3">Fair</option>
                    <option value="2">Poor</option>
                    <option value="1">Very Poor</option>
            </select>
        </div>
        <div className="w-full">
          <label htmlFor="YearBuilt" className="block mb-2 text-sm font-medium">
            Year Built
          </label>
          <input
            type="number"
            name="YearBuilt"
            id="YearBuilt"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            min="1800"
            max="2023"
            required
          />
        </div>
        <div>
          <label htmlFor="TotalSF" className="block mb-2 text-sm font-medium">
            Total Square Feet on all levels 
          </label>
          
          <input
            type="number"
            name="TotalSF"
            id="TotalSF"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            min="0"
            required
          />
        </div>
        <div>
          <label htmlFor="GrLivArea" className="block mb-2 text-sm font-medium">
            Above Ground Living Area  (Square Feet)
          </label>
          <input
            type="number"
            name="GrLivArea"
            id="GrLivArea"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div>
          <label htmlFor="GarageArea" className="block mb-2 text-sm font-medium">
          Size of Garage (Square Feet)
          </label>
          <input
            type="number"
            name="GarageArea"
            id="GarageArea"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            min="0"
            required
          />
        </div>
        <div>
          <label htmlFor="GarageYrBlt" className="block mb-2 text-sm font-medium">
            Year Garage was Built
          </label>
          <input
            type="number"
            name="GarageYrBlt"
            id="GarageYrBlt"
            min="1890"
            max="2023"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div>
        <label htmlFor="Functional" className="block mb-2 text-sm font-medium">
        Home Functionality
          </label>
          <select
            id="Functional"
            name="Functional"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="Typ">Typical Functionality</option>
            <option value="Min1">Minor Deductions 1</option>
            <option value="Min2">Minor Deductions 2</option>
            <option value="Mod">Moderate Deductions</option>
            <option value="Maj1">Major Deductions 1</option>
            <option value="Maj2">Major Deductions 2</option>
            <option value="Sev">Severely Damaged</option>
            <option value="Sal">Salvage only</option>
         </select>
        </div>
        <div>
        <label htmlFor="Fireplaces" className="block mb-2 text-sm font-medium">
            Number of Fireplaces
          </label>
          <input
            type="number"
            name="Fireplaces"
            id="Fireplaces"
            min="0"
            max="10"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div>
        <label htmlFor="BsmtQual" className="block mb-2 text-sm font-medium">
        Quality of Basement
          </label>
          <select
            id="BsmtQual"
            name="BsmtQual"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
             <option value="Ex">Excellent (100+ inches)</option>
            <option value="Gd">Good (90-99 inches)</option>
            <option value="TA">Typical (80-89 inches)</option>
            <option value="Fa">Fair (70-79 inches)</option>
            <option value="Po">Poor (less than 70 inches)</option>                
            <option value="NA">No Basement</option>
         </select>
        </div>
        <div>
        <label htmlFor="YearRemodAdd" className="block mb-2 text-sm font-medium">
            Year of Remodelling (Same Year as Year Built in Case of no Remodelling)
          </label>
          <input
            type="number"
            name="YearRemodAdd"
            id="YearRemodAdd"
            min="1800"
            max="2023"
            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">

        <button onClick={handleOptions} type="button">
            Options
        </button>
        <button
          type="submit"
          className="text-green-600 inline-flex items-center hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Submit and Predict
        </button>
      </div>
    </form>
  </div>
</section>
        );
    }

    return(
        <div>
            {renderQuestions()}
        </div>
    );
}
export default Form;