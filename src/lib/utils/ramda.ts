import {
    values,
    toPairs,
    fromPairs,
    isNil,
    last,
} from 'ramda'
import { KeyValuePair } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */
const hasElements = (subject: any) => (Array.isArray(subject) ? subject.length > 0 : false)
const hasKeys = <T>(subject: T) => (typeof subject === 'object' && subject !== null ? Object.keys(subject as object).length > 0 : false)
const notNil = (subject: any) => !isNil(subject)
const clearObject = <T = any>(subject: KeyValuePair) => {

    const filteredArray = toPairs<any>(subject).filter(([_, value]) => notNil(value) && value !== '')

    return fromPairs(filteredArray) as T
}

export {
    values,
    hasKeys,
    clearObject,
    hasElements,
    last,
    isNil,
}
