console.log("JS is connected!");

$(document).ready(function() {
	console.log("jquery file is connected!")
	//todo: draw a grid
	const connect4 = new Connect4('#connect4')
	connect4.onPlayerMove = function() {
    $('#player').text(connect4.player);
  }
  $('#restart').click(function() {
    connect4.restart();
  })
}); 