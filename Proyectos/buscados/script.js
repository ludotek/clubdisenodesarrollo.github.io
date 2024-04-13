const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});



const openModal2 = document.querySelector('.hero__cta2');
const modal2 = document.querySelector('.modal2');
const closeModal2 = document.querySelector('.modal__close2');

openModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.add('modal--show');
});

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.remove('modal--show');
});
