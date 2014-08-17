suite('Global Tests', function(){
	test('Page has a valid title', function(){
		assert(document.title && document.title.match(/\S/) &&
			document.title.toUpperCase() != 'TODO');
	});

	test('page should contain link to Application page', function(){
		assert($('a[href="/application"]').length);
	});
	test('page should contain link to contact page', function(){
		assert($('a[href="/contact"]').length);
	});
	test('page should contain link to home page', function(){
		assert($('a[href="/"]').length);
	});
});