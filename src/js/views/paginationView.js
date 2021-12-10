import icons from 'url:../../img/icons.svg';
import View from './view';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _message;
  _errorMessage = 'No Recipes found!';

  _generateMarkup() {
    const currentPage = this._data.page;
    const pagesCount = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // 1. Page 1, and there are other pages
    if (currentPage === 1 && pagesCount > 1) {
      return this._markupNextBtn(currentPage);
    }
    // 2. Last Page
    if (currentPage === pagesCount && pagesCount > 1) {
      return this._markupPrevBtn(currentPage);
    }
    // 3. Other Page
    if (currentPage < pagesCount) {
      return (
        this._markupPrevBtn(currentPage) + this._markupNextBtn(currentPage)
      );
    }
    // 4. Page 1, and there are No other pages
    return '';
  }

  _markupPrevBtn(currentPage) {
    // prettier-ignore
    return `
      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${icons}.svg#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
    `;
  }

  _markupNextBtn(currentPage) {
    // prettier-ignore
    return `
      <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (event) {
      const btn = event.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new PaginationView();
