import { EnvironmentVariables } from './environment.variables'

export const bodyParserConfig = (configEnvs: EnvironmentVariables) => ({
    limit: configEnvs.MAX_FILE_SIZE_KB
})
