import axios from "axios";
import { configDotenv } from "dotenv";
configDotenv();

async function Log(stack, level, packageName, message) {

    try {

        const response = await axios.post(
            process.env.LOG_API,
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            }
        );

        return response.data;

    } catch (error) {

        console.log(
            "Logging Failed:",
            error.response?.data || error.message
        );
    }
}

export {Log};