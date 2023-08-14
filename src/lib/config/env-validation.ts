import { plainToInstance } from 'class-transformer'
import { validateSync } from 'class-validator'
import { EnvironmentVariables } from './environment.variables'

// eslint-disable-next-line @typescript-eslint/ban-types
export const envValidation = (config: Record<string, unknown>) => {
    const validatedConfig = plainToInstance(EnvironmentVariables, config, { enableImplicitConversion: true })

    const errors = validateSync(validatedConfig, { skipMissingProperties: false })

    if (errors.length > 0) {
        throw new Error(errors.toString())
    }

    return validatedConfig
}
