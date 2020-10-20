import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.unsplash.com/'
})

export const unsplashPhotoApi = {
    setPhotoData (client_id: string) {
        debugger
    return instance.get<any>(`photos/random?client_id=${client_id}`)
}
}
