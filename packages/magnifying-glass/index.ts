import { type CursorPos } from './type'

/**
 *
 * @param {string | HTMLImageElement} imgId
 * @param {string | HTMLElement} resultId
 * @returns {void}
 */
function magnifyingGlass(imgId: string | HTMLImageElement, resultId: string | HTMLElement): void {
	let img: HTMLImageElement
	let result: HTMLElement
	let cy: number, cx: number
	const lens = document.createElement('DIV')
	lens.setAttribute('class', 'img-zoom-lens')

	if (typeof imgId === 'string' && typeof resultId === 'string') {
		img = document.querySelector(imgId) as HTMLImageElement
		result = document.querySelector(resultId) as HTMLElement

		img.parentElement?.insertBefore(lens, img)

		cx = result.offsetWidth / lens.offsetWidth
		cy = result.offsetHeight / lens.offsetHeight

		result.style.backgroundImage = 'url(\'\' + img.src + \'\')'
		result.style.backgroundSize = (img.width * cx) + 'px ' + (img.height * cy) + 'px'
		img.addEventListener('mousemove', moveLens)
	}

	if (imgId instanceof HTMLImageElement && resultId instanceof HTMLElement) {
		imgId.parentElement?.insertBefore(lens, imgId)

		cx = resultId.offsetWidth / lens.offsetWidth
		cy = resultId.offsetHeight / lens.offsetHeight

		resultId.style.backgroundImage = 'url(\'\' + img.src + \'\')'
		resultId.style.backgroundSize = (imgId.width * cx) + 'px ' + (imgId.height * cy) + 'px'

		imgId.addEventListener('mousemove', moveLens)
	}

	lens.addEventListener('mousemove', moveLens)

	/**
	 * @param {MouseEvent} e
	 */
	function moveLens(e: MouseEvent) {
		e.preventDefault()
		const { x: cursorX, y: cursosrY } = getCursorPos(e)

		let x = cursorX - (lens.offsetWidth / 2)
		let y = cursosrY - (lens.offsetHeight / 2)

		if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth }
		if (x < 0) { x = 0 }
		if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight }
		if (y < 0) { y = 0 }

		lens.style.left = x + 'px'
		lens.style.top = y + 'px'

		result.style.backgroundPosition = '-' + (x * cx) + 'px -' + (y * cy) + 'px'
	}
	/**
	 * @typedef {x: number, y: number} CursorPos
	 * @param {MouseEvent} e
	 * @returns {CursorPos}
	 */
	function getCursorPos(e: MouseEvent): CursorPos {
		let x = 0
		let y = 0
		const a = img.getBoundingClientRect()

		x = e.pageX - a.left
		y = e.pageY - a.top

		const { scrollX, scrollY } = window

		x = x - scrollX
		y = y - scrollY

		return {
			x,
			y
		}
	}
}

export { magnifyingGlass }
export default magnifyingGlass
