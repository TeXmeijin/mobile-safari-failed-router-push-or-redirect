import { Middleware } from "@nuxt/types";


const redirect: Middleware = ({redirect}) => {
    redirect({
        name: 'index'
    })
}

export default redirect