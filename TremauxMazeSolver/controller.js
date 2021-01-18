function mazeController() {
    //create class variable that will be used in 2 methods.
    this.canvas = null;
    this.context = null;
    this.maze = null;
    this.walker = null;
    this.algorithm = null;
    this.speed = null;

    //adding values to initial class variables
    this.init = function (maze) {
        this.canvas = document.getElementById("imageView");
        this.context = this.canvas.getContext('2d');
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //Auto-adjust canvas size to fit window.
        this.canvas.width = maze.width * 10;
        this.canvas.height = maze.height * 10;

        //Initialize speed of the "robot"
        this.speed = maze.speed == null ? 50 : maze.speed;

        //Create maze from text file in defined in json object -> see example mazeBig.js and mazeSmall.js
        this.maze = new mazeManager(this.context, maze);
        this.maze.draw();

        //Create "robot" at starting position.
        this.walker = new walkerManager(this.context, this.maze);
        this.walker.init();

        //Initialize Tremaux algorithm
        this.algorithm = new searchAlgorithm(this.walker);
    }

    this.run = function () {
        if (!this.algorithm.isDone()) {
            this.algorithm.step();

            window.setTimeout(function () {
                controller.run();
            }, this.speed);
        } else {
            // Clear map so we can draw the solution path.
            this.walker.maze.draw(true);

            // Draw the solution path from tremaux class
            this.algorithm.solve();
        }
    }
};