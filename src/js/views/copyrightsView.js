import { URL_EMAIL, URL_GITHUB, URL_LINKEDIN } from '../config';
import View from './view';

class CopyrightsView extends View {
  _parentElement = document.querySelector('.copyright-links');

  _generateMarkup() {
    return `
      <a target="_blank" href="${URL_LINKEDIN}"><i class="bx bxl-linkedin"></i></a>
      <a target="_blank" href="${URL_GITHUB}"><i class="bx bxl-github"></i></a>
      <a target="_blank" href="${URL_EMAIL}"><i class="bx bx-mail-send"></i></a>
    `;
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new CopyrightsView();
