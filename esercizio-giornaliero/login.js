const nameSave = document.querySelector("#name");
const buttonSave = document.querySelector("#btn-S");
const buttonClear = document.querySelector("#btn-C");


buttonSave.addEventListener('click', function(){
    const textSave = nameSave.value;
    localStorage.setItem('nome', textSave)
})

buttonClear.addEventListener('click', function(){
    localStorage.clear()
})

