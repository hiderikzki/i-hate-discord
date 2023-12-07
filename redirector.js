const urlParams = new URLSearchParams(window.location.search);
const text = document.getElementById('trole-text');

/*
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
*/

if (urlParams.has('map_id')) {
    const url = "osu://b/" + urlParams.get('map_id');
    const direct = window.open(url, "_blank");;

    if(!direct || direct.closed || typeof direct.closed == 'undefined') 
    { 
        text.innerHTML = "Please allow pop-ups for automatic main window closing to work! (using old method)";
        window.location.replace(url);
    } 
    else 
    {
        window.close();
    }
} else {
    text.innerHTML = "Provide map_id as url parameter, k thanks try again!!!";
}