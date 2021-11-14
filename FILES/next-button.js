const nextButtonComponent = {
  init() {
    const model = document.getElementById('model')
    const model1 = document.getElementById('model1')
    const model2 = document.getElementById('model2')
    const container = document.getElementById('container')
    const colorList = ['#ff0000', '#cccccc', '#008000']
    const colorNumb = [1, 2, 3]
    const setColor = ({newColor, button, x}) => {
      switch (x) {
        case 1:
          model.setAttribute('visible', 'true')
          model1.setAttribute('visible', 'false')
          model2.setAttribute('visible', 'false')

          model1.setAttribute('animation-mixer', 'false')
          model2.setAttribute('animation-mixer', 'false')
          break
        case 2:
          model.setAttribute('visible', 'false')
          model1.setAttribute('visible', 'true')
          model2.setAttribute('visible', 'false')

          model.setAttribute('animation-mixer', 'false')
          model2.setAttribute('animation-mixer', 'false')
          break
        default:
          model.setAttribute('visible', 'false')
          model1.setAttribute('visible', 'false')
          model2.setAttribute('visible', 'true')

          model1.setAttribute('animation-mixer', 'false')
          model2.setAttribute('animation-mixer', 'false')

          break
      }
      button.focus()
    }

    // create a UI button for each color in the list that changes the car color
    for (let i = 0; i < colorList.length; i++) {
      const colorButton = document.createElement('button')
      colorButton.classList.add('carousel')
      colorButton.style.backgroundColor = colorList[i]
      container.appendChild(colorButton)

      colorButton.addEventListener('click', () => setColor({

        newColor: colorList[i],
        button: colorButton,
        x: colorNumb[i],

      }))
    }

    const firstButton = container.getElementsByTagName('button')[0]
    setColor({newColor: colorList[0], button: firstButton})
  },
}

export {nextButtonComponent}
