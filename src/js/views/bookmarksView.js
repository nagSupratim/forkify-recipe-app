import icons from 'url:../../img/icons.svg';
import View from './view';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _message;
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';

  _generateMarkup() {
    return this._data.map(preview => this._previewMarkup(preview)).join(' ');
  }

  _previewMarkup(preview) {
    const id = window.location.hash.slice(1);
    // prettier-ignore
    return `
      <li class="preview">
        <a class="preview__link preview__link ${preview.id === id ? 'preview__link--active' : ''}" href="#${preview.id}">
          <figure class="preview__fig">
            <img src="${preview.image}" alt="${preview.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${preview.title}</h4>
            <p class="preview__publisher">${preview.publisher}</p>
            <div class="preview__user-generated ${preview.key ? '' : 'hidden'}">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new BookmarksView();
