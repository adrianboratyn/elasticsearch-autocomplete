import { Injectable } from '@nestjs/common'
import { ElasticsearchService } from '@nestjs/elasticsearch'
import { HealthIndicatorResult, HealthIndicator, HealthCheckError } from '@nestjs/terminus'

@Injectable()
export class ElasticsearchHealthIndicator extends HealthIndicator {
    constructor(private readonly elasticsearchService: ElasticsearchService) {
        super()
    }

    async isHealthy(key: string): Promise<HealthIndicatorResult> {
        try {
            await this.elasticsearchService.ping()

            return this.getStatus(key, true)
        } catch (error) {
            const result = this.getStatus(key, false, { error })

            throw new HealthCheckError('Elasticsearch cluster health check failed', result)
        }
    }
}
