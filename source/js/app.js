document.body.classList.remove('no-js');

let btnHamburger = document.querySelector('.hamburger');
let ulMainNavList = document.querySelector('.main-nav__list-wrapp');
let list2 = document.querySelector('.main-nav__list--user');
let check = false;

const fun = () => {
  if (window.innerWidth >= 768 && check) {
    check = false;
    console.log('Список из дива');
    return ulMainNavList.after(list2);
  } else
    if (window.innerWidth < 768 && !check) {
      check = true;
      console.log('Список в див', check);
      return ulMainNavList.append(list2);
    }
}
fun();

window.addEventListener('resize', (e) => {
  console.log('отслеживание экрана', e);
  fun();
});

btnHamburger.addEventListener('click', function () {
  ulMainNavList.classList.toggle('visible');
  btnHamburger.classList.toggle('hamburger--open');
  btnHamburger.classList.toggle('hamburger--closed');

})

console.log('Hi!');
