import { Injectable, Logger } from '@nestjs/common'
import { ElasticsearchService } from '@nestjs/elasticsearch'
import { getConfig } from 'lib/config'
import { DisjunctionMaxQueryInput, BaseSearchInput } from './input'
import { ElasticsearchRequest, SalesDataSchema, ElasticsearchResult } from './types'
import { AUTOCOMPLETE_SERVICE } from './constants'

@Injectable()
export class AutocompleteService {
    private readonly logger = new Logger(AUTOCOMPLETE_SERVICE)
    private readonly esIndex = getConfig().elasticsearchConfig.index

    constructor(
        private readonly elasticsearchService: ElasticsearchService,
    ) {}

    getMatchPhrasePrefixSearch(input: BaseSearchInput) {
        const { searchField, searchValue, offset, limit } = input

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
                                [searchField]: {
                                    query: searchValue
                                }
                            }
                        }
                    }
                }
            }
        }

        return this.elasticsearchService
            .search<ElasticsearchResult<SalesDataSchema>>(searchRequestBody)
            .then(result => result.hits.hits.map(({ _source, _score, _explanation }) => ({
                record: _source,
                info: {
                    score: _score,
                    explanation: JSON.stringify(_explanation?.description)
                }
            })))           
            .catch(error => {
                this.logger.error(`Error in AutocompleteService.getMatchPhrasePrefixSearch(): ${error.message}`)

                throw error
            })
    }

    getMatchBoolPrefixSearch(input: BaseSearchInput) {
        const { searchField, searchValue, offset, limit } = input

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
                                [searchField]: {
                                    query: searchValue
                                }
                            }
                        }
                    }
                }
            }
        }

        return this.elasticsearchService
            .search<ElasticsearchResult<SalesDataSchema>>(searchRequestBody)
            .then(result => result.hits.hits.map(({ _source, _score, _explanation }) => ({ 
                record: _source, 
                info: {
                    score: _score,
                    explanation: JSON.stringify(_explanation)
                } 
            })))
            .catch(error => {
                this.logger.error(`Error in AutocompleteService.getMatchBoolPrefixSearch(): ${error.message}`)

                throw error
            })
    }

    getDisjunctionMaxQuerySearch(input: DisjunctionMaxQueryInput) {
        const { addressOrNeighborhood, searchType, offset, limit } = input

        const searchRequestBody: ElasticsearchRequest = {
            index: this.esIndex,
            from: offset * limit,
            size: limit,
            explain: true,
            body: {
                query: {
                    bool: {
                        must: {
                            dis_max: {
                                queries: [
                                    {
                                        [searchType]: {
                                            address: {
                                                query: addressOrNeighborhood
                                            }
                                        }
                                    },
                                    {
                                        [searchType]: {
                                            neighborhood: {
                                                query: addressOrNeighborhood
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        }

        return this.elasticsearchService
            .search<ElasticsearchResult<SalesDataSchema>>(searchRequestBody)
            .then(result => result.hits.hits.map(({ _source, _score, _explanation }) => ({
                record: _source,
                info: {
                    score: _score,
                    explanation: JSON.stringify(_explanation)
                }
            })))
            .catch(error => {
                this.logger.error(`Error in AutocompleteService.getDisjunctionMaxQuerySearch(): ${error.message}`)

                throw error
            })
    }
}
