import { estypes } from '@elastic/elasticsearch'

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
    body: SearchBody
}

type SearchBody = {
    query: QueryBody
    aggs?: AggregationBody
}

type AggregationBody = {
    [aggregationName: string]: estypes.AggregationContainer
}

export type QueryBody = estypes.QueryContainer

export type ElasticsearchRecord<T> = {
    _index: string
    _type: string
    _id: string
    _score: number
    _source: T
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ElasticsearchResult<T> = {
    hits: ElasticsearchHits<T>
}
