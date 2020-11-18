var validSearchArr = [];

function solveSearch(typeParam, keyword) {
	validSearchArr = [];

	if (typeParam == "single") {
		for (var i = 0; i < sessions[sesNum - 1].arr.length; i++) {

			if (orderContain(sessions[sesNum - 1].arr[i].strng, keyword)) {
				validSearchArr.push(i);
			}
		}

	} else if (typeParam == "ao5") {

	}

	searchContain();
}

function getKeyword(elm) {
	return elm.value;
}

function searchContain() {
	var searchCon = document.getElementById("search_container");
	searchCon.innerHTML = "";
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

	if (validSearchArr.length != 0) {
		for (var i = 0; i < validSearchArr.length; i++) {
			var newRow = table.insertRow(1);

			var newIndCell = newRow.insertCell();
			newIndCell.innerHTML = (validSearchArr[i]+1);

			var newTimeCell = newRow.insertCell();
			newTimeCell.innerHTML =  "<span onclick='solveStat(" + validSearchArr[i] + ")' onmouseover='bgOnMouseOver(this)' onmouseout='bgOnMouseOut(this)' class='solve_dp'>" + sessions[sesNum - 1].arr[validSearchArr[i]].strng + "</span>";

			var newDiffCell = newRow.insertCell();
			newDiffCell.className = "diff_cell";
			
			var meanToRound = Math.round(mean * 100) / 100;
			var diffFontColor;
			var diff = sessions[sesNum - 1].arr[validSearchArr[i]].time - meanToRound;
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
			if (validSearchArr[i] < 4) {
				newAo5Cell.innerHTML = "-";
			} else {
				newAo5Cell.innerHTML = "<span onclick='showAo5Stat(" + (validSearchArr[i]-4) + ")' onmouseover='bgOnMouseOver(this)' onmouseout='bgOnMouseOut(this)' class='solve_dp'>" + avg5strngArray[validSearchArr[i] - 4] + "</span>";
			}
		};
	}
	searchCon.appendChild(table);
	searchCon.scrollTo(0, 0);
}