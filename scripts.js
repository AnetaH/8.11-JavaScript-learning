var list = document.getElementById('list');
console.log(list);

var add = document.getElementById('addElem');
console.log(add);

add.addEventListener('click', function() {
  list.innerHTML += '<li>item ' + document.getElementsByTagName('li').length + '</li>';
});
