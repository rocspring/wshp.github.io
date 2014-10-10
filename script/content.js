define( [ 'artTemplate', 'templates', 'data', 'JQuery', 'snippet' ], function ( artTemplate, templates, data, $ ) {

	var el = document.querySelector('.content-canvas') || document.body,
		nowDate = window.CONFIG.date,
		nowData = window.CONFIG.pageData || [],
		contentTemplate = templates.content,

		titleRender = artTemplate.compile(contentTemplate.title),
		dateRender = artTemplate.compile(contentTemplate.date),
		smallTitleRender = artTemplate.compile(contentTemplate.smallTitle),
		baseRender = artTemplate.compile(contentTemplate.base),
		listRender = artTemplate.compile(contentTemplate.list),
		codeRender = artTemplate.compile(contentTemplate.code),
		linkRender = artTemplate.compile(contentTemplate.link),
		linksRender = artTemplate.compile(contentTemplate.links),
		imageRender = artTemplate.compile(contentTemplate.image),
		tableRender = artTemplate.compile(contentTemplate.table);




	function init () {
		dataRendering ( );
		codeLight();
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
				case 'links':
					tempDom = linksRender(nowData[i]);
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
				case 'image':
					tempDom = imageRender(nowData[i]);
					break;
				case 'table':
					tempDom = tableRender(nowData[i]);
					break;
			}

			resultDom = resultDom + tempDom;
		}
		
		el.innerHTML = resultDom;
	}

	//代码的高亮
	function codeLight () {
		// SyntaxHighlighter.all();
		$("pre.jsCode").snippet( "javascript", {
												style : "berries-dark",
												transparent : false,
												showNum : false,
												menu : false
											} );
	}

	var Content = {
		init : init
	};

	return Content;
});