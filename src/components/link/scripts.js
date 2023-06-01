addEventListener('DOMContentLoaded', function (){
    const smoothLinks = document.querySelectorAll('a[href*="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            const id = smoothLink.getAttribute('href');
            e.preventDefault();

            if(id != "#") {
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    };
})