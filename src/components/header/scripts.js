document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('[data-header="component"]')){
        const body = document.querySelector('.body')
        const header = document.querySelector('[data-header="component"]')
        const trigger = document.querySelector('[data-header="burger"]')
        const dropdown = document.querySelector('[data-header="dropdown"]')

        document.addEventListener('click', (e) => {
            const target = e.target 

            if (dropdown.classList.contains('is-open') && !target.closest('[data-header="dropdown"]')) {
                trigger.classList.remove('is-active');
                dropdown.classList.remove('is-open');
            }
        })
        
        trigger.addEventListener('click', (e) => {
            e.stopPropagation()
            trigger.classList.toggle('is-active');
            dropdown.classList.toggle('is-open');
        })

    }
})