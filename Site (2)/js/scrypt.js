const header = document.querySelector('.head_scroll');
document.addEventListener('DOMContentLoader', () => {
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        console.log(scrollTop);
    });
});

function myFunction(){
    document.getElementById('paragraph').innerHTML ='Недостаточно средств';
    alert('Недостаточно средств');
}

function noSell(){
    alert('У вас нет доступа к этой функции')
}
