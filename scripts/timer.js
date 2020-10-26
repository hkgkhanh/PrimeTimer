//##### TIMER, INSPECTOR, IMPORT TIME #####

function inspector(){
	ispt++;
	var ispt_dp = Math.floor(15 - ispt);
	if (ispt == 8) {
		document.getElementById("eight_sec").play();
	};
	if (ispt == 12) {
		document.getElementById("twelve_sec").play();
	};
	if (ispt < 15){
		document.getElementById("ispt_display").innerHTML = ispt_dp;
		document.getElementById("ispt_display").style.fontFamily = timerFont_value;
		document.getElementById("ispt_display").style.fontStyle = 'normal';
	};
	if (ispt >= 15 && ispt < 17){
		document.getElementById("ispt_display").innerHTML = "+2";
		document.getElementById("ispt_display").style.fontFamily = 'Arial';
		document.getElementById("ispt_display").style.fontWeight = 'bold';
		document.getElementById("ispt_display").style.fontStyle = 'normal';
	};
	if (ispt >= 17){
		document.getElementById("ispt_display").innerHTML = "DNF";
		document.getElementById("ispt_display").style.fontFamily = 'Arial';
		document.getElementById("ispt_display").style.fontWeight = 'bold';
		document.getElementById("ispt_display").style.fontStyle = 'normal';
	};	
};

function timer(){

	curTime = new Date();
	var time = curTime.getTime() - startTime.getTime();
	time /= 1000;
	var roundTime = parseFloat(time); time = Math.round(roundTime * 100)/100;

	sec = time % 60;
	mnt = Math.floor(time / 60); 

	document.getElementById("scnd").innerHTML = sec.toFixed(2);

	if (mnt > 0) {
		document.getElementById("mnt").style.display = "inline-block";
		document.getElementById("two_dot").style.display = "inline-block";
		document.getElementById("mnt").innerHTML = mnt;
	} else {
		document.getElementById("mnt").style.display = "none";
		document.getElementById("two_dot").style.display = "none";
	}
};

function importTime() {
	var enterVal = document.getElementById("import_plhd").value;

	if (enterVal != "") {
		var enterTimeVal = parseFloat(enterVal);

		if (enterFormatType_value == 1) {

			if (!contain(enterVal, ":") && !contain(enterVal, ".")) {

				if (enterVal.length <= 4) {
					sec = Math.round(((enterTimeVal / 100) % 60) * 100) / 100;
					mnt = 0;
				} else {
					var secVal = parseFloat(enterVal.substr(-4));
					sec = Math.round(((secVal / 100) % 60) * 100) / 100;

					var mntVal = parseInt(enterVal.substr(0, enterVal.length - 4));
					mnt = Math.floor(secVal / 6000) + mntVal;
				}

			} else if (contain(enterVal, ":")) {

				var twoDotIndex = enterVal.indexOf(":");
				var dotIndex = enterVal.indexOf(".");

				var secVal = parseFloat(enterVal.substr(twoDotIndex + 1));
				sec = Math.round((secVal % 60) * 100) / 100;

				var mntVal = parseInt(enterVal.substr(0, twoDotIndex));
				mnt = mntVal + Math.floor(secVal / 60);

			} else if (!contain(enterVal, ":") && contain(enterVal, ".")) {

				sec = Math.round((enterTimeVal % 60) * 100) / 100;
				mnt = Math.floor(enterTimeVal / 60);
			}

		} else if (enterFormatType_value == 2) {

			if (!contain(enterVal, ".")) {

				sec = Math.round(((enterTimeVal / 100) % 60) * 100) / 100;
				mnt = Math.floor(enterTimeVal / 6000);

			} else {

				sec = Math.round((enterTimeVal % 60) * 100) / 100;
				mnt = Math.floor(enterTimeVal / 60);
			}
		}

		addSolve();
		document.getElementById("import_plhd").value = "";
		generateScram();
	};
};

function contain(str, char) {
	var have = false;
	for (let i = 0; i < str.length; i++) {
		if (str[i] == char) {
			have = true;
			break;
		}
	}
	return have;
}