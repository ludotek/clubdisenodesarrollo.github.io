const openModal = document.getElementById("hero__cta");
const modal = document.getElementById("modal");
const closeModal = document.getElementById('modal__close');

openModal.addEventListener('click', (e) => {

  e.preventDefault();
  modal.classList.add('modal--show');

  //modal.setAttribute("style", "display:flex")
});

closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
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
