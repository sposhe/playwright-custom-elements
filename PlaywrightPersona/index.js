import { PlaywrightElement } from './../PlaywrightElement'
class PlaywrightPersona extends PlaywrightElement {
  constructor() {
    let role = 'emphasis'
    let styles = `
      :host(*) {
        display: inline;
        box-sizing: border-box;
        font-weight: 600;
      }
      :host-context(pw-direction) {
        font-style: normal;
      }
    `
    super(role, styles)
  }
}
export { PlaywrightPersona }
