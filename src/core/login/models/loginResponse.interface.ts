export interface LoginResponse {
    access_token: string,
    refresh_token: string,
    message: string | null,
    auth: boolean
}