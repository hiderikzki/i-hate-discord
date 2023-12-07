const urlParams = new URLSearchParams(queryString);

const createElement = () => {
    let element = document.createElement("h6");
    element.textContent = "provide map_id as url parameter, k thanks try again!!!";
    return element;
  };

if (urlParams.has('map_id')) {
    window.location.replace("osu://b/" + urlParams.get('map_id'));
} else {
    document.appendChild(createElement())
}