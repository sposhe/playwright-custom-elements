import { PlaywrightElement } from './../PlaywrightElement'
class PlaywrightDirection extends PlaywrightElement {
  constructor() {
    let role = 'emphasis'
    let styles = `
      :host(*) {
        display: block;
        box-sizing: border-box;
        font-style: italic;
        margin: 1em 0 1em 1em;
      }
      :host-context(pw-speaker),
      :host-context(pw-dialog) {
        font-weight: 400;
        display: inline;
        margin: 0;
      }
      :host-context(pw-speaker):before,
      :host-context(pw-dialog):before {
        content: ' (';
      }
      :host-context(pw-speaker):after,
      :host-context(pw-dialog):after {
        content: ')';
      }
    `
    super({ role, styles })
  }
}
export { PlaywrightDirection }
