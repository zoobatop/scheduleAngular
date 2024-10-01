export interface LoginResponse {
    auth: boolean,
    id: number, 
    access_token: string,
    refresh_token: string
}