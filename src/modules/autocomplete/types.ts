import { AggregationsAggregate, QueryDslQueryContainer } from '@elastic/elasticsearch/lib/api/types'

export type SalesDataSchema = {
    neighborhood: string
    buildingClassCategory: string
    block: number
    lot: number
    buildingClassAtPresent: string
    address: string
    apartmentNumber: string
    zipCode: number
    residentialUnits: number
    commercialUnits: number
    totalUnits: number
    landSquareFeet: string
    grossSquareFeet: string
    yearBuilt: number
    salePrice: string
    saleDate: string
}

export type ElasticsearchRequest = {
    index: string
    size: number
    explain?: boolean
    from?: number
    body: SearchBody
}

type SearchBody = {
    query: QueryBody
    aggs?: AggregationBody
}

type AggregationBody = {
    [aggregationName: string]: AggregationsAggregate | undefined
}

export type QueryBody = QueryDslQueryContainer

export type ElasticsearchRecord<T> = {
    _index: string
    _type: string
    _id: string
    _score: number
    _source: T
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _explanation: Record<string, any>
    sort?: Array<string | number>
}

export type ElasticsearchHits<T> = {
    total: {
        value: number
        relation: string
    }
    max_score: number | null
    hits: Array<ElasticsearchRecord<T>>
}

export type ElasticsearchResult<T> = {
    hits: ElasticsearchHits<T>
}
