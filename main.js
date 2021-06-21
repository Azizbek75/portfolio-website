window.addEventListener('scroll', function() {
    let y = window.scrollY;
    let nav = document.querySelectorAll('.nav-item');
   

    if(y<=657) {
        for(let i=0; i<nav.length; i++) {
            nav[i].classList.remove('active');
        }
        nav[0].classList.add('active');
    }
    if(y<=2267 & y>657) {
        for(let i=0; i<nav.length; i++) {
            nav[i].classList.remove('active');
        }
        nav[1].classList.add('active');
    }
    if(y>2267 & y<=2751.875) {
        for(let i=0; i<nav.length; i++) {
            nav[i].classList.remove('active');
        }
        nav[2].classList.add('active');
    }
    if(y>2751.875) {
        for(let i=0; i<nav.length; i++) {
            nav[i].classList.remove('active');
        }
        nav[3].classList.add('active');
    }
})