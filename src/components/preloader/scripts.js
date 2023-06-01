document.addEventListener('DOMContentLoaded', function(){
    if(document.querySelector('[data-preloader="component"]')){
        let preloader               = document.querySelector('[data-preloader="component"]');
        //- let preloaderPercentage     = preloader.querySelector('[data-preloader="percentage"]');
        let images                  = document.querySelectorAll('img');
        let imagesCount             = document.querySelectorAll('img').length;
        let body                    = document.querySelector('body');
        let percent                 = 100 / imagesCount;
        let progress                = 0;
        let loadedImg               = 0;
    
        body.classList.add('_lock');

        setTimeout(() => {
            if(imagesCount != 0){
                images.forEach(img =>{
                    if(img.complete) {
                        img_load()
                    } else{
                        img.onload = () => {
                            img_load()
                        }
                        
                        img.onerror = () => {
                            img_load()
                        }
                    }
                })
            } else{
                progress = 100;
                loadedImg;
        
                unlock(progress, loadedImg)
            }
    
        }, 250);
    
        function img_load () {
            progress += percent;
            loadedImg++;
            unlock(progress, loadedImg)
        }
        
        function unlock(progress, loadedImg){
            //- preloaderPercentage.innerHTML = Math.round(progress) + ' %'
        
            if (progress >= 100 || loadedImg == imagesCount) {
        
                setTimeout(() => {
                    preloader.classList.add('is-loaded');
                    body.classList.remove('_lock');
                    body.classList.add('is-loaded');
                }, 250);
            }
        }
    }
})