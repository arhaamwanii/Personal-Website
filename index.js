function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    // gets the menu links i.e stuff in side the hamburger
    // gets the hamburger icon - outer clickable - 

    menu.classList.toggle("open");
    icon.classList.toggle("open");

    //adds the open class to both of them

}