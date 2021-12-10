class SearchView {
  _parentElement = document.querySelector('.search');
  _data;
  _message;
  _errorMessage = 'We could not find that recipe. Please try another one';

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  // public apis
  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (event) {
      event.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
