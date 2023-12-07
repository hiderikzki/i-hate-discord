const urlParams = new URLSearchParams(window.location.search);
const text = document.getElementById('trole-text');

/*
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
*/

if (urlParams.has('map_id')) {
    const url = "osu://b/" + urlParams.get('map_id');
    const open_page = confirm('Open The Url? (' + url + ')');

    if (open_page) {
        window.open(url, "_blank");
        window.close();
    }
} else {
    text.innerHTML = "provide map_id as url parameter, k thanks try again!!!";
}