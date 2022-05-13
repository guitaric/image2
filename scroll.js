const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: '+(e.pageY-4)+"px; left: "+(e.pageX-4)+'px;')
})

image = document.querySelector('img');

window.addEventListener('scroll', function(e) {
    var scroll = this.scrollY;
    console.log(scroll);
    if(scroll > 0){
        document.body.style.background = 'pink';
    } else {
        document.body.style.background = 'white';
    }
})

// $('img').hide();    