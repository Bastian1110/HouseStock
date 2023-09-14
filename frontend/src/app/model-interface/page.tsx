
import Form from '../../components/form'

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