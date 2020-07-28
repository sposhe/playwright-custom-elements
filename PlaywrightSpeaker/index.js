import { PlaywrightElement } from './../PlaywrightElement'
class PlaywrightSpeaker extends PlaywrightElement {
  constructor() {
    let role = 'emphasis'
    let styles = `
      :host(*) {
        display: inline;
        box-sizing: border-box;
        font-weight: 600;
        float: left;
        margin-right: 0.5em;
      }
      :host(*):after {
        content: ':'
      }
    `
    super({ role, styles })
  }
}
export { PlaywrightSpeaker }
