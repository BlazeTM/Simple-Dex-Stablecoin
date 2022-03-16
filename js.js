function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
    document.getElementById("1").src="/image/white-twitter.svg";
    document.getElementById("2").src="/image/white-discord-new.svg";
    document.getElementById("3").src="/image/white-tiktok.svg";
    document.getElementById("4").src="/image/white-youtube.svg";
}

function darkLight() {
    const darkLight = document.querySelector(".darkLight");
    darkLight.classList.toggle("active");
    var element = document.body;
    element.classList.toggle("dark-theme");
}