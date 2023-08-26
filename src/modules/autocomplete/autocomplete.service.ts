import { Injectable } from '@nestjs/common'
import { ElasticsearchService } from '@nestjs/elasticsearch'
import { getConfig } from 'lib/config'

@Injectable()
export class AutocompleteService {
    private readonly esIndex = getConfig().elasticsearchConfig.index

    constructor(
        private readonly elasticsearchService: ElasticsearchService,
    ) {}
}
