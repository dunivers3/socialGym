const open = document.getElementById("open")
const exit = document.getElementById("exit")
const container = document.querySelector(".container")

open.addEventListener("click", () => container.classList.add("showNav"))
exit.addEventListener("click", () => container.classList.remove("showNav"))