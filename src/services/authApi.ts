import axios from "axios";
import { getMinutes } from "date-fns";
import { LoginFormProps } from "../pages/SignIn/components/LoginModal";
import { RegisterFormProps } from "../pages/SignIn/components/RegisterModal";
import { UserType } from "../store/ducks/user/contracts/stateTypes";


interface ResponseApi<T> {
    status: string,
    data: T
}



export const AuthApi = {
    async signIn(postData: LoginFormProps): Promise<ResponseApi<UserType>> {
        const {data}  = await axios.post('/auth/login', {username: postData.email, password: postData.password})
        return data
    },

    async signUp(postData: RegisterFormProps): Promise<ResponseApi<UserType>> {
        const {data} = await axios.post('/auth/register', {
            email: postData.email,
            fullName: postData.fullName,
            nickname: postData.nickname,
            password: postData.password,
            password2: postData.password2
        })
        return data
    },

    async getMe(): Promise<ResponseApi<UserType>> {
        const {data} = await axios.get('/users/me')
        return data
    }
}