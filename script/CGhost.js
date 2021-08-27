class Ghost {
    ghosts = [];
    colors = ["rouge", "vert", "bleu", "orange"];

    constructor(nb) {
        let rdmDir;
        let rdmColor;
        for (let i = 0; i < nb; i++) {
            rdmDir = Math.floor(Math.random() * 2) * 2 + 1;
            rdmColor = Math.floor(Math.random() * 4);

            this.ghosts.push({
                x: Math.floor(tabClass.tab.length / 2) - 2,
                y: Math.floor(tabClass.tab[0].length / 2) + 1,
                dir: rdmDir,
                color: this.colors[rdmColor]
            });
        }
    }

    printGhost(ghost) {
        let mainDiv = document.querySelector("#game-tab");
        let ghostDiv = document.createElement("div");
        let ghostImg = document.createElement("img")

        ghostDiv.className = ghost.color + '-ghost';
        ghostImg.src = './assets/fantome_' + ghost.color + '1.gif';
        ghostDiv.style.gridArea = (ghost.y + 1) + '/' + (ghost.x + 1);
        ghostDiv.appendChild(ghostImg);
        mainDiv.appendChild(ghostDiv);
    }

    printGhosts() {
        for (let ghost of this.ghosts)
            this.printGhost(ghost);
    }

    moveGhost(ghost, tab) {
        let dX = ghost.x + dirTab[ghost.dir][0];
        let dY = ghost.y + dirTab[ghost.dir][1];

        if ((dY < tab.length && dY >= 0) && (dX < tab[0].length && dX >= 0)) {
            if (tab[dY][dX] != 0) {
                ghost.x = dX;
                ghost.y = dY;
            } else {
                ghost.dir = Math.floor(Math.random() * 4);
                this.moveGhost(ghost, tab);
            }
        }
    }

    moveGhosts(tab) {
        for (let ghost of this.ghosts)
            this.moveGhost(ghost, tab);
    }
}