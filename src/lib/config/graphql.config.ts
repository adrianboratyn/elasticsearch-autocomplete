import { EnvironmentVariables } from './environment.variables'
import { toBoolean } from './utils'

export const graphQLConfig = (configEnvs: EnvironmentVariables) => ({
    usePlayground: toBoolean(configEnvs.USE_GQL_PLAYGROUND),
    introspection: toBoolean(configEnvs.USE_GQL_PLAYGROUND)
})
