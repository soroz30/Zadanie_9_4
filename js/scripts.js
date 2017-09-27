function drawTree(stars) {
	for (var i = 1; i <= stars; i++) {
		var star = ' '.repeat(stars - i);
		for (var j = 1; j <= i; j++) {
			star += '* ';
		}
		console.log(star);
	}
}

drawTree(3);