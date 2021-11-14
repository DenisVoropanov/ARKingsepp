import './index.css'
import {nextButtonComponent} from './next-button'
AFRAME.registerComponent('next-button', nextButtonComponent)
import {splashImageComponent} from './splash-image'
AFRAME.registerComponent('splash-image', splashImageComponent)


let inDom = false
const observer = new MutationObserver(() => {
  if (document.querySelector('.prompt-box-8w')) {
    if (!inDom) {
      document.querySelector('.prompt-box-8w p').innerHTML = '<strong>Чтобы все правильно заработало,</strong><br/>разрешите доступ к камере'
      document.querySelector('.prompt-button-8w').innerHTML = 'Отмена'
      document.querySelector('.button-primary-8w').innerHTML = 'Начнем'
      
    }
    inDom = true
  } else if (inDom) {
    inDom = false
    observer.disconnect()
  }
})
observer.observe(document.body, {childList: true})

