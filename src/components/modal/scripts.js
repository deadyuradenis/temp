import {Modal} from 'bootstrap';

const modal = {
    init: () => {
        if(document.querySelector('.modal')){
            modal.list = document.querySelectorAll('.modal');

            for (let index = 0; index < modal.list.length; index++) {
                const item = modal.list[index];
                const id = item.getAttribute('id').replace('m-', '');
                const itemModal = new Modal(item);
        
                modal[id] = itemModal;
            }
            
        }
    },
}

document.addEventListener('DOMContentLoaded', () => {
    modal.init()
})

export default modal;
