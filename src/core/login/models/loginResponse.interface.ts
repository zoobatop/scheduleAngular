export interface LoginResponse {
    accessToken: string,
    refreshToken: string,
    message: string | null,
    auth: boolean
}