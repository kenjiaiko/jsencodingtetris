
enchant();

gBlocks = [
	[
		[
			[0,0,0,0],
			[1,1,1,1],
			[0,0,0,0],
			[0,0,0,0],
		],
		[
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
		],
		[
			[0,0,0,0],
			[0,0,0,0],
			[1,1,1,1],
			[0,0,0,0],
		],
		[
			[0,0,1,0],
			[0,0,1,0],
			[0,0,1,0],
			[0,0,1,0],
		],
	],
	[
		[
			[0,0,0,0],
			[1,0,0,0],
			[1,1,1,0],
			[0,0,0,0],
		],
		[
			[0,0,0,0],
			[0,1,0,0],
			[0,1,0,0],
			[1,1,0,0],
		],
		[
			[0,0,0,0],
			[0,0,0,0],
			[1,1,1,0],
			[0,0,1,0],
		],
		[
			[0,0,0,0],
			[0,1,1,0],
			[0,1,0,0],
			[0,1,0,0],
		],
	],
	[
		[
			[0,0,0,0],
			[0,0,1,0],
			[1,1,1,0],
			[0,0,0,0],
		],
		[
			[0,0,0,0],
			[1,1,0,0],
			[0,1,0,0],
			[0,1,0,0],
		],
		[
			[0,0,0,0],
			[0,0,0,0],
			[1,1,1,0],
			[1,0,0,0],
		],
		[
			[0,0,0,0],
			[0,1,0,0],
			[0,1,0,0],
			[0,1,1,0],
		],
	],
	[
		[
			[0,0,0,0],
			[0,1,1,0],
			[0,1,1,0],
			[0,0,0,0],
		],
		[
			[0,0,0,0],
			[0,1,1,0],
			[0,1,1,0],
			[0,0,0,0],
		],
		[
			[0,0,0,0],
			[0,1,1,0],
			[0,1,1,0],
			[0,0,0,0],
		],
		[
			[0,0,0,0],
			[0,1,1,0],
			[0,1,1,0],
			[0,0,0,0],
		],
	],
	[
		[
			[0,0,0,0],
			[0,1,1,0],
			[1,1,0,0],
			[0,0,0,0],
		],
		[
			[0,0,0,0],
			[1,0,0,0],
			[1,1,0,0],
			[0,1,0,0],
		],
		[
			[0,0,0,0],
			[0,0,0,0],
			[0,1,1,0],
			[1,1,0,0],
		],
		[
			[0,0,0,0],
			[0,1,0,0],
			[0,1,1,0],
			[0,0,1,0],
		],
	],
	[
		[
			[0,0,0,0],
			[1,1,0,0],
			[0,1,1,0],
			[0,0,0,0],
		],
		[
			[0,0,0,0],
			[0,1,0,0],
			[1,1,0,0],
			[1,0,0,0],
		],
		[
			[0,0,0,0],
			[0,0,0,0],
			[1,1,0,0],
			[0,1,1,0],
		],
		[
			[0,0,0,0],
			[0,0,1,0],
			[0,1,1,0],
			[0,1,0,0],
		],
	],
	[
		[
			[0,0,0,0],
			[0,1,0,0],
			[1,1,1,0],
			[0,0,0,0],
		],
		[
			[0,0,0,0],
			[0,1,0,0],
			[1,1,0,0],
			[0,1,0,0],
		],
		[
			[0,0,0,0],
			[0,0,0,0],
			[1,1,1,0],
			[0,1,0,0],
		],
		[
			[0,0,0,0],
			[0,1,0,0],
			[0,1,1,0],
			[0,1,0,0],
		],
	],
];

// 12x22
var gMap = [ 
	[0,0,0,0,0,0,0,0,0,0,0,0],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1],
];

function gBlockMove(flag)
{
	var num = 0;
	var tmp_x = [0, 0, 0, 0];
	var tmp_y = [0, 0, 0, 0];

	var locked = 0;

	if (gRedBlockCheck() == 0)
		return 2;
	
	if (flag == 'up') {
		var mode = g.blockmode + 1;
		if (mode == 4)
			mode = 0;
		for (var y=0; y < 4; y++) {
			for (var x=0; x < 4; x++) {
				if (gBlocks[g.blocktype][mode][y][x]) {
					if (((g.blockposy + y) < 22) && ((g.blockposx + x) < 12)) {
						if (gMap[g.blockposy + y][g.blockposx + x] != 0 && 
							gMap[g.blockposy + y][g.blockposx + x] != 2)
						{
							return 1;
						}
					}
				}
			}
		}
	}
	
	var max_x = (((g.blockposx + 4) <= 12) ? (g.blockposx + 4) : 12);
	var max_y = (((g.blockposy + 4) <= 22) ? (g.blockposy + 4) : 22);
	
	for (var j=g.blockposy; j < max_y; j++) {
		for (var i=g.blockposx; i < max_x; i++) {
			if (gMap[j][i] == 2) {
				if (flag == 'left') {
					if (gMap[j][i-1] == 1 || gMap[j][i-1] == 3)
						return 1;
				}
				if (flag == 'right') {
					if (gMap[j][i+1] == 1 || gMap[j][i+1] == 3)
						return 1;
				}
				if (flag == 'down') {
					if (gMap[j+1][i] == 1 || gMap[j+1][i] == 3)
						locked = 1;
				}
				tmp_x[num] = i;
				tmp_y[num] = j;
				num += 1;
			}
		}
	}
	if (locked) {
		for (var i=0; i < num; i++)
			gMap[tmp_y[i]][tmp_x[i]] = 3;
		g.blocktype = -1;
		return 1;
	}
	for (var i=0; i < num; i++) {
		gMap[tmp_y[i]][tmp_x[i]] = 0;
	}
	
	if (flag == 'up') {
		g.blockmode += 1;
		if (g.blockmode == 4)
			g.blockmode = 0;
		for (var y=0; y < 4; y++) {
			for (var x=0; x < 4; x++) {
				if (gBlocks[g.blocktype][g.blockmode][y][x])
					gMap[g.blockposy + y][g.blockposx + x] = 2;
			}
		}
	} else {
		for (var i=0; i < num; i++) {
			if (flag == 'left')
				gMap[tmp_y[i]][tmp_x[i]-1] = 2;
			if (flag == 'right')
				gMap[tmp_y[i]][tmp_x[i]+1] = 2;
			if (flag == 'down')
				gMap[tmp_y[i]+1][tmp_x[i]] = 2;
		}
		if (flag == 'left')
			g.blockposx -= 1;
		if (flag == 'right')
			g.blockposx += 1;
		if (flag == 'down')
			g.blockposy += 1;
	}
	//if (flag == 'down' && g.input.down)
	//	g.score += 2;
	return 0;
}

function gRedBlockCheck() {
	if (g.blocktype == -1)
		return 0;
	for (var j=0; j < 22; j++) {
		for (var i=0; i < 12; i++) {
			if (gMap[j][i] == 2)
				return 1;
		}
	}
	return 0;
}

function gLineCheck() {
	var ret = 0;
	for (var j=0; j < 22; j++) {
		var cnt = 0;
		for (var i=0; i < 12; i++) {
			if (gMap[j][i] == 3)
				cnt++;
		}
		if (cnt == 10) {
			for (var i=1; i < 11; i++)
				gMap[j][i] = 0;
			if (j > 1) {
				var k = j;
				while (k > 0) {
					k--;
					for (var i=1; i < 11; i++)
						gMap[k+1][i] = gMap[k][i];
				}
			}
			g.score += 100;
			ret++;
		}
	}
	return ret;
}

function gGetSpeed() {
	if (g.score > 4500)
		return 0;
	if (g.score > 4000)
		return 1;
	if (g.score > 3500)
		return 2;
	if (g.score > 3000)
		return 3;
	if (g.score > 2500)
		return 4;
	if (g.score > 2000)
		return 6;
	if (g.score > 1500)
		return 12;
	if (g.score > 1000)
		return 18;
	if (g.score > 500)
		return 24;
	return 36;
}

var gOneBlock = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y) {
		enchant.Sprite.call(this, 16, 16);
		this.image = g.assets['map2.gif'];
		this.x = x * 16;
		this.y = y * 16;
		this.frame = gMap[this.y / 16][this.x / 16];
		g.rootScene.addChild(this);
	},
	update: function() {
		this.frame = gMap[this.y / 16][this.x / 16];
	}
});

var gTitle = enchant.Class.create(enchant.Sprite, {
	initialize: function() {
		enchant.Sprite.call(this, 236, 39);
		// image
		this.image = g.assets['start.png'];
		this.x = 0;
		this.y = 100;
		// text
		this.text = new Label('TOUCH DISPLAY');
		this.text.x = 45;
		this.text.y = 200;
		this.text.width = 100;
		this.text.color = '#ffffff';
		this.text.backgroundColor = '#000000';
	},
	print_image: function() {
		g.rootScene.addChild(this);
	},
	print_text: function() {
		g.rootScene.addChild(this.text);
	},
	remove: function() {
		g.rootScene.removeChild(this.text);
		g.rootScene.removeChild(this);
		// delete this.text;
		// delete this;
	}
});

var gGameOver = enchant.Class.create(enchant.Sprite, {
	initialize: function() {
		enchant.Sprite.call(this, 189, 97);
		// image
		this.image = g.assets['gameover.png'];
		this.x = 0;
		this.y = 100;
		// text
		this.text = new Label('TOUCH DISPLAY');
		this.text.x = 45;
		this.text.y = 200;
		this.text.width = 100;
		this.text.color = '#ffffff';
		this.text.backgroundColor = '#000000';
	},
	print_image: function() {
		g.rootScene.addChild(this);
	},
	print_text: function() {
		g.rootScene.addChild(this.text);
	},
	remove: function() {
		g.rootScene.removeChild(this.text);
		g.rootScene.removeChild(this);
		// delete this.text;
		// delete this;
	}
});

function init() {
	g.score     = 0;
	g.backleft  = 0;
	g.backright = 0;
	g.backup    = 0;
	
	g.blocktype = -1;
	g.blockmode = 0;
	g.blockposx = 0;
	g.blockposy = 0;
	
	for (var j=0; j < 22; j++) {
		for (var i=0; i < 12; i++) {
			if (gMap[j][i] > 1)
				gMap[j][i] = 0;
		}
	}
}

window.onload = function() {
	var jail = null;
	g = new Game(192, 352);
	g.fps = 24;
	g.preload('map2.gif', 'start.png', 'gameover.png');
	g.onload = function() {
		var time_now = 0, time_max = 36;
		var allblock = new Array(22 * 12);
		for (var i=0, y=0; y < 22; y++) {
			for (var x=0; x < 12; x++) {
				allblock[i] = new gOneBlock(x, y);
				i += 1;
			}
		}
		g.rootScene.backgroundColor = 'rgb(0, 0, 0)';
		g.score = 0;
		var scoreLabel = new ScoreLabel(16, 0);
		//g.rootScene.addChild(scoreLabel);
		
		g.backleft  = 0;
		g.backright = 0;
		g.backup    = 0;
		
		g.blocktype = -1;
		g.blockmode = 0;
		g.blockposx = 0;
		g.blockposy = 0;
		
		var title = new gTitle();
		var gameover = new gGameOver();
		
		g.touch = 0;
		g.src = "";
		var game_flag = 0;
		g.rootScene.addEventListener('touchstart', function(e) {
			g.touch = 1;
		});
		g.rootScene.addEventListener('enterframe', function() {
			switch (game_flag) {
				case -1: // game over
					delete jail;
					jail = null;
					time_now = 0;
					 time_max = 36;
					gameover.print_image();
					game_flag = -2;
					break;
				case -2: // print text for gameover
					time_now++;
					if (time_now > time_max) {
						gameover.print_text();
						game_flag = -3;
					}
					break;
				case -3: // waiting for input in gameover
					if (g.touch == 1) {
						g.touch = 0;
						gameover.remove();
						init();
						for (var i=0; i < allblock.length; i++)
							allblock[i].update();
						g.score = 0;
						game_flag = 0;
					}
					break;
				case 0: // print title
					jail = new jsJail(null);
					g.rootScene.removeChild(scoreLabel);
					delete scoreLabel;
					title.print_image();
					title.print_text();
					game_flag = 1;
					break;
				case 1: // waiting for input in title
					if (g.touch == 1) {
						g.touch = 0;
						title.remove();
						game_flag = 2;
						scoreLabel = new ScoreLabel(16, 0);
						g.rootScene.addChild(scoreLabel);
						// console.log(localStorage.src);
						if (localStorage.src !== undefined) {
							g.src = localStorage.src;
						}
					}
					break;
				case 2: { // playing game
					// map data
					jail.writelog("gMap", gMap);
					// block data
					jail.writelog("gBlocks", gBlocks);
					jail.writelog("bType", g.blocktype);
					jail.writelog("bMode", g.blockmode);
					jail.writelog("bPosX", g.blockposx);
					jail.writelog("bPosY", g.blockposy);
					// key data
					jail.writelog("kLeft",  0);
					jail.writelog("kRight", 0);
					jail.writelog("kUp",    0);
					jail.writelog("kDown",  0);
					if (jail.eval(g.src))
						game_flag = -1;
					time_now += 1;
					if (time_now > time_max) {
						time_now = 0;
						if (gRedBlockCheck() == 0) {
							g.blockposx = 4;
							g.blockposy = 0;
							g.blockmode = 0;
							g.blocktype = Math.floor(Math.random() * 7);
							for (var y=0; y < 4; y++) {
								for (var x=0; x < 4; x++) {
									if (gMap[y][x+4] != 0) {
										if (gBlocks[g.blocktype][g.blockmode][y][x]) {
											// GAMEOVER
											game_flag = -1;
											gMap[y][x+4] = 4;
										}
									} else {
										if (gBlocks[g.blocktype][g.blockmode][y][x])
											gMap[y][x+4] = 2;
									}
								}
							}
						} else {
							if (gBlockMove('down') == 1) {
								if (gLineCheck())
									time_max = gGetSpeed();
								time_now = time_max - ((time_max > 6) ? 6 : time_max);
							}
						}
					} else {
						if (g.input.down || jail.log["kDown"] == 1) {
							var downflag = gBlockMove('down');
							if (downflag == 1) {
								if (gLineCheck())
									time_max = gGetSpeed();
								time_now = time_max - ((time_max > 6) ? 6 : time_max);
							}
							if (downflag == 0) {
								g.score += 2;
							}
						}
					}
					if (jail.log["kLeft"] == 1) {
						gBlockMove('left');
					} else {
						if (g.input.left) {
							if (g.backleft == 0 || g.backleft > 6)
								gBlockMove('left');
							g.backleft++;
							if (g.backleft > 96)
								g.backleft = 0;
						} else {
							g.backleft = 0;
						}
					}
					if (jail.log["kRight"] == 1) {
						gBlockMove('right');
					} else {
						if (g.input.right) {
							if (g.backright == 0 || g.backright > 6)
								gBlockMove('right');
							g.backright++;
							if (g.backright > 96)
								g.backright = 0;
						} else {
							g.backright = 0;
						}
					}
					if (jail.log["kUp"] == 1) {
						gBlockMove('up');
					} else {
						if (g.input.up) {
							if (g.backup == 0 || g.backup > 6)
								gBlockMove('up');
							g.backup++;
							if (g.backup > 96)
								g.backup = 0;
						} else {
							g.backup = 0;
						}
					}
					for (var i=0; i < allblock.length; i++)
						allblock[i].update();
						
					scoreLabel.score = g.score;
					break;
				}
			}
		});
	};
	g.start();
}

