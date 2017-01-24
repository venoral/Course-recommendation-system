let _ = require("underscore");
//视口高度
let viewHeight = document.documentElement.clientHeight;
let count = parseInt(viewHeight / 100);

//文档高度
let documentHeight = document.defaultView.getComputedStyle(document.body, null).height;

let height = 100; //每个区块高度固定为100px
let preClickTime; //记录点击之前的时间
const gazeInfo = {
	detailArr: [],
	costTime: 0
}; //与后端通信的数据

let throttled = _.throttle((data, elapsedTime) => {
	if (!data) {
		preClickTime = elapsedTime;
	} else {
		//用户点击后
		gazeInfo.preId = gazeInfo.curId;
		getGazecurId(data);
		if (gazeInfo.preId && gazeInfo.preId !== gazeInfo.curId) {
			if (_.indexOf(gazeInfo.detailArr, gazeInfo.preId) >= 0) {
				return;
			}
			gazeInfo.costTime = elapsedTime - 2000 - preClickTime - gazeInfo.costTime;
			//console.log(gazeInfo);
			let body = [];
			_.mapObject(gazeInfo, function(val, key) {
				body.push(key + '=' + val);
			});
			body = body.join('&');
			fetch('http://localhost:8080/webGazer/servlet/CourseServlet?action=getdetail', {
				method: 'POST',
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: body
			}).then((res) => {
				return res.json();
			}).then((data) => {
				if (data.msg) {
					console.log(data.msg);
				} else {
					gazeInfo.detailArr.push(data.id);
					document.querySelector('.item-course-' + data.id + ' p').innerHTML = data.detailInfo;
				}
			}).catch((e) => {
				console.log(e);
			});
		}
	}
}, 2000);
let getGazecurId = (data) => {
	let y = data.y;
	//如果滚动页面了
	if (document.body.scrollTop > 0) {
		y = y + document.body.scrollTop;
	}
	gazeInfo.curId = parseInt(y / height) + 1;
};
let gazeInit = () => {
	webgazer.setRegression('ridge') /* currently must set regression and tracker */
		.setTracker('clmtrackr')
		.setGazeListener(throttled)
		.begin()
		.showPredictionPoints(true); /* shows a square every 100 milliseconds where current prediction is */
	let width = 320;
	let height = 240;
	let topDist = "0px";
	let leftDist = "0px";

	let setup = () => {
		let video = document.getElementById('webgazerVideoFeed');
		video.style.display = 'block';
		video.style.position = 'fixed';
		video.style.top = topDist;
		video.style.left = leftDist;
		video.width = width;
		video.height = height;
		video.style.margin = '0px';

		webgazer.params.imgWidth = width;
		webgazer.params.imgHeight = height;

		var overlay = document.createElement('canvas');
		overlay.id = 'overlay';
		overlay.style.position = 'fixed';
		overlay.width = width;
		overlay.height = height;
		overlay.style.top = topDist;
		overlay.style.left = leftDist;
		overlay.style.margin = '0px';

		document.body.appendChild(overlay);

		let cl = webgazer.getTracker().clm;

		function drawLoop() {
			requestAnimFrame(drawLoop);
			overlay.getContext('2d').clearRect(0, 0, width, height);
			if (cl.getCurrentPosition()) {
				cl.draw(overlay);
			}
		}
		drawLoop();
	}

	function checkIfReady() {
		if (webgazer.isReady()) {
			setup();
		} else {
			setTimeout(checkIfReady, 100);
		}
	}
	setTimeout(checkIfReady, 100);
}

module.exports = {
	gazeInfo: gazeInfo,
	gazeInit: gazeInit
}