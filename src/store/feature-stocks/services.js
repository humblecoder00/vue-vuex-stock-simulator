import axios from 'axios'

// handle api calls here
// import axiosInstance from '../../services/api-axios-instance'

axios.defaults.baseURL = process.env.VUE_APP_API_URL

// get data from firebase api
export const getDataService = async () => {
    try {
        const response = await axios.get('data.json')
        return response.data
    } catch (err) {
        console.log(err)
    }
}

// saves data to firebase api
export const saveDataService = async (data) => {
    try {
        await axios.put('data.json', data)
    } catch (err) {
        console.log('error on save:', err)
    }
}
