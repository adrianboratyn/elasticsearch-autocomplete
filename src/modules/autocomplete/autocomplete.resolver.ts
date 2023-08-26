import { Resolver, Query, Args } from '@nestjs/graphql'
import { AutocompleteService } from './autocomplete.service'
import { SalesDataInput } from './input'
import { SalesDataResponse } from './responses'

@Resolver()
export class AutocompleteResolver {
    constructor(private readonly autocompleteService: AutocompleteService) {}

    @Query(() => [SalesDataResponse])
    matchPhrasePrefix(@Args(SalesDataInput.name) input: SalesDataInput) {
        return this.autocompleteService.getMatchPhrasePrefixSearch(input)
    }

    @Query(() => [SalesDataResponse])
    matchBoolPrefix(@Args(SalesDataInput.name) input: SalesDataInput) {
        return this.autocompleteService.getMatchBoolPrefixSearch(input)
    }
}
