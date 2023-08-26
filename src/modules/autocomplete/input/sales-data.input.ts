import { InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class SalesDataInput {
    @IsString()
    @IsNotEmpty()
    readonly address: string
}
