import { PlaywrightElement } from './../PlaywrightElement'
class PlaywrightDirection extends PlaywrightElement {
  constructor() {
    const name = 'direction'
    const role = 'emphasis'
    const styles = `
      :host(*) {
        display: block;
        box-sizing: border-box;
        font-style: italic;
        margin: 1em 0 1em 1em;
      }
      :host-context([data-playwright='speaker']),
      :host-context([data-playwright='dialog']) {
        font-weight: 400;
        display: inline;
        margin: 0;
      }
      :host-context([data-playwright='speaker']):before,
      :host-context([data-playwright='dialog']):before {
        content: ' (';
      }
      :host-context([data-playwright='speaker']):after,
      :host-context([data-playwright='dialog']):after {
        content: ')';
      }
    `
    super({ name, role, styles })
  }
}
export { PlaywrightDirection }
