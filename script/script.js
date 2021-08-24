let num = setInterval(gameTurn, 500);
let tab = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
let pacMan = {
    x: 1,
    y: 6,
    direction: 0
};
let blueGhost = {
    x: Math.floor(tab.length / 2) - 2,
    y: Math.floor(tab[0].length / 2) + 1,
    dir: 1
};
let redGhost = {
    x: Math.floor(tab.length / 2) - 2,
    y: Math.floor(tab[0].length / 2) + 1,
    dir: 3
};
let greenGhost = {
    x: Math.floor(tab.length / 2) - 2,
    y: Math.floor(tab[0].length / 2) + 1,
    dir: 1
};
let dirTab = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let score = 0;

document.addEventListener('keydown', changDir);

function printblueGhost() {
    let mainDiv = document.querySelector("#game-tab");
    let ghostDiv = document.createElement("div");
    let ghost = document.createElement("img")

    ghostDiv.id = 'blue-ghost'
    ghost.src = './assets/fantome_bleu1.gif';
    ghostDiv.style.gridArea = (blueGhost.y + 1) + '/' + (blueGhost.x + 1);
    ghostDiv.appendChild(ghost);
    mainDiv.appendChild(ghostDiv);
}

function printredGhost() {
    let mainDiv = document.querySelector("#game-tab");
    let ghostDiv = document.createElement("div");
    let ghost = document.createElement("img")

    ghostDiv.id = 'red-ghost'
    ghost.src = './assets/fantome_rouge1.gif';
    ghostDiv.style.gridArea = (redGhost.y + 1) + '/' + (redGhost.x + 1);
    ghostDiv.appendChild(ghost);
    mainDiv.appendChild(ghostDiv);
}

function printgreenGhost() {
    let mainDiv = document.querySelector("#game-tab");
    let ghostDiv = document.createElement("div");
    let ghost = document.createElement("img")

    ghostDiv.id = 'green-ghost'
    ghost.src = './assets/fantome_vert1.gif';
    ghostDiv.style.gridArea = (greenGhost.y + 1) + '/' + (greenGhost.x + 1);
    ghostDiv.appendChild(ghost);
    mainDiv.appendChild(ghostDiv);
}

function printGhosts() {
    printblueGhost();
    printgreenGhost();
    printredGhost();
}

function printPacMan() {
    let mainDiv = document.querySelector("#game-tab");
    let pacDiv = document.createElement("div");
    let pac = document.createElement("img")

    pacDiv.id = 'pac-man'
    pac.src = './assets/pacman3.gif';
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

function checkDir(direction) {
    let dX = dirTab[direction][0];
    let dY = dirTab[direction][1];

    if ((((pacMan.y + dY) < tab.length && (pacMan.y + dY) >= 0))
        && ((pacMan.x + dX) < tab[0].length && (pacMan.x + dX) >= 0)) {
        if (tab[pacMan.y + dY][pacMan.x + dX] != 0) {
            return 1;
        }
    }
    return 0;
}

function moveBlueGhost() {
    let dX = dirTab[blueGhost.dir][0];
    let dY = dirTab[blueGhost.dir][1];

    if ((((blueGhost.y + dY) < tab.length && (blueGhost.y + dY) >= 0))
        && ((blueGhost.x + dX) < tab[0].length && (blueGhost.x + dX) >= 0)) {
        if (tab[blueGhost.y + dY][blueGhost.x + dX] != 0) {
            blueGhost.x += dX;
            blueGhost.y += dY;
        }
        else {
            blueGhost.dir = Math.floor(Math.random() * 4);
            moveBlueGhost();
        }
    }
}

function moveRedGhost() {
    let dX = dirTab[redGhost.dir][0];
    let dY = dirTab[redGhost.dir][1];

    if ((((redGhost.y + dY) < tab.length && (redGhost.y + dY) >= 0))
        && ((redGhost.x + dX) < tab[0].length && (redGhost.x + dX) >= 0)) {
        if (tab[redGhost.y + dY][redGhost.x + dX] != 0) {
            redGhost.x += dX;
            redGhost.y += dY;
        }
        else {
            redGhost.dir = Math.floor(Math.random() * 4);
            moveRedGhost();
        }
    }
}

function moveGreenGhost() {
    let dX = dirTab[greenGhost.dir][0];
    let dY = dirTab[greenGhost.dir][1];

    if ((((greenGhost.y + dY) < tab.length && (greenGhost.y + dY) >= 0))
        && ((greenGhost.x + dX) < tab[0].length && (greenGhost.x + dX) >= 0)) {
        if (tab[greenGhost.y + dY][greenGhost.x + dX] != 0) {
            greenGhost.x += dX;
            greenGhost.y += dY;
        }
        else {
            greenGhost.dir = Math.floor(Math.random() * 4);
            moveGreenGhost();
        }
    }
}

function moveGhosts() {
    moveBlueGhost();
    moveRedGhost();
    moveGreenGhost();
}

function movePacMan() {
    let dX = dirTab[pacMan.direction][0];
    let dY = dirTab[pacMan.direction][1];

    if (checkDir(pacMan.direction) == 1) {
        if (tab[pacMan.y][pacMan.x] == 2)
            tab[pacMan.y][pacMan.x] = 1;
        pacMan.x += dX;
        pacMan.y += dY;
    }
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
    let win = 0;
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
    moveGhosts();
    printGrid();
    printPacMan();
    printGhosts();
    printScore();
    if (checkWin() == 2)
        clearInterval(num);
}
