//##### ABOUT, OPTIONS, STAT AND SOLVE DIALOGS #####
var maxInt = Number.MAX_SAFE_INTEGER;

document.getElementById("draw_scram_dialog").style.display = "block";
document.getElementById("about_dialog").style.display = "none";
document.getElementById("solve_dialog").style.display = "none";

document.getElementById("close_solve_but").onclick = function() {
	document.getElementById("solve_dialog").style.display = "none";
};

document.getElementById("logo").onclick = function(){
	document.getElementById("about_dialog").style.display = "block";
};

document.getElementById("close_about_but").onclick = function(){
	document.getElementById("about_dialog").style.display = "none";
};

document.getElementById("option").onclick = function(){
	document.getElementById("option_dialog").style.display = "block";
};

document.getElementById("close_opt_but").onclick = function(){
	changeSetting();
	document.getElementById("option_dialog").style.display = "none";
};

document.getElementById("close_stat_but").onclick = function() {
	document.getElementById("stats").innerHTML = "";
	document.getElementById("stat_dialog").style.display = "none";
};

function selectText(element) {
  	if (/INPUT|TEXTAREA/i.test(element.tagName)) {
    	element.focus();
    	if (element.setSelectionRange) {
      	element.setSelectionRange(0, element.value.length);
    	} else {
      	element.select();
    	}
    	return;
  	}
  	if (window.getSelection) { // All browsers, except IE <=8
   	window.getSelection().selectAllChildren(element);
  	} else if (document.body.createTextRange) { // IE <=8
    	var range = document.body.createTextRange();
    	range.moveToElementText(element);
    	range.select();
  	}
}

function showStat(statNum) {
	
	switch (statNum) {
		case 0:
			if (sessions[sesNum - 1].arr.length != 0) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				calc_dlc();
				statCon += "session mean (" + document.getElementById("ses_not_dnf").innerHTML + "/" + sessions[sesNum - 1].arr.length + "): " + document.getElementById("ses_mean").innerHTML + " (&sigma; = " + dlc.toFixed(2) + ")" + "<br>";
				for (var ind18 = 0; ind18 < sessions[sesNum - 1].arr.length; ind18++) {
					statCon += (ind18 + 1) + ". " + sessions[sesNum - 1].arr[ind18].strng + " &emsp; " + sessions[sesNum - 1].arr[ind18].trao + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 1:
			if (sessions[sesNum - 1].arr.length != 0) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "single: " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 1].strng + "<br>";
				statCon += "1. " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 1].strng + " &emsp; " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 1].trao + "<br>";
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 1.5:
			if (sessions[sesNum - 1].arr.length != 0) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "single: " + bestSinglestrng + "<br>";
				statCon += "1. " + bestSinglestrng + " &emsp; " + bestSingleTrao + "<br>";
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 3:
			if (sessions[sesNum - 1].arr.length >= 3) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "mean of 3: " + mean3strngArray[mean3strngArray.length - 1] + "<br>";
				for (var ind14 = 1; ind14 <= 3; ind14++) {
					statCon += ind14 + ". " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 4 + ind14].strng + " &emsp; " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 4 + ind14].trao + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 3.5:
			if (sessions[sesNum - 1].arr.length >= 3) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "mean of 3: " + bestMean3strng + "<br>";
				for (var ind15 = 1; ind15 <= 3; ind15++) {
					statCon += ind15 + ". " + bestM3strngArray[ind15 - 1] + " &emsp; " + bestM3TraoArray[ind15 - 1] + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 5:
			if (sessions[sesNum - 1].arr.length >= 5) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 5: " + avg5strngArray[avg5strngArray.length - 1] + "<br>";
				for (var ind16 = 1; ind16 <= 5; ind16++) {
					statCon += ind16 + ". " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 6 + ind16].strng + " &emsp; " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 6 + ind16].trao + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 5.5:
			if (sessions[sesNum - 1].arr.length >= 5) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 5: " + bestAvg5strng + "<br>";
				for (var ind17 = 1; ind17 <= 5; ind17++) {
					statCon += ind17 + ". " + bestA5strngArray[ind17 - 1] + " &emsp; " + bestA5TraoArray[ind17 - 1] + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 12:
			if (sessions[sesNum - 1].arr.length >= 12) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 12: " + avg12strngArray[avg12strngArray.length - 1] + "<br>";
				for (var ind24 = 1; ind24 <= 12; ind24++) {
					statCon += ind24 + ". " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 13 + ind24].strng + " &emsp; " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 13 + ind24].trao + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 12.5:
			if (sessions[sesNum - 1].arr.length >= 12) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 12: " + bestAvg12strng + "<br>";
				for (var ind25 = 1; ind25 <= 12; ind25++) {
					statCon += ind25 + ". " + bestA12strngArray[ind25 - 1] + " &emsp; " + bestA12TraoArray[ind25 - 1] + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 50:
			if (sessions[sesNum - 1].arr.length >= 50) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 50: " + avg50strngArray[avg50strngArray.length - 1] + "<br>";
				for (var ind32 = 1; ind32 <= 50; ind32++) {
					statCon += ind32 + ". " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 51 + ind32].strng + " &emsp; " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 51 + ind32].trao + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 50.5:
			if (sessions[sesNum - 1].arr.length >= 50) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 50: " + bestAvg50strng + "<br>";
				for (var ind33 = 1; ind33 <= 50; ind33++) {
					statCon += ind33 + ". " + bestA50strngArray[ind33 - 1] + " &emsp; " + bestA50TraoArray[ind33 - 1] + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 100:
			if (sessions[sesNum - 1].arr.length >= 100) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 100: " + avg100strngArray[avg100strngArray.length - 1] + "<br>";
				for (var ind40 = 1; ind40 <= 100; ind40++) {
					statCon += ind40 + ". " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 101 + ind40].strng + " &emsp; " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 101 + ind40].trao + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 100.5:
			if (sessions[sesNum - 1].arr.length >= 100) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 100: " + bestAvg100strng + "<br>";
				for (var ind41 = 1; ind41 <= 100; ind41++) {
					statCon += ind41 + ". " + bestA100strngArray[ind41 - 1] + " &emsp; " + bestA100TraoArray[ind41 - 1] + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

	    case 200:
	    	if (sessions[sesNum - 1].arr.length >= 200) {
		   		document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 200: " + avg200strngArray[avg200strngArray.length - 1] + "<br>";
				for (var ind60 = 1; ind60 <= 200; ind60++) {
					statCon += ind60 + ". " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 201 + ind60].strng + " &emsp; " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 201 + ind60].trao + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 200.5:
			if (sessions[sesNum - 1].arr.length >= 200) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 200: " + bestAvg200strng + "<br>";
				for (var ind61 = 1; ind61 <= 200; ind61++) {
					statCon += ind61 + ". " + bestA200strngArray[ind61 - 1] + " &emsp; " + bestA200TraoArray[ind61 - 1] + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 500:
			if (sessions[sesNum - 1].arr.length >= 500) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 500: " + avg500strngArray[avg500strngArray.length - 1] + "<br>";
				for (var ind62 = 1; ind62 <= 500; ind462++) {
					statCon += ind62 + ". " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 501 + ind62].strng + " &emsp; " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 501 + ind62].trao + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 500.5:
			if (sessions[sesNum - 1].arr.length >= 500) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 500: " + bestAvg500strng + "<br>";
				for (var ind63 = 1; ind63 <= 100; ind63++) {
					statCon += ind63 + ". " + bestA500strngArray[ind63 - 1] + " &emsp; " + bestA500TraoArray[ind63 - 1] + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 1000:
			if (sessions[sesNum - 1].arr.length >= 1000) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 1000: " + avg1000strngArray[avg1000strngArray.length - 1] + "<br>";
				for (var ind64 = 1; ind64 <= 1000; ind64++) {
					statCon += ind64 + ". " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 1001 + ind64].strng + " &emsp; " + sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 1001 + ind64].trao + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
			break;

		case 1000.5:
			if (sessions[sesNum - 1].arr.length >= 1000) {
				document.getElementById("stat_dialog").style.display = "block";
				var statCon = "";
				statCon += "average of 1000: " + bestAvg1000strng + "<br>";
				for (var ind65 = 1; ind65 <= 1000; ind65++) {
					statCon += ind65 + ". " + bestA1000strngArray[ind65 - 1] + " &emsp; " + bestA1000TraoArray[ind65 - 1] + "<br>";
				};
				document.getElementById("stats").innerHTML = statCon;
				selectText(document.getElementById("stats"));
			}
	};
};