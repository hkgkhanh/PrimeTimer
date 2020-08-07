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

	//add time to session
	sessions[sesNum - 1].push(solve);

	if (sessions[sesNum - 1].length == 1) {
		bestSingle = sessions[sesNum - 1][0].time;
		bestSinglestrng = sessions[sesNum - 1][0].strng;
		bestSingleTrao = sessions[sesNum - 1][0].trao;
	};

	timeContain();

	document.getElementById("cur_single").innerHTML = sessions[sesNum - 1][sessions[sesNum - 1].length - 1].strng;
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
};

function setOK(solveNum) {
if (sessions[sesNum - 1]. length != 0) {

	sessions[sesNum - 1][solveNum].pen = "ok";
	sessions[sesNum - 1][solveNum].time = sessions[sesNum - 1][solveNum].tOk;
	var solveMin = Math.floor(sessions[sesNum - 1][solveNum].time / 60);
	var solveSec = Math.floor((sessions[sesNum - 1][solveNum].time % 60) * 100) / 100;
	if (solveMin == 0){
		sessions[sesNum - 1][solveNum].strng = solveSec.toFixed(2);
	};
	if (solveMin != 0 && solveSec < 10){
		sessions[sesNum - 1][solveNum].strng = solveMin + ":" + "0" + solveSec.toFixed(2);
	};
	if (solveMin != 0 && solveSec >= 10){
		sessions[sesNum - 1][solveNum].strng = solveMin + ":" + solveSec.toFixed(2);
	};

	timeContain();

	document.getElementById("cur_single").innerHTML = sessions[sesNum - 1][sessions[sesNum - 1].length - 1].strng;

	if (sessions[sesNum - 1].length == 1) {
		bestSingle = sessions[sesNum - 1][0].time;
		bestSinglestrng = sessions[sesNum - 1][0].strng;
		bestSingleTrao = sessions[sesNum - 1][0].trao;
	};

	bestSingle = 99999;
	for (var ind8 = 0; ind8 < sessions[sesNum - 1].length; ind8++) {
		if (sessions[sesNum - 1][ind8].time <= bestSingle && sessions[sesNum - 1][ind8].pen != "dnf") {
			bestSingle = sessions[sesNum - 1][ind8].time;
			bestSinglestrng = sessions[sesNum - 1][ind8].strng;
			bestSingleTrao = sessions[sesNum - 1][ind8].trao;
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
}
};

function setP2(solveNum) {
if (sessions[sesNum - 1]. length != 0) {

	sessions[sesNum - 1][solveNum].pen = "plus2";
	sessions[sesNum - 1][solveNum].time = sessions[sesNum - 1][solveNum].tPlus2;
	var solveMin = Math.floor(sessions[sesNum - 1][solveNum].time / 60);
	var solveSec = Math.floor((sessions[sesNum - 1][solveNum].time % 60) * 100) / 100;
	if (solveMin == 0){
		sessions[sesNum - 1][solveNum].strng = solveSec.toFixed(2) + "+";
	};
	if (solveMin != 0 && solveSec < 10){
		sessions[sesNum - 1][solveNum].strng = solveMin + ":" + "0" + solveSec.toFixed(2) + "+";
	};
	if (solveMin != 0 && solveSec >= 10){
		sessions[sesNum - 1][solveNum].strng = solveMin + ":" + solveSec.toFixed(2) + "+";
	};

	timeContain();

	document.getElementById("cur_single").innerHTML = sessions[sesNum - 1][sessions[sesNum - 1].length - 1].strng;

	if (sessions[sesNum - 1].length == 1) {
		bestSingle = sessions[sesNum - 1][0].time;
		bestSinglestrng = sessions[sesNum - 1][0].strng;
		bestSingleTrao = sessions[sesNum - 1][0].trao;
	};

	bestSingle = 99999;
	for (var ind8 = 0; ind8 < sessions[sesNum - 1].length; ind8++) {
		if (sessions[sesNum - 1][ind8].time <= bestSingle && sessions[sesNum - 1][ind8].pen != "dnf") {
			bestSingle = sessions[sesNum - 1][ind8].time;
			bestSinglestrng = sessions[sesNum - 1][ind8].strng;
			bestSingleTrao = sessions[sesNum - 1][ind8].trao;
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
}
};

function setDNF(solveNum) {
if (sessions[sesNum - 1]. length != 0) {

	sessions[sesNum - 1][solveNum].pen = "dnf";
	sessions[sesNum - 1][solveNum].strng = "DNF";
	sessions[sesNum - 1][solveNum].time = sessions[sesNum - 1][solveNum].tOk;

	timeContain();

	document.getElementById("cur_single").innerHTML = sessions[sesNum - 1][sessions[sesNum - 1].length - 1].strng;

	if (sessions[sesNum - 1].length == 1) {
		bestSingle = sessions[sesNum - 1][0].time;
		bestSinglestrng = sessions[sesNum - 1][0].strng;
		bestSingleTrao = sessions[sesNum - 1][0].trao;
	};

	bestSingle = 99999;
	bestSinglestrng = "DNF";
	for (var ind8 = 0; ind8 < sessions[sesNum - 1].length; ind8++) {
		if (sessions[sesNum - 1][ind8].pen != "dnf" && sessions[sesNum - 1][ind8].time <= bestSingle) {
			bestSingle = sessions[sesNum - 1][ind8].time;
			bestSinglestrng = sessions[sesNum - 1][ind8].strng;
			bestSingleTrao = sessions[sesNum - 1][ind8].trao;	
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
}
};
			
function delSolve(i) {
if (sessions[sesNum - 1]. length != 0) {

	if (confirm("Delete the solve " + sessions[sesNum - 1][i].strng + "?") == true) {

		sessions[sesNum - 1].splice(i, 1);
		document.getElementById('solve_dialog').style.display = 'none';

		if (sessions[sesNum - 1].length == 0) {
			document.getElementById("cur_single").innerHTML = "-";
			document.getElementById("best_single").innerHTML = "-";
			timeCon.innerHTML = "";

			document.getElementById("ses_mean").innerHTML = "0.00";
			document.getElementById("ses_not_dnf").innerHTML = "0";
			document.getElementById("ses_length").innerHTML = "0";
		};

		if (sessions[sesNum - 1].length == 1) {
			bestSingle = sessions[sesNum - 1][0].time;
			bestSinglestrng = sessions[sesNum - 1][0].strng;
		};

		document.getElementById("cur_single").innerHTML = sessions[sesNum - 1][sessions[sesNum - 1].length - 1].strng;
		document.getElementById("best_single").innerHTML = bestSinglestrng;

		if (sessions[sesNum - 1].length < 3) {
			document.getElementById("cur_mo3").innerHTML = "-";
			document.getElementById("best_mo3").innerHTML = "-";
		};
		if (sessions[sesNum - 1].length < 5) {
			document.getElementById("cur_ao5").innerHTML = "-";
			document.getElementById("best_ao5").innerHTML = "-";
		};
		if (sessions[sesNum - 1].length < 12) {
			document.getElementById("cur_ao12").innerHTML = "-";
			document.getElementById("best_ao12").innerHTML = "-";
		};
		if (sessions[sesNum - 1].length < 50) {
			document.getElementById("cur_ao50").innerHTML = "-";
			document.getElementById("best_ao50").innerHTML = "-";
		};
		if (sessions[sesNum - 1].length < 100) {
			document.getElementById("cur_ao100").innerHTML = "-";
			document.getElementById("best_ao100").innerHTML = "-";
		};
		if (sessions[sesNum - 1].length < 200) {
			document.getElementById("cur_ao200").innerHTML = "-";
			document.getElementById("best_ao200").innerHTML = "-";
		};
		if (sessions[sesNum - 1].length < 500) {
			document.getElementById("cur_ao500").innerHTML = "-";
			document.getElementById("best_ao500").innerHTML = "-";
		};
		if (sessions[sesNum - 1].length < 1000) {
			document.getElementById("cur_ao1000").innerHTML = "-";
			document.getElementById("best_ao1000").innerHTML = "-";
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

		//add solve to times container and save sesion
		saveSession();
		timeContain();

		//single & best single
		if (sessions[sesNum-1].length != 0) {
			bestSingle = sessions[sesNum - 1][0].time;
			bestSinglestrng = sessions[sesNum - 1][0].strng;
			bestSingleTrao = sessions[sesNum - 1][0].trao;

			for (var ind8 = 0; ind8 < sessions[sesNum - 1].length; ind8++) {
				if (sessions[sesNum - 1][ind8].time <= bestSingle && sessions[sesNum - 1][ind8].pen != "dnf") {
					bestSingle = sessions[sesNum - 1][ind8].time;
					bestSinglestrng = sessions[sesNum - 1][ind8].strng;
					bestSingleTrao = sessions[sesNum - 1][ind8].trao;
				};
			};
		}
		document.getElementById("best_single").innerHTML = bestSinglestrng;

		calc();
	};
}
};

function resetSes() {
if (sessions[sesNum - 1]. length != 0) {

	if (confirm("Delete all solve?") == true) {
		sessions[sesNum - 1] = [];
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

		document.getElementById("times_container").innerHTML = "";

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
	};
}
};

function timeContain() {
	timeCon.innerHTML = "";
	var endofTimeCon = 0;
	for (var ind0 = 0; ind0 < sessions[sesNum - 1].length; ind0++) {
		timeCon.innerHTML += " <span onclick='solveStat(" + ind0 + ")' class='solve_dp'>" + sessions[sesNum - 1][ind0].strng + "<\/span>";
		timeCon.innerHTML += (ind0 == sessions[sesNum - 1].length - 1) ? " " : ", ";

		endofTimeCon += 100;
		timeCon.scrollTo(0, endofTimeCon);
	};
};

function solveStat(i) {
	solveIndex = i;
	document.getElementById("solve_dialog").style.display = "inline-block";
	document.getElementById("solve_no").innerHTML = (i + 1);
	document.getElementById("solve_strng").innerHTML = sessions[sesNum - 1][i].strng;
	document.getElementById("solve_scram").innerHTML = sessions[sesNum - 1][i].trao;
};