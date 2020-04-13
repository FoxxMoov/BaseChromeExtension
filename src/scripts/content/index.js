import { TOGGLE_POPUP, SHOW_POPUP } from '../eventTypes'
import { togglePopup, insertPopup, showPopup } from './popup'

insertPopup()

chrome.runtime.onMessage.addListener(
  ({ type, data }, _sender, sendResponse) => {
    if (!type) return console.error('No key type in event')
    switch (type) {
      case TOGGLE_POPUP:
        togglePopup(data)
        return sendResponse(true)

      case SHOW_POPUP:
        showPopup()
        return sendResponse(true)

      default:
    }
  }
)
