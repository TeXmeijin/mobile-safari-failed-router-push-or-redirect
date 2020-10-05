import { Middleware } from "@nuxt/types";


const redirect: Middleware = ({redirect}) => {
    redirect(302, '/')
}