import { Controller, Get } from '@nestjs/common'
import { UserResponseDTO } from 'src/app/users/src/dtos/responses/UserResponseDTO'
import { UserManager } from 'src/app/users/src/managers/UserManager'

@Controller('users')
export class UserController {
    constructor(
        private readonly _userManager: UserManager
    ) { }

    @Get()
    async findAll() {
        const result = await this._userManager.findAll()
        return result.map(item => new UserResponseDTO(item))
    }

}