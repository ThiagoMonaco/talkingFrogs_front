interface HttpResponseError {
    error: string
}

export interface HttpResponse<T> {
    status: number
    data: T & HttpResponseError
}