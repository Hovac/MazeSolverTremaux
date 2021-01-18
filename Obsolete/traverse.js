function Traverse(w, fGrid) {
    var i = 0;
    var j = 0;
    var angle = 0;
    var matrixGrid = [];
    var tempI = 0;

    for (let x = 0; x < width / w; x++) {
        matrixGrid[x] = new Array(width / w);
    }

    for (let x = 0; x < width / w; x++) {
        for (let y = 0; y < width / w; y++) {
            matrixGrid[x][y] = fGrid[tempI];
            tempI++;
        }
    }
    this.start = function () {
        frameRate(1);
        move();
    }

    drawTriangle = function (i, j, angle) {
        var center = w / 2;
        var corner1 = [-w / 6, -w / 4];
        var corner2 = [w / 6, -w / 4];
        var corner3 = [0, w / 2.5];

        fill(255, 0, 0);
        translate(center * (i + 1) + i * center, center * (j + 1) + j * center);
        rotate(angle);
        triangle(corner1[0], corner1[1], corner2[0], corner2[1], corner3[0], corner3[1]);
    }

    move = function () {
        console.log(matrixGrid[i][j]);
        console.log(i, j);
            if (!matrixGrid[i][j].walls[2]) {
                matrixGrid[i][j].visitedGame = true;
                j++;
                angle = 0;
            }
            if (!matrixGrid[i][j].walls[3]) {
                matrixGrid[i][j].visitedGame = true;
                i--;
                angle = HALF_PI;
            }
            if (!matrixGrid[i][j].walls[0]) {
                matrixGrid[i][j].visitedGame = true;
                j--;
                angle = PI;
            }
            if (!matrixGrid[i][j].walls[1]) {
                matrixGrid[i][j].visitedGame = true;
                i++;
                angle = -HALF_PI;
            }
        drawTriangle(i, j, angle);
    }

    forward = function(angle) {
        if(angle == 0) {
            return j++;
        } 
        else if(angle == HALF_PI) {
            return i--;
        }
        else if(angle == -HALF_PI) {
            return i++;
        }
        else if(angle == PI) {
            return j--;
        }
    }
}