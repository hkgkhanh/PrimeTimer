//##### OPTIONS #####

function changeSetting(){
	//hide all when solve
	hideAll = document.getElementById("hide_all").checked;

	//wide moves for bld
	wideMoves = document.getElementById("wide_moves").checked;

	//choose format for entering with typing
	var enterFormatType = document.getElementById("enter_format_type");
	enterFormatType_value = enterFormatType.options[enterFormatType.selectedIndex].value;

	//choose inspect type
	var inspectType = document.getElementById("inspect_type");
	inspectType_value = inspectType.checked;

	//choose hide type
	var hideType = document.getElementById("hide_type");
	hideType_value = hideType.checked;

	var drawType = document.getElementById("draw_type");
	drawType_value = drawType.checked;

	//time split
	var timeSplit = document.getElementById("time_split");
	timeSplit_value = parseInt(getTimeSplitVal());
	document.getElementById("time_split").value = timeSplit_value;

	//color
	bgColor_value = document.getElementById("bg_color").value;
	boardColor_value = document.getElementById("board_color").value;
	fontColor_value = document.getElementById("font_color").value;
	linkColor_value = document.getElementById("link_color").value;

	changeColor();
	saveColor();
	saveSettings();

	if (drawType_value) {
		document.getElementById("draw_scram_div").style.display = "block";

	} else {
		document.getElementById("draw_scram_div").style.display = "none";
	};
				
	//other stuff to change
	timerStatus = 0;
};

function changeTheme(bg, bd, fn, lk) {
	document.getElementById("bg_color").value = bg;
	document.getElementById("board_color").value = bd;
	document.getElementById("font_color").value = fn;
	document.getElementById("link_color").value = lk;

	changeSetting();
};

function changeColor() {
	//font color
	document.getElementById("div_scram_type").style.color = fontColor_value;
	document.getElementById("scram_type").style.color = fontColor_value;
	document.getElementById("scram_con").style.color = fontColor_value;
	document.getElementById("div_ses_choose").style.color = fontColor_value;
	document.getElementById("choose_session").style.color = fontColor_value;
	document.getElementById("avg_table").style.color = fontColor_value;
	document.getElementById("quick_avg_table").style.color = fontColor_value;
	document.getElementById("avg_table").style.borderColor = fontColor_value;
	document.getElementById("quick_avg_table").style.borderColor = fontColor_value;
	document.getElementById("mean_stat").style.color = fontColor_value;
	document.getElementById("about_div").style.color = fontColor_value;
	document.getElementById("options_div").style.color = fontColor_value;
	document.getElementById("inspect_type").style.color = fontColor_value;
	document.getElementById("enter_format_type").style.color = fontColor_value;
	document.getElementById("hide_type").style.color = fontColor_value;
	document.getElementById("time_split").style.color = fontColor_value;
	document.getElementById("draw_type").style.color = fontColor_value;
	document.getElementById("shortcut_table").style.color = fontColor_value;
	document.getElementById("stat_dialog").style.color = fontColor_value;
	document.getElementById("solve_dialog").style.color = fontColor_value;
	document.getElementById("solve_scram_table").style.color = fontColor_value;
	document.getElementById("time").style.color = fontColor_value;
	document.getElementById("div_hide").style.color = fontColor_value;
	document.getElementById("draw_scram_div").style.color = fontColor_value;
	document.getElementById("solve_comment").style.color = fontColor_value;

	for (i = 0; i < document.getElementsByClassName("tab").length; i++) {
  		document.getElementsByClassName("tab")[i].style.color = fontColor_value;
	}
	for (i = 0; i < document.getElementsByClassName("solve_dp").length; i++) {
  		document.getElementsByClassName("solve_dp")[i].style.color = fontColor_value;
  		document.getElementsByClassName("solve_dp")[i].style.borderColor = fontColor_value;
	}
	document.getElementById("reset_ses").style.color = "#000000"; // these are consts
	document.getElementById("del_ses").style.color = "#000000";
	document.getElementById("add_ses").style.color = "#000000";
	//bg color
	document.body.style.backgroundColor = bgColor_value;
	document.getElementById("time").style.backgroundColor = bgColor_value;
	document.getElementById("about_div").style.backgroundColor = bgColor_value;
	document.getElementById("options_div").style.backgroundColor = bgColor_value;
	document.getElementById("enter_format_type").style.backgroundColor = bgColor_value;
	document.getElementById("choose_session").style.backgroundColor = bgColor_value;
	document.getElementById("scram_type").style.backgroundColor = bgColor_value;
	document.getElementById("time_split").style.backgroundColor = bgColor_value;

	for (i = 0; i < document.getElementsByClassName("tab").length; i++) {
  		document.getElementsByClassName("tab")[i].style.backgroundColor = bgColor_value;
	}
	//board color
	document.getElementById("stat_dialog").style.backgroundColor = boardColor_value;
	document.getElementById("solve_dialog").style.backgroundColor = boardColor_value;
	document.getElementById("inspect_type").style.backgroundColor = boardColor_value;
	document.getElementById("hide_type").style.backgroundColor = boardColor_value;
	document.getElementById("draw_type").style.backgroundColor = boardColor_value;
	document.getElementById("solve_comment").style.backgroundColor = boardColor_value;
	//link color
	for (i = 0; i < document.getElementsByClassName("link").length; i++) {
  		document.getElementsByClassName("link")[i].style.color = linkColor_value;
	}
};

function hideDiv() {
	document.getElementById("div_hide").style.display = "none";
	document.getElementById("time").style.display = "block";

	document.getElementById("tabs").style.visibility = "visible";
	document.getElementById("scram_div").style.visibility = "visible";
	document.getElementById("draw_scram_div").style.visibility = "visible";
	document.getElementById("quick_avg_table").style.visibility = "visible";
};

function displayChooseSession() {
	getSession();
	for (let i = 1; i <= sessions.length; i++) {
		addOpt(i);
	}
}

function displaySession(){
	
	getSession();

	var chooseSession = document.getElementById("choose_session");
	var sesChosen = chooseSession.options[chooseSession.selectedIndex].value;

	sesNum = parseInt(sesChosen);

	clearStatDiv();

	bestSingle = 99999;
	bestSinglestrng = "-";

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

	timeContain();

	if (sessions[sesNum - 1].arr.length != 0) {

		for (var ind0 = 0; ind0 < sessions[sesNum - 1].arr.length; ind0++) {
			if (sessions[sesNum - 1].arr[ind0].time < bestSingle && sessions[sesNum - 1].arr[ind0].pen != "dnf") {
				bestSingle = sessions[sesNum - 1].arr[ind0].time;
				bestSinglestrng = sessions[sesNum - 1].arr[ind0].strng;
				bestSingleTrao = sessions[sesNum - 1].arr[ind0].trao;
			};
		};
		document.getElementById("best_single").innerHTML = bestSinglestrng;
		document.getElementById("cur_single").innerHTML = sessions[sesNum - 1].arr[sessions[sesNum - 1].arr.length - 1].strng;
				
		document.getElementById("ses_mean").innerHTML = "0.00";
		document.getElementById("ses_not_dnf").innerHTML = "0";
		document.getElementById("ses_length").innerHTML = "0";

		calc();
	};
};

function getTimeSplitVal() {
	var val = document.getElementById("time_split").value;
	if (val === NaN || val < 1) {
		val = 1;
	} else if (val > 99) {
		val = 99;
	}
	return val;
}