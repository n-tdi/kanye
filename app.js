const text = document.querySelector(".text");
const Http = new XMLHttpRequest();
const url='https://api.kanye.rest';

function changeText() {
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        const response = JSON.parse(Http.responseText);
        text.innerHTML = response.quote;
    }
}

changeText();