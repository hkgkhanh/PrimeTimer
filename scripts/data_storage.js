//##### SAVE SESSIONS AND OPTIONS #####

function getSettings() {
	if (window.localStorage !== undefined) {

		if (localStorage.isptType) {
			var jsonIsptTypeText = localStorage.getItem("isptType");
			document.getElementById("inspect_type").selectedIndex = JSON.parse(jsonIsptTypeText) - 1;
		} else {
			document.getElementById("inspect_type").selectedIndex = 0;
		}
		if (localStorage.enterType) {
			var jsonEnterTypeText = localStorage.getItem("enterType");
			document.getElementById("enter_time_type").selectedIndex = JSON.parse(jsonEnterTypeText) - 1;
		} else {
			document.getElementById("enter_time_type").selectedIndex = 0;
		}
		if (localStorage.hideType) {
			var jsonHideTypeText = localStorage.getItem("hideType");
			document.getElementById("hide_type").selectedIndex = JSON.parse(jsonHideTypeText) - 1;
		} else {
			document.getElementById("hide_type").selectedIndex = 0;
		}
		if (localStorage.drawType) {
			var jsonDrawTypeText = localStorage.getItem("drawType");
			document.getElementById("draw_type").selectedIndex = JSON.parse(jsonDrawTypeText) - 1;
		} else {
			document.getElementById("draw_type").selectedIndex = 0;
		}
		if (localStorage.hideAllType) {
			var jsonHideAllText = localStorage.getItem("hideAllType");
			document.getElementById("hide_all").checked = JSON.parse(jsonHideAllText);
		} else {
			document.getElementById("hide_all").checked = false;
		}
		if (localStorage.wideMovesType) {
			var	jsonWideMovesText = localStorage.getItem("wideMovesType");
			document.getElementById("wide_moves").checked = JSON.parse(jsonWideMovesText);
		} else {
			document.getElementById("wide_moves").checked = false;
		}
	};
};

function saveSettings() {
	var jsonIsptType;
	var jsonEnterType;
	var jsonHideType;
	var jsonDrawType;
	var jsonHideAll;
	var jsonWideMoves;

	if (window.localStorage !== undefined) {

   		jsonIsptType = JSON.stringify(inspectType_value);
   		jsonEnterType = JSON.stringify(enterTimeType_value);
   		jsonHideType = JSON.stringify(hideType_value);
   		jsonDrawType = JSON.stringify(drawType_value);
   		jsonHideAll = JSON.stringify(hideAll);
   		jsonWideMoves = JSON.stringify(wideMoves);
	  	localStorage.setItem("isptType", jsonIsptType);
   		localStorage.setItem("enterType", jsonEnterType);
  		localStorage.setItem("hideType", jsonHideType);
  		localStorage.setItem("drawType", jsonDrawType);
  		localStorage.setItem("hideAllType", jsonHideAll);
  		localStorage.setItem("wideMovesType", jsonWideMoves);
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
			document.getElementById("board_color").value = '#D3AB9E';
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
		var value = "";
		for (var ii = 0; ii < sessions.length; ii++) {

			jsonArr[ii] = JSON.stringify(sessions[ii]);
			localStorage.setItem("session" + ii, jsonArr[ii]);
		};
		return;
	};
};

function getSession() {
	if (window.localStorage !== undefined) {
		for (var ii = 0; ii < sessions.length; ii++) {

			if (localStorage.getItem("session" + ii) !== null) {
				var jsonText = localStorage.getItem("session" + ii);
	    		sessions[ii] = JSON.parse(jsonText);
	    	} else {
	    		sessions[ii] = [];
	    	}
		};
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