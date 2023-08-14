import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator'

export class EnvironmentVariables {
    @IsOptional()
    @IsNumber()
    readonly API_PORT: number = 3000

    @IsOptional()
    @IsString()
    readonly API_HOST: string = '0.0.0.0'

    @IsOptional()
    @IsString()
    readonly CORS_ALLOWED_ORIGINS: string = '*'

    // default 20 MB
    @IsOptional()
    @IsInt()
    readonly MAX_FILE_SIZE_KB: number = 20 * 1024 * 1024

    @IsOptional()
    @IsString()
    readonly USE_GQL_PLAYGROUND: string = 'false'

    @IsOptional()
    @IsString()
    readonly SERVICE_VERSION: string = 'unknown'

    @IsString()
    readonly ELASTICSEARCH_USER: string

    @IsString()
    readonly ELASTICSEARCH_PASSWORD: string

    @IsString()
    readonly ELASTICSEARCH_NODE: string

    @IsString()
    readonly ELASTICSEARCH_INDEX: string
}
