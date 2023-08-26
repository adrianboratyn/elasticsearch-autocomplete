import { Resolver } from '@nestjs/graphql'
import { AutocompleteService } from './autocomplete.service'

@Resolver()
export class AutocompleteResolver {
    constructor(private readonly autocompleteService: AutocompleteService) {}
}
