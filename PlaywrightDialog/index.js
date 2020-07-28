import { PlaywrightElement } from './../PlaywrightElement'
class PlaywrightDialog extends PlaywrightElement {
  constructor() {
    let role = 'emphasis'
    let styles = `
      :host(*) {
        display: block;
        box-sizing: border-box;
        margin: 1em 0 1em 1em;
      }
    `
    super({ role, styles })
  }
}
export { PlaywrightDialog }
