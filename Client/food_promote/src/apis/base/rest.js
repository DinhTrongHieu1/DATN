import HTTP_METHOD from "@/common/enum/httpMethodEnum";
import { HEADER_CONFIG, SERVICE_URL } from "@/apis/base/config";

const userBaseRestRequest = () => {
    const baseURL = SERVICE_URL;

    const handleResponse = async (response, cb) => {
        if (response && response.status === 200) {
            const data = await response.json();
            cb(null, data.result);
        } else {
            const errorResult = await response.json();
            switch (errorResult.statusCode) {
                case 1001:
                    cb(errorResult);
                    break;

                default:
                    cb(errorResult);
                    break;
            }
        }
    };

    const handleError = async (error, cb) => {
        cb(error);
    };

    const fetchAsync = async (url, config, cb) => {
        try {
            const response = await fetch(url, config);
            await handleResponse(response, cb);
        } catch (error) {
            handleError(error, cb);
        }
    };

    const sendRequest = async (method, endpoint, data, cb) => {
        const config = {
            method,
            headers: HEADER_CONFIG,
        };

        if (method !== HTTP_METHOD.GET && data) {
            config.body = JSON.stringify(data);
        }
        await fetchAsync(`${baseURL}${endpoint}`, config, cb);
    };

    const get = async (endpoint, data, cb) =>
        await sendRequest(HTTP_METHOD.GET, endpoint, data, cb);
    const post = async (endpoint, data, cb) =>
        await sendRequest(HTTP_METHOD.POST, endpoint, data, cb);
    const put = async (endpoint, data, cb) =>
        await sendRequest(HTTP_METHOD.PUT, endpoint, data, cb);
    const del = async (endpoint, data, cb) =>
        await sendRequest(HTTP_METHOD.DELETE, endpoint, data, cb);

    return {
        get,
        post,
        put,
        delete: del,
    };
};

export default userBaseRestRequest;
