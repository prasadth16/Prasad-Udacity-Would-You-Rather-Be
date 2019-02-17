class Authentication {

    constructor() {
        this.authenticated = false
    }

    login = () => {
        this.authenticated = true
        console.log("in login method!!", this.authenticated)
    }

    logout = () => {

        this.authenticated = false
        console.log("in logout method!!", this.authenticated)
    }
    isAuthenticated = () => {
        console.log("user has logged in?", this.authenticated)
        return this.authenticated
    }

}
export default new Authentication()