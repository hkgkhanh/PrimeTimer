//##### OPTIONS #####

function changeSetting(){
	//hide all when solve
	hideAll = document.getElementById("hide_all").checked;

	//wide moves for bld
	wideMoves = document.getElementById("wide_moves").checked;

	//choose timer/import
	var enterTimeType = document.getElementById("enter_time_type");
	enterTimeType_value = enterTimeType.options[enterTimeType.selectedIndex].value;

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

	if (enterTimeType_value == 1) {

		importFocus = 0;
		mnt = 0;
		sec = 0;
		document.getElementById("time_imported").style.display = "none";
		document.getElementById("time").style.display = "block"
		document.getElementById("scnd").style.display = "inline-block";
		document.getElementById("draw_scram_dialog").style.display = "block";
	};
	if (enterTimeType_value == 2) {

		importFocus = 1;
		document.getElementById("time_imported").style.display = "block";
		document.getElementById("scnd").style.display = "none";
		document.getElementById("mnt").style.display = "none";
		document.getElementById("two_dot").style.display = "none";
		document.getElementById("draw_scram_dialog").style.display = "block";
	};
	if (drawType_value) {
		document.getElementById("draw_scram_dialog").style.display = "block";

	} else {
		document.getElementById("draw_scram_dialog").style.display = "none";
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
	document.getElementById("avg_table").style.borderColor = "#585858";
	document.getElementById("mean_stat").style.color = fontColor_value;
	document.getElementById("del_table").style.color = fontColor_value;
	document.getElementById("solve_table").style.color = fontColor_value;
	document.getElementById("about_dialog").style.color = fontColor_value;
	document.getElementById("option_dialog").style.color = fontColor_value;
	document.getElementById("inspect_type").style.color = fontColor_value;
	document.getElementById("enter_time_type").style.color = fontColor_value;
	document.getElementById("enter_format_type").style.color = fontColor_value;
	document.getElementById("hide_type").style.color = fontColor_value;
	document.getElementById("time_split").style.color = fontColor_value;
	document.getElementById("draw_type").style.color = fontColor_value;
	document.getElementById("shortcut_table").style.color = fontColor_value;
	document.getElementById("stat_dialog").style.color = fontColor_value;
	document.getElementById("solve_dialog").style.color = fontColor_value;
	document.getElementById("solve_scram_table").style.color = fontColor_value;
	document.getElementById("time").style.color = fontColor_value;
	document.getElementById("import_plhd").style.color = fontColor_value;
	document.getElementById("div_hide").style.color = fontColor_value;
	document.getElementById("draw_scram_dialog").style.color = fontColor_value;
	document.getElementById("solve_comment").style.color = fontColor_value;

	for (i = 0; i < document.getElementsByClassName("diff_cell").length; i++) {
		if (document.getElementsByClassName("diff_cell")[i].innerHTML == "0.00") {
  		document.getElementsByClassName("diff_cell")[i].style.color = fontColor_value;
  	}
	}
	//bg color
	document.body.style.backgroundColor = bgColor_value;
	document.getElementById("time").style.backgroundColor = bgColor_value;
	document.getElementById("import_plhd").style.backgroundColor = bgColor_value;
	//board color
	document.getElementById("about_dialog").style.backgroundColor = boardColor_value;
	document.getElementById("option_dialog").style.backgroundColor = boardColor_value;
	document.getElementById("stat_dialog").style.backgroundColor = boardColor_value;
	document.getElementById("solve_dialog").style.backgroundColor = boardColor_value;
	document.getElementById("inspect_type").style.backgroundColor = boardColor_value;
	document.getElementById("time_split").style.backgroundColor = boardColor_value;
	document.getElementById("enter_time_type").style.backgroundColor = boardColor_value;
	document.getElementById("enter_format_type").style.backgroundColor = boardColor_value;
	document.getElementById("hide_type").style.backgroundColor = boardColor_value;
	document.getElementById("draw_type").style.backgroundColor = boardColor_value;
	document.getElementById("scram_td").style.backgroundColor = boardColor_value;
	document.getElementById("div_scram_type").style.backgroundColor = boardColor_value;
	document.getElementById("scram_type").style.backgroundColor = boardColor_value;
	document.getElementById("scram_con").style.backgroundColor = boardColor_value;
	document.getElementById("choose_session").style.backgroundColor = boardColor_value;
	document.getElementById("stat_td").style.backgroundColor = boardColor_value;
	document.getElementById("draw_scram_dialog").style.backgroundColor = boardColor_value;
	document.getElementById("solve_comment").style.backgroundColor = boardColor_value;
	//link color
	for (i = 0; i < document.getElementsByClassName("link").length; i++) {
  		document.getElementsByClassName("link")[i].style.color = linkColor_value;
	}
};

function hideDiv() {
	document.getElementById("div_hide").style.display = "none";
	document.getElementById("time").style.display = "block";

	document.getElementById("buts").style.visibility = "visible";
	document.getElementById("stat_td").style.visibility = "visible";
	document.getElementById("scram_td").style.visibility = "visible";
	document.getElementById("draw_scram_dialog").style.visibility = "visible";
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
	timeContain();
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