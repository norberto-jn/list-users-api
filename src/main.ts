import { NestFactory } from '@nestjs/core'
import { AppModule } from 'src/app/AppModule'
import * as cors from 'cors'
async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(
        cors({
            origin: 'http://localhost:3000',
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
            preflightContinue: false,
            optionsSuccessStatus: 204
        }),
    )

    await app.listen(3000)
}
bootstrap()