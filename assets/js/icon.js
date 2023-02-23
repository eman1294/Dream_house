//**********************//
// icons
let heart = document.querySelectorAll(".heart");

for (let i = 0; i < heart.length; i++) {
    console.log(heart[i])

    heart[i].addEventListener("click", function () {
        if (heart[i].classList.contains("text-danger")) {
            heart[i].classList.remove("text-danger");
        }
        else {
            heart[i].classList.add("text-danger");
        }
    })
}