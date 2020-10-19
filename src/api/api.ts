import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://unsplash.com/'
})

export const unsplashPhotoApi = {
    serPhotoData () {
    return instance.get
}
}
