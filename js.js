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
    const twitter = document.querySelector(".twitter");
    const discord = document.querySelector(".discord");
    const tiktok = document.querySelector(".tiktok");
    const youtube = document.querySelector(".youtube");
    twitter.src='/image/white-twitter.svg';
    discord.src='/image/white-discord-new.svg';
    tiktok.src='/image/white-tiktok.svg';
    youtube.src='/image/white-youtube.svg';
}