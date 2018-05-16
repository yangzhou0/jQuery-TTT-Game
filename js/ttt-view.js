class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let view = this;
    $("li").on("click", function(e) {
      e.stopPropagation();
      e.preventDefault();
      let $square = $(e.currentTarget);
      view.makeMove($square);
    });
  }

  makeMove($square) {
    let pos = $square.data("pos");
    let currentPlayer = this.game.currentPlayer;
    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("this " + e.msg);
      return;
    }
    $square.text(currentPlayer).addClass(`${currentPlayer}`);
    if (this.game.isOver()) {
      $("li").off("click");
      $(".square").addClass("over");
      let winner = this.game.board.winner();
      $(`.${winner}`).css({ background: "green", color: "white" });
      let $caption = $("<figcaption>").text(winner + " won!");
      this.$el.append($caption);
    }
  }

  setupBoard() {
    let $board = $("<ul>");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $square = $("<li>")
          .addClass("square")
          .data("pos", [i, j]);
        $board.append($square);
      }
    }
    this.$el.append($board);
  }
}

module.exports = View;
