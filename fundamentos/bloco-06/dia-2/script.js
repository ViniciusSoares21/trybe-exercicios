function handleSubmit(event) {
    event.preventDefault();
  }
window.onload = function (){
    let submitboton = document.querySelector('#botao');
    submitboton.addEventListener('click', handleSubmit)
}

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('#response1');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }
  window.onload = function () {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
    const submitBtn = document.querySelector('#botao');
    submitBtn.addEventListener('click', handleSubmit);
  };