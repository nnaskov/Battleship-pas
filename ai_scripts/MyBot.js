/// <reference path="AI.Core.js" />
/// <reference path="Battleship.Core.js" />

function MyBot() { }
AI.subClass(MyBot);

MyBot.prototype.setupBoard = function setupBoard(ships) {
    var placements = [];
    var start = null;
    var end = null;


    // Length 2
    start = new Battleship.Point(0, 0);
    end = new Battleship.Point(0, 1);
    placements.push(new Battleship.Placement(start, end));
    // length 3
    start = new Battleship.Point(4, 0);
    end = new Battleship.Point(4, 2);
    placements.push(new Battleship.Placement(start, end));
    // length 3
    start = new Battleship.Point(2, 4);
    end = new Battleship.Point(4, 4);
    placements.push(new Battleship.Placement(start, end));
    // length 4
    start = new Battleship.Point(4, 6);
    end = new Battleship.Point(7, 6);
    placements.push(new Battleship.Placement(start, end));
    // length 5
    start = new Battleship.Point(5, 9);
    end = new Battleship.Point(9, 9);
    placements.push(new Battleship.Placement(start, end));
    return placements;
};

MyBot.prototype.fire = function fire(myMoves, theirMoves) {
    var i, j,
        moveIndex,
        move;

    if (!myMoves || !myMoves.length) {
        this._openMoves = [];
        for (i = 0; i < 10; i++) {
            for (j = 0; j < 10; j++) {
                this._openMoves.push(new Battleship.Point(i, j));
            }
        }
    }

    moveIndex = Math.floor(Math.random() * this._openMoves.length);
    move = this._openMoves[moveIndex];

    this._openMoves.splice(moveIndex, 1);

    return move;
};