function isInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.left >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function transition_p1_img2() {
  const image = document.querySelector('.withdrawal__product1__image2');
  image.style.top = '35px';
  image.style.opacity = 1;
}
function transition_p1_img3() {
  const image = document.querySelector('.withdrawal__product1__image3');
  image.style.left = '230px';
  image.style.opacity = 1;
}

const box1 = document.querySelector('.withdrawal__product1');
const box2 = document.querySelector('.withdrawal__product2');
const box3 = document.querySelector('.withdrawal__product3');
const box4 = document.querySelector('.withdrawal__product4');
document.addEventListener(
  'scroll',
  function () {
    isInViewport(box1) ? transition_p1_img2() : console.log();
    isInViewport(box1) ? transition_p1_img3() : console.log();
  },
  {
    passive: true,
  }
);
