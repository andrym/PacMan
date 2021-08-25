let num = setInterval(gameTurn, 250);
const tabOrigin = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
[0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
[0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
[0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
[0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
[0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
[0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
[0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
[2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2], /* milieu */
[0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
[0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
[0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
[0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
[0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
[0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
[0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
[0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
[0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
let tab = [];

const pacManOrigin = {
    x: 1,
    y: 6,
    direction: 0
};
let pacMan;

const ghostsOrigin = [{
    x: Math.floor(tabOrigin.length / 2) - 2,
    y: Math.floor(tabOrigin[0].length / 2) + 1,
    dir: 1,
    color: 'vert'
}, {
    x: Math.floor(tabOrigin.length / 2) - 2,
    y: Math.floor(tabOrigin[0].length / 2) + 1,
    dir: 3,
    color: 'bleu'
}, {
    x: Math.floor(tabOrigin.length / 2) - 2,
    y: Math.floor(tabOrigin[0].length / 2) + 1,
    dir: 1,
    color: 'rouge'
}, {
    x: Math.floor(tabOrigin.length / 2) - 2,
    y: Math.floor(tabOrigin[0].length / 2) + 1,
    dir: 1,
    color: 'orange'
}];
let ghosts = [];

let dirTab = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let score;
let lost;

function init() {
    for (let i in tabOrigin) {
        tab[i] = [...tabOrigin[i]];
    }
    for (let i in ghostsOrigin) {
        ghosts[i] = {...ghostsOrigin[i]};
    }
    pacMan = {...pacManOrigin};
    lost = 0;
    score = 0;
}

init();

document.addEventListener('keydown', changDir);

function printGhost(ghost) {
    let mainDiv = document.querySelector("#game-tab");
    let ghostDiv = document.createElement("div");
    let ghostImg = document.createElement("img")

    ghostDiv.className = ghost.color + '-ghost';
    ghostImg.src = './assets/fantome_' + ghost.color +  '1.gif';
    ghostDiv.style.gridArea = (ghost.y + 1) + '/' + (ghost.x + 1);
    ghostDiv.appendChild(ghostImg);
    mainDiv.appendChild(ghostDiv);
}

function printGhosts() {

    ghosts.forEach(ghost => {
        printGhost(ghost);
    });
}

function printPacMan() {
    let mainDiv = document.querySelector("#game-tab");
    let pacDiv = document.createElement("div");
    let pac = document.createElement("img")

    pacDiv.id = 'pac-man'
    pac.src = './assets/pacman4.gif';
    pacDiv.style.gridArea = (pacMan.y + 1) + '/' + (pacMan.x + 1);
    pacDiv.appendChild(pac);
    mainDiv.appendChild(pacDiv);
}

function printGrid() {
    let elemTab = document.createElement("div");
    let mainDiv = document.querySelector('#main');
    let mur;
    let sol;
    let bonbon;
    let x = 1;
    let y = 1;

    elemTab.id = "game-tab";
    tab.forEach(ele => {
        x = 1;
        ele.forEach(element => {
            switch (element) {
                case 0:
                    mur = document.createElement("img");
                    mur.src = './assets/mur.gif';
                    mur.style.gridArea = y + '/' + x;
                    elemTab.appendChild(mur);
                    break;
                case 1:
                    sol = document.createElement("img");
                    sol.src = './assets/sol.gif';
                    sol.style.gridArea = y + '/' + x;
                    elemTab.appendChild(sol);
                    break;
                case 2:
                    bonbon = document.createElement("img");
                    bonbon.src = './assets/bonbon.gif';
                    bonbon.style.gridArea = y + '/' + x;
                    elemTab.appendChild(bonbon);
                    break;
            }
            x++;
        });
        y++;
    });
    if (mainDiv.firstChild)
        mainDiv.removeChild(mainDiv.firstChild);
    mainDiv.appendChild(elemTab);
}

function checkGhost(x, y) {
    for (let i = 0; i < ghosts.length; i++) {
        if (ghosts[i].x == x && ghosts[i].y == y) {
            return 1;
        }
    }
    return 0;
}

function checkDir(direction) {
    let dX = pacMan.x + dirTab[direction][0];
    let dY = pacMan.y + dirTab[direction][1];

    if ((dY < tab.length && dY >= 0) && (dX < tab[0].length && dX >= 0)) {
        if (tab[dY][dX] != 0) {
            return 1;
        }
    }
    return 0;
}

function moveGhost(ghost) {
    let dX = ghost.x + dirTab[ghost.dir][0];
    let dY = ghost.y + dirTab[ghost.dir][1];

    if ((dY < tab.length && dY >= 0) && (dX < tab[0].length && dX >= 0)) {
        if (tab[dY][dX] != 0) {
            ghost.x = dX;
            ghost.y = dY;
        }
        else {
            ghost.dir = Math.floor(Math.random() * 4);
            moveGhost(ghost);
        }
    }
}

function moveGhosts() {
    ghosts.forEach(ghost => {
        moveGhost(ghost);
    });
}

function movePacMan() {
    let dX = pacMan.x + dirTab[pacMan.direction][0];
    let dY = pacMan.y + dirTab[pacMan.direction][1];

    if (checkGhost(pacMan.x, pacMan.y) == 1) {
        lost = 1;
        return lost;
    }
    if (checkDir(pacMan.direction) == 1) {
        if (tab[pacMan.y][pacMan.x] == 2)
            tab[pacMan.y][pacMan.x] = 1;
        pacMan.x = dX;
        pacMan.y = dY;
    }
    if (checkGhost(dX, dY) == 1) {
        lost = 1;
        return lost;
    }
    return (0);
}

function changDir(e) {
    switch (e.code) {
        case 'ArrowRight':
            if (checkDir(0) == 1)
                pacMan.direction = 0;
            break;
        case 'ArrowDown':
            if (checkDir(1) == 1)
                pacMan.direction = 1;
            break;
        case 'ArrowLeft':
            if (checkDir(2) == 1)
                pacMan.direction = 2;
            break;
        case 'ArrowUp':
            if (checkDir(3) == 1)
                pacMan.direction = 3;
            break;
    }
}

function checkWin() {
    if (lost == 1) {
        alert("Perdu!");
        return 2;
    }
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab[i].length; j++)
            if (tab[i][j] == 2)
                return 1;
    }
    alert("BIEN OUEJ");
    return 2;
}

function printScore() {
}

function gameTurn() {
    movePacMan();
    if (lost != 1)
        moveGhosts();
    printGrid();
    printPacMan();
    printGhosts();
    printScore();
    if (checkWin() == 2)
        init();
    // clearInterval(num);
}
