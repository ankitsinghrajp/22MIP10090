import axios from "axios";
import https from "https";

const agent = new https.Agent({
    rejectUnauthorized: false
});

export const fetchData = async (url, token) => {

    try {

        const response = await axios.get(url, {
            httpsAgent: agent,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;

    } catch (error) {

        throw new Error(
            error.response?.data?.message || error.message
        );
    }
};