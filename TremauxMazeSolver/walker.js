function walkerManager(context, maze) {
    //class variables
    this.context = context;
    this.maze = maze;
    //get starting position from json object
    this.x = maze.start.x;
    this.y = maze.start.y;
    this.lastX = -1;
    this.lastY = -1;
    //create array of visited tiles for later usage
    this.visited = createArray(this.maze.width, this.maze.height);

    this.init = function () {
        //Clear array to all zeros, so we can reuse it with new mazes
        for (var x = 0; x < this.maze.width; x++) {
            for (var y = 0; y < this.maze.height; y++) {
                this.visited[x][y] = 0;
            }
        }

        //Set starting point.
        this.visited[this.x][this.y] = 1;

        //Draw starting point.
        this.draw();
    }

    //colors the current position of the "robot"
    this.draw = function () {
        this.context.fillStyle = "#0033FF";
        this.context.fillRect(this.x * 10, this.y * 10, 10, 10);
    }


    this.move = function (direction, backtrack) {
        var changed = false;
        oldX = this.x;
        oldY = this.y;

        if (backtrack || !this.hasVisited(direction)) {
            //Get the new x,y after moving.
            var point = this.getXYForDirection(direction);

            //check if this is a valid move.
            if (this.canMove(point.x, point.y)) {
                this.x = point.x;
                this.y = point.y;
                changed = true;
            }
        }

        if (changed) {
            //if we walked on the tile, color it cyan, so we can visualize where we were and backtrack
            this.context.fillStyle = 'rgb(0, ' + (backtrack ? 100 : 255) + ', ' + (backtrack ? 100 : 255) + ')';
            this.context.fillRect(oldX * 10, oldY * 10, 10, 10);

            this.lastX = oldX;
            this.lastY = oldY;

            //Mark this tile as visited (possibly twice).
            this.visited[this.x][this.y]++;

            if (backtrack) {
                //We've turned around, so don't visit this last tile again.
                this.visited[this.lastX][this.lastY] = 2;
            }

            if (this.visited[oldX][oldY] == 2 && this.visited[this.x][this.y] == 1) {
                //Found an unwalked tile while backtracking. Mark our last tile back to 1 so we can visit it again to exit this path.
                this.visited[oldX][oldY] = 1;
                this.context.fillStyle = 'rgb(255, 0, 0)';
                this.context.fillRect(oldX * 10, oldY * 10, 10, 10);
            }
        }

        return changed;
    }

    //check from mazeManager class, if we can walk on the tile
    this.canMove = function (x, y) {
        return (maze.isOpen(x, y) && this.visited[x][y] < 2);
    }

    //check if we have visited this tile
    this.hasVisited = function (direction) {
        //Get the new x,y after moving.
        var point = this.getXYForDirection(direction);

        //Check if this point has already been visited.
        return (this.visited[point.x][point.y] > 0);
    }

    //simulates changing orientation of the robot and walking in different directions
    this.getXYForDirection = function (direction) {
        var point = {};

        switch (direction) {
            case 0:
                //angle is 90° and going upwards
                point.x = this.x;
                point.y = this.y - 1;
                break;
            case 1:
                //angle is 0° and goind to the right
                point.x = this.x + 1;
                point.y = this.y;
                break;
            case 2:
                //270° and going down
                point.x = this.x;
                point.y = this.y + 1;
                break;
            case 3:
                //180°and going left
                point.x = this.x - 1;
                point.y = this.y;
                break;
        };

        return point;
    }
};

/*
has 3 values (0,1,2):
0 -> we haven't visited the tile, or the tile is a wall
1 -> we have visited this tile once and in the end these tiles will form a path to the exit
2 -> we have visited this tile two times, and as such are dead ends. the only exclusion is on the intersection
     where we'll leave a red tile that we are at an intersection and that there's one dead end, and one unexplored path
*/
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }
    return arr;
}