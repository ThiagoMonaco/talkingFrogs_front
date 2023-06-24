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

		return response.json()
	}
}