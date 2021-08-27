let num = setInterval(gameTurn, 250);
let nbGhost = 6;
let tabClass = new Grid();
let pacManClass = new PacMan(1, 6);
let ghostClass = new Ghost(nbGhost);
let dirTab = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
];
let score;
let lost;

function init() {
    tabClass = new Grid();
    pacManClass = new PacMan();
    ghostClass = new Ghost(nbGhost);
    lost = 0;
    score = 0;
}

init();

document.addEventListener('keydown', changeDir);

function changeDir(e) {
    switch (e.code) {
        case 'ArrowRight':
            if (pacManClass.checkDir(0, tabClass.tab) == 1)
                pacManClass.pacManPos.direction = 0;
            break;
        case 'ArrowDown':
            if (pacManClass.checkDir(1, tabClass.tab) == 1)
                pacManClass.pacManPos.direction = 1;
            break;
        case 'ArrowLeft':
            if (pacManClass.checkDir(2, tabClass.tab) == 1)
                pacManClass.pacManPos.direction = 2;
            break;
        case 'ArrowUp':
            if (pacManClass.checkDir(3, tabClass.tab) == 1)
                pacManClass.pacManPos.direction = 3;
            break;
    }
}

function checkWin() {
    if (lost == 1) {
        alert("Perdu!");
        return 2;
    }
    for (let i = 0; i < tabClass.tab.length; i++) {
        for (let j = 0; j < tabClass.tab[i].length; j++)
            if (tabClass.tab[i][j] == 2)
                return 1;
    }
    alert("BIEN OUEJ");
    return 2;
}

function printScore() {}

function gameTurn() {

    pacManClass.movePacMan(tabClass.tab, ghostClass.ghosts);
    if (lost != 1)
        ghostClass.moveGhosts(tabClass.tab);
    tabClass.printGrid();
    pacManClass.printPacMan();
    ghostClass.printGhosts();
    printScore();
    if (checkWin() == 2)
        init();
    // clearInterval(num);
}