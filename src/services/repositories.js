import api from './api'

const URL = 'repositories'

export async function getRepositories() {
    const { data } = await api.get(URL)

    return data
}

export async function likeRepository(id) {
    const { data } = await api.post(`${URL}/${id}/like`)

    return data
}

export default {
    getRepositories,
    likeRepository,
}
