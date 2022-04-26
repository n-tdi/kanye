const text = document.querySelector(".text");

function changeText() {
    let ip;
    fetch('https://api.ipify.org/?format=json')
        .then(results => results.json())
        .then(ip = results.ip);
    text.innerHTML = ip;
}

changeText();