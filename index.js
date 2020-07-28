import { PlaywrightElement   } from './PlaywrightElement'
import { PlaywrightDirection } from './PlaywrightDirection'
import { PlaywrightPersona   } from './PlaywrightPersona'
import { PlaywrightSpeaker   } from './PlaywrightSpeaker'
import { PlaywrightDialog    } from './PlaywrightDialog'

// verbose
// customElements.define('playwright-element',   PlaywrightElement)
// customElements.define('playwright-direction', PlaywrightDirection)
// customElements.define('playwright-persona',   PlaywrightPersona)
// customElements.define('playwright-speaker',   PlaywrightSpeaker)
// customElements.define('playwright-dialog',    PlaywrightDialog)

// terse
// customElements.define('pw-element',           PlaywrightElement)
// customElements.define('pw-direction',         PlaywrightDirection)
// customElements.define('pw-persona',           PlaywrightPersona)
// customElements.define('pw-speaker',           PlaywrightSpeaker)
// customElements.define('pw-dialog',            PlaywrightDialog)

// shorthand
customElements.define('pw-e',                 PlaywrightElement)
customElements.define('pw-i',                 PlaywrightDirection)
customElements.define('pw-p',                 PlaywrightPersona)
customElements.define('pw-s',                 PlaywrightSpeaker)
customElements.define('pw-d',                 PlaywrightDialog)

export {
  PlaywrightElement,
  PlaywrightDirection,
  PlaywrightPersona,
  PlaywrightSpeaker,
  PlaywrightDialog
}
