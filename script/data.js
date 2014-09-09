define(function () {
	var allData = {
	};

	//目录页的数据
	allData.list ={
		data : [
					//9月的数据
					{
						month : '2014.9',
						list : [
							{
								day : '2014.9.4',
								title : '[翻译]Promises',
								url : '2014_9/2014_9_4.html'
							},

							{
								day : '2014.9.9',
								title : 'javascript的模块化',
								url : '2014_9/2014_9_9.html'
							}
							
						]

					}
				]
	} ;


	//内容页的数据
	allData.content = {
	};

	allData.addData = function ( name, data ){
		if ( typeof name === 'string' && Object.prototype.toString.call(data) === '[object Object]' ) {
			allData.content[name] = data;
		}
	};

	return allData;
});