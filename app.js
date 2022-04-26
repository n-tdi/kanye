const text = document.querySelector(".text");

function changeText() {
    let ip;
    fetch('https://api.ipify.org/?format=json')
        .then(results => results.json())
        .then(console.log);
    text.innerHTML = "Hello World";
}

changeText();