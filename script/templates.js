define(function (argument) {
	
	var templates = {

		//首页目录
		list : '\
		<div class="list">\
			<%for ( var  len = data.length, i = len - 1; i >= 0; i-- ){%>\
				<ul>\
				<span><%= data[i].month%></span>\
				<%for( var dayLen = data[i].list.length, j = dayLen - 1; j >= 0; j-- ){%>\
					<li><span><%=data[i].list[j].day%></span><a href="<%=data[i].list[j].url%>"><%=data[i].list[j].title%></a></li>\
				<%}%>\
			</ul>\
			<%}%>\
			</div>\
		'
	};

	templates.content = {

		//标题
		title : '<h3 class = "title"><%= data%></h3>',

		//时间
		date : '<p class= "paragraph"><%= data%></p>',

		//小标题
		smallTitle : '<h4 class="small-title"><%= data%></h2>',

		//基本的段落
		base : '<p class= "paragraph"><%= data%></p>',

		//列表段落
		list : '<p class= "paragraph">\
		           	<ul>\
		                <%for( var i = 0, len = data.length; i < len; i++ ){%>\
							<li><%= data[i]%></li>\
		                <%}%>\
		            </ul>\
		        </p>',

		//代码段落
		code : '<pre class="jsCode"><code><%= data%></code></pre>',

		//链接段落(以后不再使用)
		link : '<p><span><%= data.info%></span><a href="<%= data.url%>" target="_blank"><%= data.url%></a></p>',

		//多个链接地址
		links : '<p class= "links">\
		           	<ul>\
		                <%for( var i = 0, len = data.length; i < len; i++ ){%>\
							<li><span><%= data[i].info%>&nbsp;&nbsp;&nbsp;&nbsp;</span><a href="<%= data[i].url%>" target="_blank"><%= data[i].url%></a></li>\
		                <%}%>\
		            </ul>\
		        </p>',
      	image : '<div class="image">\
		      		<img src = "<%=data.url%>" alt="<%=data.info%>"></img>\
		      		<p><%=data.info%></p>\
		      	</div>'

	};

	return templates;
});