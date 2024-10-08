class SearchView {
  _parentElement = document.querySelector('.search');
  getQuery() {
    const quary = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return quary;
  }
  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  addSearchHandeler(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
