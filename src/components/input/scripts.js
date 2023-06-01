import IMask from 'imask';

const regexpPhone = new RegExp('(7|8)\\s[\(][0-9]{3}[\)]\\s[0-9]{3}[\-][0-9]{2}[\-][0-9]{2}');
const regexpMail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

const phoneElement = document.querySelectorAll('.jsPhoneMask');

const mailElement = document.querySelectorAll('.jsMailMask');

const phoneMaskSettings = {
    mask: [
        {
        mask: '8 (000) 000-00-00',
        startsWith: '8',
        lazy: true,
        },
        {
        mask: '+{7} (000) 000-00-00',
        startsWith: '7',
        lazy: true,
        },
        {
        mask: '+{7} (000) 000-00-00',
        startsWith: '',
        lazy: true,
        },
        {
        mask: '+{7} (000) 000-00-00',
        startsWith: '9',
        lazy: true,
        },
    ],
    dispatch(appended, dynamicMasked) {
        const number = (dynamicMasked.value + appended).replace(/\D/g, '');

        return dynamicMasked.compiledMasks.find((m) => number.indexOf(m.startsWith) === 0) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
    },
};

if (phoneElement.length > 0) {
    for (let i = 0; i < phoneElement.length; i++) {
        const mask = IMask(phoneElement[i], phoneMaskSettings);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const jsInput = document.querySelectorAll('.jsInput');

    for (let index = 0; index < jsInput.length; index++) {
        const input = jsInput[index];
    
        const filled = () => {
            if (input.value != '') {
                window.inputStatusAdd(input, 'filled')
            }
        }
        
        filled()
        
        input.onblur = function () {
            window.inputStatusRemove(input, 'focus')
            filled()
        };
    
        input.onfocus = function () {
            window.inputStatusAdd(input, 'focus')
            window.inputStatusRemove(input, 'error')
            window.inputStatusRemove(input, 'filled')
        };
    }
})


// let mailInputs = document.querySelectorAll('.jsMailMask');

// for (let index = 0; index < mailInputs.length; index++){
//     let input = mailInputs[index];
//     input.addEventListener('input', function(){
//         let result = window.InputCheckMask(input, 'mail');
//         console.log(result);
//     })
// }





// Input status
// Варианты:  'focus' ; 'error' ; 'fill' ; 'ok' ;
// window.inputStatusAdd(input, 'error')
// window.inputStatusRemove(input, 'error')

window.inputStatusAdd = function (input, status){
    if(input.classList.contains('.input')){
        input.classList.add('is-' + status);
    } else{
        input.closest('.input').classList.add('is-' + status);
    }
}

window.inputStatusRemove = function (input, status){
    if(input.classList.contains('.input')){
        input.classList.remove('is-' + status);
    } else{
        input.closest('.input').classList.remove('is-' + status);
    }
}

// Input masks
// Варианты:  'mail' ; 'phone'
// window.InputCheckMask(input, 'mail')

window.InputCheckMask = function(input, type){
    if(type === 'mail'){
        // console.log('mail');
        return regexpMail.test(input.value);
    }
    if(type === 'phone'){
        // console.log('phone');
        return regexpPhone.test(input.value);
    }
}

window.runMask = function (){
    const phoneElement = document.querySelectorAll('.jsPhoneMask');
    const phoneMaskSettings = {
        mask: [
            {
            mask: '8 (000) 000-00-00',
            startsWith: '8',
            lazy: true,
            },
            {
            mask: '+{7} (000) 000-00-00',
            startsWith: '7',
            lazy: true,
            },
            {
            mask: '+{7} (000) 000-00-00',
            startsWith: '',
            lazy: true,
            },
            {
            mask: '+{7} (000) 000-00-00',
            startsWith: '9',
            lazy: true,
            },
        ],
        dispatch(appended, dynamicMasked) {
            const number = (dynamicMasked.value + appended).replace(/\D/g, '');
    
            return dynamicMasked.compiledMasks.find((m) => number.indexOf(m.startsWith) === 0) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
        },
    };
    if (phoneElement.length > 0) {
        for (let i = 0; i < phoneElement.length; i++) {
            const mask = IMask(phoneElement[i], phoneMaskSettings);
        }
    }
}

// window.runMask() перезвапуск маски