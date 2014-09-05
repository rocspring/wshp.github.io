define( [ 'artTemplate', 'templates', 'data'], function ( artTemplate, templates, data ) {
	var content = {};

	var el = document.querySelector('.content-canvas'),
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

	var Content = {
		init : init
	};

	return Content;
});