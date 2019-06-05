import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: { Authorization: 'Client-ID 698abb443c63fc628014513769a799f30bc309a380660f62c8ff193300783c45' },
})