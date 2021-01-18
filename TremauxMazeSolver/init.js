var controller = new mazeController();
//initializing stuff and loading the maze map
if (window.addEventListener) {
    window.addEventListener('load', function () {
        //onLoad clear the maze and run the "robot"
        controller.init(maze);
        controller.run();
    });
}