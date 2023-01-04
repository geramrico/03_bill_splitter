import axios from 'axios'

const API_URL = '/api/bills'

const createBill = async (str) => {

    //Auth not needed
   /*  const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    } */

    const response = await axios.post(API_URL)
    return response.data
}

const billService = {
    createBill
}

export default billService