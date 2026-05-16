import axios from "axios";
import https from "https";

export const Log = (
    stack,
    level,
    packageName,
    message
) => {

    axios.post(
        "https://4.224.186.213/evaluation-service/logs",
        {
            stack,
            level,
            package: packageName,
            message
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            },

            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            }),

            timeout: 3000
        }
    ).catch((error) => {

        console.log(
            "Logging Error:",
            error.message
        );

    });
};