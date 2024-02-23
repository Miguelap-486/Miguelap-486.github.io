/*select the slider and the value span*/
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
slider.addEventListener('input', checkStrength);
output.innerHTML = slider.value;


// Update the current slider value (each time you drag the slider handle)
function updateSliderValue() {
  output.innerHTML = slider.value;
}

slider.oninput = updateSliderValue;

function returnSliderValue() {
  return slider.value;
}



/*Function to copy the value of the input to the clipboard*/
function copyClipboard() {
  // Get the text field
  var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  if(copyText.value !== null && copyText.value !== ''){
      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);

      // Alert the copied text
      alert("Password copied to clipboard!");
  } else {
    alert("There's no password to copy!");
  }
}



/*check number of checkbox checked and which one is checked*/ 
function handleCheckboxChange(event) {
  const checkbox = event.target;
  const isChecked = checkbox.checked;

  let count = parseInt(checkbox.dataset.checkedCount) || 0;

  count = isChecked ? count + 1 : count - 1;

  checkbox.dataset.checkedCount = count;

  const checkboxName = isChecked ? checkbox.name : '';

  return { count, checkboxName };
}

function addCheckboxListeners() {
  const checkboxes = document.querySelectorAll('.styled-checkbox');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function(event) {
      const { count, checkboxName } = handleCheckboxChange(event);
      console.log("Nuevo valor del contador:", count);
      console.log("Nombre del checkbox marcado:", checkboxName);
    });
  });
}

/*check strength*/
function checkStrength() {
  /*select all necesary items*/
  let textStrength = document.querySelector('.strength_indicator_text'); 
  let firstContainer = document.getElementById('1');
  let secondContainer = document.getElementById('2');
  let thirdContainer = document.getElementById('3');
  let fourthContainer = document.getElementById('4');
  let sliderValue = returnSliderValue();
  let checkedCount = document.querySelectorAll('.styled-checkbox:checked').length;

  console.log(checkedCount)
  /*check slider value and checboxes*/
  if (sliderValue <= 5 || checkedCount === 1) {
    textStrength.textContent = "TOO WEAK!";
    firstContainer.className = "TooWeak"
    secondContainer.className = "color_empty"
    thirdContainer.className = "color_empty"
    fourthContainer.className = "color_empty"
  } else if(sliderValue > 5 & sliderValue <= 10 || checkedCount === 2){
    textStrength.textContent = "WEAK";
    firstContainer.className = "Weak"
    secondContainer.className = "Weak"
    thirdContainer.className = "color_empty"
    fourthContainer.className = "color_empty"
  }else  if(sliderValue > 10 & sliderValue <= 15 || checkedCount === 3){
    textStrength.textContent = "MEDIUM";
    firstContainer.className = "Medium"
    secondContainer.className = "Medium"
    thirdContainer.className = "Medium"
    fourthContainer.className = "color_empty"
  }else{
    textStrength.textContent = "STRONG";
    firstContainer.className = "Strong"
    secondContainer.className = "Strong"
    thirdContainer.className = "Strong"
    fourthContainer.className = "Strong"
  }
}



/*Creating the arrays for the checkboxs*/

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numbers = '0123456789'.split('');
const specialCharacters = '!@#$%^&*()-_+=[]{};:,.<>?|\\`~/'.split('');

function generatePassword() {
  let passwordInput = document.getElementById('password');
  let sliderValue = returnSliderValue();
  let checkboxes = document.querySelectorAll('.styled-checkbox');
  
  let selectedChars = [];

  let atLeastOneChecked = false;
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      atLeastOneChecked = true;
      switch (checkbox.name) {
        case 'Lowercase':
          selectedChars = selectedChars.concat(lowercaseLetters);
          break;
        case 'Uppercase':
          selectedChars = selectedChars.concat(uppercaseLetters);
          break;
        case 'Numbers':
          selectedChars = selectedChars.concat(numbers);
          break;
        case 'Symbols':
          selectedChars = selectedChars.concat(specialCharacters);
          break;
        default:
          break;
      }
    }
  });

  if (!atLeastOneChecked) {
    alert('Please, select at least one option');
    return;
  }

  let password = '';
  const selectedCharsLength = selectedChars.length;

  for (let i = 0; i < sliderValue; i++) {
    const randomIndex = Math.floor(Math.random() * selectedCharsLength);
    password += selectedChars[randomIndex];
  }

  passwordInput.value = password;
}


document.querySelector('.generate_button_click').addEventListener('click', generatePassword);
