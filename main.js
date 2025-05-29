onload = () =>{
        document.body.classList.remove("container");
};

const flowers = document.querySelectorAll('.flower');
const popup = document.getElementById('popupMessage');

flowers.forEach(flower => {
  flower.addEventListener('click', () => {
    popup.classList.add('show');
    setTimeout(() => {
      popup.classList.remove('show');
    }, 2500);
  });
});
