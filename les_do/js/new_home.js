;
(function() {

	var artTemplate = window.template;

	var LESDO = {

		// 答题的序号
		topicIndex: 1,

		// 最后的得分
		lastScore: 0,

		// 判断是否点击过试题答案
		isClickAnswer: false,

		// 动画事件
		animateTime: 300,

		artTemplate: artTemplate,

		// 结果的数据
		resultData: {},

		// 微信朋友圈标题
		weixinTitle: '',

		getClientHeight: function() {
			return window.innerHeight || window.screen.availHeight;
		}
	};

	LESDO.devices = (function() {
		var ua = navigator.userAgent,

			iOS,
			IEMobile,
			IE10Plus,
			SafariMobile,
			Android,

			UCBrowser,
			QQBrowser,

			GioneeE7, // 金立手机 E7

			M355, // 魅族3手机

			isNewWeixin;


		// iPhone: Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3
		// iPad:   Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3
		// iPod:   Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A93 Safari/419.3
		iOS = /i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS /i.exec(ua);
		SafariMobile = /Version\/(\d+\.\d+) Mobile/i.exec(ua);

		MobileChrome = /CriOS\/(\d+)\.*/.exec(ua);

		// Windows Phone 8 UA String
		// "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; ARM; Touch; IEMobile/10.0; <Manufacturer>; <Device> [;<Operator>])"
		// "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)"
		IEMobile = /IEMobile\/(1\d)/i.exec(ua);
		IE10Plus = /IE (1\d)/.exec(ua);
		IE11 = /rv\:11/.exec(ua);

		Android = /Android/i.exec(ua);

		UCBrowser = /UCBrowser/i.exec(ua);
		QQBrowser = /QQBrowser/i.exec(ua);

		GioneeE7 = /GIONEE-E7/i.exec(ua);

		M355 = /M355/i.exec(ua);

		isNewWeixin = /micromessenger\/6\.1/i.test(window.navigator.userAgent);


		return {
			"iOS": iOS,
			"iOSVersion": SafariMobile && parseInt(SafariMobile[1], 10),
			"IEMobile": IEMobile,
			"IE10Plus": IE10Plus,
			"SafariMobile": iOS && !UCBrowser && !QQBrowser && SafariMobile,
			"MobileChrome": MobileChrome,
			"Android": Android,
			"UCBrowser": UCBrowser,
			"QQBrowser": QQBrowser,
			"GioneeE7": GioneeE7,
			"M355": M355,
			"isNewWeixin": isNewWeixin
		};
	})();


	window.LESDO = LESDO;

})();

;
(function() {

	LESDO.data = {

		// 题目数据
		topics: [

			{
				index: 1,

				question: '你的性别是？',

				answers: [
					'雌',
					'雄',
					'安能辨我是雌雄！'
				],

				img: 'image/question_01.png',

				scores: [0, 0, 0]
			},

			{
				index: 2,

				question: '当周围的姐妹都结婚了，你的感觉是？',

				answers: [
					'太可怕了，我要变剩女了',
					'关我什么事',
					'哈哈哈，你们这帮黄脸婆'
				],

				scores: [0, 3, 5]
			},

			{
				index: 3,

				question: '镜子中浮现出了动人的倩影~你的反应是？',

				answers: [
					'老娘今天太靓了！',
					'好害羞，不敢看',
					'哎卧槽这谁'
				],

				scores: [3, 5, 0]
			},

			{
				index: 4,

				question: '冰岛女总理娶媳妇儿了！你怎么看？',

				answers: [
					'女的娶媳妇？没听错吧',
					'百合大法好！',
					'这是什么鬼...'
				],

				img: 'image/question_02.jpg',

				scores: [3, 5, 0]
			},

			{
				index: 5,

				question: '你希望如何安度晚年？',

				answers: [
					'面朝大海，春暖花开',
					'儿孙满堂，天伦之乐',
					'只想做个安静的美男子'
				],

				scores: [3, 0, 5]
			},

			{
				index: 6,

				question: '同学聚会之后，当年的校花同桌突然发来微信，约吗？',

				answers: [
					'不约，阿姨我们不约',
					'惊恐，发错了吧',
					'爱过！'
				],

				scores: [3, 0, 5]
			},

			{
				index: 7,

				question: '一觉醒来，突然发现变成了男生的身体？！',

				answers: [
					'太爽了，先撸一发试试',
					'妈妈！不要！',
					'啊，赶紧照镜子看看有木有变丑'
				],

				scores: [5, 0, 3]
			},

			{
				index: 8,

				question: '哪种风格是你最爱？',

				answers: [
					'蕾丝公主风',
					'极简气质范',
					'夜店女王范'
				],

				scores: [3, 5, 0]
			},

			{
				index: 9,

				question: '女厕所里居然有个性别不明的假小子！她会对你说...',

				answers: [
					'姐们儿，借个火',
					'走错了！sorry！',
					'你丫看什么看'
				],

				scores: [5, 0, 3]
			},

			{
				index: 10,

				question: '你觉得以下哪个算是女的？',

				answers: [
					'金刚芭比版哪吒（图）',
					'大胡子Diva歌星（图）',
					'李玉刚女照（图）'
				],

				scores: [3, 3, 5]
			},

			{
				index: 11,

				question: '如果给你一个极品GAY蜜，你会选谁？',

				answers: [
					'口耐滴青峰~',
					'知识渊博的康永哥',
					'啥是GAY蜜？可以吃么'
				],

				img: '',

				scores: [3, 5, 0]
			},

			{
				index: 12,

				question: '备胎们纷纷向你求婚了！选谁？',

				answers: [
					'丑丑的暖男',
					'性无能的高富帅',
					'穿着增高鞋的小四'
				],

				scores: [5, 3, 3]
			},

			{
				index: 13,

				question: 'XX地图中发出了志玲姐姐嗲嗲的声音~',

				answers: [
					'听得我腿软…',
					'绿茶婊滚粗',
					'新技能get√'
				],

				scores: [5, 0, 3]
			},

			{
				index: 14,

				question: '武沟娘传奇变成了大头娃娃，你觉得：',

				answers: [
					'我只关心撕逼剧情',
					'换台看小鲜肉',
					'求原版种子，好人一生平安'
				],

				img: 'image/question_03.jpg',

				scores: [0, 3, 5]
			},

			{
				index: 15,

				question: '周董结婚了！你喜欢昆凌么？',

				answers: [
					'他开心就好',
					'不关心八卦',
					'杰伦都结婚了，好忧伤。'
				],

				img: 'image/question_04.png',

				scores: [0, 5, 3]
			},

			{
				index: 16,

				question: '过年回家亲戚问：结婚了么生孩子了么挣多少钱？你机智的回答：',

				answers: [
					'没有没有两千多~',
					'老伴呢孙子呢退休金够么',
					'快了别急你们聊我先走了Orz'
				],

				scores: [3, 5, 3]
			},

			{
				index: 17,

				question: '如果测出来你是同性恋？',

				answers: [
					'说得好有道理我竟无言以对😭',
					'生无可恋，宁死不屈💢',
					'洗心革面，重新做人😢'
				],

				scores: [5, 3, 3]
			}
		],


		// 结果数据
		result: {
			a: {
				title: '【结果A：异性恋】',

				name: '我们不歧视异性恋',

				cnt: '恭喜，你可以正大光明的追求喜欢的异性，得到社会的认可与祝福。如果你身边有同/双的小伙伴，请一定理解并帮助她们。最难是真爱，别让爱情成为异性恋的特权。马上帮助你的拉拉朋友：最具人气拉拉社交APP LESDO 创造拉拉新生活！',

				share: '推荐LESDO-APP给朋友'
			},

			b: {
				title: '【结果B：双性恋】',

				name: '男女通吃 大爱无疆',

				cnt: '恭喜，魅力满点的你，不必在意性别的束缚，总有桃花在身边。不一样的爱人，一样的真爱！想开启更广阔的恋爱世界？最具人气拉拉社交APP LESDO, 你的她，在这里~',

				share: '现在开始LESDO-APP'
			},

			c: {
				title: '【结果C：同性恋】',

				name: '勇敢去爱  坚持自我',

				cnt: '虽然爱情对少数派而言有点艰难，俗话说天将降大任与世人也，必苦其心志。化压力为动力，勇敢的活出自己吧！LESDO陪你一起，创造拉拉新生活~',

				share: '一起LESDO-APP'
			},

			d: {
				title: '【结果D：任性帅男】',

				name: '爷们分享朋友圈  然后低调离开',

				cnt: '都说了男生勿点，你偏要点，是想让我夸你帅呢还是表扬你任性？这里是女人的秘密花园，快点分享给你身边的女朋友们吧！',

				share: ''
			}
		}
	};


	LESDO.templates = {

		question: '\
			<span>Q<%=data.index%>.</span><p><%=data.question%></p>\
		',

		askBg: '\
			<%if(data.index<10){%>\
				<div class="bg bg_0<%=data.index%>">\
					<div class="logo"></div>\
				</div>\
			<%}else{%>\
				<div class="bg bg_<%=data.index%>">\
					<div class="logo"></div>\
				</div>\
			<%}%>\
		',

		ansewer: '\
			<ul>\
				<li data-score="<%=data.scores[0]%>"><a href="javascript:;"><span>A.<%=data.answers[0]%></span></a><i></i></li>\
				<li data-score="<%=data.scores[1]%>"><a href="javascript:;"><span>B.<%=data.answers[1]%></span></a><i></i></li>\
				<li data-score="<%=data.scores[2]%>"><a href="javascript:;"><span>C.<%=data.answers[2]%></span></a><i></i></li>\
			</ul>\
			',

		result: '\
			<div class="icon"><span><%=data.title%></span></div>\
			<div class="text"><p><%=data.name%></p><%=data.cnt%></div>\
			<div class="btn"><a href="http://www.lesdo.cn/promotion/download?id=100011"></a></div>\
			'
	};

})();


;
(function() {

	var $body = $('body'),
		$guide = $('.guide'),
		$ask = $('.ask'),
		$shareMasking = $('.share-masking'),
		$askContainer = $('.ask .container'),
		$result = $('.result'),
		$resultContent = $result.find('.content'),
		$question = $('.ask .question'),
		$answer = $('.ask .answer'),
		clientHeight = LESDO.getClientHeight(),
		template = window.template;

	var questionRender = LESDO.artTemplate.compile(LESDO.templates.question),
		answerRender = LESDO.artTemplate.compile(LESDO.templates.ansewer),
		askBgRender = LESDO.artTemplate.compile(LESDO.templates.askBg),
		resultRender = LESDO.artTemplate.compile(LESDO.templates.result);

	template.helper('getTopicIndex', function(LESDO) {
		return LESDO.topicIndex;
	});

	$(function() {
		init();
	});


	function init() {
		setParameret();

		bindEvents();

		// test

		// hideGuidePage();
	}


	function bindEvents() {
		// $('.guide .container .btn').on('swipeUp', hideGuidePage);
		$('.guide .container .btn').on('touchstart', hideGuidePage);
	}


	/*** 功能函数 ***/

	// 设置参数
	function setParameret() {

		$body.height(clientHeight);
		$guide.height(clientHeight);
		$shareMasking.height(clientHeight);
		$ask.height(clientHeight);
		$result.height(clientHeight);

	}

	// 隐藏引导页
	function hideGuidePage(e) {
		e.preventDefault();
		$guide.animate({
			top: -clientHeight + 'px'
		}, 600);

		var timer = setTimeout(function() {
			renderTopic(LESDO.data.topics[LESDO.topicIndex - 1]);
			$ask.show();
			$ask.css('display', 'block');
		}, 600);
	}


	// 渲染答题
	function renderTopic(data) {
		LESDO.isClickAnswer = false;
		$question.html(questionRender({
			data: data
		}));
		$answer.html(answerRender({
			data: data
		}));

		$askContainer.find('.bg').remove();
		$askContainer.append(askBgRender({
			data: data
		}));

		$answer.show();

		var $answerLiOne = $answer.find('li').eq(0),
			$answerLiTwo = $answer.find('li').eq(1),
			$answerLiThree = $answer.find('li').eq(2);

		$answerLiOne.hide();
		$answerLiTwo.hide();
		$answerLiThree.hide();

		LESDO.topicIndex++;

		$answerLiOne.show();
		$answerLiOne.addClass('animated fadeInRightBig');
		var timer = setTimeout(function() {
			timer = null;
			$answerLiTwo.show();
			$answerLiTwo.addClass('animated fadeInRightBig');
			var timerTwo = setTimeout(function() {
				timerTwo = null;
				$answerLiThree.show();
				$answerLiThree.addClass('animated fadeInRightBig');

			}, LESDO.animateTime - 200);

		}, LESDO.animateTime - 100);

		// 点击试题事件
		$answer.find('li').on('click', function(e) {
			// 防止用户可能点击两次答案
			if (LESDO.isClickAnswer) {
				return;
			}

			LESDO.isClickAnswer = true;
			var $currentTarget = $(e.currentTarget),
				nowScore = parseInt($currentTarget.attr('data-score'), 10);

			LESDO.lastScore += nowScore;
			$currentTarget.addClass('on');

			if (LESDO.topicIndex === 2 && $currentTarget.index() === 1) {
				showShareMasking();
				setTimeout($.proxy(function() {
					renderResultPage();
				}, this), 20000);
				return;
			}

			if (LESDO.topicIndex === 18) {
				showShareMasking();
				setTimeout($.proxy(function() {
					renderResultPage();
				}, this), 20000);

				return;
			}
			showNextTopic();
		});


	}


	// 显示下一题目
	function showNextTopic() {
		var timer = setTimeout(function() {
			timer = null;
			$answer.hide();

			if (LESDO.topicIndex === 18) {
				// showShareMasking();
				// renderResultPage();
				// $ask.hide();
				// $result.show();
			} else {
				if (LESDO.topicIndex === 7) {
					$ask.addClass('new-ask-bg');
				} else if (LESDO.topicIndex === 13) {
					$ask.addClass('last-ask-bg');
				}
				renderTopic(LESDO.data.topics[LESDO.topicIndex - 1]);
			}

		}, 500);
	}

	// 显示分享图层
	function showShareMasking() {
		$shareMasking.show();
		calculateScore();
	}

	// 渲染结果页
	function renderResultPage() {


		$guide.hide();
		$ask.hide();
		$shareMasking.hide();
		$result.show();

		$resultContent.html(resultRender({
			data: LESDO.resultData
		}));

		$resultContent.find('.btn').addClass('animated fadeInDownBig');

		var timer = setTimeout(function() {
			timer = null;
			$resultContent.find('.btn').removeClass('animated fadeInDownBig');
			$resultContent.find('.btn').addClass('animated rubberBand');
		}, 1000);
	}

	// 计算分数,和设置数据
	function calculateScore() {
		var lastScore = LESDO.lastScore;

		if (lastScore === 0) {
			LESDO.resultData = LESDO.data.result.d;
			LESDO.weixinTitle = '神准！我是100%纯爷们！不信来测！';
		} else if (lastScore > 0 && lastScore <= 10) {
			LESDO.resultData = LESDO.data.result.a;
			LESDO.weixinTitle = '神准！我是99%异性恋！不信来测！';
		} else if (lastScore > 10 && lastScore <= 50) {
			LESDO.resultData = LESDO.data.result.b;
			LESDO.weixinTitle = '神准！我靠我竟然是同性恋！不信来测！';
		} else if (lastScore > 50 && lastScore <= 80) {
			LESDO.resultData = LESDO.data.result.c;
			LESDO.weixinTitle = '神准！我勒个去我竟然是双性恋！不信来测！';
		}


	}

	LESDO.renderResultPage = renderResultPage;

})();

/*;(function() {

	var baseJoinNum = 0;

	var wxData = {
		"appId": "", // 服务号可以填写appId
		"imgUrl": '',
		"link": window.location.href,
		"desc": '神准！我勒个去我竟然是双性恋！不信来测！',
		"title": 'LESDO'
	};

	var wxCallbacks = {
		favorite: false,

		async: true,

		ready: function() {
			this.dataLoaded({
				desc: window.LESDO.weixinTitle
			});
		},

		cancel: function(resp) {
			window.LESDO.renderResultPage();
		},

		fail: function(resp) {
			window.LESDO.renderResultPage();
		},

		confirm: function(resp) {
			window.LESDO.renderResultPage();
		},

		all: function(resp, shareTo) {

		}
	};

	if (LESDO.devices.iOS && LESDO.devices.isNewWeixin) {
		// console.log('');
	}else{
		// WeixinApi.share(wxData, wxCallbacks);
	}
	
	function getNowJoinNum() {
		setBaseJoinNum();
		baseJoinNum = baseJoinNum + getRandom(1, 3) * 7;

		return baseJoinNum;

		function getRandom(star, end) {
			var baseNum = Math.random() * end,
				result = Math.floor(baseNum);

			if (result < star) {
				result += star;
			}

			return result;
		}
	}

	function setBaseJoinNum() {
		var initTime = 1418219776123 + 24 * 60 * 60 * 1000,
			nowDateTime = (new Date()).getTime(),
			oneDayNum = 1 * 24 * 60 * 60 * 1000,
			passDay = Math.floor((nowDateTime - initTime) / oneDayNum) + 1,
			passMinute = Math.floor((nowDateTime - initTime) / (1000 * 60)) + 1,
			resultNum = 0;

		resultNum = passMinute * 20;

		baseJoinNum = resultNum;

		function getRandom(star, end) {
			var baseNum = Math.random() * end,
				result = Math.floor(baseNum);

			if (result < star) {
				result += star;
			}

			return result;
		}
	}

	setBaseJoinNum();
})();*/