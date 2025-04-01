import { EnvironmentVariables } from './environment.variables'

export const elasticsearchConfig = (configEnvs: EnvironmentVariables) => ({
    username: configEnvs.ELASTICSEARCH_USER,
    password: configEnvs.ELASTICSEARCH_PASSWORD,
    node: configEnvs.ELASTICSEARCH_NODE,
    index: configEnvs.ELASTICSEARCH_INDEX,
})
