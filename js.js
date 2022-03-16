function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    const twitter = document.querySelector(".twitter");
    const discord = document.querySelector(".discord");
    const tiktok = document.querySelector(".tiktok");
    const youtube = document.querySelector(".youtube");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
    twitter.src='white-twitter.svg';
    discord.src='white-discord-new.svg';
    tiktok.src='white-tiktok.svg';
    youtube.src='white-youtube.svg';
}

function darkLight() {
    const darkLight = document.querySelector(".darkLight");
    darkLight.classList.toggle("active");
    var element = document.body;
    element.classList.toggle("dark-theme");
}