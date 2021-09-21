const elemItems = document.querySelectorAll('.item');
console.log(`В списке ${elemItems.length} категории.`);
const categoriesText = document.getElementById("categories").querySelectorAll('h2');

elemItems.forEach(elem => {
  console.log('Категория : ', elem.firstElementChild.textContent, '\n');
  console.log(
    'Количество эелментов : ',
    elem.getElementsByTagName('li').length,
    '\n\n'
  );
});
