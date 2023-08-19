import { Client } from '@elastic/elasticsearch'
import { ELASTICSEARCH_NODE, ELASTICSEARCH_INDEX } from './constants'
import { ElasticsearchSeed } from './types'

const client = new Client({
    node: ELASTICSEARCH_NODE
})

const esSeed = async (index: string) => {
    const { body: indexExists } = await client.indices.exists({ index })

    if (indexExists) {
        console.warn(`Seed for ${index} index already exists in Elasticsearch.`)

        return Promise.resolve()
    }

    const data = await import(`./seeds/${index}.json`)
        .then((result: ElasticsearchSeed) => result.default)
        .catch(error => {
            throw new Error(`Failed to load seeds for: ${index}: ${error.message}`)
        })

    // index will be created automatically
    const records = data.flatMap(record => [{ index: { _index: index } }, record])
    const { body: bulkResponse } = await client.bulk({ body: records })

    return bulkResponse.errors
        ? console.error(`Failed to seed data to Elasticsearch ${index} index, due to:`, bulkResponse.errors)
        : console.error(`Seed added successfully to Elasticsearch ${index} index`)
}

esSeed(ELASTICSEARCH_INDEX).catch(error => console.error(error))
