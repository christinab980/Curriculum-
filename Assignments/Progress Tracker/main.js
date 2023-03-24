const view = document.getElementById('view');
const navigation = document.getElementById('navigation');
const progress = document.getElementById('progress');

let position = 0;

const handleNav = e => {
  console.log(e);
  const nav = e.target.getAttribute('data-nav');
  const isForward = nav === 'forward';
  if (isForward) {
    position += 1;
  } else {
    position -=1;
  }
  setActive(position);
};

navigation.addEventListener('click', handleNav);

function renderView(text) {
  const div = document.createElement('div');
  div.innerText = text;
  view.innerHTML = '';
  view.append(div);
}

function setActive() {
  if (!position) {
    position = 1;
  }
  progress.querySelectorAll('div').forEach(el => {
    el.classList = '';
  });
  const current = progress.querySelector(`[data-position="${position}"]`);
  current.classList.add('active');
  renderView(position);
}

setActive();
renderView(position);