import { ObjectType } from '@nestjs/graphql'
import { SalesDataRecord } from './sales-data-record.response'
import { SalesDataRecordInfo } from './sales-data-record-info.response'

@ObjectType()
export class SalesDataResponse {
    readonly record: SalesDataRecord
    readonly info: SalesDataRecordInfo
}
