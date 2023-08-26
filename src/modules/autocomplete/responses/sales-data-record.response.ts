import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class SalesDataRecord {
    readonly neighborhood: string
    readonly buildingClassCategory: string
    readonly block: number
    readonly lot: number
    readonly buildingClassAtPresent: string
    readonly address: string
    readonly apartmentNumber: string
    readonly zipCode: number
    readonly residentialUnits: number
    readonly commercialUnits: number
    readonly totalUnits: number
    readonly landSquareFeet: string
    readonly grossSquareFeet: string
    readonly yearBuilt: number
    readonly salePrice: string
    readonly saleDate: string
}
