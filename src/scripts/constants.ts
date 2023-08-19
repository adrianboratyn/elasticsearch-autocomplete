import { config } from 'dotenv'

config()

export const ELASTICSEARCH_INDEX = process.env.ELASTICSEARCH_INDEX as string
export const ELASTICSEARCH_NODE = process.env.ELASTICSEARCH_NODE as string
