// handle api calls here
import axiosInstance from '../../services/api-axios-instance'

const URL = `${process.env.VUE_APP_API_URL}/data.json`

// get data from firebase api
export const getDataService = async () => {
    // console.log('axios instance?', axiosInstance)
    console.log('url?', URL)
    try {
        const response = await axiosInstance.get(URL)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

// saves data to firebase api
export const saveDataService = async (data) => {
    try {
        await axiosInstance.put(URL, data)
    } catch (err) {
        console.log('error on save:', err)
    }
}
