import { Module } from '@nestjs/common'
import { UserManager } from 'src/app/users/src/managers/UserManager'
import { UserController } from './users/UserController'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserManager],
})
export class AppModule {}
