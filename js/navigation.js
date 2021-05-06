document.addEventListener('DOMContentLoaded', function () {
  const gnbBurgerBtn = document.querySelector('.gnb-open-btn');
  const globalNavBar = document.querySelector('.gnb');
  const header = document.querySelector('.header');
  let prevDep2List = null;

  // gnb 햄버거 메뉴버튼 클릭시 gnb 메뉴 보이기
  gnbBurgerBtn.addEventListener('click', function () {
    gnbBurgerBtn.classList.toggle('is-open');
    globalNavBar.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
    header.classList.toggle('is-clicked');

    // label 변경
    if (gnbBurgerBtn.classList.contains('is-open')) {
      gnbBurgerBtn.setAttribute('aria-pressed', 'true');
      gnbBurgerBtn.setAttribute('aria-label', '메인메뉴 닫기');
    } else {
      gnbBurgerBtn.setAttribute('aria-pressed', 'false');
      gnbBurgerBtn.setAttribute('aria-label', '메인메뉴 열기');
    }

    // 하위메뉴 닫기
    if (gnbBurgerBtn.classList.contains('is-open') && prevDep2List != null) {
      prevDep2List.classList.remove('is-open');
      prevDep2List = null;
    }
  });

  // gnb 메뉴 hover, focus시 header 배경색 설정
  globalNavBar.addEventListener('mouseover', function () {
    header.classList.add('is-active');
  });
  globalNavBar.addEventListener('focusin', function () {
    header.classList.add('is-active');
  });
  globalNavBar.addEventListener('mouseout', function () {
    header.classList.remove('is-active');
  });
  globalNavBar.addEventListener('focusout', function () {
    header.classList.remove('is-active');
  });

  // gnb depth1 메뉴 클릭시 하위 메뉴 보이기
  function gnbClickHandler(e) {
    let elem = e.target;
    while (!elem.classList.contains('has-depth2')) {
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

  if (window.innerWidth < 768) {
    // 모바일
    globalNavBar.addEventListener('click', gnbClickHandler);
  } else {
    // pc
    globalNavBar.addEventListener('keydown', function (e) {
      if (e.key == 'Enter') {
        gnbClickHandler(e);
      }
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
      // 모바일
      globalNavBar.addEventListener('click', gnbClickHandler);
    } else {
      // pc
      globalNavBar.removeEventListener('click', gnbClickHandler);
    }
    globalNavBar.addEventListener('keydown', function (e) {
      if (e.key == 'Enter') {
        gnbClickHandler(e);
      }
    });
  });

  // 스크롤시 헤더 색상 변경
  window.addEventListener('scroll', function () {
    header.classList.add('is-scroll');
    if (document.documentElement.scrollTop == 0) {
      header.classList.remove('is-scroll');
    }
  });
});
