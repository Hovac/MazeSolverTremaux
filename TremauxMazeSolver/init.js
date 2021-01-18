var controller = new mazeController();
//initializing stuff and loading the maze map
document.getElementById("startMaze").addEventListener("click", function() {
    document.getElementById("imageView").style.backgroundColor = "white";
    var mazeSelect = document.getElementById("mazes");
    maze = (mazeSelect.value == "mazeSmall") ? mazeSmall : mazeBig;
    console.log(maze);
    controller.init(maze);
    controller.run();

});

var mazeBig = {
    start: {
        x: 0,
        y: 1
    },
    end: {
        x: 60,
        y: 59
    },
    width: 61,
    height: 61,
    speed: 3,
    map: '\
*************************************************************\
      *   *   *       *       *         *         *     *   *\
* *** * * * *** ***** * ***** * ***** * *** ***** ***** *** *\
* *   * * *         *   *   * * * *   *     *         *   * *\
* ***** * ************* * *** * * * ********* *** *** *** * *\
*       * *     *       *     *   * *     *   *   * *   *   *\
******* * * *** * ***** * ******* * * * *** ******* *** *** *\
*   *   * * *   * * *   *         * * * *   *       *   *   *\
*** * * * * * *** * * *** ********* * *** *** ***** * ***** *\
*   * * * * * * * *     *   *       *   *     * *   *       *\
* *** * * *** * * *** ***** * *** ***** ******* * ***** *****\
*   * * *       * * * *     *   *         *   *   *   *     *\
*** * * ***** * * * * * * ***** ********* * * ***** ******* *\
* * * *       *   * *   * *     *         * * *   * *       *\
* * * ************* ***** * ***** ********* * *** * * *** * *\
* *   *     *     * *   * *   *   *         *   *     *   * *\
* ***** * *** ***** * *** ***** *** * ********* *** ******* *\
*   *   *   *         *   *     *   *   * *   * * *   *     *\
* * ******* ******* *** * * *********** * * * * * ***** *****\
* *   *           *     * * * *     *   *   *   *   *   *   *\
* *** * ********* ********* * * *** * ************* * ***** *\
* *   * *   *   *       *   * * * * * *       *   *   * *   *\
* * *** * * * * ******* * *** * * * * * ***** * * *** * * ***\
* *   * * *   *   *   *   *   * * * *       * * *     *   * *\
* *** * * ******* * * ***** * * * * ******* * * ******* *** *\
* *   * *       * * *       * *   * *     * *         *     *\
* * *** ********* * *** ***** ***** * *** * *** ***** * *** *\
* *   *     *       * *   * *   *     * *     * *     * * * *\
* *** ***** * ******* *** * *** ******* ***** * * ***** * * *\
* *   *   * *   *   *     *   *   * *   * *   * *   * * * * *\
* * *** * * *** *** ********* *** * * * * * *** *** * * * * *\
* *     * *   *     * *     *   * *   * * *   * *   * * * * *\
* *********** * ***** * *** *** * *** * * *** * ***** * * * *\
*       *     * *   *     *   *   *   * * *   *   *   * *   *\
* ***** * ***** * * ********* ********* * * ***** *** * *****\
*   *     *   * * *     *   *             * *   *   *   *   *\
* *** *** * * * * ***** * ***** *********** * * * * * ***** *\
*   *   * * *   *   *   *   * *         *   * * * *         *\
*** *** *** ******* * ***** * ********* * *** * * *** *******\
* *   * *       *   * *   * *   *   * *   * * *   *   * *   *\
* *** * * ******* *** * * * *** * * * ***** * ***** *** * * *\
* * * * * *     * *   * * *   *   *   *   *       * *   * * *\
* * * * * * *** * * *** ***** * ***** *** *** *** * * * *** *\
*     *   *   * * *       *   * *   *   * * * *   *   *     *\
***** ********* * ******* * *** * * * * * * * * ******* *****\
*     *     *   * *       *   *   * * *   *   * *   *   *   *\
* ******* * * *** * ********* ***** *********** * * *** * * *\
*   * *   *   * * * * *   *   *   * *     *       *   *   * *\
*** * * *** *** * * * * * * *** * * * *** * ***** *** ***** *\
*     * *   *   * *     *   * * *   *   *   *   * *     * * *\
*** * * * *** * * * ********* * ******* *** * * *** *** * * *\
*   *   *   * *   * *   *   * *   *   *   * * *     *   *   *\
* ********* * ***** * * * * * *** *** * * *** ******* ***** *\
* *         * *     * *   * *     *   * *   * *         *   *\
* ********* * ***** * ***** *** *** ******* * ******* * * ***\
*         * *     * *   * * *   * *         * *       * *   *\
*** ******* ***** * *** * * * *** *********** * ******* *** *\
* *       * *   * * *   * * * *   *       *   * *     * * * *\
* ******* * * * * * * * * * * * * * *** *** *** * *** * * * *\
*         *   *   *   * *       *     *     *   *   *   *    \
*************************************************************\
'
};

var mazeSmall = {
    start: {
        x: 2,
        y: 0
    },
    end: {
        x: 19,
        y: 3
    },
    width: 20,
    height: 10,
    speed: 150,
    map: '\
** *****************\
** ****            *\
**      ***** ******\
** *********        \
*  ********* *******\
**    ****** *** ***\
*****      * *** ***\
**    **** *     ***\
** ***     *****   *\
********************\
'
};