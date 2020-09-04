//##### MAKE ACTIONS WHEN A KEY IS PRESSED #####

var startTime = 0;
var curTime = 0;
var isRunning = false;
var curPhase = 1; // must starts at 1
var timeSplits = [];

document.onkeydown = function(event) {
	keyPressed = (event.keyCode ? event.keyCode : event.which);

	if (importFocus == 0 && isRunning == true && curPhase == timeSplit_value) {

		clearInterval(timeBegin);
		var setTime = getCurTime();
		addPhase(setTime);
		addSolve(); generateScram();
		ispt = 0;
		hideDiv();
		timeSplits = [];
		isRunning = false;
		curPhase++;

		if (keyPressed != 32) {
			timerStatus++;
		}

	} else if (importFocus == 0 && isRunning == true && curPhase < timeSplit_value) {
		curPhase++;
		var setTime = getCurTime();
		addPhase(setTime);
	}
}

document.onkeyup = function(event){
	keyPressed = (event.keyCode ? event.keyCode : event.which);
	var tabOpen = checkTabOpen();

	if (tabOpen && importFocus == 0 && keyPressed == 32 && inspectType_value){
		if (isRunning == false || (isRunning == true && curPhase == timeSplit_value + 1)) {
			curPhase = 1;
			timerStatus++;
		}
		mnt = 0;
		sec = 0;

		if (timerStatus % 3 == 1){

			document.getElementById("mnt").style.display = "none";
			document.getElementById("two_dot").style.display = "none";
			document.getElementById("scnd").style.display = "none";
			document.getElementById("ispt_display").style.display = "inline-block";

			inspectBegin = setInterval(inspector, 1000);

			if (hideAll == true) {
				document.getElementById("tabs").style.visibility = "hidden";
				document.getElementById("scram_div").style.visibility = "hidden";
				document.getElementById("draw_scram_div").style.visibility = "hidden";
				document.getElementById("quick_avg_table").style.visibility = "hidden";
			}
		};
		if (timerStatus % 3 == 2 && curPhase == 1){

			clearInterval(inspectBegin);
			document.getElementById("ispt_display").innerHTML = "15";

			document.getElementById("scnd").style.display = "inline-block";
			document.getElementById("ispt_display").style.display = "none";

			if (hideType_value) {
				document.getElementById("time").style.display = "none";
				document.getElementById("div_hide").style.display = "inline-block";
			};

			isRunning = true;
			startTime = new Date();
			timeBegin = setInterval(timer, 10);
		};
		if (timerStatus % 3 == 0){

		};
	};
	if (tabOpen && importFocus == 0 && keyPressed == 32 && !inspectType_value){
		if (isRunning == false || (isRunning == true && curPhase == timeSplit_value + 1)) {
			curPhase = 1;
			timerStatus++;
		}
		ispt = 0;
		mnt = 0;
		sec = 0;

		if (timerStatus % 2 == 1 && curPhase == 1){

			if (hideType_value) {
				document.getElementById("time").style.display = "none";
				document.getElementById("div_hide").style.display = "inline-block";
			};

			if (hideAll) {
				document.getElementById("tabs").style.visibility = "hidden";
				document.getElementById("scram_div").style.visibility = "hidden";
				document.getElementById("draw_scram_div").style.visibility = "hidden";
				document.getElementById("quick_avg_table").style.visibility = "hidden";
			}

			isRunning = true;
			startTime = new Date();
			timeBegin = setInterval(timer, 10);
		};
		if (timerStatus % 2 == 0){

		};
	};

	if (keyPressed == 188 && event.altKey) {//set pen to ok (key ,)
		setOK(sessions[sesNum - 1].arr.length - 1);
	};
	if (keyPressed == 190 && event.altKey) {//set pen to +2 (key .)
		setP2(sessions[sesNum - 1].arr.length - 1);
	};
	if (keyPressed == 191 && event.altKey) {//set pen to dnf (key /)
		setDNF(sessions[sesNum - 1].arr.length - 1);
	};

	//delete last solve
	if (keyPressed == 186 && event.altKey) {// key ;
		delSolve(sessions[sesNum - 1].arr.length - 1);
	};
	//clear session
	if (keyPressed == 222 && event.altKey) {// key '
		resetSes();
	};
	//add session
	if (keyPressed == 187 && event.altKey) {// key =
		addSes();
	};
	//delete session
	if (keyPressed == 189 && event.altKey) {// key -
		if (confirm("Delete this session?")) { delSes(); }
	};
	//last, next scramble
	if (keyPressed == 219 && event.altKey) {
		scramble = lastScram;
		document.getElementById('scram').innerHTML = scramble;
		drawLastScram();
	};
	if (keyPressed == 221 && event.altKey) {
		generateScram();
	};
	//scram type
	if (keyPressed == 49 && event.altKey) {// key 1
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("111111");
		generateScram();
	};
	if (keyPressed == 50 && event.altKey) {// key 2
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("222");
		generateScram();
	};
	if (keyPressed == 51 && event.altKey) {// key 3
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("333");
		generateScram();
	};
	if (keyPressed == 52 && event.altKey) {// key 4
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("444");
		generateScram();
	};
	if (keyPressed == 53 && event.altKey) {// key 5
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("555");
		generateScram();
	};
	if (keyPressed == 54 && event.altKey) {// key 6
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("666");
		generateScram();
	};
	if (keyPressed == 55 && event.altKey) {// key 7
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("777");
		generateScram();
	};
	if (keyPressed == 56 && event.altKey) {// key 8
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("888");
		generateScram();
	};
	if (keyPressed == 57 && event.altKey) {// key 9
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("999");
		generateScram();
	};
	if (keyPressed == 48 && event.altKey) {// key 0
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("101010");
		generateScram();
	};
	if (keyPressed == 83 && event.altKey) {// key s
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("skewb");
		generateScram();
	};
	if (keyPressed == 81 && event.altKey) {// key q
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("sq1");
		generateScram();
	};
	if (keyPressed == 80 && event.altKey) {// key p
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("pyram");
		generateScram();
	};
	if (keyPressed == 77 && event.altKey) {// key m
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("minx");
		generateScram();
	};
	if (keyPressed == 67 && event.altKey) {// key c
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("clock");
		generateScram();
	};
	if (importFocus == 2) {
	};
};

//### TOUCH TIMER ###
var timerEnable = true;
var isInspecting = false;
var tabOpen;
var touchZone;
var touchId;
var touchClass;
var touchMoved = false;

document.ontouchstart = function(event) {

	if (importFocus == 0 && isRunning && curPhase == timeSplit_value) {

		clearInterval(timeBegin);
		var setTime = getCurTime();
		addPhase(setTime);
		addSolve(); generateScram();
		ispt = 0;
		hideDiv();
		timeSplits = [];
		isRunning = false;
		curPhase++;

	} else if (importFocus == 0 && isRunning && curPhase < timeSplit_value) {
		curPhase++;
		var setTime = getCurTime();
		addPhase(setTime);
	
	} else if (importFocus == 0 && !isRunning && !isInspecting) {
		tabOpen = checkTabOpen();
		touchZone = event.target.tagName;
		touchId = event.target.id;
		touchClass = event.target.className;

		if (tabOpen && (touchId == "scram_con" || touchId == "scram" || touchId == "time" || touchId == "mnt" || touchId == "two_dot" || touchId == "scnd" || touchId == "ispt_display" || touchId == "div_hide" || touchId == "draw_scram_div" || touchId == "draw_other_wca" || touchId == "222_draw_div" || touchId == "333_draw_div" || touchId == "skb_draw_div" || touchId == "pyram_draw_div" || touchId == "quick_avg_table" || touchZone == "BODY" || touchZone == "HEADER")) {timerEnable = true} else {timerEnable = false};
	}
}

document.ontouchmove = function(event) {
	touchMoved = true;
}

document.ontouchend = function(event){

	if (!touchMoved && timerEnable && importFocus == 0 && inspectType_value){
		if (!isRunning || (isRunning && curPhase == timeSplit_value + 1)) {
			curPhase = 1;
			timerStatus++;
		}
		mnt = 0;
		sec = 0;

		if (timerStatus % 3 == 1){

			document.getElementById("mnt").style.display = "none";
			document.getElementById("two_dot").style.display = "none";
			document.getElementById("scnd").style.display = "none";
			document.getElementById("ispt_display").style.display = "inline-block";

			isInspecting = true;
			inspectBegin = setInterval(inspector, 1000);

			if (hideAll) {
				document.getElementById("tabs").style.visibility = "hidden";
				document.getElementById("scram_div").style.visibility = "hidden";
				document.getElementById("draw_scram_div").style.visibility = "hidden";
				document.getElementById("quick_avg_table").style.visibility = "hidden";
			}
		};
		if (timerStatus % 3 == 2 && curPhase == 1){

			clearInterval(inspectBegin);
			isInspecting = false;
			document.getElementById("ispt_display").innerHTML = "15";

			document.getElementById("scnd").style.display = "inline-block";
			document.getElementById("ispt_display").style.display = "none";

			if (hideType_value) {
				document.getElementById("time").style.display = "none";
				document.getElementById("div_hide").style.display = "inline-block";
			};

			isRunning = true;
			startTime = new Date();
			timeBegin = setInterval(timer, 10);
		};
		if (timerStatus % 3 == 0){

		};
	};
	if (!touchMoved && timerEnable && importFocus == 0 && !inspectType_value){
		if (!isRunning || (isRunning && curPhase == timeSplit_value + 1)) {
			curPhase = 1;
			timerStatus++;
		}
		ispt = 0;
		mnt = 0;
		sec = 0;

		if (timerStatus % 2 == 1 && curPhase == 1){

			if (hideType_value) {
				document.getElementById("time").style.display = "none";
				document.getElementById("div_hide").style.display = "inline-block";
			};

			if (hideAll) {
				document.getElementById("tabs").style.visibility = "hidden";
				document.getElementById("scram_div").style.visibility = "hidden";
				document.getElementById("draw_scram_div").style.visibility = "hidden";
				document.getElementById("quick_avg_table").style.visibility = "hidden";
			}

			isRunning = true;
			startTime = new Date();
			timeBegin = setInterval(timer, 10);
		};
		if (timerStatus % 2 == 0){

		};
	};
};

document.onswipeup = function() {
	if (document.getElementById("timer_div").style.display != "none" || document.getElementById("timer_div").style.display != "") {
		var promptVal = prompt("Enter time:", "0.00");
		if (promptVal != null) {
			importTime(promptVal);
		}
	}
}

function checkTimerEnable(e, t) {
	return (checkDialogOpen() && checkTargetId(e, t));
}
function checkTabOpen() {
	//return (document.getElementById("timer_div").style.display != "none" && document.getElementById("timer_div").style.display != "");
	return document.getElementById("timer_div").style.display == "block";
}
function checkTargetId(e, t) {
	return (e != "loading_div" && e != "loading_img" && e != "buts" && e != "logo" &&
			  e != "option" && e != "scram_td" && e != "scram_con" && e != "scram" &&
			  e != "div_scram_type" && e != "scram_type" && e != "last_scram_btn" &&
			  e != "next_scram_btn" && e != "stat_td" &&e != "statTd_td" && e != "div_ses_choose" &&
			  e != "choose_session" && e != "reset_ses" && e != "add_ses" && e != "del_ses" &&
			  e != "avg_table_div" && e != "avg_table" && e != "sovle_table" && e != "del_table" &&
			  e != "times_container" && e != "draw_scram_dialog" && e != "draw_other_wca" &&
			  e != "222_draw_div" && e != "333_draw_div" && e != "pyram_draw_div" &&
			  e != "skb_draw_div" && t != "solve_dp" && t != "table_cell");
}
//////////

//### MULTI-PHASE FUNCTION ###
function getCurTime() {
	var t = 0;
	if (timeSplits.length == 0) {
		t = mnt * 60 + sec;
	} else {
		var total = totalTime();
		t = (mnt * 60 + sec) - total;
	}
	return t;
}

function totalTime() {
	var total = 0;
	for (var i = 0; i < timeSplits.length; i++) {
		total += timeSplits[i].time;
	}
	return total;
}

function addPhase(setTime) {
	var phase = {
		time: 0,
		strng: ""
	};
	phase.time = setTime;
	var sec = setTime % 60;
	var mnt = Math.floor(setTime / 60);
	if (mnt == 0){
		phase.strng = sec.toFixed(2);
	} else {
		if (sec < 10){
			phase.strng = mnt + ":" + "0" + sec.toFixed(2);
		}
		if (sec >= 10){
			phase.strng = mnt + ":" + sec.toFixed(2);
		}
	}
	timeSplits.push(phase);
}
//////////////////////////