function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}

function darkLight() {
    const darkLight = document.querySelector(".darkLight");
    darkLight.classList.toggle("active");
    var element = document.body;
    element.classList.toggle("dark-theme");
}