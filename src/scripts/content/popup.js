export function togglePopup() {
  const popup = document.querySelector('#base-extension')
  if (!popup) return console.error('Base Iframe is not present in the DOM')
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block'
}

export function showPopup() {
  const popup = document.querySelector('#base-extension')
  if (!popup)
    return console.error('Base Scrapper Iframe is not present in the DOM')
  popup.style.display = 'block'
}

export function insertPopup() {
  const extensionOrigin = 'chrome-extension://' + chrome.runtime.id

  if (!location.ancestorOrigins.contains(extensionOrigin)) {
    const container = document.createElement('div')
    container.id = 'base-extension'

    container.style.display = 'none'
    container.style.position = 'fixed'
    container.style.top = '10px'
    container.style.right = '10px'
    container.style.width = '900px'
    container.style.height = '700px'
    container.style.zIndex = '999999'
    container.style.backgroundColor = '#ffffff'
    container.style.border = 'none'
    container.style.borderRadius = '10px'
    container.style.overflow = 'hidden'
    container.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.25)'

    const iframe = document.createElement('iframe')
    iframe.id = 'base-extension-popup'
    iframe.src = chrome.runtime.getURL('/popup.html')
    iframe.style.border = 'none'
    iframe.style.width = '100%'
    iframe.style.height = '100%'
    container.appendChild(iframe)
    document.body.appendChild(container)
  }
}
