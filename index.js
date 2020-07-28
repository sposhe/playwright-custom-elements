import { PlaywrightElement   } from './elements/PlaywrightElement.js'
import { PlaywrightDirection } from './elements/PlaywrightDirection.js'
import { PlaywrightPersona   } from './elements/PlaywrightPersona.js'
import { PlaywrightSpeaker   } from './elements/PlaywrightSpeaker.js'
import { PlaywrightDialog    } from './elements/PlaywrightDialog.js'

customElements.define('pw-element',   PlaywrightElement)
customElements.define('pw-direction', PlaywrightDirection)
customElements.define('pw-persona',   PlaywrightPersona)
customElements.define('pw-speaker',   PlaywrightSpeaker)
customElements.define('pw-dialog',    PlaywrightDialog)

export {
  PlaywrightElement,
  PlaywrightDirection,
  PlaywrightPersona,
  PlaywrightSpeaker,
  PlaywrightDialog
}
