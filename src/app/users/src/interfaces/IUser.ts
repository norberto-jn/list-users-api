import { IAddress } from "src/app/users/src/interfaces/IAddress"
import { ICompany } from "src/app/users/src/interfaces/ICompany"

export interface IUsers {

    id: number
    name: string
    username: string
    email: string
    address: IAddress
    phone: string
    website: string
    company: ICompany

}