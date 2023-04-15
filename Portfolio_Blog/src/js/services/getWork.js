import SERVER_URL from "../config/server.config";

export default async function getWork() {
    const id = localStorage.getItem('id')
    const url = `${SERVER_URL}works/${id}.json`

    try {
        const res = await fetch(url, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        return await res.json()
    } catch (err) {
        return Promise.reject(err)
    }
}