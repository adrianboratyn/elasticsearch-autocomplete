import { ShutdownSignal, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { json } from 'body-parser'
import { getConfig } from 'lib/config'
import { AppModule } from 'modules/app'

async function bootstrap() {
  const { expressConfig, corsConfig, bodyParserConfig, validationPipeConfig } = getConfig()
  const { port, host } = expressConfig

  const app = await NestFactory.create(AppModule)
  app.use(json(bodyParserConfig))
  app.enableCors(corsConfig)


  app.useGlobalPipes(new ValidationPipe(validationPipeConfig))
  app.enableShutdownHooks([ShutdownSignal.SIGINT, ShutdownSignal.SIGTERM])

  await app.listen(port, host)
}

bootstrap()
