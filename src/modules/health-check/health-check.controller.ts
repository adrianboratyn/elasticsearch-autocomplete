import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckResult, HealthCheckService } from '@nestjs/terminus'
import { format } from 'date-fns'
import { getConfig } from 'lib/config'
import { HEALTH_CHECK } from './constants'
import { ElasticsearchHealthIndicator } from './elasticsearch.health-indicator'
import { formatHealthCheckTimestamp } from './utils'

@Controller(HEALTH_CHECK)
export class HealthCheckController {
    private readonly build: string = getConfig().healthCheckConfig.build
    private readonly date: string

    constructor(private health: HealthCheckService, private elasticsearchHealthIndicator: ElasticsearchHealthIndicator) {
        const timestamp = formatHealthCheckTimestamp(this.build)

        this.date = timestamp ? format(new Date(timestamp), 'yyyy-MM-dd HH:mm:ss') : 'unknown'
    }

    @Get()
    @HealthCheck()
    healthCheck(): Promise<HealthCheckResult> {
        return this.health.check([
            () => ({
                app: {
                    status: 'up',
                    build: this.build,
                    date: this.date
                }
            }),
            () => this.elasticsearchHealthIndicator.isHealthy('Elasticsearch cluster')
        ])
    }
}
