const changeReference = document.querySelector('a');
changeReference.addEventListener('click', function(event) {
   event.preventDefault();
   this.textContent = prompt('Измените ссылку');
})