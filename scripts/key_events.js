//##### MAKE ACTIONS WHEN A KEY IS PRESSED #####

var startTime = 0;
var curTime = 0;
var isRunning = false;

document.onkeyup = function(event){
	keyPressed = (event.keyCode ? event.keyCode : event.which);

	if (importFocus == 0 && keyPressed == 32 && inspectType_value == 1){

		timerStatus++;
		mnt = 0;
		sec = 0;

		if (timerStatus % 3 == 1){
			document.getElementById("time_imported").style.display = "none";
			document.getElementById("mnt").style.display = "none";
			document.getElementById("two_dot").style.display = "none";
			document.getElementById("scnd").style.display = "none";
			document.getElementById("ispt_display").style.display = "inline-block";

			inspectBegin = setInterval(inspector, 1000);

			if (hideAll == true) {
				document.getElementById("buts").style.visibility = "hidden";
				document.getElementById("stat_td").style.visibility = "hidden";
				document.getElementById("scram_td").style.visibility = "hidden";
				document.getElementById("draw_scram_dialog").style.visibility = "hidden";
			}
		};
		if (timerStatus % 3 == 2){

			clearInterval(inspectBegin);
			document.getElementById("ispt_display").innerHTML = "15";

			document.getElementById("scnd").style.display = "inline-block";
			document.getElementById("ispt_display").style.display = "none";

			if (hideType_value == 2) {
				document.getElementById("time").style.display = "none";
				document.getElementById("div_hide").style.display = "inline-block";
			};

			startTime = new Date();
			timeBegin = setInterval(timer, 10);
			isRunning = true;
		};
		if (timerStatus % 3 == 0){

		};
	};
	if (importFocus == 0 && keyPressed == 32 && inspectType_value == 2){
		timerStatus++;
		ispt = 0;
		mnt = 0;
		sec = 0;

		if (timerStatus % 2 == 1){

			if (hideType_value == 2) {
				document.getElementById("time").style.display = "none";
				document.getElementById("div_hide").style.display = "inline-block";
			};

			if (hideAll == true) {
				document.getElementById("buts").style.visibility = "hidden";
				document.getElementById("stat_td").style.visibility = "hidden";
				document.getElementById("scram_td").style.visibility = "hidden";
				document.getElementById("draw_scram_dialog").style.visibility = "hidden";
			}

			startTime = new Date();
			timeBegin = setInterval(timer, 10);
			isRunning = true;
		};
		if (timerStatus % 2 == 0){

		};
	};

	if (keyPressed == 188 && event.altKey) {//set pen to ok (key ,)
		setOK(sessions[sesNum - 1].length - 1);
	};
	if (keyPressed == 190 && event.altKey) {//set pen to +2 (key .)
		setP2(sessions[sesNum - 1].length - 1);
	};
	if (keyPressed == 191 && event.altKey) {//set pen to dnf (key /)
		setDNF(sessions[sesNum - 1].length - 1);
	};

	//delete last solve
	if (keyPressed == 186 && event.altKey) {// key ;
		delSolve(sessions[sesNum - 1].length - 1);
	};
	//delete session
	if (keyPressed == 222 && event.altKey) {// key '
		resetSes();
	};
	//last, next scramble
	if (keyPressed == 219 && event.altKey) {
		document.getElementById("last_scram_btn").click();
	};
	if (keyPressed == 221 && event.altKey) {
		generateScram();
	};

	if (importFocus == 1 && keyPressed == 13) {
		document.getElementById("import_plhd").focus();
		importTime();
	};

	if (importFocus == 2) {
	};
};

document.onkeydown = function() {

	if (importFocus == 0 && isRunning == true) {

		clearInterval(timeBegin);
		addSolve(); generateScram();
		ispt = 0;
		hideDiv();
		isRunning = false;
	}
}