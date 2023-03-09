import { IUsers } from "src/app/users/src/interfaces/IUser"

export class UserResponseDTO {
    id: number
    name: string
    username: string
    email: string

    constructor(data: IUsers) {
        this.id = data.id
        this.name = data.name
        this.username = data.username
        this.email = data.email
    }
    
}