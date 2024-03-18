import { BaseResponse, LoginPayload, LoginResponse, RegisterPayload, RegisterResponse, UserPayload } from "../../models"
import axiosClient from "./axios-client"

const login = (payload: LoginPayload): Promise<LoginResponse> => {
    return axiosClient.post('/api/auth/login', payload)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err.response.data
        })
}

const register = (payload: RegisterPayload): Promise<RegisterResponse> => {
    return axiosClient.post('/api/auth/register', payload)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err.response.data
    })
}

const resetPassword = (email: string): boolean => {
    // TODO
    return true;
}

const getProfile = (): Promise<BaseResponse> => {
    return axiosClient.get('/api/auth/profile')
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err.response.data
    })
}


const updateUser = (userId: string, payload: UserPayload): Promise<BaseResponse> => {
    return axiosClient.get('/api/auth/profile')
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err.response.data
    })
}

const logout = (): Promise<BaseResponse> => {
    return axiosClient.get('/api/auth/logout')
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err.response.data
    })
}


export const authApi = {
    login,
    register,
    resetPassword,
    getProfile,
    updateUser,
    logout
}