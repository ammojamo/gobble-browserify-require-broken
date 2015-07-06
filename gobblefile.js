var gobble = require( 'gobble' );

var js = gobble('js').transform('browserify', {
	entries: 'main.js',
	dest: 'bundle.js',
	debug: false
});

var html = gobble('html');

module.exports = gobble([js, html]);
