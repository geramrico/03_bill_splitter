import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-hot-toast"
import { createBill, reset } from "../features/bill/billSlice"


const Bill = () => {

    const { bill } = useSelector(state => state.bill)

    const { billId } = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()

 

    return (
        <>
        <div>{bill.name} from State</div>
        <div>{billId} From URL Path</div>
        </>
    )
}

export default Bill