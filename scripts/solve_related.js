//##### SOLVE STUFF, SET PENALTY, DELETE SOLVE, RESET SESSION #####

function addSolve(){

	//initialize(khởi tạo) solve
	var solve = {
		strng: "",
		time: 0,
		tOk:0,
		tPlus2: 2,
		pen: "",
		trao: "",
		date: "",
		comment: ""
	};

	solve.tOk += sec + mnt * 60;
	var roundTOk = parseFloat(solve.tOk); solve.tOk = Math.round(roundTOk * 100)/100;
	solve.tPlus2 += sec + mnt * 60;
	var roundTPlus2 = parseFloat(solve.tPlus2); solve.tPlus2 = Math.round(roundTPlus2 * 100)/100;

	if (ispt < 15){
		if (mnt == 0){
			solve.strng = sec.toFixed(2);
		};
		if (mnt != 0 && sec < 10){
			solve.strng = mnt + ":" + "0" + sec.toFixed(2);
		};
		if (mnt != 0 && sec >= 10){
			solve.strng = mnt + ":" + sec.toFixed(2);
		};

		solve.time = solve.tOk;
		solve.pen = "ok";  
	};
	if (ispt >= 15 && ispt < 17){
		if (mnt == 0 && sec < 58){
			solve.strng = (sec + 2).toFixed(2) + "+";
		};
		if (mnt == 0 && sec >= 58){
			solve.strng = (mnt + 1) + ":0" + (sec - 58).toFixed(2) + "+";
		};
		if (mnt != 0 && sec < 8){
			solve.strng = mnt + ":" + "0" + (sec + 2).toFixed(2) + "+";
		};
		if (mnt != 0 && sec >= 8 && sec < 58){
			solve.strng = mnt + ":" + (sec + 2).toFixed(2) + "+";
		};
		if (mnt != 0 && sec >= 58){
			solve.strng = (mnt + 1) + ":0" + (sec - 58).toFixed(2) + "+";
		};

		solve.time = solve.tPlus2;
		solve.pen = "plus2";
	};
	if (ispt >= 17) {
		solve.strng = "DNF";
		solve.time = solve.tOk;
		solve.pen = "dnf";
	};

	solve.trao = scramble;
	solve.date = dateOfSolve();
	if (timeSplit_value != 1) {
		solve.comment += "[";
		for (var i = 0; i < timeSplits.length; i++) {
			solve.comment += timeSplits[i].strng;
			solve.comment += (i == timeSplits.length - 1) ? "]" : "+";
		}
	}

	//add time to session
	sessions[sesNum - 1].arr.push(solve);

	if (sessions[sesNum - 1].arr.length == 1) {
		bestSingle = sessions[sesNum - 1].arr[0].time;
		bestSinglestrng = sessions[sesNum - 1].arr[0].strng;
		bestSingleTrao = sessions[sesNum - 1].arr[0].trao;
	};

	document.getElementById("cur_single").innerHTML = sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 1].strng;
	document.getElementById("best_single").innerHTML = bestSinglestrng;

	//single & best single
	if (solve.time <= bestSingle && solve.pen != "dnf") {
		bestSingle = solve.time;
		bestSinglestrng = solve.strng;
		bestSingleTrao = solve.trao;
		document.getElementById("best_single").innerHTML = bestSinglestrng;
	};

	saveSession();
	calc();
	timeContain();
};

function setOK(solveNum) {
	if (sessions[sesNum - 1].arr. length != 0) {

		sessions[sesNum - 1].arr[solveNum].pen = "ok";
		sessions[sesNum - 1].arr[solveNum].time = sessions[sesNum - 1].arr[solveNum].tOk;
		var solveMin = Math.floor(sessions[sesNum - 1].arr[solveNum].time / 60);
		var solveSec = Math.floor((sessions[sesNum - 1].arr[solveNum].time % 60) * 100) / 100;
		if (solveMin == 0){
			sessions[sesNum - 1].arr[solveNum].strng = solveSec.toFixed(2);
		};
		if (solveMin != 0 && solveSec < 10){
			sessions[sesNum - 1].arr[solveNum].strng = solveMin + ":" + "0" + solveSec.toFixed(2);
		};
		if (solveMin != 0 && solveSec >= 10){
			sessions[sesNum - 1].arr[solveNum].strng = solveMin + ":" + solveSec.toFixed(2);
		};

		document.getElementById("cur_single").innerHTML = sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 1].strng;

		if (sessions[sesNum - 1].arr.length == 1) {
			bestSingle = sessions[sesNum - 1].arr[0].time;
			bestSinglestrng = sessions[sesNum - 1].arr[0].strng;
			bestSingleTrao = sessions[sesNum - 1].arr[0].trao;
		};

		bestSingle = 99999;
		for (var ind8 = 0; ind8 < sessions[sesNum - 1].arr.length; ind8++) {
			if (sessions[sesNum - 1].arr[ind8].time <= bestSingle && sessions[sesNum - 1].arr[ind8].pen != "dnf") {
				bestSingle = sessions[sesNum - 1].arr[ind8].time;
				bestSinglestrng = sessions[sesNum - 1].arr[ind8].strng;
				bestSingleTrao = sessions[sesNum - 1].arr[ind8].trao;
				document.getElementById("best_single").innerHTML = bestSinglestrng;
			};
		};

		mean3Array = [];
		mean3strngArray = [];
		bestMean3 = 99999;
		bestMean3strng = "DNF";
		bestM3strngArray = [];
		bestM3TraoArray = [];
		avg5Array = [];
		avg5strngArray = [];
		bestAvg5 = 99999;
		bestAvg5strng = "DNF";
		bestA5strngArray = [];
		bestA5TraoArray = [];
		avg12Array = [];
		avg12strngArray = [];
		bestAvg12 = 99999;
		bestAvg12strng = "DNF";
		bestA12strngArray = [];
		bestA12TraoArray = [];
		avg50Array = [];
		avg50strngArray = [];
		bestAvg50 = 99999;
		bestAvg50strng = "DNF";
		bestA50strngArray = [];
		bestA50TraoArray = [];
		avg100Array = [];
		avg100strngArray = [];
		bestAvg100 = 99999;
		bestAvg100strng = "DNF";
		bestA100strngArray = [];
		bestA100TraoArray = [];
		avg200Array = [];
		avg200strngArray = [];
		bestAvg200 = 99999;
		bestAvg200strng = "DNF";
		bestA200strngArray = [];
		bestA200TraoArray = [];
		avg500Array = [];
		avg500strngArray = [];
		bestAvg500 = 99999;
		bestAvg500strng = "DNF";
		bestA500strngArray = [];
		bestA500TraoArray = [];
		avg1000Array = [];
		avg1000strngArray = [];
		bestAvg1000 = 99999;
		bestAvg1000strng = "DNF";
		bestA1000strngArray = [];
		bestA1000TraoArray = [];

		saveSession();
		calc();
		timeContain();
	}
};

function setP2(solveNum) {
	if (sessions[sesNum - 1].arr. length != 0) {

		sessions[sesNum - 1].arr[solveNum].pen = "plus2";
		sessions[sesNum - 1].arr[solveNum].time = sessions[sesNum - 1].arr[solveNum].tPlus2;
		var solveMin = Math.floor(sessions[sesNum - 1].arr[solveNum].time / 60);
		var solveSec = Math.floor((sessions[sesNum - 1].arr[solveNum].time % 60) * 100) / 100;
		if (solveMin == 0){
			sessions[sesNum - 1].arr[solveNum].strng = solveSec.toFixed(2) + "+";
		};
		if (solveMin != 0 && solveSec < 10){
			sessions[sesNum - 1].arr[solveNum].strng = solveMin + ":" + "0" + solveSec.toFixed(2) + "+";
		};
		if (solveMin != 0 && solveSec >= 10){
			sessions[sesNum - 1].arr[solveNum].strng = solveMin + ":" + solveSec.toFixed(2) + "+";
		};

		document.getElementById("cur_single").innerHTML = sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 1].strng;

		if (sessions[sesNum - 1].arr.length == 1) {
			bestSingle = sessions[sesNum - 1].arr[0].time;
			bestSinglestrng = sessions[sesNum - 1].arr[0].strng;
			bestSingleTrao = sessions[sesNum - 1].arr[0].trao;
		};

		bestSingle = 99999;
		for (var ind8 = 0; ind8 < sessions[sesNum - 1].arr.length; ind8++) {
			if (sessions[sesNum - 1].arr[ind8].time <= bestSingle && sessions[sesNum - 1].arr[ind8].pen != "dnf") {
				bestSingle = sessions[sesNum - 1].arr[ind8].time;
				bestSinglestrng = sessions[sesNum - 1].arr[ind8].strng;
				bestSingleTrao = sessions[sesNum - 1].arr[ind8].trao;
				document.getElementById("best_single").innerHTML = bestSinglestrng;
			};
		};

		mean3Array = [];
		mean3strngArray = [];
		bestMean3 = 99999;
		bestMean3strng = "DNF";
		bestM3strngArray = [];
		bestM3TraoArray = [];
		avg5Array = [];
		avg5strngArray = [];
		bestAvg5 = 99999;
		bestAvg5strng = "DNF";
		bestA5strngArray = [];
		bestA5TraoArray = [];
		avg12Array = [];
		avg12strngArray = [];
		bestAvg12 = 99999;
		bestAvg12strng = "DNF";
		bestA12strngArray = [];
		bestA12TraoArray = [];
		avg50Array = [];
		avg50strngArray = [];
		bestAvg50 = 99999;
		bestAvg50strng = "DNF";
		bestA50strngArray = [];
		bestA50TraoArray = [];
		avg100Array = [];
		avg100strngArray = [];
		bestAvg100 = 99999;
		bestAvg100strng = "DNF";
		bestA100strngArray = [];
		bestA100TraoArray = [];
		avg200Array = [];
		avg200strngArray = [];
		bestAvg200 = 99999;
		bestAvg200strng = "DNF";
		bestA200strngArray = [];
		bestA200TraoArray = [];
		avg500Array = [];
		avg500strngArray = [];
		bestAvg500 = 99999;
		bestAvg500strng = "DNF";
		bestA500strngArray = [];
		bestA500TraoArray = [];
		avg1000Array = [];
		avg1000strngArray = [];
		bestAvg1000 = 99999;
		bestAvg1000strng = "DNF";
		bestA1000strngArray = [];
		bestA1000TraoArray = [];

		saveSession();
		calc();
		timeContain();
	}
};

function setDNF(solveNum) {
	if (sessions[sesNum - 1].arr. length != 0) {

		sessions[sesNum - 1].arr[solveNum].pen = "dnf";
		sessions[sesNum - 1].arr[solveNum].strng = "DNF";
		sessions[sesNum - 1].arr[solveNum].time = sessions[sesNum - 1].arr[solveNum].tOk;

		document.getElementById("cur_single").innerHTML = sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 1].strng;

		if (sessions[sesNum - 1].arr.length == 1) {
			bestSingle = sessions[sesNum - 1].arr[0].time;
			bestSinglestrng = sessions[sesNum - 1].arr[0].strng;
			bestSingleTrao = sessions[sesNum - 1].arr[0].trao;
		};

		bestSingle = 99999;
		bestSinglestrng = "DNF";
		for (var ind8 = 0; ind8 < sessions[sesNum - 1].arr.length; ind8++) {
			if (sessions[sesNum - 1].arr[ind8].pen != "dnf" && sessions[sesNum - 1].arr[ind8].time <= bestSingle) {
				bestSingle = sessions[sesNum - 1].arr[ind8].time;
				bestSinglestrng = sessions[sesNum - 1].arr[ind8].strng;
				bestSingleTrao = sessions[sesNum - 1].arr[ind8].trao;	
			};
		};
		document.getElementById("best_single").innerHTML = bestSinglestrng;

		mean3Array = [];
		mean3strngArray = [];
		bestMean3 = 99999;
		bestMean3strng = "DNF";
		bestM3strngArray = [];
		bestM3TraoArray = [];
		avg5Array = [];
		avg5strngArray = [];
		bestAvg5 = 99999;
		bestAvg5strng = "DNF";
		bestA5strngArray = [];
		bestA5TraoArray = [];
		avg12Array = [];
		avg12strngArray = [];
		bestAvg12 = 99999;
		bestAvg12strng = "DNF";
		bestA12strngArray = [];
		bestA12TraoArray = [];
		avg50Array = [];
		avg50strngArray = [];
		bestAvg50 = 99999;
		bestAvg50strng = "DNF";
		bestA50strngArray = [];
		bestA50TraoArray = [];
		avg100Array = [];
		avg100strngArray = [];
		bestAvg100 = 99999;
		bestAvg100strng = "DNF";
		bestA100strngArray = [];
		bestA100TraoArray = [];
		avg200Array = [];
		avg200strngArray = [];
		bestAvg200 = 99999;
		bestAvg200strng = "DNF";
		bestA200strngArray = [];
		bestA200TraoArray = [];
		avg500Array = [];
		avg500strngArray = [];
		bestAvg500 = 99999;
		bestAvg500strng = "DNF";
		bestA500strngArray = [];
		bestA500TraoArray = [];
		avg1000Array = [];
		avg1000strngArray = [];
		bestAvg1000 = 99999;
		bestAvg1000strng = "DNF";
		bestA1000strngArray = [];
		bestA1000TraoArray = [];

		saveSession();
		calc();
		timeContain();
	}
};

function delSolve(i) {
	if (sessions[sesNum - 1].arr. length != 0) {

		if (confirm("Delete the solve " + sessions[sesNum - 1].arr[i].strng + "?") == true) {

			sessions[sesNum - 1].arr.splice(i, 1);
			document.getElementById('solve_dialog').style.display = 'none';

			if (sessions[sesNum - 1].arr.length == 0) {
				document.getElementById("cur_single").innerHTML = "-";
				document.getElementById("best_single").innerHTML = "-";
				timeCon.innerHTML = "";

				document.getElementById("ses_mean").innerHTML = "0.00";
				document.getElementById("ses_not_dnf").innerHTML = "0";
				document.getElementById("ses_length").innerHTML = "0";
			} else {

				if (sessions[sesNum - 1].arr.length == 1) {
					bestSingle = sessions[sesNum - 1].arr[0].time;
					bestSinglestrng = sessions[sesNum - 1].arr[0].strng;
				};

				document.getElementById("cur_single").innerHTML = sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 1].strng;
				document.getElementById("best_single").innerHTML = bestSinglestrng;

				if (sessions[sesNum - 1].arr.length < 3) {
					document.getElementById("cur_mo3").innerHTML = "-";
					document.getElementById("best_mo3").innerHTML = "-";
				};
				if (sessions[sesNum - 1].arr.length < 5) {
					document.getElementById("cur_ao5").innerHTML = "-";
					document.getElementById("best_ao5").innerHTML = "-";
				};
				if (sessions[sesNum - 1].arr.length < 12) {
					document.getElementById("cur_ao12").innerHTML = "-";
					document.getElementById("best_ao12").innerHTML = "-";
				};
				if (sessions[sesNum - 1].arr.length < 50) {
					document.getElementById("cur_ao50").innerHTML = "-";
					document.getElementById("best_ao50").innerHTML = "-";
				};
				if (sessions[sesNum - 1].arr.length < 100) {
					document.getElementById("cur_ao100").innerHTML = "-";
					document.getElementById("best_ao100").innerHTML = "-";
				};
				if (sessions[sesNum - 1].arr.length < 200) {
					document.getElementById("cur_ao200").innerHTML = "-";
					document.getElementById("best_ao200").innerHTML = "-";
				};
				if (sessions[sesNum - 1].arr.length < 500) {
					document.getElementById("cur_ao500").innerHTML = "-";
					document.getElementById("best_ao500").innerHTML = "-";
				};
				if (sessions[sesNum - 1].arr.length < 1000) {
					document.getElementById("cur_ao1000").innerHTML = "-";
					document.getElementById("best_ao1000").innerHTML = "-";
				};
			}
			mean3Array = [];
			mean3strngArray = [];
			bestMean3 = 99999;
			bestMean3strng = "DNF";
			bestM3strngArray = [];
			bestM3TraoArray = [];
			avg5Array = [];
			avg5strngArray = [];
			bestAvg5 = 99999;
			bestAvg5strng = "DNF";
			bestA5strngArray = [];
			bestA5TraoArray = [];
			avg12Array = [];
			avg12strngArray = [];
			bestAvg12 = 99999;
			bestAvg12strng = "DNF";
			bestA12strngArray = [];
			bestA12TraoArray = [];
			avg50Array = [];
			avg50strngArray = [];
			bestAvg50 = 99999;
			bestAvg50strng = "DNF";
			bestA50strngArray = [];
			bestA50TraoArray = [];
			avg100Array = [];
			avg100strngArray = [];
			bestAvg100 = 99999;
			bestAvg100strng = "DNF";
			bestA100strngArray = [];
			bestA100TraoArray = [];
			avg200Array = [];
			avg200strngArray = [];
			bestAvg200 = 99999;
			bestAvg200strng = "DNF";
			bestA200strngArray = [];
			bestA200TraoArray = [];
			avg500Array = [];
			avg500strngArray = [];
			bestAvg500 = 99999;
			bestAvg500strng = "DNF";
			bestA500strngArray = [];
			bestA500TraoArray = [];
			avg1000Array = [];
			avg1000strngArray = [];
			bestAvg1000 = 99999;
			bestAvg1000strng = "DNF";
			bestA1000strngArray = [];
			bestA1000TraoArray = [];

		//add solve to times container and save sesion
		saveSession();
		calc();
		timeContain();
	};
}
};

function resetSes() {
	if (sessions[sesNum - 1].arr.length != 0) {

		if (confirm("Delete all solve(s)?") == true) {
			sessions[sesNum - 1].arr = [];
			bestSingle = 99999;
			bestSinglestrng = "";

			mean3Array = [];
			mean3strngArray = [];
			bestMean3 = 99999;
			bestMean3strng = "DNF";
			bestM3strngArray = [];
			bestM3TraoArray = [];
			avg5Array = [];
			avg5strngArray = [];
			bestAvg5 = 99999;
			bestAvg5strng = "DNF";
			bestA5strngArray = [];
			bestA5TraoArray = [];
			avg12Array = [];
			avg12strngArray = [];
			bestAvg12 = 99999;
			bestAvg12strng = "DNF";
			bestA12strngArray = [];
			bestA12TraoArray = [];
			avg50Array = [];
			avg50strngArray = [];
			bestAvg50 = 99999;
			bestAvg50strng = "DNF";
			bestA50strngArray = [];
			bestA50TraoArray = [];
			avg100Array = [];
			avg100strngArray = [];
			bestAvg100 = 99999;
			bestAvg100strng = "DNF";
			bestA100strngArray = [];
			bestA100TraoArray = [];
			avg200Array = [];
			avg200strngArray = [];
			bestAvg200 = 99999;
			bestAvg200strng = "DNF";
			bestA200strngArray = [];
			bestA200TraoArray = [];
			avg500Array = [];
			avg500strngArray = [];
			bestAvg500 = 99999;
			bestAvg500strng = "DNF";
			bestA500strngArray = [];
			bestA500TraoArray = [];
			avg1000Array = [];
			avg1000strngArray = [];
			bestAvg1000 = 99999;
			bestAvg1000strng = "DNF";
			bestA1000strngArray = [];
			bestA1000TraoArray = [];

			document.getElementById("ses_mean").innerHTML = "0.00";
			document.getElementById("ses_not_dnf").innerHTML = "0";
			document.getElementById("ses_length").innerHTML = "0";

			document.getElementById("cur_single").innerHTML = "-";
			document.getElementById("best_single").innerHTML = "-";

			document.getElementById("cur_mo3").innerHTML = "-";
			document.getElementById("best_mo3").innerHTML = "-";

			document.getElementById("cur_ao5").innerHTML = "-";
			document.getElementById("best_ao5").innerHTML = "-";

			document.getElementById("cur_ao12").innerHTML = "-";
			document.getElementById("best_ao12").innerHTML = "-";

			document.getElementById("cur_ao50").innerHTML = "-";
			document.getElementById("best_ao50").innerHTML = "-";

			document.getElementById("cur_ao100").innerHTML = "-";
			document.getElementById("best_ao100").innerHTML = "-";

			document.getElementById("cur_ao200").innerHTML = "-";
			document.getElementById("best_ao200").innerHTML = "-";

			document.getElementById("cur_ao500").innerHTML = "-";
			document.getElementById("best_ao500").innerHTML = "-";

			document.getElementById("cur_ao1000").innerHTML = "-";
			document.getElementById("best_ao1000").innerHTML = "-";

			saveSession();
			calc();
			timeContain();
		};
	}
};

function addSes() {
	sessions.push({arr: []});
	saveSession();
	getSession();
	addOpt(sessions.length);
}

function delSes() {
	sessions.splice(sesNum-1, 1);
	saveSession();
	getSession();

	var chooseSession = document.getElementById("choose_session");
	while (chooseSession.firstChild) {
		chooseSession.removeChild(chooseSession.lastChild);
	}
	for (let i = 1; i <= sessions.length; i++) {
		addOpt(i);
	}

	chooseSession.selectedIndex = 0;
	sesNum = 1;
	clearStatDiv();
	timeContain();
	calc();
}

function timeContain() {
	//var endofTimeCon = 0;
	timeCon.innerHTML = "";
	var table = document.createElement("table");
	table.style.textAlign = "center";
	table.style.borderStyle = "none";
	table.style.borderWidth = "1px";
	table.style.borderColor = "#585858";
	table.style.width = "100%";
	table.style.borderCollapse = "inherit";
	var row = table.insertRow();
	var indCell = row.insertCell();
	indCell.innerHTML = "<b>ind</b>";
	var timeCell = row.insertCell();
	timeCell.innerHTML = "<b>time</b>";
	var diffCell = row.insertCell();
	diffCell.innerHTML = "<b>diff</b>";
	var ao5Cell = row.insertCell();
	ao5Cell.innerHTML = "<b>ao5</b>";

	if (sessions[sesNum - 1].arr.length != 0) {
		for (var ind0 = 0; ind0 < sessions[sesNum - 1].arr.length; ind0++) {
			var newRow = table.insertRow(1);

			var newIndCell = newRow.insertCell();
			newIndCell.innerHTML = (ind0+1);

			var newTimeCell = newRow.insertCell();
			newTimeCell.innerHTML =  "<span onclick='solveStat(" + ind0 + ")' onmouseover='bgOnMouseOver(this)' onmouseout='bgOnMouseOut(this)' class='solve_dp'>" + sessions[sesNum - 1].arr[ind0].strng + "</span>";

			var newDiffCell = newRow.insertCell();
			newDiffCell.className = "diff_cell";
			
			var meanToRound = Math.round(mean * 100) / 100;
			var diffFontColor;
			var diff = sessions[sesNum - 1].arr[ind0].time - meanToRound;
			if (diff > 0) {
				diffFontColor = "#990000";
				var diffMin = Math.floor(diff / 60);
				var diffSec = Math.round((diff % 60) * 100) / 100;

				if (diffMin == 0) {
					var diffstrng = "+" + diffSec.toFixed(2);
				} else {
					if (diffSec < 10) {
						var diffstrng = "+" + diffMin + ":0" + diffSec.toFixed(2);
					} else {
						var diffstrng = "+" + diffMin + ":" + diffSec.toFixed(2);
					};
				};

			} else if (diff < 0) {
				diffFontColor = "#088A08";
				diff = Math.abs(diff);
				var diffMin = Math.floor(diff / 60);
				var diffSec = Math.round((diff % 60) * 100) / 100;

				if (diffMin == 0) {
					var diffstrng = "-" + diffSec.toFixed(2);
				} else {
					if (diffSec < 10) {
						var diffstrng = "-" + diffMin + ":0" + diffSec.toFixed(2);
					} else {
						var diffstrng = "-" + diffMin + ":" + diffSec.toFixed(2);
					};
				};

			} else {
				diffFontColor = fontColor_value;
				var diffstrng = "0.00";
			}
			newDiffCell.innerHTML = diffstrng;
			newDiffCell.style.color = diffFontColor;

			var newAo5Cell = newRow.insertCell();
			if (ind0 < 4) {
				newAo5Cell.innerHTML = "-";
			} else {
				newAo5Cell.innerHTML = "<span onclick='showAo5Stat(" + (ind0-4) + ")' onmouseover='bgOnMouseOver(this)' onmouseout='bgOnMouseOut(this)' class='solve_dp'>" + avg5strngArray[ind0 - 4] + "</span>";
			}
		};
	}
	timeCon.appendChild(table);
	timeCon.scrollTo(0, 0);
};

function showAo5Stat(start) {
	document.getElementById("stat_dialog").style.display = "block";
	var statCon = "";
	statCon += "average of 5: " + avg5strngArray[start] + "<br>";
	for (var ind16 = 0; ind16 < 5; ind16++) {
		statCon += (ind16+1) + ". " + sessions[sesNum - 1].arr[start + ind16].strng + " &emsp; " + sessions[sesNum - 1].arr[start + ind16].trao + "<br>";
	};
	document.getElementById("stats").innerHTML = statCon;
}

function clearStatDiv() {
	document.getElementById("times_container").innerHTML = "";
	document.getElementById("cur_single").innerHTML = "-";
	document.getElementById("cur_mo3").innerHTML = "-";
	document.getElementById("cur_ao5").innerHTML = "-";
	document.getElementById("cur_ao12").innerHTML = "-";
	document.getElementById("cur_ao50").innerHTML = "-";
	document.getElementById("cur_ao100").innerHTML = "-";
	document.getElementById("cur_ao200").innerHTML = "-";
	document.getElementById("cur_ao500").innerHTML = "-";
	document.getElementById("cur_ao1000").innerHTML = "-";
	document.getElementById("best_single").innerHTML = "-";
	document.getElementById("best_mo3").innerHTML = "-";
	document.getElementById("best_ao5").innerHTML = "-";
	document.getElementById("best_ao12").innerHTML = "-";
	document.getElementById("best_ao50").innerHTML = "-";
	document.getElementById("best_ao100").innerHTML = "-";
	document.getElementById("best_ao200").innerHTML = "-";
	document.getElementById("best_ao500").innerHTML = "-";
	document.getElementById("best_ao1000").innerHTML = "-";
	document.getElementById("ses_mean").innerHTML = "0.00";
	document.getElementById("ses_not_dnf").innerHTML = "0";
	document.getElementById("ses_length").innerHTML = "0";
}

function solveStat(i) {
	solveIndex = i;
	timerEnable = false;
	document.getElementById("solve_dialog").style.display = "inline-block";
	document.getElementById("solve_no").innerHTML = (i + 1);
	document.getElementById("solve_strng").innerHTML = sessions[sesNum - 1].arr[i].strng;
	document.getElementById("solve_scram").innerHTML = sessions[sesNum - 1].arr[i].trao;
	document.getElementById("solve_comment").value = sessions[sesNum - 1].arr[i].comment;
	document.getElementById("solve_date").innerHTML = sessions[sesNum - 1].arr[i].date;
};

function addOpt(i) {
	var opt = document.createElement("OPTION");
	opt.setAttribute("value", i);
	var t = document.createTextNode(" " + (i) + " ");
	opt.appendChild(t);
	document.getElementById("choose_session").appendChild(opt);
}

function dateOfSolve() {
	var d = new Date();
	var y = String(d.getFullYear());
	var month = String(d.getMonth() + 1);
	var day = String(d.getDate());
	var h = String(d.getHours());
	var m = String(d.getMinutes());
	var s = String(d.getSeconds());

	if (m < 10) {
		m = "0" + m;
	}
	if (s < 10) {
		s = "0" + s;
	}

	var str = y + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;

	return str;
}

function addComment(i) {
	var cmt = document.getElementById("solve_comment").value;
	sessions[sesNum - 1].arr[i].comment = cmt;

	saveSession();
}