//##### SAVE SESSIONS AND OPTIONS #####

function getSettings() {
	if (window.localStorage !== undefined) {

		if (localStorage.isptType) {
			var jsonIsptTypeText = localStorage.getItem("isptType");
			document.getElementById("inspect_type").checked = JSON.parse(jsonIsptTypeText);
		} else {
			document.getElementById("inspect_type").checked = true;
		}
		if (localStorage.enterType) {
			var jsonEnterTypeText = localStorage.getItem("enterType");
			document.getElementById("enter_time_type").selectedIndex = JSON.parse(jsonEnterTypeText) - 1;
		} else {
			document.getElementById("enter_time_type").selectedIndex = 0;
		}
		if (localStorage.enterFormat) {
			var jsonEnterFormatText = localStorage.getItem("enterFormat");
			document.getElementById("enter_format_type").selectedIndex = JSON.parse(jsonEnterFormatText) - 1;
		} else {
			document.getElementById("enter_format_type").selectedIndex = 0;
		}
		if (localStorage.hideType) {
			var jsonHideTypeText = localStorage.getItem("hideType");
			document.getElementById("hide_type").checked = JSON.parse(jsonHideTypeText);
		} else {
			document.getElementById("hide_type").checked = false;
		}
		if (localStorage.drawType) {
			var jsonDrawTypeText = localStorage.getItem("drawType");
			document.getElementById("draw_type").checked = JSON.parse(jsonDrawTypeText);
		} else {
			document.getElementById("draw_type").checked = true;
		}
		if (localStorage.hideAllType) {
			var jsonHideAllText = localStorage.getItem("hideAllType");
			document.getElementById("hide_all").checked = JSON.parse(jsonHideAllText);
		} else {
			document.getElementById("hide_all").checked = false;
		}
		if (localStorage.wideMovesType) {
			var jsonWideMovesText = localStorage.getItem("wideMovesType");
			document.getElementById("wide_moves").checked = JSON.parse(jsonWideMovesText);
		} else {
			document.getElementById("wide_moves").checked = false;
		}
		if (localStorage.timeSplit) {
			var jsonTimeSplitText = localStorage.getItem("timeSplit");
			document.getElementById("time_split").value = JSON.parse(jsonTimeSplitText);
		} else {
			document.getElementById("time_split").value = 1;
		}
		if (localStorage.timerFont) {
			var jsonTimerFontText = JSON.parse(localStorage.getItem("timerFont"));
			switch (jsonTimerFontText) {
				case "segment7Standard":
					document.getElementById("timer_font_type").selectedIndex = 0;
					break;
				case "Arial":
					document.getElementById("timer_font_type").selectedIndex = 1;
					break;
				case "Roboto":
					document.getElementById("timer_font_type").selectedIndex = 2;
			}
		} else {
			document.getElementById("timer_font_type").selectedIndex = 0;
		}
	};
};

function saveSettings() {
	var jsonIsptType;
	var jsonEnterType;
	var jsonFormatType;
	var jsonHideType;
	var jsonDrawType;
	var jsonHideAll;
	var jsonWideMoves;
	var jsonTimeSplit;
	var jsonTimerFont;

	if (window.localStorage !== undefined) {

   		jsonIsptType = JSON.stringify(inspectType_value);
   		jsonEnterType = JSON.stringify(enterTimeType_value);
   		jsonFormatType = JSON.stringify(enterFormatType_value);
   		jsonHideType = JSON.stringify(hideType_value);
   		jsonDrawType = JSON.stringify(drawType_value);
   		jsonHideAll = JSON.stringify(hideAll);
   		jsonWideMoves = JSON.stringify(wideMoves);
   		jsonTimeSplit = JSON.stringify(timeSplit_value);
   		jsonTimerFont = JSON.stringify(timerFont_value);
	  	localStorage.setItem("isptType", jsonIsptType);
   		localStorage.setItem("enterType", jsonEnterType);
   		localStorage.setItem("enterFormat", jsonFormatType);
  		localStorage.setItem("hideType", jsonHideType);
  		localStorage.setItem("drawType", jsonDrawType);
  		localStorage.setItem("hideAllType", jsonHideAll);
  		localStorage.setItem("wideMovesType", jsonWideMoves);
  		localStorage.setItem("timeSplit", jsonTimeSplit);
  		localStorage.setItem("timerFont", jsonTimerFont);
  		return;
 	};
};

function saveColor() {
	var jsonBgColor;
	var jsonBoardColor;
	var jsonFontColor;
	var jsonLinkColor;

	if (window.localStorage !== undefined) {

		jsonBgColor = JSON.stringify(bgColor_value);
		jsonBoardColor = JSON.stringify(boardColor_value);
		jsonFontColor = JSON.stringify(fontColor_value);
		jsonLinkColor = JSON.stringify(linkColor_value);
		localStorage.setItem("bgColor", jsonBgColor);
		localStorage.setItem("boardColor", jsonBoardColor);
		localStorage.setItem("fontColor", jsonFontColor);
		localStorage.setItem("linkColor", jsonLinkColor);
		return;
	};
}

function getColor() {
	if (window.localStorage != undefined) {

		if (localStorage.bgColor) {
			var jsonBgColorText = localStorage.getItem("bgColor");
			document.getElementById("bg_color").value = JSON.parse(jsonBgColorText);
		} else {
			document.getElementById("bg_color").value = '#FFFBFF';
		}
		if (localStorage.boardColor) {
			var jsonBoardColorText = localStorage.getItem("boardColor");
			document.getElementById("board_color").value = JSON.parse(jsonBoardColorText);
		} else {
			document.getElementById("board_color").value = '#F4FA58';
		}
		if (localStorage.fontColor) {
			var jsonFontColorText = localStorage.getItem("fontColor");
			document.getElementById("font_color").value = JSON.parse(jsonFontColorText);
		} else {
			document.getElementById("font_color").value = '#000000';
		}
		if (localStorage.linkColor) {
			var jsonLinkColorText = localStorage.getItem("linkColor");
			document.getElementById("link_color").value = JSON.parse(jsonLinkColorText);
		} else {
			document.getElementById("link_color").value = '#0000FF';
		}
	};
}

function saveSession() {
	var jsonArr = [];

	if (window.localStorage !== undefined) {
		var jsonSes = JSON.stringify(sessions);
		localStorage.setItem("sessions", jsonSes);
		return;
	};
};

function getSession() {
	if (window.localStorage !== undefined) {
			if (localStorage.sessions) {
				var jsonText = localStorage.getItem("sessions");
	    		sessions = JSON.parse(jsonText);
	    	} else {
	    		for (var i = 0 ; i < 10; i++) {
	    			sessions.push({arr: []});
	    		}
	    	}
	}
};

function saveScramType() {
	var jsonScramType;

    var selectedType = document.getElementById("scram_type").selectedIndex;
    jsonScramType = JSON.stringify(selectedType);
    localStorage.setItem("scramType", jsonScramType);
  	return;
};

function getScramType() {
	if (window.localStorage !== undefined) {

		if (localStorage.scramType) {
			var jsonScramTypeText = localStorage.getItem("scramType");
			document.getElementById("scram_type").selectedIndex = JSON.parse(jsonScramTypeText);
		} else {
			document.getElementById("scram_type").selectedIndex = 1;
		}
	}
};