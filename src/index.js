const numberInput = document.querySelector('#number-input');
const acceptButton = document.querySelector('#accept-button');

function createPromiseFromNumberInput(inputElement) {
  return new Promise(function(resolve, reject) {
    if (isNaN(inputElement.value)) {
      reject();
    }
    resolve(inputElement);
  })
}

if (numberInput && acceptButton) {
  acceptButton.addEventListener('click', function() {
    createPromiseFromNumberInput(numberInput)
      .catch(function() {
        console.log('It\'s not a number');
      })
  })
}