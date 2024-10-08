import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';
// if (module.hot) {
//   module.hot.accept()
// }
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    //1)Loading spiner
    recipeView.renderSpiner();
    //2)update review to mark selectedsearch result
    resultsView.update(model.getSearchResultPage());
    //3)Updatting bookmark view
    bookmarksView.update(model.state.bookmarks);
    //4)Fetch Data
    await model.loadRecipe(id);
    //5)Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};
const controlSearchResults = async function () {
  try {
    //1)get search query
    const quary = searchView.getQuery();
    if (!quary) return;
    //Loading spiner
    resultsView.renderSpiner();
    //2)load search result
    await model.loadSearchResults(quary);
    //3)render results
    resultsView.render(model.getSearchResultPage());
    //Render initial pagination button
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};
const controlPagination = function (page) {
  //3)render new results
  resultsView.render(model.getSearchResultPage(page));
  //Render initial pagination button
  paginationView.render(model.state.search);
};
const controlServing = function (newServings) {
  //Update the recipe of servings (in state)
  model.updateServing(newServings);
  //Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};
const controlAddBookmarks = function () {
  //1)Add/remove bookmarks
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  //2)Update recipe view
  recipeView.update(model.state.recipe);
  //3)Render bookmark
  bookmarksView.render(model.state.bookmarks);
};
const controlBookmark = function () {
  bookmarksView.render(model.state.bookmarks);
};
const controlAddRecipe = async function (newRecipe) {
  try {
    //show spinner
    addRecipeView.renderSpiner();
    //uploade new recipe data
    await model.uploadeRecipe(newRecipe);
    //Render recipe
    recipeView.render(model.state.recipe);
    //success message
    addRecipeView.renderMessage();
    //Render Bookmarks
    bookmarksView.render(model.state.bookmarks);
    //change the id of the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    //Close Modal
    setTimeout(function () {
      addRecipeView.closeWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(`${err}`);
    addRecipeView.renderError(err.message);
  }
};
const init = function () {
  bookmarksView.addHandelerRender(controlBookmark);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandelerUpdateServing(controlServing);
  recipeView.addHandelerAddBookmark(controlAddBookmarks);
  searchView.addSearchHandeler(controlSearchResults);
  paginationView.addPaginationHandeler(controlPagination);
  addRecipeView._addHandelerUploade(controlAddRecipe);
};
init();
