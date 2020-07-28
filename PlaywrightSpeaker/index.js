import { PlaywrightElement } from './../PlaywrightElement'
class PlaywrightSpeaker extends PlaywrightElement {
  constructor() {
    const name = 'speaker'
    const role = 'emphasis'
    const styles = `
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
    super({ name, role, styles })
  }
}
export { PlaywrightSpeaker }
