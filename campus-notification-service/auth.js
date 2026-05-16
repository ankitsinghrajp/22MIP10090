

import axios from "axios";

const getToken = async () => {

    try {

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/auth",
       {
                email: "ankitsinghchouhan2022@vitbhopal.ac.in",
                name: "Ankit Singh Chouhan",
                rollNo: "22MIP10090",
                accessCode: "SfFuWg",
                clientID: "26b64804-86f6-49d1-9216-4eae162b678c",
                clientSecret: "MsneEysBwUQggdJV"
            },
        );

        console.log(response.data.access_token);

    } catch (error) {

        console.log(error.response?.data || error.message);

    }
};

getToken();