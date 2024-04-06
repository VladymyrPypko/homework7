let burger = document.getElementById("burger");
let navbarList = document.getElementById("navbarList");
console.log(burger);
console.log(navbarList);

burger.addEventListener("click", function(){
    burger.classList.toggle('active');
    navbarList.classList.toggle('navbar__list--active');
    // navbarList.style.display = "block"; // ------ wrong
    // if (navbarList.style.display === "block") { вариант с проверкой
    //     navbarList.style.display = "none"} 
    // else  navbarList.style.display = "block"
})

// $(document).ready(function() {
//     $('.navbar__btn').click(function() {
//         $(this).toggleClass('active');
//         $('.navbar__list').slideToggle(500);
//     });
// });