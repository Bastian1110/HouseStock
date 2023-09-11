import HouseList from "../components/HouseList"
import MultiStepForm from "../components/MultiStepForm"

export default function modelinterface(){
    const signin = (event: any) => {
        event.preventDefault();
        console.log("A")
    }

    return(
        <main  >
            <MultiStepForm />
        </main>
    )
}