

import { axios } from "../core/axios";
import { ImageObj, UpdateProfileObjType } from "../store/ducks/user/contracts/stateTypes";


export const ProfileApi = {
    async uploadProfilePhoto(payload: ImageObj): Promise<any> {
        const formData = new FormData()
        formData.append('profilePhoto', payload.file)
        const { data } = await axios.post('/uploadProfilePhoto', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return data.data
    },
    async uploadBackgroundPhoto(payload: ImageObj): Promise<any> {
        const formData = new FormData()
        formData.append('backgroundPhoto', payload.file)
        const { data } = await axios.post('/uploadBackgroundPhoto', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return data.data
    },
    async updateProfile(payload: UpdateProfileObjType): Promise<any> {
        const { data } = await axios.put('/user', payload)
        return data.data
    }
}