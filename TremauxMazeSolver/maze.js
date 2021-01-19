function mazeManager(context, maze) {
    //initialize class variables
    this.context = context;
    this.width = maze.width;
    this.height = maze.height;
    this.start = maze.start;
    this.end = maze.end;
    this.maze = maze.map;

    //method for creating visual representation of the maze from "*", " " strings
    this.draw = function (drawClear) {
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                if (this.isWall(x, y)) {
                    this.context.fillStyle = "#222222";
                    this.context.fillRect(x * 10, y * 10, 10, 10);
                } else if (drawClear) {
                    this.context.fillStyle = "white";
                    this.context.fillRect(x * 10, y * 10, 10, 10);
                }
            }
        }
    }

    //if the [x,y] part of the string (because string maze is represented by matrix with line of sentences -> rows, and each character inside a row is part of a column)
    //automatically, if x or y is less than 0, then it's the end so it's an automatic wall
    this.isWall = function (x, y) {
        return (x < 0 || y < 0 || this.maze[x + (y * this.width)] == '*');
    }

    //used by robot walker class, checks if we can walk on the tile
    this.isOpen = function (x, y) {
        return !this.isWall(x, y);
    }
};