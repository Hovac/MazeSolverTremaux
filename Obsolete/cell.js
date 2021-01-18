function Cell(i, j, startGameCheck) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
    this.visitedGame = false;

    this.checkNeighbors = function () {
        let neighbors = [];

        let top = grid[index(i, j - 1)];
        let right = grid[index(i + 1, j)];
        let bottom = grid[index(i, j + 1)];
        let left = grid[index(i - 1, j)];

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }

        if (neighbors.length > 0) {
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }
    };
    this.highlight = function () {
        let x = this.i * w;
        let y = this.j * w;
        noStroke();
        fill(0, 255, 255, 100);
        rect(x, y, w, w);
    };

    this.start = function () {
        noStroke();
        fill(0, 255, 255);
        rect(0.1 * w, 0.1 * w, 0.8 * w, 0.8 * w);
    }

    this.end = function () {
        noStroke();
        fill(0, 255, 0);
        rect(600 - 0.9 * w, 600 - 0.9 * w, 0.8 * w, 0.8 * w);
    }

    this.show = function (startGameCheck) {
        let x = this.i * w;
        let y = this.j * w;
        stroke(255);
        if (this.walls[0]) {
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
            line(x, y + w, x, y);
        }
        if (this.visited && !startGameCheck) {
            noStroke();
            fill(63, 180, 20, 100);
            rect(x, y, w, w);
        }
    };
}