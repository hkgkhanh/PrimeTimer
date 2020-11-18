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
		hideDiv();
		addSolve(); generateScram();
		ispt = 0;
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

	if (importFocus == 0 && keyPressed == 32 && inspectType_value){
		if (isRunning == false || (isRunning == true && curPhase == timeSplit_value + 1)) {
			curPhase = 1;
			timerStatus++;
		}
		mnt = 0;
		sec = 0;

		if (timerStatus % 3 == 1){

			document.getElementById("import_plhd").style.display = "none";
			document.getElementById("mnt").style.display = "none";
			document.getElementById("two_dot").style.display = "none";
			document.getElementById("scnd").style.display = "none";
			document.getElementById("ispt_display").style.display = "inline-block";

			document.getElementById("search_result").style.display = "none";

			inspectBegin = setInterval(inspector, 1000);

			if (hideAll == true) {
				document.getElementById("buts").style.visibility = "hidden";
				document.getElementById("toggle_statTd").style.visibility = "hidden";
				document.getElementById("stat_td").style.visibility = "hidden";
				document.getElementById("scram_td").style.visibility = "hidden";
				document.getElementById("draw_scram_dialog").style.visibility = "hidden";
			}
		};
		if (timerStatus % 3 == 2 && curPhase == 1){

			clearInterval(inspectBegin);
			document.getElementById("ispt_display").innerHTML = "15";

			document.getElementById("scnd").style.display = "inline-block";
			document.getElementById("ispt_display").style.display = "none";
			document.getElementById("hide_text").style.display = "none";

			if (hideType_value) {
				document.getElementById("mnt").style.display = "none";
				document.getElementById("two_dot").style.display = "none";
				document.getElementById("scnd").style.display = "none";
				document.getElementById("hide_text").style.display = "inline-block";

			} else {
				document.getElementById("mnt").style.display = "inline-block";
				document.getElementById("two_dot").style.display = "inline-block";
				document.getElementById("scnd").style.display = "inline-block";
				document.getElementById("hide_text").style.display = "none";
			}

			isRunning = true;
			startTime = new Date();
			timeBegin = setInterval(timer, 10);
		};
		if (timerStatus % 3 == 0){

		};
	};
	if (importFocus == 0 && keyPressed == 32 && !inspectType_value){
		if (isRunning == false || (isRunning == true && curPhase == timeSplit_value + 1)) {
			curPhase = 1;
			timerStatus++;
		}
		ispt = 0;
		mnt = 0;
		sec = 0;

		document.getElementById("search_result").style.display = "none";

		if (timerStatus % 2 == 1 && curPhase == 1){
			document.getElementById("hide_text").style.display = "none";

			if (hideType_value) {
				document.getElementById("mnt").style.display = "none";
				document.getElementById("two_dot").style.display = "none";
				document.getElementById("scnd").style.display = "none";
				document.getElementById("hide_text").style.display = "inline-block";

			} else {
				document.getElementById("mnt").style.display = "inline-block";
				document.getElementById("two_dot").style.display = "inline-block";
				document.getElementById("scnd").style.display = "inline-block";
				document.getElementById("hide_text").style.display = "none";
			}

			if (hideAll) {
				document.getElementById("buts").style.visibility = "hidden";
				document.getElementById("stat_td").style.visibility = "hidden";
				document.getElementById("toggle_statTd").style.visibility = "hidden";
				document.getElementById("scram_td").style.visibility = "hidden";
				document.getElementById("draw_scram_dialog").style.visibility = "hidden";
			}

			isRunning = true;
			startTime = new Date();
			timeBegin = setInterval(timer, 10);
		};
		if (timerStatus % 2 == 0){

		};
	};

	if (event.altKey && keyPressed == 188) {//set pen to ok (key ,)
		setOK(sessions[sesNum - 1].arr.length - 1);
	};
	if (event.altKey && keyPressed == 190) {//set pen to +2 (key .)
		setP2(sessions[sesNum - 1].arr.length - 1);
	};
	if (event.altKey && keyPressed == 191) {//set pen to dnf (key /)
		setDNF(sessions[sesNum - 1].arr.length - 1);
	};

	//delete last solve
	if (event.altKey && keyPressed == 186) {// key ;
		delSolve(sessions[sesNum - 1].arr.length - 1);
	};
	//clear session
	if (event.altKey && keyPressed == 222) {// key '
		resetSes();
	};
	//add session
	if (event.altKey && keyPressed == 187) {// key =
		addSes();
	};
	//delete session
	if (event.altKey && keyPressed == 189) {// key -
		if (confirm("Delete this session?")) { delSes(); }
	};
	//last, next scramble
	if (event.altKey && keyPressed == 219) {
		document.getElementById("last_scram_btn").click();
	};
	if (event.altKey && keyPressed == 221) {
		generateScram();
		saveScramType();
	};
	//scram type
	if (event.altKey && keyPressed == 49) {// key 1
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("111111");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 50) {// key 2
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("222");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 51) {// key 3
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("333");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 52) {// key 4
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("444");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 53) {// key 5
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("555");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 54) {// key 6
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("666");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 55) {// key 7
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("777");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 56) {// key 8
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("888");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 57) {// key 9
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("999");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 48) {// key 0
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("101010");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 83) {// key s
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("skewb");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 81) {// key q
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("sq1");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 80) {// key p
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("pyram");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 77) {// key m
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("minx");
		generateScram();
		saveScramType();
	};
	if (event.altKey && keyPressed == 67) {// key c
		document.getElementById("scram_type").selectedIndex = getScramTypeIndex("clock");
		generateScram();
		saveScramType();
	};

	if (importFocus == 1 && keyPressed == 13) {
		document.getElementById("import_plhd").focus();
		importTime();
	};

	if (importFocus == 2) {
	};
};

//### TOUCH TIMER ###
var timerEnable = true;
var isInspecting = false;
var dialogOpen;
var touchZone;
var touchId;
var touchClass;

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
		dialogOpen = checkDialogOpen();
		touchZone = event.target.tagName;
		touchId = event.target.id;
		touchClass = event.target.className;

		//if (dialogOpen && (touchId == "time_td" || touchId == "time" || touchId == "mnt" || touchId == "two_dot" || touchId == "scnd" || touchId == "ispt_display" || touchId == "div_hide" || touchZone == "BODY" || touchZone == "HEADER")) {timerEnable = true} else {timerEnable = false};
		if (dialogOpen && (touchId == "mnt" || touchId == "two_dot" || touchId == "scnd" || touchId == "ispt_display" || touchId == "hide_text" || touchZone == "BODY" || touchZone == "HEADER")) {timerEnable = true} else {timerEnable = false};
	}
}

document.ontouchend = function(event){

	if (timerEnable && importFocus == 0 && inspectType_value){
		if (!isRunning || (isRunning && curPhase == timeSplit_value + 1)) {
			curPhase = 1;
			timerStatus++;
		}
		mnt = 0;
		sec = 0;

		if (timerStatus % 3 == 1){

			document.getElementById("import_plhd").style.display = "none";
			document.getElementById("mnt").style.display = "none";
			document.getElementById("two_dot").style.display = "none";
			document.getElementById("scnd").style.display = "none";
			document.getElementById("ispt_display").style.display = "inline-block";

			document.getElementById("search_result").style.display = "none";

			isInspecting = true;
			inspectBegin = setInterval(inspector, 1000);

			if (hideAll) {
				document.getElementById("buts").style.visibility = "hidden";
				document.getElementById("stat_td").style.visibility = "hidden";
				document.getElementById("toggle_statTd").style.visibility = "hidden";
				document.getElementById("scram_td").style.visibility = "hidden";
				document.getElementById("draw_scram_dialog").style.visibility = "hidden";
			}
		};
		if (timerStatus % 3 == 2 && curPhase == 1){

			clearInterval(inspectBegin);
			isInspecting = false;
			document.getElementById("ispt_display").innerHTML = "15";

			document.getElementById("scnd").style.display = "inline-block";
			document.getElementById("ispt_display").style.display = "none";

			if (hideType_value) {
				document.getElementById("mnt").style.display = "none";
				document.getElementById("two_dot").style.display = "none";
				document.getElementById("scnd").style.display = "none";
				document.getElementById("hide_text").style.display = "inline-block";

			} else {
				document.getElementById("mnt").style.display = "inline-block";
				document.getElementById("two_dot").style.display = "inline-block";
				document.getElementById("scnd").style.display = "inline-block";
				document.getElementById("hide_text").style.display = "none";
			}

			isRunning = true;
			startTime = new Date();
			timeBegin = setInterval(timer, 10);
		};
		if (timerStatus % 3 == 0){

		};
	};
	if (timerEnable && importFocus == 0 && !inspectType_value){
		if (!isRunning || (isRunning && curPhase == timeSplit_value + 1)) {
			curPhase = 1;
			timerStatus++;
		}
		ispt = 0;
		mnt = 0;
		sec = 0;

		document.getElementById("search_result").style.display = "none";

		if (timerStatus % 2 == 1 && curPhase == 1){

			if (hideType_value) {
				document.getElementById("mnt").style.display = "none";
				document.getElementById("two_dot").style.display = "none";
				document.getElementById("scnd").style.display = "none";
				document.getElementById("hide_text").style.display = "inline-block";

			} else {
				document.getElementById("mnt").style.display = "inline-block";
				document.getElementById("two_dot").style.display = "inline-block";
				document.getElementById("scnd").style.display = "inline-block";
				document.getElementById("hide_text").style.display = "none";
			}

			if (hideAll) {
				document.getElementById("buts").style.visibility = "hidden";
				document.getElementById("stat_td").style.visibility = "hidden";
				document.getElementById("toggle_statTd").style.visibility = "hidden";
				document.getElementById("scram_td").style.visibility = "hidden";
				document.getElementById("draw_scram_dialog").style.visibility = "hidden";
			}

			isRunning = true;
			startTime = new Date();
			timeBegin = setInterval(timer, 10);
		};
		if (timerStatus % 2 == 0){

		};
	};
};

function checkTimerEnable(e, t) {
	return (checkDialogOpen() && checkTargetId(e, t));
}
function checkDialogOpen() {
	return ((document.getElementById("solve_dialog").style.display == "none" || document.getElementById("solve_dialog").style.display == "") &&
		 (document.getElementById("option_dialog").style.display == "none" || document.getElementById("option_dialog").style.display == "") &&
		 (document.getElementById("about_dialog").style.display == "none" || document.getElementById("about_dialog").style.display == "") &&
		 (document.getElementById("stat_dialog").style.display == "none" || document.getElementById("stat_dialog").style.display == ""));
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