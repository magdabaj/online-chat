export type State = {
    currentUser?: User,
    isAuth: boolean,
    error?: string
}
export type User = {
    id: number,
    username: string,
    email: string,
    isOnline?: boolean,
    createDate: string,
    salt: string
}
