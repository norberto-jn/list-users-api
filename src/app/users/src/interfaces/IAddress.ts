import { IGeo } from "src/app/users/src/interfaces/IGeo"

export interface IAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: IGeo
}