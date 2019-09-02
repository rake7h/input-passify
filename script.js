const SPECIAL_CHAR = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<~>\/?]/
const MIN_LEN = 9

class passify {
  constructor() {
    this.init()
  }

  init() {
    let passify       = document.getElementById('passify')
    let input         = document.querySelector('.passify .passify-field')
    let inputChecker  = document.querySelector('.passify .passify-check-window')
    let inputEye      = document.querySelector('.passify .passify-password-text')

    //Toggle for input type
    inputEye.onclick = function() {
      let inputAttributeType = input.getAttribute('type')

      if (inputAttributeType === 'password') {
        input.setAttribute('type', 'text')
        inputEye.classList.add('passify-password-text-open')
      } else {
        input.setAttribute('type', 'password')
        inputEye.classList.remove('passify-password-text-open')
      }
    }

    // Open password requirements window
    input.addEventListener('input', handleInputChange)
    input.onfocus = () => {
      inputChecker.classList.remove('hide')
      inputChecker.classList.add('show')
      input.classList.add('passify-field-focused')
    }

    input.onblur = () => {
      inputChecker.classList.remove('show')
      inputChecker.classList.add('hide')
      input.classList.remove('passify-field-focused')
    }
  }
}

// check for each cases
function handleInputChange(e) {
  let longEnough = isLongEnough(e.target.value)
  let uppercase = hasUpperCase(e.target.value)
  let specialChar = hasSpecialCharacter(e.target.value)

  // select dom password requires list elements
  let domLongEnough = document.getElementById('passify-item-long-enough')
  let domUpperCase = document.getElementById('passify-item-uppercase')
  let domSpecialChar = document.getElementById('passify-item-specialchar')

  function testPasswordRequirements(longEnough, uppercase, specialChar) {
    if (longEnough) {
      domLongEnough.classList.add("checked")
    } else {
      domLongEnough.classList.remove('checked')
    }

    if (uppercase) {
      domUpperCase.classList.add("checked")
    } else {
      domUpperCase.classList.remove('checked')
    }

    if (specialChar) {
      domSpecialChar.classList.add("checked")
    } else {
      domSpecialChar.classList.remove('checked')
    }
  }
  testPasswordRequirements(longEnough, uppercase, specialChar)
}

function isLongEnough(l) {
  return ((l.length >= MIN_LEN) ? true : false)
}

function hasUpperCase(c) {
  return ((c.toLowerCase() != c) ? true : false)
}

function hasSpecialCharacter(c) {
  return ((SPECIAL_CHAR.test(c)) ? true : false)
}

export default passify
