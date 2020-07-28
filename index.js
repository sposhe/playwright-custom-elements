import { PlaywrightElement   } from './PlaywrightElement'
import { PlaywrightDirection } from './PlaywrightDirection'
import { PlaywrightPersona   } from './PlaywrightPersona'
import { PlaywrightSpeaker   } from './PlaywrightSpeaker'
import { PlaywrightDialog    } from './PlaywrightDialog'

customElements.define('pw-e', PlaywrightElement)
customElements.define('pw-i', PlaywrightDirection)
customElements.define('pw-p', PlaywrightPersona)
customElements.define('pw-s', PlaywrightSpeaker)
customElements.define('pw-d', PlaywrightDialog)

export {
  PlaywrightElement,
  PlaywrightDirection,
  PlaywrightPersona,
  PlaywrightSpeaker,
  PlaywrightDialog
}
