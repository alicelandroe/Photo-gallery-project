document.querySelector(".searchbox input").addEventListener("keyup", onUserInput);

const imageList = document.querySelectorAll(".images a");

function onUserInput() {
    const userInput = document.querySelector(".searchbox input").value.toLowerCase();

    for (let image of imageList) {
        const caption = image.getAttribute("data-title").toLowerCase();
    
        if (caption.includes(userInput)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        };
    }
}