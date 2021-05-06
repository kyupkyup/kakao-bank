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

const ing = document.getElementById('ongoingTab');
const end = document.getElementById('finishedTab');
const listIng = document.getElementById('ongoing');
const listEnd = document.getElementById('finished');

// is--invalid 에 display:none 추가
ing.addEventListener('click', function () {
  listEnd.className += ' is--invalid';
  listIng.className = '';
  ing.setAttribute('aria-selected', 'true');
  end.setAttribute('aria-selected', 'false');
});
end.addEventListener('click', function () {
  listIng.className += ' is--invalid';
  listEnd.className = '';
  end.setAttribute('aria-selected', 'true');
  ing.setAttribute('aria-selected', 'false');
});
