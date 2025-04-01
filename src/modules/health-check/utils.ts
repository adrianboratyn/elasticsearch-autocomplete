import { R } from 'lib/utils'

export const formatHealthCheckTimestamp = (build: string) => {
    const lastPart = R.last(build.split('-'))

    return build !== 'unknown' && !R.isNil(lastPart) ? parseInt(lastPart, 10) * 1000 : null
}
