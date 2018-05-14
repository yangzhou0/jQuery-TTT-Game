class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let view = this;
    $('li').on("click",function(e) {
      e.stopPropagation();
      e.preventDefault();
      let $square = $(e.currentTarget);
      $square.css("background-color", "white");
      view.makeMove($square);
    });
  }

  makeMove($square) {
    let pos = $square.data('pos');
    this.game.playMove(pos);
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
