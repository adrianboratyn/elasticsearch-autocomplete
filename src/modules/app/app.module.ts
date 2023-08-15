import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default'
import { join } from 'node:path'
import { envValidation, getConfig } from 'lib/config'
import { ElasticsearchModule } from 'modules/elasticsearch'
import { HealthCheckModule } from 'modules/health-check'
import { AppService } from './app.service'
import { AppResolver } from './app.resolver'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: envValidation,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true
      }
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        debug: false,
        cache: 'bounded',
        autoSchemaFile: join(process.cwd(), 'schema.gql'),
        // @ts-ignore
        context: ({ req, res }) => ({ req, res }),
        playground: false,
        introspection: getConfig().graphQLConfig.introspection,
        plugins: [
          getConfig().graphQLConfig.usePlayground
            ? ApolloServerPluginLandingPageLocalDefault({ footer: false })
            : ApolloServerPluginLandingPageProductionDefault({ footer: false })
        ]
      })
    }),
    ElasticsearchModule,
    HealthCheckModule
  ],
  providers: [AppService, AppResolver]
})
export class AppModule {}
