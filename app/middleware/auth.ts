export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path == "/dash") {
        const token = useCookie('token')
        if (!token.value) {
            return navigateTo("/auth")
        }
    }
    if (to.path == "/dash/calendar") {
        const token = useCookie('token')
        if (!token.value) {
            return navigateTo("/auth")
        }
    }
    if (to.path == "/auth") {
        const token = useCookie('token')
        if (token.value) {
            return navigateTo("/dash")
        }
    }
})