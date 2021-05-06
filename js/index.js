function isInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.left >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener('DOMContentLoaded', function () {
  let prevDep2List = null;
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
  function transition_p2_img4() {
    const image = document.querySelector('.withdrawal__product2__image4');
    image.style.top = '180px';
    image.style.opacity = 1;
  }
  function transition_p3_img1() {
    const image = document.querySelector('.withdrawal__product3__image');
    image.style.top = '20px';
    image.style.left = '40px';
    image.style.opacity = 1;
  }
  function transition_p3_img2() {
    const image = document.querySelector('.withdrawal__product3__image2');
    image.style.top = '140px';
    image.style.left = '110px';
    image.style.opacity = 1;
  }
  function transition_p3_img3() {
    const image = document.querySelector('.withdrawal__product3__image3');
    image.style.top = '55px';
    image.style.left = '180px';
    image.style.opacity = 1;
  }
  function transition_p3_img4() {
    const image = document.querySelector('.withdrawal__product3__image4');
    image.style.top = '145px';
    image.style.left = '220px';
    image.style.opacity = 1;
  }

  const box1 = document.querySelector('.withdrawal__product1');
  const box2 = document.querySelector('.withdrawal__product2');
  const box3 = document.querySelector('.withdrawal__product3');
  // const box4 = document.querySelector('.withdrawal__product4');

  document.addEventListener(
    'scroll',
    function () {
      isInViewport(box1) ? transition_p1_img2() : console.log();
      isInViewport(box1) ? transition_p1_img3() : console.log();
      isInViewport(box2) ? transition_p2_img4() : console.log();
      isInViewport(box3) ? transition_p3_img1() : console.log();
      isInViewport(box3) ? transition_p3_img2() : console.log();
      isInViewport(box3) ? transition_p3_img3() : console.log();
      isInViewport(box3) ? transition_p3_img4() : console.log();
    },
    {
      passive: true,
    }
  );

  const detailList = document.querySelector('.detail-info');

  function detailClickHandler(e) {
    let elem = e.target;

    while (!elem.classList.contains('detail-info__title')) {
      elem = elem.parentNode;
      if (elem.nodeName == 'BODY') {
        elem = null;
        return;
      }
    }

    if (prevDep2List == null) {
      elem.parentNode.classList.add('is-open');
    } else if (prevDep2List == elem.parentNode) {
      elem.parentNode.classList.remove('is-open');
      prevDep2List = null;
      return;
    } else {
      prevDep2List.classList.remove('is-open');
      elem.parentNode.classList.add('is-open');
    }
    prevDep2List = elem.parentNode;
  }
  detailList.addEventListener('keydown', function (e) {
    if (e == 'click') {
      return;
    } else if (e.key == 'Enter') {
    }
  });
  detailList.addEventListener('click', detailClickHandler);
});
