import $ from "jquery";
import select2  from 'select2';

const initSelects = () => {
    $('[data-component="select"]').each(function(){
        let thisSelect = $(this);
        let placeholder = thisSelect.attr('placeholder');
        let select =  $(this).closest('.select');
        let theme;

        if(select.get(0).classList.contains('select--blue')){
            theme = 'select--blue';
        } 
        
        thisSelect.select2({
            width: '100%',
            placeholder: placeholder,
            allowClear: true,
            // dropdownParent: thisSelect.closest('.select'),
            dropdownCssClass: theme,
        });
    
        $(this).on("select2:open", function () { 
            select.addClass('is-focus')
        });

        $(this).on("select2:close", function () { 
            select.removeClass('is-focus')
        });

        $(this).on("select2:select", function () { 
            select.addClass('is-filled')
            
        });
        // $(this).on("select2:unselect", function () { 
            
        // });
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initSelects()
});

export default initSelects;
