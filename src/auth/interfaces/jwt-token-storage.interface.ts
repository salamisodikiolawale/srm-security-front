export default interface JwtTokenStorage{
    token: string | null;
    isAuthenticated: boolean | null;
}