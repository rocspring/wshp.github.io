define( [ 'artTemplate', 'templates', 'data'], function ( artTemplate, templates, data ) {
	var content = {};

	var el = document.querySelector('.content-canvas') || document.body,
		nowDate = window.CONFIG.date;

	data.addData( nowDate, window.CONFIG.pageData );

	var	nowData = window.CONFIG.pageData || data.content[nowDate],
		contentTemplate = templates.content,

		titleRender = artTemplate.compile(contentTemplate.title),
		dateRender = artTemplate.compile(contentTemplate.date),
		smallTitleRender = artTemplate.compile(contentTemplate.smallTitle),
		baseRender = artTemplate.compile(contentTemplate.base),
		listRender = artTemplate.compile(contentTemplate.list),
		codeRender = artTemplate.compile(contentTemplate.code),
		linkRender = artTemplate.compile(contentTemplate.link);




	function init () {
		dataRendering ( );
	}

	//数据的渲染
	function dataRendering () {
		var i = 0,
			len = nowData.length,
			resultDom = '',
			tempDom;

		for( ; i < len; i++ ){

			switch(nowData[i].type){
				case 'title':
					tempDom = titleRender(nowData[i]);
					break;
				case 'date':
					tempDom = dateRender(nowData[i]);
					break;
				case 'link':
					tempDom = linkRender(nowData[i]);
					break;
				case 'smallTitle':
					tempDom = smallTitleRender(nowData[i]);
					break;
				case 'base':
					tempDom = baseRender(nowData[i]);
					break;
				case 'code':
					tempDom = codeRender(nowData[i]);
					break;
				case 'list':
					tempDom = listRender(nowData[i]);
					break;
			}

			resultDom = resultDom + tempDom;
		}
		
		el.innerHTML = resultDom;
	}

	var Content = {
		init : init
	};

	return Content;
});