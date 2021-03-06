function searchAlgorithm(walker) {
    this.walker = walker;
    this.direction = 0;
    this.end = walker.maze.end;

    this.step = function () {
        var startingDirection = this.direction;

        while (!this.walker.move(this.direction)) {
            //Hit a wall. Turn to the right.		
            this.direction++;
            //if direction is >3, we have spun the whole circle, revert back to direction 0 (0=4, 1=5, ...)
            if (this.direction > 3) {
                this.direction = 0;
            }
            if (this.direction == startingDirection) {
                //We've turned in a complete circle with no new path available. Time to backtrack.
                while (!this.walker.move(this.direction, true)) {
                    //Hit a wall. Turn to the right.		
                    this.direction++;

                    if (this.direction > 3) {
                        this.direction = 0;
                    }
                }
                break;
            }
        }
        this.walker.draw();
    }

    //track position, and when we hit end, color the path and intersections which we've visited only once
    this.isDone = function () {
        return (walker.x == walker.maze.end.x && walker.y == walker.maze.end.y);
    }

    this.solve = function () {
        //Draw solution path.
        for (var x = 0; x < this.walker.maze.width; x++) {
            for (var y = 0; y < this.walker.maze.height; y++) {
                if (this.walker.visited[x][y] == 1) {
                    this.walker.context.fillStyle = '#11cc77';
                    this.walker.context.fillRect(x * 10, y * 10, 10, 10);
                }
            }
        }
    }
};