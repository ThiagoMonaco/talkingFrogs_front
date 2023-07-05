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

		const data = await response.json()
		return { data: data, status: response.status }
	}
}