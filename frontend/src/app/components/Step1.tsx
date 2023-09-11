

interface Step1Props {
    savedHouse:any
    handleFormChange: (event:any) =>void,
    setSavedHouse: (data:any)=>void,
    handleNextStep:(event:any)=>void
}

const Step1:React.FC<Step1Props> = (props) =>{


    return(
        <div>
            <h2 className="mb-1 text-2xl tracking-tight bold text-center text-gray-900 dark:text-white">Property Information</h2>
            <form action="#" className="space-y-8">
            <div className='flex space-x-5'>
                <div>
              <label htmlFor="HouseName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">House Name</label>
              <input value={props.savedHouse.data.HouseName}onChange={props.handleFormChange} id = "HouseName"className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Beach House Miami" required />
                </div>
                <div>
                <label htmlFor="MSSubClass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type of Dwelling</label>
                <select value={props.savedHouse.data.MSSubClass}id="MSSubClass" name="MSSubClass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) =>
                    props.setSavedHouse({
                      data: {
                        ...props.savedHouse.data,
                        MSSubClass: e.target.value,
                      },
                    })
                  }>
                    <option value="20">1-STORY 1946 & NEWER ALL STYLES</option>
                    <option value="30">1-STORY 1945 & OLDER</option>
                    <option value="40">1-STORY W/FINISHED ATTIC ALL AGES</option>
                    <option value="45">1-1/2 STORY - UNFINISHED ALL AGES</option>
                    <option value="50">1-1/2 STORY FINISHED ALL AGES</option>
                    <option value="60">2-STORY 1946 & NEWER</option>
                    <option value="70">2-STORY 1945 & OLDER</option>
                    <option value="75">2-1/2 STORY ALL AGES</option>
                    <option value="80">SPLIT OR MULTI-LEVEL</option>
                    <option value="85">SPLIT FOYER</option>
                    <option value="90">DUPLEX - ALL STYLES AND AGES</option>
                    <option value="120">1-STORY PUD (Planned Unit Development) - 1946 & NEWER</option>
                    <option value="150">1-1/2 STORY PUD - ALL AGES</option>
                    <option value="160">2-STORY PUD - 1946 & NEWER</option>
                    <option value="180">PUD - MULTILEVEL - INCL SPLIT LEV/FOYER</option>
                    <option value="190">2 FAMILY CONVERSION - ALL STYLES AND AGES</option>
                </select>
                </div>
            </div>
            <div>
                  <label htmlFor="MSZoning" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Property Zone</label>
                  <select value={props.savedHouse.data.MSZoning} onChange={props.handleFormChange} id="MSZoning" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="A">Agriculture</option>
                  <option value="C">Commercial</option>
                  <option value="FV">Floating Village Residential</option>
                  <option value="I">Industrial</option>
                  <option value="RH">Residential High Density</option>
                  <option value="RL">Residential Low Density</option>
                  <option value="RP">Residential Low Density Park</option>
                  <option value="RM">Residential Medium Density</option>
                  </select>
            </div>
            <div>
                <label htmlFor="LotFrontage"className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" > Linear feet of street connected to property </label>
                <input type="number" value={props.savedHouse.data.LotFrontage} onChange={props.handleFormChange} id="LotFrontage"className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" ></input>
            </div>
            <div>
                <label htmlFor="LotArea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lot size in square feet</label>    
                <input type="number" value={props.savedHouse.data.LotArea} onChange={props.handleFormChange} id="LotArea"className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" ></input>
            </div>
            <div>
                <label htmlFor="Street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type of Street</label>
                <select value={props.savedHouse.data.Street} onChange={props.handleFormChange} id="Street" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Grvl">Gravel</option>
                    <option value="Pave">Paved</option>
                </select>
            </div>   
            <div>
                <label htmlFor="Alley" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Type of alley access to property </label>
                <select value={props.savedHouse.data.Alley} onChange={props.handleFormChange} id="Alley" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Grvl">Gravel</option>
                  <option value="Pave">Paved</option>
                  <option value="NA">No alley access</option>
                </select>
            </div>
            <div>
                <label htmlFor="LotShape" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">General shape of the property</label>
                <select value={props.savedHouse.data.LotShape} onChange={props.handleFormChange} id="LotShape" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Reg">Regular</option>
                    <option value="IR1">Slightly Irregular</option>
                    <option value="IR2">Moderately Irregular</option>
                    <option value="IR3">Irregular</option>
                </select>
            </div>
            <div>
                <label htmlFor="LandContour" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Flatness of the property</label>
                <select value={props.savedHouse.data.LandContour} onChange={props.handleFormChange} id="LandContour" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Lvl">Near Flat/Level</option>
                    <option value="Bnk">Banked - Quick and significant rise from street grade to building</option>
                    <option value="HLS">Hillside - Significant slope from side to side</option>
                    <option value="Low">Depression</option>
                </select>
            </div>
            <div>
            <label htmlFor="Utilities" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type of utilities available</label>
                <select value={props.savedHouse.data.Utilities} onChange={props.handleFormChange} id="Utilities" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="AllPub">All public Utilities (E,G,W,& S)</option>
                    <option value="NoSewr">Electricity, Gas, and Water (Septic Tank)</option>
                    <option value="NoSeWa">Electricity and Gas Only</option>
                    <option value="ELO">Electricity only</option>
                </select>
            </div>
            <div>
            <label htmlFor="LotConfig" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lot configuration</label>
                <select value={props.savedHouse.data.LotConfig} onChange={props.handleFormChange} id="LotConfig" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Inside">Inside lot</option>
                    <option value="Corner">Corner lot</option>
                    <option value="CulDSac">Cul-de-sac</option>
                    <option value="FR2">Frontage on 2 sides of property</option>
                    <option value="FR3">Frontage on 3 sides of property</option>
                </select>
            </div>
            <div>
            <label htmlFor="LandSlope" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Slope of property</label>
                <select value={props.savedHouse.data.LandSlope} onChange={props.handleFormChange} id="LandSlope" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Gtl">Gentle slope</option>
                    <option value="Mod">Moderate Slope</option>
                    <option value="Sev">Severe Slope</option>
                </select>
            </div>
            </form>
            <button onClick={props.handleNextStep}>Next</button>
          </div>
    )
}
export default Step1;