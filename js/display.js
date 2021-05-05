// const ing = document.getElementById("");
// const end = document.getElementById("");

const list = document.getElementsByClassName('detail-info__title');
const detail = document.getElementsByClassName('detail-info__content');
for (let idx = 0; idx < list.length; idx++) {
  list[idx].addEventListener('click', function () {
    // detail[idx].className = 'detail-info__content';
    detail[idx].classList.toggle('is--invalid');

    for (let i = 0; i < list.length; i++) {
      if (i != idx) {
        detail[i].classList.add('is--invalid');
      }
    }
  });
}

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
