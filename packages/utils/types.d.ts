import {
	HTML_TAGS,
	MOUSE_EVENT_TYPE,
	KEYBOARD_EVENT_TYPE,
	INPUT_TYPE,
	REFERRER_POLICY,
	TARGET_TYPE,
	REL_TYPE,
	LOCALE_TYPE
} from './consts'

export type TagName = (typeof HTML_TAGS)[keyof typeof HTML_TAGS]
type MouseEvt = (typeof MOUSE_EVENT_TYPE)[keyof typeof MOUSE_EVENT_TYPE]
type KeyboardEvt = (typeof KEYBOARD_EVENT_TYPE)[keyof typeof KEYBOARD_EVENT_TYPE]
type Referrerpolicy = (typeof REFERRER_POLICY)[keyof typeof REFERRER_POLICY]
type InputType = (typeof INPUT_TYPE)[keyof typeof INPUT_TYPE]
type Target = (typeof TARGET_TYPE)[keyof typeof TARGET_TYPE]
type Rel = (typeof REL_TYPE)[keyof typeof REL_TYPE]

export type Event = MouseEvt | KeyboardEvt
type ON = 'on' | 'sentences'
type OFF = 'off' | 'none'
type BooleanType = boolean | 'true' | 'false'
type Autocomplete = ON

export type TruthyFalsy = 'Truthy' | 'Falsy'
export type Args = number | object | string | Array<unknown> | boolean | null | undefined | symbol | bigint

export type Locale = (typeof LOCALE_TYPE)[keyof typeof LOCALE_TYPE]

export interface Options {
	localeString?: Locale
	date?: Date
}

declare global {
	interface Date {
		localDate(optionsOrLocaleString?: Options | Locale, date?: Date): Date
	}
}

interface AttributeLink {
	type?: string
	importance?: string // revisar
	integrity?: string // revisar
	media?: string // revisar
	referrerpolicy?: Referrerpolicy
	crossorigin?: 'anonymous' | 'use-credentials'
}

interface AttributeHtml {
	xmlns?: string
	manifest?: string
}

/**
 * embed: height width src type
 * marquee: behavior direction
 * li: type value
 * ol: type
 * ul: compact
 * form: action method accept accept-charset autocomplete dir enctype name novalidate
 * canvas: moz-opaque width height
 * dialog open
 * object: archive border classid declare form name standby typemustmatch data usemap width height type
 * label: form for
 * map: name
 * menu: type='context| toolbar'
 * kbd:
 * ins: cite
 * iframe: src frameborder allow allowfullscreen allowpaymentrequest csp height width importance name referrerpolicy sandbox seamlesssrcdoc
 * option: selected value label
 * optgroup: label
 * param: name value valuetype
 * select: autocomplete autofocus form disabled multiple required size name id
 * progress: max value
 * pre: cols width wrap
 * textarea: autofocus autocomplete dirname form maxlength minlength placeholder readonly required wrap
 */

interface AttributeCol {
	span?: string
}

interface AttributeBody {
	/** The margin of the bottom of the body. This method is non-conforming, use CSS [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom) property on the element instead. */
	bottommargin?: string
	/** The margin of the left of the body. This method is non-conforming, use CSS [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left) property on the element instead. */
	leftmargin?: string
	/** Color of text for unvisited hypertext links. This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) property in conjunction with the [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link) pseudo-class instead. */
	link?: string
	/** The margin of the right of the body. This method is non-conforming, use CSS [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right) property on the element instead. */
	rightmargin?: string
	/** The margin of the top of the body. This method is non-conforming, use CSS [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top) property on the element instead. */
	topmargin?: string
	/** Color of text for visited hypertext links. This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) property in conjunction with the [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited) pseudo-class instead. */
	vlink?: string
}

interface AttributeAnchor {
	download?: string
	href?: 'javascript:void(0)' | '!#' | string
	hreflang?: string
	ping?: string
	referrerpolicy?: Referrerpolicy
	rel?: Rel
	target?: Target
}

/** @deprecated */
interface AttributeApplet {
	align?: 'top' | 'middle' | 'bottom' | 'left' | 'right'
	archive?: string
	code?: string
	codebase?: string
	hspace?: string
	object?: string
	vspace?: number
}

interface AttributeArea {
	alt?: string
	coords?: string
	href?: string
	media?: string
	shape?: 'default' | 'rect' | 'circle' | 'poly'
}

interface AttributeAudio {
	autoplay?: boolean
	controls?: boolean
	loop?: boolean
	muted?: boolean
	src?: string
	height?: string
	width?: string
	preload?: 'auto' | 'metadata' | 'none'
	crossorigin?: 'anonymous' | 'use-credentials'
	mediagroup?: string
}

interface AttributeVideo extends AttributeAudio {
	poster?: string
}

interface AttributeBaseFont {
	color?: string
	size?: string
	face?: string
}

interface AttributeBlockquote {
	cite?: string
}

interface AttributeImage {
	alt?: string
	decoding?: 'sync' | 'async' | 'auto'
	height?: number | string
	importance?: string // revisar
	intrinsicsize?: string // revisar
	ismap?: boolean | 'false' | 'true'
	loading?: 'eager' | 'lazy'
	preload?: 'auto' | 'metadata' | 'none'
	referrerpolicy?: Referrerpolicy
	sizes?: string // revisar
	srcset?: string // revisar
	usemap?: string // revisar
	width?: number | string
	crossorigin?: 'anonymous' | 'use-credentials'
}

interface AttributeMeta {
	name?: string
	content?: string
	'http-equiv'?: string
	charset?: string
}

interface AttributeLabel {
	for?: string
	form?: string
}

interface AttributeInput {
	accept?: string
	alt?: string
	autocomplete?: Autocomplete
	autofocus?: boolean
	dirname?: string // revisar
	form?: string
	formaction?: string // revisar
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formmethod?: 'get' | 'post'
	formnovalidate?: boolean
	formtarget?: string // revisar
	height?: number
	list?: string // revisar
	max?: string // revisar
	maxlenght?: string // revisar
	min?: string // revisar
	minlenght?: string // revisar
	multiple?: boolean
	pattern?: string
	placeholder?: string
	readonly?: boolean
	required?: boolean
	size?: string // revisar
	src?: string
	step?: number | 'any'
	type?: InputType
	value?: string | Array<string> | number
	width?: number
	checked?: boolean
}

interface AttributeOption {
	selected?: boolean
}

interface AttributeFieldset {
	disabled?: boolean | 'disabled'
	form?: string
	name?: string
}

interface AttributeTextArea {
	cols?: number
	form?: string
	maxlength?: number
	minlength?: number
	name?: string
	placeholder?: string
	readonly?: boolean
	rows?: number
	wrap?: 'hard' | 'soft'
	value?: string | Array<string> | number
}

interface AttributeScript {
	async?: boolean
	defer?: boolean
	fetchpriority?: 'high' | 'low' | 'auto'
	integrity?: string
	nomodule?: string
	nonce?: string
	referrerpolicy?: Referrerpolicy
	type?: 'module' | 'importmap' | 'common' | 'text/javascript' | 'speculationrules'
	crossorigin?: 'anonymous' | 'use-credentials'
}

/*
	// revisar value
	value?: string | Array<string> | number

	readonly?: boolean
	disabled?: boolean
	required?: boolean
	maxlength?: number
	minlength?: number
	autocomplete?: 'on' | 'off'
	autofocus?: boolean
	multiple?: boolean
	max?: number | string
	min?: number | string
	wrap?: 'hard' | 'soft'
	media?: string
	crossorigin?: 'anonymous' | 'use-credentials'
*/

export interface Attributes extends
	AttributeLink,
	AttributeHtml,
	AttributeBody,
	AttributeAnchor,
	AttributeApplet,
	AttributeArea,
	// AttributeAudio,
	AttributeVideo,
	AttributeBaseFont,
	AttributeBlockquote,
	// AttributeImage,
	AttributeMeta,
	AttributeLabel,
	// AttributeInput,
	AttributeOption,
	AttributeFieldset,
	AttributeTextArea
// AttributeScript
{
	accesskey?: string
	'aria-activedescendant'?: string
	'aria-atomic'?: 'false' | 'true'
	'aria-autocomplete'?: 'both' | 'inline' | 'list' | 'none'
	'aria-busy'?: 'false' | 'true'
	'aria-checked'?: 'false' | 'true' | 'mixed' | 'undefined'
	'aria-colcount'?: string
	'aria-colindex'?: string
	'aria-colspan'?: string
	'aria-controls'?: string
	'aria-current'?: 'date' | 'location' | 'page' | 'step' | 'time' | 'false' | 'true'
	'aria-describedby'?: string
	'aria-details'?: string
	'aria-disabled'?: 'false' | 'true'
	'aria-dropeffect'?: 'copy' | 'execute' | 'link' | 'move' | 'none' | 'popup'
	'aria-errormessage'?: string
	'aria-expanded'?: 'false' | 'true' | 'undefined'
	'aria-flowto'?: string
	'aria-grabbed'?: 'false' | 'true' | 'undefined'
	'aria-haspopup'?: 'dialog' | 'grid' | 'listbox' | 'menu' | 'tree' | 'false' | 'true'
	'aria-hidden'?: 'false' | 'true'
	'aria-invalid'?: 'false' | 'true' | 'grammar' | 'spelling'
	'aria-keyshortcuts'?: string
	'aria-label'?: string
	'aria-labelledby'?: string
	'aria-level'?: string
	'aria-live'?: 'assertive' | 'off' | 'polite'
	'aria-modal'?: 'false' | 'true'
	'aria-multiline'?: 'false' | 'true'
	'aria-multiselectable'?: 'false' | 'true'
	'aria-orientation'?: 'horizontal' | 'vertical' | 'undefined'
	'aria-owns'?: string
	'aria-placeholder'?: string
	'aria-posinset'?: string
	'aria-pressed'?: 'false' | 'true' | 'mixed' | 'undefined'
	'aria-readonly'?: 'false' | 'true'
	'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text'
	'aria-required'?: 'false' | 'true'
	'aria-roledescription'?: string
	'aria-rowcount'?: string
	'aria-rowindex'?: string
	'aria-rowspan'?: string
	'aria-selected'?: 'false' | 'true' | 'undefined'
	'aria-setsize'?: string
	'aria-sort'?: 'ascending' | 'descending' | 'none' | 'other'
	'aria-valuemax'?: string
	'aria-valuemin'?: string
	'aria-valuenow'?: string
	'aria-valuetext'?: string
	autocapitalize?: ON | OFF | 'words' | 'characters'
	class?: string
	contenteditable?: BooleanType | 'plaintext-only'
	contextmenu?: string // revisar
	'data-'?: string
	dir?: 'ltr' | 'rtl' | 'auto'
	draggable?: BooleanType
	dropzone?: string // revisar
	exportparts?: string // revisar
	hidden?: boolean | 'true' | 'false'
	id?: string
	inputmode?: string // revisar
	is?: string // revisar
	itemid?: string // revisar
	itemprop?: string // revisar
	itemref?: string // revisar
	itemscope?: boolean // revisar
	itemtype?: string // revisar
	lang?: string
	part?: string // revisar
	role?: string // revisar
	slot?: string // revisar
	spellcheck?: BooleanType
	style?: string
	tabindex?: number
	title?: string
	translate?: 'yes' | 'no'
	// Especific attrs of events
	onabort?: string
	onblur?: string
	oncanplay?: string
	oncanplaythrough?: string
	onchange?: string
	onclick?: string
	oncontextmenu?: string
	ondblclick?: string
	ondrag?: string
	ondragend?: string
	ondragenter?: string
	ondragleave?: string
	ondragover?: string
	ondragstart?: string
	ondrop?: string
	ondurationchange?: string
	onemptied?: string
	onended?: string
	onerror?: string
	onfocus?: string
	onformchange?: string
	onforminput?: string
	oninput?: string
	oninvalid?: string
	onkeydown?: string
	onkeypress?: string
	onkeyup?: string
	onload?: string
	onloadeddata?: string
	onloadedmetadata?: string
	onloadstart?: string
	onmousedown?: string
	onmouseenter?: string
	onmouseleave?: string
	onmousemove?: string
	onmouseout?: string
	onmouseover?: string
	onmouseup?: string
	onmousewheel?: string
	onpause?: string
	onplay?: string
	onplaying?: string
	onpointercancel?: string
	onpointerdown?: string
	onpointerenter?: string
	onpointerleave?: string
	onpointerlockchange?: string
	onpointerlockerror?: string
	onpointermove?: string
	onpointerout?: string
	onpointerover?: string
	onpointerup?: string
	onprogress?: string
	onratechange?: string
	onreadystatechange?: string
	onreset?: string
	onresize?: string
	onscroll?: string
	onseeked?: string
	onseeking?: string
	onselect?: string
	onshow?: string
	onstalled?: string
	onsubmit?: string
	onsuspend?: string
	ontimeupdate?: string
	onvolumechange?: string
	onwaiting?: string
}

export interface IDOM {
	$query: (selector: string) => Element | null
	$queryAll: (selector: string) => NodeListOf<Element>
	$class: (cls: string) => HTMLCollectionOf<Element>
	$className: (cls: string) => HTMLCollectionOf<Element>
	$id: (id: string) => HTMLElement | null
	$byName: (name: string) => NodeListOf<HTMLElement>
	$byTagName: (tagName: string) => HTMLCollectionOf<Element>
	$create: (tagName: TagName, attr?: Attributes | undefined) => HTMLElement
	$append: (children: HTMLElement, father: HTMLElement) => void
	$remove: (element: HTMLElement) => void
	$addEL: (
		element: HTMLElement,
		typeEvent: Event,
		listener: () => EventListenerOrEventListenerObject,
		options?: boolean | AddEventListenerOptions
	) => void
	$removeEL: (
		element: HTMLElement,
		typeEvent: Event,
		listener: () => EventListenerOrEventListenerObject,
		options?: boolean | EventListenerOptions
	) => void
}
