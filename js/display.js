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
