
import Form from '../../components/model-interface/form'

export default function modelinterface(){
    const signin = (event: any) => {
        event.preventDefault();
        console.log("A")
    }

    return(
        <main  >
            <Form/>
        </main>
    )
}