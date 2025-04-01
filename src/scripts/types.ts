// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ElasticsearchDocument = Record<string, any>

export type ElasticsearchSeed = {
    default: Array<ElasticsearchDocument>
}
