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
				data : '[2014.9.4]'
			},

			{
				type : 'link',
				data : {
					info : '源地址：',
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
				data : 'function readJSONSync(filename) {\
						return JSON.parse(fs.readFileSync(filename, "utf8"));\
					}'
			},

			{
				type : 'base',
				data : '为了保证我们的应用的性能和响应性，我们需要使所有和IO相关的操作异步执行。实现这个的最简单方法是通过回调函数。但是，一个简单的回调函数实现可能造成很多错误的：'
			},

			{
				type : 'code',
				data : 'function readJSON(filename, callback){\
							fs.readFile(filename, "utf8", function (err, res){\
							if (err) return callback(err);\
								callback(null, JSON.parse(res));\
							});\
							}'
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
			},

			{
				type : 'code',
				data : 'function readJSON(filename, callback){\
				      	fs.readFile(filename, "utf8", function (err, res){\
				        if (err) return callback(err);\
				        try {\
				          res = JSON.parse(res);\
				        } catch (ex) {\
				          return callback(ex);\
				        }\
				        callback(null, res);\
				      });\
		          }'
			},

			{
				type : 'base',
				data : '尽管已经有了这些乱七八糟的错误处理代码，我们依然无法避免因为额外的callback参数所造成的错误。Promises可以帮助你自然的处理错误，并且编写不再需要callback参数的清晰的代码。'
			},

			{
				type : 'smallTitle',
				data : '什么是一个promise？'
			},

			{
				type : 'base',
				data : 'Promises的核心思想是：一个promise代表一个异步操作的结果。一个promise有三个不同的状态：'
			},

			{
				type : 'list',
				data : [
					'pending - 一个promise的初始状态',
					'fulfilled - promise的一个状态,表示成功的操作',
					'rejected - promise的一个状态,表示失败的操作'
				]
			},

			{
				type : 'base',
				data : '如果一个promise的状态是fulfilled或rejected,则它是不变的(它的状态不会再改变)。'
			},

			{
				type : 'smallTitle',
				data : '构建一个promise'
			},

			{
				type : 'base',
				data : '如果所有的API都返回的是promise对象，那么你将不会有机会去手动构建一个promise。'+
						'这意味着，我们需要一个方法去修改现有的APIs。例如：'
			},

			{
				type : 'code',
				data : 'function readFile(filename, enc){\
						  return new Promise(function (fulfill, reject){\
						    fs.readFile(filename, enc, function (err, res){\
						      if (err) reject(err);\
						      else fulfill(res);\
						    });\
						  });\
						}'
			},

			{
				type : 'base',
				data : '我们通过实例化Promise构造函数来构建一个promise。我们给构造函数一个工厂方法来执行真正的任务。'+
						'这个方法有两个参数来进行调用。第一个参数是成功执行promise,第二个参数是失败执行promise。'+
						'当操作执行完成时，我们调用相应的方法。'
			},

			{
				type : 'smallTitle',
				data : '等待一个promise'
			},

			{
				type : 'base',
				data : '为了使用一个promise,我们需要有某种方法可以等待它被执行或者拒绝。'+
						'实现这种方法使用的是promise.done(如果你试图执行本文的实例，请先阅读一下本节最后的提醒)。'
			},

			{
				type : 'base',
				data : '如果理解了promise，使用promises重写我们最开始的readJSON方法是很简单的。'
			},

			{
				type : 'code',
				data : 'function readJSON(filename){\
						  return new Promise(function (fulfill, reject){\
						    readFile(filename, "utf8").done(function (res){\
						      try {\
						        fulfill(JSON.parse(res));\
						      } catch (ex) {\
						        reject(ex);\
						      }\
						    }, reject);\
						  });\
						}'
			},

			{
				type : 'base',
				data : '[未完待续...]'
			}

		]
	};

	return allData;
});