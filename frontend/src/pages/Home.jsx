import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"
import { createBill, reset } from "../features/bill/billSlice"


const Home = () => {

    const { bill } = useSelector(state => state.bill)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //Made async because navigate was faster than the createBill request
    const createNewBill = async () => {

        //Sent with empty string because AsyncThunk needs the arg
        await dispatch(createBill(''))
        //Go to bill page 
        navigate(`/${bill.id}`)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Restaurant Split</h1>
                    <p className="py-6">Separa la cuenta y paga mas rapido</p>

                    {/* useNavigate to go to /:billId */}
                    <button onClick={createNewBill} className="btn btn-primary" onc>Agregar cuenta</button>
                </div>
            </div>
        </div>
    )
}

export default Home