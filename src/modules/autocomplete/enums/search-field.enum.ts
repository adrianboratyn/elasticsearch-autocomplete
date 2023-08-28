import { registerEnumType } from '@nestjs/graphql'

export enum SearchField {
    NEIGHBORHOOD = 'neighborhood',
    BUILDING_CLASS_CATEGORY = 'buildingClassCategory',
    ADDRESS = 'address'
}

registerEnumType(SearchField, {
    name: 'SearchField',
    description: 'Fields with autocomplete search enabled'
})
