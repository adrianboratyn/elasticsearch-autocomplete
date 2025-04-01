import { Global, Module } from '@nestjs/common'
import { ElasticsearchModule as ElasticsearchCommonModule } from '@nestjs/elasticsearch'
import { getConfig } from 'lib/config'

@Global()
@Module({
    imports: [
        ElasticsearchCommonModule.registerAsync({
            useFactory: () => {
                const { username, password, node } = getConfig().elasticsearchConfig

                return {
                    auth: {
                        username,
                        password,
                    },
                    node,
                }
            },
        }),
    ],
    exports: [ElasticsearchCommonModule],
})
export class ElasticsearchModule {}
