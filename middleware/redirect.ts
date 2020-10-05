import { Middleware } from "@nuxt/types";

const fetchData = () => {
    return new Promise((resolve) => {
        // may cause CORS error
        fetch('https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060')
            .then(
                (response) => {
                    resolve(response.json())
                }
            )
            .catch(() => resolve())
    })
}

const redirect: Middleware = async ({redirect}) => {
    if (process.client) {
        await fetchData()
        redirect({
            name: 'index'
        })
    }
}

export default redirect