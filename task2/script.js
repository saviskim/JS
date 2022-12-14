//константы
const consoleLog = document.querySelector('#consoleLog');
const Alert = document.querySelector('#alert');
const Prompt = document.querySelector('#prompt');


consoleLog.addEventListener ('click', () => {
    alert('Служит для вывода информации в консоль')
})

Alert.addEventListener ('click', () => {
    alert('Служит для отображения информации пользователям')
})

Prompt.addEventListener ('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста')
})