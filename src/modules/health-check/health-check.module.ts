import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'
import { HealthCheckController } from './health-check.controller'
import { ElasticsearchHealthIndicator } from './elasticsearch.health-indicator'

@Module({
    imports: [TerminusModule],
    controllers: [HealthCheckController],
    providers: [ElasticsearchHealthIndicator],
})
export class HealthCheckModule {}
