// handle api calls here
import axiosInstance from '../../services/api-axios-instance'

// get data from firebase api
export const getDataService = async () => {
    try {
        const response = await axiosInstance.get('data.json')
        return response.data
    } catch (err) {
        console.log(err)
    }
}

// saves data to firebase api
export const saveDataService = async (data) => {
    try {
        await axiosInstance.put('data.json', data)
    } catch (err) {
        console.log('error on save:', err)
    }
}
