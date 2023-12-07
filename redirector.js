const urlParams = new URLSearchParams(window.location.search);
const text = document.getElementById('trole-text');

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

if (urlParams.has('map_id')) {
    window.location.replace("osu://b/" + urlParams.get('map_id'));
    
    delay(1000);
    
    if (window.localStorage.getItem("autoclose")) {
        window.close();
    } else {
        if (autoclose) {
            autoclose = confirm('Allow Automatic Closing? (only allow if set application open to always allow)');
            window.localStorage.setItem("autoclose", true);
        }
    }
} else {
    text.innerHTML = "provide map_id as url parameter, k thanks try again!!!";
}