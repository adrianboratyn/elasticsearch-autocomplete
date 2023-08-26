import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common'
import { ElasticsearchService } from '@nestjs/elasticsearch'
import { getConfig } from 'lib/config'
import { SalesDataInput } from './input'
import { ElasticsearchRequest, SalesDataSchema, ElasticsearchResult } from './types'
import { AUTOCOMPLETE_SERVICE } from './constants'

@Injectable()
export class AutocompleteService {
    private readonly logger = new Logger(AUTOCOMPLETE_SERVICE)
    private readonly esIndex = getConfig().elasticsearchConfig.index

    constructor(
        private readonly elasticsearchService: ElasticsearchService,
    ) {}

    getMatchPhrasePrefixSearch(input: SalesDataInput) {
        const searchRequestBody: ElasticsearchRequest = {
            index: this.esIndex,
            size: 10, // todo: add pagination
            body: {
                query: {
                    bool: {
                        must: {
                            match_phrase_prefix: {
                                address: {
                                    query: input.address
                                }
                            }
                        }
                    }
                }
            }
        }

        return this.elasticsearchService
            .search<ElasticsearchResult<SalesDataSchema>>(searchRequestBody)
            .then(result => result.body.hits.hits.map(({ _source }) => _source))
            .catch(error => {
                this.logger.error(`Error in TransactionsService.getTransactions: ${error.message}`)

                if (error instanceof NotFoundException) {
                    throw error
                }

                throw new BadRequestException(error.message)
            })
    }

    getMatchBoolPrefixSearch(input: SalesDataInput) {
        const searchRequestBody: ElasticsearchRequest = {
            index: this.esIndex,
            size: 10, // todo: add pagination
            body: {
                query: {
                    bool: {
                        must: {
                            match_bool_prefix: {
                                address: {
                                    query: input.address
                                }
                            }
                        }
                    }
                }
            }
        }

        return this.elasticsearchService
            .search<ElasticsearchResult<SalesDataSchema>>(searchRequestBody)
            .then(result => result.body.hits.hits.map(({ _source }) => _source))
            .catch(error => {
                this.logger.error(`Error in TransactionsService.getTransactions: ${error.message}`)

                if (error instanceof NotFoundException) {
                    throw error
                }

                throw new BadRequestException(error.message)
            })
    }
}
