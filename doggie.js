document.addEventListener("click", function (event) {
    if (!event.target.matches("#generate")) return;
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => render_img(data))
        .catch(() => console.log("error"));

});

function render_img(data) {
    const temp = document.getElementById("dog");
    temp.src = data.message;
    console.log(data);
}