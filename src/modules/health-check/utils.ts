import { R } from 'lib/utils'

export const formatHealthCheckTimestamp = (build: string) => (build !== 'unknown' ? parseInt(R.last(build.split('-')) || '', 10) * 1000 : null)
