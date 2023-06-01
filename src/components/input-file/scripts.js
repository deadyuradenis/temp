const inputFileComponent = (node) => {
    const component = node;
    const input  = component.querySelector('[data-input-file="input"]')
    const content  = component.querySelector('[data-input-file="content"] span')

    input.onchange = () => {
        if(input.files.length != 0){
            component.classList.add('is-upload');
            content.innerHTML = input.files[0].name;
        } else{
            component.classList.remove('is-upload');
            content.innerHTML = 'Прикрепить файл';
        }
    }
}

const inputFileInit = () => {
    let inputs = Array.from(document.querySelectorAll('[data-component="input-file"]'));

    inputs.forEach(item => {
        inputFileComponent(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    inputFileInit()
})

export default inputFileInit;