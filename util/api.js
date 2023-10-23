const restApi = () => {

    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
    const get = (url, params) => {

        console.log(import.meta.env)
        console.log(import.meta.env.DEV)
        console.log(process.env.API_ENDPOINT)

        console.log('API CALL (GET) : ', `${API_ENDPOINT}${url}`);
        console.log('params : {}', params)

        const response = useFetch(`${API_ENDPOINT}${url}`, {
            params,
            key: url
        })
        console.log(JSON.parse(response.data.value))

        return response
    };

    const post = (url, data) => {
        console.log('API CALL (POST): ', `${API_ENDPOINT}${url}`);
        console.log('data: ', data);

        const response = useFetch(`${API_ENDPOINT}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log(JSON.parse(response.data.value))

        return response
    };

    return { get, post }
};
export default restApi;
