import { PlaywrightElement   } from './PlaywrightElement'
import { PlaywrightDirection } from './PlaywrightDirection'
import { PlaywrightPersona   } from './PlaywrightPersona'
import { PlaywrightSpeaker   } from './PlaywrightSpeaker'
import { PlaywrightDialog    } from './PlaywrightDialog'

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
