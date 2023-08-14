import { EnvironmentVariables } from './environment.variables'
import { bodyParserConfig } from './body-parser.config'
import { expressConfig } from './express.config'
import { validationPipeConfig } from './validation-pipe.config'
import { corsConfig } from './cors.config'
import { healthCheckConfig } from './health-check.config'
import { graphQLConfig } from './graphql.config'

export const getConfig = () => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const configEnvs = process.env as unknown as EnvironmentVariables

    return {
        bodyParserConfig: bodyParserConfig(configEnvs),
        expressConfig: expressConfig(configEnvs),
        validationPipeConfig: validationPipeConfig(),
        corsConfig: corsConfig(configEnvs),
        healthCheckConfig: healthCheckConfig(configEnvs),
        graphQLConfig: graphQLConfig(configEnvs)
    }
}
