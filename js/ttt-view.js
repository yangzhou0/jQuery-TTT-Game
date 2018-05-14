class View {
  constructor(game, $el) {
    this.game= game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $board = $('<ul>');
    for (let i = 0; i < 3; i ++){
      for(let j = 0; j < 3; j ++){
        let $square = $('<li>').addClass('square').attr('pos',[i,j]);
        $board.append($square);
      }

    }
    this.$el.append($board);
  }
}

module.exports = View;
