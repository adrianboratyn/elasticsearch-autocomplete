import { HttpMethods } from 'lib/common'
import { EnvironmentVariables } from './environment.variables'

export const corsConfig = (configEnvs: EnvironmentVariables) => ({
    origin: configEnvs.CORS_ALLOWED_ORIGINS,
    methods: [HttpMethods.PUT, HttpMethods.GET, HttpMethods.PATCH, HttpMethods.POST, HttpMethods.OPTIONS]
})
