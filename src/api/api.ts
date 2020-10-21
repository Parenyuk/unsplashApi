import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.unsplash.com/'
})


export const unsplashPhotoApi = {
    setPhotoData(client_id: string) {
        return instance.get<any>(`photos/random?client_id=${client_id}`)
    },
    setPhotoDataList(client_id: string, count: number) {
        return instance.get<any>(`photos/random?client_id=${client_id}&count=${count}`)
    },
    setSearchInputValue(client_id: string, searchValue: string) {
        return instance.get<any>(`/search/photos?query=${searchValue}&client_id=${client_id}`)
    }
}
