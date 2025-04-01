export const toBoolean = <T>(value?: T) => {
    if (typeof value === 'boolean') {
        return value
    }

    if (value === 'true' || value === '1') {
        return true
    }

    return false
}
