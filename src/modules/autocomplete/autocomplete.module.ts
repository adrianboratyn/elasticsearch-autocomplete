import { Module } from '@nestjs/common'
import { AutocompleteResolver } from './autocomplete.resolver'
import { AutocompleteService } from './autocomplete.service'

@Module({
    providers: [AutocompleteResolver, AutocompleteService],
})
export class AutocompleteModule {}
