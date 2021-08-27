class PacMan {
    pacManPos;

    constructor() {
        this.pacManPos = {
            x: 1,
            y: 6,
            direction: 0
        };
    }

    printPacMan() {
        let mainDiv = document.querySelector("#game-tab");
        let pacDiv = document.createElement("div");
        let pac = document.createElement("img")
        let x = this.pacManPos.x + 1;
        let y = this.pacManPos.y + 1;

        pacDiv.id = 'pac-man'
        pac.src = './assets/pacman4.gif';
        pacDiv.style.gridArea = y + '/' + x;
        pacDiv.appendChild(pac);
        mainDiv.appendChild(pacDiv);
    }

    checkGhost(x, y, ghosts) {
        for (let i in ghosts)
            if (ghosts[i].x == x && ghosts[i].y == y)
                return 1;
        return 0;
    }

    checkDir(direction, tab) {
        let dX = this.pacManPos.x + dirTab[direction][0];
        let dY = this.pacManPos.y + dirTab[direction][1];

        if ((dY < tab.length && dY >= 0) && (dX < tab[0].length && dX >= 0)) {
            if (tab[dY][dX] != 0) {
                return 1;
            }
        }
        return 0;
    }

    movePacMan(tab, ghosts) {
        let dX = this.pacManPos.x + dirTab[this.pacManPos.direction][0];
        let dY = this.pacManPos.y + dirTab[this.pacManPos.direction][1];

        if (this.checkGhost(this.pacManPos.x, this.pacManPos.y, ghosts) == 1) {
            lost = 1;
            return lost;
        }
        if (this.checkDir(this.pacManPos.direction, tab) == 1) {
            if (tab[this.pacManPos.y][this.pacManPos.x] == 2)
                tab[this.pacManPos.y][this.pacManPos.x] = 1;
            this.pacManPos.x = dX;
            this.pacManPos.y = dY;
        }
        if (this.checkGhost(dX, dY, ghosts) == 1) {
            lost = 1;
            return lost;
        }
        return (0);
    }
}