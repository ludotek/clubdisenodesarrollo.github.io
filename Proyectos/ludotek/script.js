const header = document.querySelector('.header');
const logo1 = document.querySelector('.iso');
const menu = document.querySelector('.menu-bar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
    logo1.classList.add('scrolle2');
    menu.classList.add('scrolle3');


  } else {
    header.classList.remove('scrolled');
  }
});



const openModal = document.getElementById("clic");
const modal = document.getElementById("modal");
const closeModal = document.getElementById('modal__close');
openModal.addEventListener('click', (e) => {
  e.preventDefault();
 modal.classList.add('modal--show');
 // modal.setAttribute("style", "display:flex");
});
closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
  //modal.setAttribute("style", "display:none");
});



const openModal2 = document.getElementById("clic2");
const modal2 = document.getElementById("modal2");
const closeModal2 = document.getElementById('modal__close2');

openModal2.addEventListener('click', (e) => {
  e.preventDefault();
  modal2.classList.add('modal--show');
  //modal.setAttribute("style", "display:flex")
});

closeModal2.addEventListener('click', (e) => {
  e.preventDefault();
  modal2.classList.remove('modal--show');
});



const openModal3 = document.getElementById("clic3");
const modal3 = document.getElementById("modal3");
const closeModal3 = document.getElementById('modal__close3');
openModal3.addEventListener('click', (e) => {
  e.preventDefault();
  modal3.classList.add('modal--show');
  //modal.setAttribute("style", "display:flex")
});
closeModal3.addEventListener('click', (e) => {
  e.preventDefault();
  modal3.classList.remove('modal--show');
});













// Example: Adding hover effect to team member photos
const teamMemberPhotos = document.querySelectorAll('.team-member img');

teamMemberPhotos.forEach(photo => {
  photo.addEventListener('mouseover', () => {
    photo.style.opacity = 0.8;
  });

  photo.addEventListener('mouseout', () => {
    photo.style.opacity = 1;
  });
});

// Add more JavaScript for other interactive elements (video controls, interview snippets, timeline navigation, etc.)
