const textForm = document.querySelector('input');
const newParagraph = document.querySelector('#duplicateField');
const clearButton = document.querySelector('button');

textForm.addEventListener('input', function(event) {
    newParagraph.textContent = this.value;
})

clearButton.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(textForm.value);
  textForm.value = '';
  newParagraph.textContent = '';
})