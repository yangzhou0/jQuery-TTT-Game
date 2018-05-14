class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    let view = this;
    $('ul').on("click",'.square',function(e) {
      e.stopPropagation();
      let $square = $(e.currentTarget);
      $square.css("background-color", "white");
      view.makeMove($square);
    });



  }

  makeMove($square) {
    this.game.playMove($square.data('pos'));
    alert(this.game.currentPlayer);
  }

  setupBoard() {
    let $board = $("<ul>");
    this.$el.append($board);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $square = $("<li>")
          .addClass("square")
          .data("pos", [i, j]);
          $board.append($square);
          this.bindEvents();
      }
    }
  }
}

module.exports = View;
