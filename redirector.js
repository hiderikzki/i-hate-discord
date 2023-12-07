const urlParams = new URLSearchParams(window.location.search);
const text = document.getElementById('trole-text');

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

if (urlParams.has('map_id')) {
    window.open("osu://b/" + urlParams.get('map_id'), "_blank");

    delay(1000);
    
    if (window.localStorage.getItem("autoclose") === true) {
        window.close();
    } else {
        const autoclose = confirm('Allow Automatic Closing? (only allow if set application open to always allow)');

        if (autoclose) {
            window.localStorage.setItem("autoclose", true);
        }
    }
} else {
    text.innerHTML = "provide map_id as url parameter, k thanks try again!!!";
}