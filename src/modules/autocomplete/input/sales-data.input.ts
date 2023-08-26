import { Field, InputType, Int } from '@nestjs/graphql'
import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Min } from 'class-validator'

@InputType()
export class SalesDataInput {
    @IsString()
    @IsNotEmpty()
    readonly address: string

    @IsOptional()
    @IsInt()
    @IsPositive()
    @Field(() => Int)
    readonly limit: number = 20

    @IsOptional()
    @IsInt()
    @Min(0)
    @Field(() => Int)
    readonly offset: number = 0
}
