class PlaywrightElement extends HTMLElement {
  constructor({ role = 'none', styles = ':host(*) { display: block; }' }) {
    super()
    this.setAttribute('role', role)
    const fragment = document.createDocumentFragment()
    const slot = document.createElement('slot')
    const style = document.createElement('style')
    style.textContent = styles.replace(/^\s{4}/gm, '')
    fragment.appendChild(style)
    fragment.appendChild(slot)
    const shadow = this.attachShadow({ mode: 'open' }).appendChild(fragment.cloneNode(true))
  }
}
export { PlaywrightElement }
