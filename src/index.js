import { wait } from './wait';
import { getMillisecondsToWait } from '../getMillisecondsToWait';

const numberInput = document.querySelector('#number-input');
const acceptButton = document.querySelector('#accept-button');

function createParagraphWithInputValue(number) {
  const newParagraph = document.createElement('p');
  newParagraph.innerHTML = `Promise: ${number}`;
  document.body.append(newParagraph);
  return newParagraph;
}

function waitBasedOnInputValue(inputValue) {
  const timeToWait = getMillisecondsToWait(inputValue);
  return wait(timeToWait);
}

if (numberInput && acceptButton) {
  acceptButton.addEventListener('click', function () {
    const value = numberInput.value;
    const paragraph = createParagraphWithInputValue(value);
    waitBasedOnInputValue(value)
      .then(function () {
        paragraph.remove();
      })
      .catch(function () {
        paragraph.style.color = 'red';
      });
  });
}
