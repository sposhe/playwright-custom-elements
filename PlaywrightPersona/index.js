import { PlaywrightElement } from './../PlaywrightElement'
class PlaywrightPersona extends PlaywrightElement {
  constructor() {
    const name = persona
    const role = 'emphasis'
    const styles = `
      :host(*) {
        display: inline;
        box-sizing: border-box;
        font-weight: 600;
      }
      :host-context([data-playwright='direction']) {
        font-style: normal;
      }
    `
    super({ name, role, styles })
  }
}
export { PlaywrightPersona }
