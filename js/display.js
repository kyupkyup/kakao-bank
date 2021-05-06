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

detailList.addEventListener('click', detailClickHandler);
detailList.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    detailClickHandler(e);
  }
});

// const ing = document.getElementById('진행 버튼 아이디');
// const end = document.getElementById('종료 버튼 아이디');
// const listIng = document.getElementById('진행 컨테이너 아이디');
// const listEnd = document.getElementById('종료 컨테이너 아이디');

// // is--invalid 에 display:none 추가
// ing.addEventListener('click', function () {
//   listEnd.className += ' is--invalid';
//   listIng.className = '';
// });
// end.addEventListener('click', function () {
//   listIng.className += ' is--invalid';
//   listEnd.className = '';
// });
