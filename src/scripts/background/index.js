import { TOGGLE_POPUP } from '../eventTypes'

chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.sendMessage(tab.id, {
    type: TOGGLE_POPUP
  })
})

chrome.runtime.onMessage.addListener((event, { tab }) => {
  chrome.tabs.sendMessage(tab.id, event)
})
