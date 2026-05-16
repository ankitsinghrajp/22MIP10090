export const logger = (message) => {

    const currentTime = new Date().toLocaleString();

    console.log(`[${currentTime}] ${message}`);
};