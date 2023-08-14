import { BadRequestException, HttpException, HttpStatus, ValidationError, ValidationPipeOptions } from '@nestjs/common'
import { R } from 'lib/utils'

export const validationPipeConfig = (): ValidationPipeOptions => ({
    whitelist: true,
    transform: true,
    transformOptions: {
        enableImplicitConversion: true
    },
    dismissDefaultMessages: true,
    exceptionFactory: (errors: Array<ValidationError>) => {
        const customErrors = errors.map(error => ({
            ...error,
            constraints: error.constraints ? R.clearObject(error.constraints) : {}
        }))
        const hasCustomErrors = customErrors.filter(error => R.hasKeys(error.constraints)).length > 0

        if (hasCustomErrors) {
            return new HttpException(
                {
                    code: HttpStatus.BAD_REQUEST,
                    error: 'Bad Request',
                    validation: customErrors.map(error => ({
                        field: error.property,
                        errors: R.values(error.constraints)
                    }))
                },
                HttpStatus.BAD_REQUEST
            )
        }

        return new BadRequestException()
    }
})
