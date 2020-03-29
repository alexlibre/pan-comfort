import getScrollbarSize from '../utils/getScrollbarSize';

const initModals = () => {
  const scrollSize = getScrollbarSize();

  const btns = [...document.querySelectorAll('.js-modal-btn')];
  if (!btns.length) return false;

  const modals = [...document.querySelectorAll('.js-modal')];
  if (!modals.length) return false;

  const toggleModal = (id) => {

    const modal = document.querySelector('.js-modal[data-id="' + id + '"]');
    if (!modal) return false;

    if (modal.classList.contains('is-opened')) {
      modal.classList.remove('is-opened');
      document.body.classList.remove('no-scroll');
      document.body.style = '';
    } else {
      modal.classList.add('is-opened');
      document.body.classList.add('no-scroll');
      document.body.style.paddingRight = scrollSize + 'px';
    }
  }

  btns.map(function (btn) {
    btn.addEventListener('click', function () {
      const id = btn.dataset.id;
      toggleModal(id)
    });
  });
}

export default initModals;
