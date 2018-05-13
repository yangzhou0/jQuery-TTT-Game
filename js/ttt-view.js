class View {
  constructor(game, $el) {
    this.game= game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $grid = $('<ul>');
    for (let i = 0; i < 3; i ++){
      for(let j = 0; j < 3; j ++){
        let $square = $('<li>').attr('pos',[i,j]);
        
      }

    }
  }
}

module.exports = View;
