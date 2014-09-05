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
							}
							
						]

					}
				]
	} ;


	//内容页的数据
	allData.content = {

		'2014_9_4' : [
			{
				type : 'title',
				data : 'Promises'
			},
			{
				type : 'date',
				data : '2014.9.4'
			},
			{
				type : 'link',
				data : {
					info : '源地址',
					url : 'https://www.promisejs.org/'
				}
			},
			{
				type : 'smallTitle',
				data :'动机'
			},
			{
				type : 'base',
				data : '参考下面的javascript异步函数，它读取一个文件并且按照JSON的规则进行解析。这个函数十分简单易懂，但是你并不愿意在大多数应用中使用它，因为它是阻塞执行的。这意味着，当从硬盘中读取文件的时候(通常是一个缓慢的操作)，无法执行其他的任务。'
			},
			{
				type : 'code',
				data : 'function readJSONSync(filename) {' +
					'return JSON.parse(fs.readFileSync(filename, "utf8"));' +
					'}'
			},
			{
				type : 'base',
				data : '为了保证我们的应用的性能和响应性，我们需要使所有和IO相关的操作异步执行。实现这个的最简单方法是通过回调函数。但是，一个简单的回调函数实现可能是错误的：'
			},
			{
				type : 'code',
				data : 'function readJSON(filename, callback){'+
							'fs.readFile(filename, "utf8", function (err, res){'+
							' if (err) return callback(err);'+
							'callback(null, JSON.parse(res));'+
							' });'+
							'}'
			},
			{
				type : 'list',
				data : [
					'额外的回调函数混淆了我们真正的输入参数和输出值的判断。',
					'它的执行不是依照控制流的原语。',
					'它并不处理JSON.parse抛出的异常错误。'
				]
			},
			{
				type : 'base',
				data : '我们需要处理JSON.parse抛出的异常错误，但是我们也需要注意不去处理回调函数抛出的错误。就这样，我们的代码被错误处理搞得一团糟：'
			}
		]
	};

	return allData;
});