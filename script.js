function changeActive(clickedItem){
    var navItem = document.querySelector('.nav-link.active');
    navItem.classList.remove('active');
    clickedItem.classList.add('active');
}