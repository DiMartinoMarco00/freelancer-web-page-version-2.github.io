(function()
{
    "use strict";

    const openMenuIcon = document.querySelector('.fa-bars');
    const closeMenuIcon = document.querySelector('.fa-xmark');
    let sideMenu = document.getElementById('side-menu');

    function openMenu()
    {
        sideMenu.style.right = "0";
    }
    
    function closeMenu()
    {
        sideMenu.style.right = "-175px";
    }

    openMenuIcon.addEventListener('click', openMenu);
    closeMenuIcon.addEventListener('click', closeMenu);
}());