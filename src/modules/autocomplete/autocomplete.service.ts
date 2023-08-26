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
        const { address, offset, limit } = input

        const searchRequestBody: ElasticsearchRequest = {
            index: this.esIndex,
            from: offset * limit,
            size: limit,
            explain: true,
            body: {
                query: {
                    bool: {
                        must: {
                            match_phrase_prefix: {
                                address: {
                                    query: address
                                }
                            }
                        }
                    }
                }
            }
        }

        return this.elasticsearchService
            .search<ElasticsearchResult<SalesDataSchema>>(searchRequestBody)
            .then(result => result.body.hits.hits.map(({ _source, _score, _explanation }) => ({
                record: _source,
                info: {
                    score: _score,
                    explanation: JSON.stringify(_explanation.description)
                }
            })))           
            .catch(error => {
                this.logger.error(`Error in AutocompleteService.getMatchPhrasePrefixSearch(): ${error.message}`)

                if (error instanceof NotFoundException) {
                    throw error
                }

                throw new BadRequestException(error.message)
            })
    }

    getMatchBoolPrefixSearch(input: SalesDataInput) {
        const { address, offset, limit } = input

        const searchRequestBody: ElasticsearchRequest = {
            index: this.esIndex,
            from: offset * limit,
            size: limit,
            explain: true,
            body: {
                query: {
                    bool: {
                        must: {
                            match_bool_prefix: {
                                address: {
                                    query: address
                                }
                            }
                        }
                    }
                }
            }
        }

        return this.elasticsearchService
            .search<ElasticsearchResult<SalesDataSchema>>(searchRequestBody)
            .then(result => result.body.hits.hits.map(({ _source, _score, _explanation }) => ({ 
                record: _source, 
                info: {
                    score: _score,
                    explanation: JSON.stringify(_explanation)
                } 
            })))
            .catch(error => {
                this.logger.error(`Error in AutocompleteService.getMatchBoolPrefixSearch(): ${error.message}`)

                if (error instanceof NotFoundException) {
                    throw error
                }

                throw new BadRequestException(error.message)
            })
    }
}
