import { registerEnumType } from '@nestjs/graphql'

export enum SearchType {
    MATCH_PHRASE_PREFIX = 'match_phrase_prefix',
    MATCH_BOOL_PREFIX = 'match_bool_prefix',
}

registerEnumType(SearchType, {
    name: 'SearchType',
    description: 'Autocomplete search types',
})
