function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    const twitter = document.querySelector("social-twitter")
    const tiktok = document.querySelector("social-tiktok")
    const discord = document.querySelector("social-discord")
    const youtube = document.querySelector("social-youtube")
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
    twitter.classList.toggle("active")
    tiktok.classList.toggle("active")
    discord.classList.toggle("active")
    youtube.classList.toggle("active")
}

function darkLight() {
    const darkLight = document.querySelector(".darkLight");
    darkLight.classList.toggle("active");
    var element = document.body;
    element.classList.toggle("dark-theme");
}