document.addEventListener('DOMContentLoaded', function () {
  const ing = document.getElementById('ongoingTab');
  const end = document.getElementById('finishedTab');
  const listIng = document.getElementById('ongoing');
  const listEnd = document.getElementById('finished');

  function ingClickHandler() {
    listIng.classList.remove('is--invalid');
    listEnd.classList.add('is--invalid');
    ing.setAttribute('aria-selected', 'true');
    end.setAttribute('aria-selected', 'false');
  }

  function endClickHandler() {
    listIng.classList.add('is--invalid');
    listEnd.classList.remove('is--invalid');
    ing.setAttribute('aria-selected', 'false');
    end.setAttribute('aria-selected', 'true');
  }

  ing.addEventListener('click', ingClickHandler);
  end.addEventListener('click', endClickHandler);

  ing.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
      ingClickHandler();
    }
  });

  end.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
      endClickHandler();
    }
  });
});
