// French Peacock Module create by ALexis TOANEN.
var appm = {
    init: function () {

        var openBtn = document.querySelector(".open-btn");
        var closeBtn = document.querySelector(".close-btn");

        openBtn.addEventListener('click', appm.openNav);
        closeBtn.addEventListener('click', appm.closeNav);
    },
    openNav: function () {
        var openMenu = document.querySelector(".nav-mobile");

        openMenu.classList.add('menu-open');
        openMenu.classList.remove('menu-close');
        var openMenuAnim = document.querySelectorAll('.nav-mobile a');

        for (index = 0; index < openMenuAnim.length; index +=1) {

            openMenuAnim[index].classList.add('menu-appear-content');
            openMenuAnim[index].classList.remove('menu-disappears-content');
        }

    },
    closeNav: function () {
        var closeMenu = document.querySelector(".nav-mobile");

        setTimeout(function(){
            closeMenu.classList.add('menu-close'); 
            closeMenu.classList.remove('menu-open');
        }, 250);

        var closeMenuAnim = document.querySelectorAll('.nav-mobile a');

        for (index = 0; index < closeMenuAnim.length; index +=1) {

            closeMenuAnim[index].classList.add('menu-disappears-content');
            closeMenuAnim[index].classList.remove('menu-appear-content');
        }
    }
};

document.addEventListener('DOMContentLoaded', appm.init);
