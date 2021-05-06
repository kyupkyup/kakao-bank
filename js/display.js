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
