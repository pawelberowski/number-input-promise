import { wait } from './wait';

const numberInput = document.querySelector('#number-input');
const acceptButton = document.querySelector('#accept-button');

function createPromiseFromNumberInput(inputElement) {
  const inputValue = +inputElement.value;
  return new Promise(function (resolve, reject) {
    if (isNaN(inputValue)) {
      reject();
      return;
    }
    if (inputValue < 0) {
      createParagraphWithInputValue(inputValue);
      setTimeout(function () {
        reject(inputElement);
      }, 2000);
    } else {
      if (inputValue % 2) {
        createParagraphWithInputValue(inputValue);
        setTimeout(function () {
          resolve(inputElement);
        }, 5000);
      }
      if (!(inputValue % 2)) {
        createParagraphWithInputValue(inputValue);
        setTimeout(function () {
          resolve(inputElement);
        }, 10000);
      }
    }
  });
}

function createParagraphWithInputValue(number) {
  const newParagraph = document.createElement('p');
  newParagraph.id = number.toString();
  newParagraph.innerHTML = `Promise: ${number}`;
  document.body.append(newParagraph);
}

if (numberInput && acceptButton) {
  acceptButton.addEventListener('click', function () {
    createPromiseFromNumberInput(numberInput)
      .then(function () {
        document.getElementById(numberInput.value).remove();
      })
      .catch(function () {
        document.getElementById(numberInput.value).style.color = 'red';
      });
  });
}
