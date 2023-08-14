import { EnvironmentVariables } from './environment.variables'

export const healthCheckConfig = (configEnvs: EnvironmentVariables) => ({
    build: configEnvs.SERVICE_VERSION
})
