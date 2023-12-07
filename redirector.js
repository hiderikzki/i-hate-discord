const urlParams = new URLSearchParams(window.location.search);
const text = document.getElementById('trole-text');

if (urlParams.has('map_id')) {
    window.location.replace("osu://b/" + urlParams.get('map_id'));
} else {
    text.innerHTML = "provide map_id as url parameter, k thanks try again!!!";
}