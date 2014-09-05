require.config({

	shim : {

	},

	paths : {
		artTemplate : 'art_template',
		templates : 'templates',
		data : 'data',
		index : 'index',
		content : 'content'
	}
});



require(['artTemplate', 'templates', 'data', 'index', 'content'],function ( artTemplate, templates, data, indexView , contentView ) {
	if ( window.CONFIG.isIndex ) {
		indexView.init();
	}else if ( window.CONFIG.isContent ){
		contentView.init();
	}
	
});