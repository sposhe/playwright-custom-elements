import { PlaywrightElement   } from './PlaywrightElement.js'
import { PlaywrightDirection } from './PlaywrightDirection.js'
import { PlaywrightPersona   } from './PlaywrightPersona.js'
import { PlaywrightSpeaker   } from './PlaywrightSpeaker.js'
import { PlaywrightDialog    } from './PlaywrightDialog.js'

customElements.define('pw-element',   PlaywrightElement   )
customElements.define('pw-direction', PlaywrightDirection )
customElements.define('pw-persona',   PlaywrightPersona   )
customElements.define('pw-speaker',   PlaywrightSpeaker   )
customElements.define('pw-dialog',    PlaywrightDialog    )

export {
  PlaywrightElement,
  PlaywrightDirection,
  PlaywrightPersona,
  PlaywrightSpeaker,
  PlaywrightDialog
}
