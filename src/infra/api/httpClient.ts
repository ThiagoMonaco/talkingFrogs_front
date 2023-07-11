export default {
	POST: async (endpoint: string, body: any):Promise<any> => {
		const response = await fetch(process.env.API_URL + endpoint, {
			method: 'POST',
			body: JSON.stringify(body),
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
		})

		let data
		try {
			data = await response.json()
		} catch (error) {
			data = null
		}

		return { data: data, status: response.status }
	},
	GET: async (endpoint: string):Promise<any> => {
		const response = await fetch(process.env.API_URL + endpoint, {
			method: 'GET',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
		})

		let data
		try {
			data = await response.json()
		} catch (error) {
			data = null
		}

		return { data: data, status: response.status }
	}
}