import { Field, InputType, Int } from '@nestjs/graphql'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Min } from 'class-validator'
import { SearchField } from '../enums'

@InputType()
export class BaseSearchInput {
    @IsEnum(SearchField)
    readonly searchField: SearchField

    @IsString()
    @IsNotEmpty()
    readonly searchValue: string

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
