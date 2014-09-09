require.config({

	shim : {
		JQuery : {
			exports: '$'
		}
	},

	paths : {
		JQuery : 'jquery-1.11.1',
		snippet : 'jquery.snippet',
		artTemplate : 'art_template',
		templates : 'templates',
		data : 'data',
		index : 'index',
		content : 'content',
		shCore : 'shCore',
		shBrushJS : 'shBrushJScript'
	}
});



require(['artTemplate', 'templates', 'data', 'index', 'content', 'JQuery'],function ( artTemplate, templates, data, indexView , contentView, $ ) {
	if ( window.CONFIG.isIndex ) {
		indexView.init();
	}else if ( window.CONFIG.isContent ){
		contentView.init();
	}
	
});