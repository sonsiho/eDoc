export interface DecodeTokenDto {
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string
    UserData: string
    UserType: string
    LevelType: string
    SessionLoginId: string
    MenuPermission: string
    exp: number
    iss: string
    aud: string
}