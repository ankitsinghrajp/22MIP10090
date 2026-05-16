import axios from "axios";
import https from "https";

export const fetchData = async (url, token) => {

    const response = await axios.get(url, {

        headers: {
            Authorization: `Bearer ${token}`
        },

        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })

    });

    return response.data;
};