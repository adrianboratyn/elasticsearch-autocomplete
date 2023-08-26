import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class SalesDataRecordInfo {
    readonly score: number
    readonly explanation?: string
}
