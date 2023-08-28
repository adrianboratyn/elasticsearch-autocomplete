import { Resolver, Query, Args } from '@nestjs/graphql'
import { AutocompleteService } from './autocomplete.service'
import { DisjunctionMaxQueryInput, BaseSearchInput } from './input'
import { SalesDataResponse } from './responses'

@Resolver()
export class AutocompleteResolver {
    constructor(private readonly autocompleteService: AutocompleteService) {}

    @Query(() => [SalesDataResponse])
    matchPhrasePrefix(@Args(BaseSearchInput.name) input: BaseSearchInput) {
        return this.autocompleteService.getMatchPhrasePrefixSearch(input)
    }

    @Query(() => [SalesDataResponse])
    matchBoolPrefix(@Args(BaseSearchInput.name) input: BaseSearchInput) {
        return this.autocompleteService.getMatchBoolPrefixSearch(input)
    }

    @Query(() => [SalesDataResponse])
    disjunctionMaxQuery(@Args(DisjunctionMaxQueryInput.name) input: DisjunctionMaxQueryInput) {
        return this.autocompleteService.getDisjunctionMaxQuerySearch(input)
    }
}
