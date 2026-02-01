const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = "<h1 style='color:white;'>Yayyy I’m really glad you said yes  ❤️🥰</h1>";
});