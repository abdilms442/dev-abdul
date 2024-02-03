const bar = document.querySelector('.fa-bars');
const times = document.querySelector('#times');
const navLink = document.querySelector('#navLink');

bar.addEventListener('click', function(){
    setTimeout(()=>{
        times.style.display = 'block';
    },200);
    navLink.style.right = '0%';
})

times.addEventListener('click', function(){
    navLink.style.right = '-100%';
    navLink.style.transition = '.5s';
    times.style.display = 'none';
})