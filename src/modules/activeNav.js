export function activeBook() {
  document.querySelector('#book-nav').classList.add('active-link');
  document.querySelector('#category-nav').classList.remove('active-link');
}
export function activeCategory() {
  document.querySelector('#category-nav').classList.add('active-link');
  document.querySelector('#book-nav').classList.remove('active-link');
}
