import { Injectable } from '@nestjs/common'
import axios from 'axios'
import * as _ from 'lodash'
import { IUsers } from 'src/app/users/src/interfaces/IUser'

@Injectable()
export class UserManager {
    async findAll():Promise<IUsers[]> {
        const users = await axios.get('https://jsonplaceholder.typicode.com/users')
        return _.orderBy(users.data, ['name'], ['asc']) as IUsers[]
    }
}
