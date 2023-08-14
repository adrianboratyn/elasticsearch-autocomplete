import { plainToInstance } from 'class-transformer'
import { EnvironmentVariables } from './environment.variables'
import { bodyParserConfig } from './body-parser.config'
import { expressConfig } from './express.config'
import { validationPipeConfig } from './validation-pipe.config'
import { corsConfig } from './cors.config'
import { healthCheckConfig } from './health-check.config'
import { graphQLConfig } from './graphql.config'
import { elasticsearchConfig } from './elasticsearch.config'

export const getConfig = () => {
    const configEnvs = plainToInstance(EnvironmentVariables, process.env, {
        enableImplicitConversion: true
    })

    return {
        bodyParserConfig: bodyParserConfig(configEnvs),
        expressConfig: expressConfig(configEnvs),
        validationPipeConfig: validationPipeConfig(),
        corsConfig: corsConfig(configEnvs),
        healthCheckConfig: healthCheckConfig(configEnvs),
        graphQLConfig: graphQLConfig(configEnvs),
        elasticsearchConfig: elasticsearchConfig(configEnvs)
    }
}
