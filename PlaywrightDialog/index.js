import { PlaywrightElement } from './../PlaywrightElement'
class PlaywrightDialog extends PlaywrightElement {
  constructor() {
    const name = 'dialog'
    const role = 'emphasis'
    const styles = `
      :host(*) {
        display: block;
        box-sizing: border-box;
        margin: 1em 0 1em 1em;
      }
    `
    super({ name, role, styles })
  }
}
export { PlaywrightDialog }
