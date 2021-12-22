function highscore() {
    let highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

    highscore.sort(function (a, b) {
        return b.score - a.score;
    });

    highscore.forEach(function (score) {
        let liTag = document.createElement("li");
        liTag.textContent = score.init + " - " + score.score;

        let olTag = document.getElementById("highscore");
        if (olTag) {olTag.appendChild(liTag)}
    });

}
function clearHighscore() {
    window.localStorage.removeItem("highscore");
    window.location.reload();
}

if (document.getElementById("erase")) {document.getElementById("erase").onclick = clearHighscore}

highscore();