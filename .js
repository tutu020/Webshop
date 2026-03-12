const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

const searchBox = document.getElementById('searchBox');
const videoContainer = document.getElementById('video-container');

searchBox.addEventListener('input', function() {
    const query = searchBox.value.toLowerCase().trim();

    // Video verschijnt alleen als je "epstein" typt
    if(query === "epstein") {
        videoContainer.innerHTML = `
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/iDR41AQKH1c?autoplay=1&mute=1" 
            title="YouTube video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        `;
    } else {
        videoContainer.innerHTML = ''; // video verdwijnt als zoekterm anders is
    }
});
