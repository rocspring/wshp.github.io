//首页的view
define([ 'artTemplate', 'templates', 'data'], function ( artTemplate, templates, data ) {
	
	var el = document.querySelector('.list-canvas') || document.body,
		listTemplate = templates.list,
		listData = data.list,
		listrender = artTemplate.compile(listTemplate);


	function init (){
		dataRendering ( listTemplate, listData );
	}

	//数据的渲染
	function dataRendering ( ){
		var listDom = listrender(listData);
		
		el.innerHTML = listDom;
	}

	var Index = {
		init : init
	};

	return Index;
});