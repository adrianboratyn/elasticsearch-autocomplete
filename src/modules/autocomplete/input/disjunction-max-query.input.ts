import { Field, InputType, Int } from '@nestjs/graphql'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Min } from 'class-validator'
import { SearchType } from '../enums'

@InputType()
export class DisjunctionMaxQueryInput {
    @IsString()
    @IsNotEmpty()
    readonly addressOrNeighborhood: string

    @IsEnum(SearchType)
    readonly searchType: SearchType

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
