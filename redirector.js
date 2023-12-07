const urlParams = new URLSearchParams(window.location.search);
const text = document.getElementById('trole-text');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

if (urlParams.has('map_id')) {
    open("osu://b/" + urlParams.get('map_id'));
    delay(1000).then(() => window.close());
} else {
    text.innerHTML = "provide map_id as url parameter, k thanks try again!!!";
}