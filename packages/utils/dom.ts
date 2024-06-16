import type { Attributes, Event, TagName, IDOM } from './types'

/**
 * Select element with querySelector
 * @param {string} selector string
 */
export const $query = (selector: string): Element | null => document.querySelector(selector)
/**
 * Select element with querySelectorAll
 * @param {string} selector string
 * @return NodeListOf<Element>
 */
export const $queryAll = (selector: string): NodeListOf<Element> => document.querySelectorAll(selector)
/**
 * Select element with get ElementById
 * @param {string} id string
 */
export const $id = (id: string): HTMLElement | null => document.getElementById(id)
/**
 * Select element with getElementByClassName
 * @param {string} cls string
 */
export const $className = (cls: string) => document.getElementsByClassName(cls)
/**
 * Select element with getElementByClassName
 * @param {string} cls string
 */
export const $class = (cls: string) => document.getElementsByClassName(cls)
/**
 * Select element with getElementsByName
 * @param {string} name string
 */
export const $byName = (name: string) => document.getElementsByName(name)
/**
 * Select element with getElementsByTagName
 * @param {string} tagName string
 */
export const $byTagName = (tagName: string) => document.getElementsByTagName(tagName)
/**
 * Create element
 * @example
 * ```js
 *  // with ESModules
 *  import { $create } from 'useful-lib'
 *  // with require('')
 *  const { $create } = require('useful-lib')
 *
 *  // className = class element
 *  const el = create('element', {className: 'container', innerText: 'Text of the Element'})
 *  //render -> <element class='container'>Text of the Element</element>
 * ```
 */
export const $create = (tagName: TagName, attr?: Attributes | undefined): HTMLElement => Object.assign(document.createElement(tagName), attr)

/**
 * Append element
 * @param {Array<HTMLElement> | HTMLElement} children
 * @param {HTMLElement} father - default document.body
 * @example
 * ```js
 *  import { $append } from 'useful-lib'
 *  // if appends multiple HTMLELements use a first argument is a array
 *  $append([childrenElements], fatherElement)
 *  // if not appends multiple HTMLElements
 *  $append(childrenElement, fatherElement)
 *  // if not add the second argument by default is body
 *  $append(childrenElement) // append in the document.body
 * ```
 */
export const $append = (children: Array<HTMLElement> | HTMLElement, father: HTMLElement = document.body) =>
	children instanceof Array
		? children.map(ch => father.appendChild(ch))
		: father.appendChild(children)

/**
 * @param {HTMLElement} element
 */
export const $remove = (element: HTMLElement): void => element.remove()

/**
 * @param {HTMLElement} element
 * @param {TypeEvent} typeEvent
 * @param listener
 */
export const $addEL = (
	element: HTMLElement,
	typeEvent: Event,
	listener: () => EventListenerOrEventListenerObject,
	options?: boolean | AddEventListenerOptions
): void => element.addEventListener(typeEvent, listener, options)

/**
 * @param {HTMLElement} element
 * @param {TypeEvent} typeEvent
 * @param callback
 */
export const $removeEL = (
	element: HTMLElement,
	typeEvent: Event,
	listener: () => EventListenerOrEventListenerObject,
	options?: boolean | EventListenerOptions
) => element.removeEventListener(typeEvent, listener, options)


/**
 * @typedef {import('./index.d').IDOM} IDOM
 * @class Dom
 * @description Dom methods
 * @constructor Dom
 * @example
 * ```js
 *  // with ESModules
 *  import { Dom } from 'useful-lib'
 *  // with require('')
 *  const { Dom } = require('useful-lib')
 * ```
 * @implements {IDOM}
 */
export class Dom implements IDOM {
	/**
	 * Select element with document.querySelector
	 * @param {string} selector string
	 * @returns {Element | null}
	 */
	$query = (selector: string): Element | null => document.querySelector(selector)

	/**
	 * Select element with document.querySelectorAll
	 * @param {string} selectors string
	 * @return {NodeListOf<Element>}
	 */
	$queryAll = (selectors: string): NodeListOf<Element> => document.querySelectorAll(selectors)
	/**
	 * Select element with document.getElementByClassName
	 * @param {string} cls string
	 * @returns {HTMLCollectionOf<Element>}
	 */
	$class = (cls: string): HTMLCollectionOf<Element> => document.getElementsByClassName(cls)
	/**
	 * Select element with document.getElementByClassName
	 * @param {string} cls string
	 * @returns {HTMLCollectionOf<Element>}
	 */
	$className = (cls: string): HTMLCollectionOf<Element> => document.getElementsByClassName(cls)

	/**
	 * Select element with document.get ElementById
	 * @param {string} id string
	 * @returns {HTMLElement | null}
	 */
	$id = (id: string): HTMLElement | null => document.getElementById(id)

	/**
	 * Select element with document.getElementsByName()
	 * @param {string} name string
	 * @returns {NodeListOf<HTMLElement>}
	 */
	$byName = (name: string): NodeListOf<HTMLElement> => document.getElementsByName(name)

	/**
	 * Select element with document.getElementsByTagName()
	 * @param {string} tagName string
	 * @return {HTMLCollectionOf<Element>}
	 */
	$byTagName = (tagName: string): HTMLCollectionOf<Element> => document.getElementsByTagName(tagName)

	/**
	 * Create element document.createElement()
	 * @example
	 * ```js
	 *  // with ESModules
	 *  import { $create } from 'useful-lib'
	 *  // with require('')
	 *  const { $create } = require('useful-lib')
	 *
	 *  // className = class element
	 *  const el = create('element', {className: 'container', innerText: 'Text of the Element'})
	 *  //render -> <element class='container'>Text of the Element</element>
	 * ```
	 */
	$create = (tagName: TagName, attr?: Attributes | undefined): HTMLElement => Object.assign(document.createElement(tagName), attr)

	/**
	 * SUPER appendChild by docuemnt.appendChild()
	 * @param {Array<HTMLElement> | HTMLElement} children
	 * @param {HTMLElement} father - default document.body
	 * @example
	 * ```js
	 *  import { $append } from 'useful-lib'
	 *  // if appends multiple HTMLELements use a first argument is a array
	 *  $append([childrenElements], fatherElement)
	 *  // if not appends multiple HTMLElements
	 *  $append(childrenElement, fatherElement)
	 *  // if not add the second argument by default is body
	 *  $append(childrenElement) // append in the document.body
	 * ```
	 */
	$append = (children: HTMLElement, father: HTMLElement) => children instanceof Array
		? children.map(ch => father.appendChild(ch))
		: father.appendChild(children)

	/**
	 * remove a element of the html
	 * @param {HTMLElement} element
	 */
	$remove = (element: HTMLElement) => element.remove()

	/**
	 *
	 * add addEventLitener
	 * @param {HTMLElement} element
	 * @param {Event} typeEvent
	 * @param listener is a function or an arrow function that handles the event
	 */
	$addEL = (
		element: HTMLElement,
		typeEvent: Event,
		listener: () => EventListenerOrEventListenerObject,
		options?: boolean | AddEventListenerOptions
	) => element.addEventListener(typeEvent, listener, options)

	$removeEL = (
		element: HTMLElement,
		typeEvent: Event,
		listener: () => EventListenerOrEventListenerObject,
		options?: boolean | EventListenerOptions
	) => element.removeEventListener(typeEvent, listener, options)
}
