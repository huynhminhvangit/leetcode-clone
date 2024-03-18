import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"
import { authApi } from "@/services"


const useUserProfile = () => {
    const [user, setUser] = useLocalStorage("user", "")
    const [accessToken] = useLocalStorage("access-token", "")

    useEffect(() => {

        async function fetchData() {
            const { data } = await authApi.getProfile()

            setUser(data)
        }
        if (accessToken) {
            fetchData();
        }
    }, [accessToken, setUser])

    return user

}

export default useUserProfile;