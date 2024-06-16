/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * this is a console.log()
 * @param {any[]} data
 * @return void
 */
export const log = (...data: any[]): void => globalThis.console.log(data)
/**
 * this is a console.clear()
 * @return void
 */
export const clear = (): void => globalThis.console.clear()
/**
 * This is a console.time()
 * @param {string | undefined} label
 * @return void
 */
export const start = (label?: string | undefined): void => globalThis.console.time(label)
/**
 * This is a console.timeEnd()
 * @param {string | undefined} label
 * @return void
 */
export const end = (label?: string | undefined): void => globalThis.console.timeEnd(label)
/**
 * This is a console.timeLog()
 * @param {string | undefined} label
 * @param {any[]} data
 * @return void
 */
export const timeLog = (label?: string | undefined, ...data: any[]): void => globalThis.console.timeLog(label, data)
/**
 * This is a console.assert()
 * @param {boolean |undefined} condition
 * @param {any[]} data
 * @return void
 */
export const assert = (condition?: boolean | undefined, ...data: any[]): void => globalThis.console.assert(condition, data)
/**
 * This is a console.count()
 * @param {string | undefined} label The display label for the counter
 * @returns void
 */
export const count = (label?: string | undefined): void => globalThis.console.count(label)
/**
 * Resets the internal counter specific to label.
 * @param {string | undefined} label The display label for the counter.
 * @returns void
 */
export const countReset = (label?: string | undefined): void => globalThis.console.countReset(label)
/**
 * This is a console.debug()
 * @param {any[]} data
 * @returns void
 */
export const debug = (data: any[], ...optionalParams: any[]): void => globalThis.console.debug(data, ...optionalParams)
/**
 * This is a console.dir()
 * @param {any} item
 * @param {any} options
 * @returns void
 */
export const dir = (item?: any, options?: any): void => globalThis.console.dir(item, options)
/**
 * This is a console.error()
 * @param {any[]} data
 * @returns void
*/
export const error = (data: any[], ...optionalParams: any[]): void => globalThis.console.error(data, ...optionalParams)
/**
 * This is a console.info()
 * @param {any[]} data
 * @returns void
*/
export const info = (data: any[], ...optionalParams: any[]): void => globalThis.console.info(data, ...optionalParams)
/**
 * This is a console.table()
 * @param {any} tabularData
 * @param {string[] | undefined} properties
 * @returns void
*/
export const table = (tabularData: any, properties?: readonly string[] | undefined): void => globalThis.console.table(tabularData, properties)
/**
 * This is a console.trace()
 * @param {any} msg
 * @param {any[]} optionalParams
 * @returns void
*/
export const trace = (msg?: any, ...optionalParams: any[]) => globalThis.console.trace(msg, optionalParams)
/**
 * This is a console.group()
 * @param {any[]} label
 * @returns void
*/
export const group = (...label: any[]): void => globalThis.console.group(label)
/**
 * This is a console.groupCollapsed()
 * @param {any[]} label
 * @returns void
*/
export const groupCollapsed = (...label: any[]) => globalThis.console.groupCollapsed(label)
/**
 * This is a console.groupEnd()
 * @returns void
*/
export const groupEnd = (): void => globalThis.console.groupEnd()
