//##### CALCULATE MEAN AND AVERAGE #####
			function calc(){
				if (sessions[sesNum - 1].length != 0) {
					calc_mean();
				};
				if (sessions[sesNum - 1].length >= 3){
					calc_mo3();
				};
				if (sessions[sesNum - 1].length >= 5){
					calc_ao5();
				};
				if (sessions[sesNum - 1].length >= 12){
					calc_ao12();
				};
				if (sessions[sesNum - 1].length >= 50){
					calc_ao50();
				};
				if (sessions[sesNum - 1].length >= 100){
					calc_ao100();
				};
				if (sessions[sesNum - 1].length >= 200){
					calc_ao200();
				};
				if (sessions[sesNum - 1].length >= 500){
					calc_ao500();
				};
				if (sessions[sesNum - 1].length >= 1000){
					calc_ao1000();
				};
			};

			function calc_mean() {
				sesSum = 0;
				mean = 0;
				var ind6 = 0;

				for (var ind5 = 0; ind5 < sessions[sesNum - 1].length; ind5++) {
					if (sessions[sesNum - 1][ind5].pen != "dnf") {
						sesSum += sessions[sesNum - 1][ind5].time;
						ind6++;
					};
				};
				mean = sesSum / ind6;

				var meanMin = Math.floor(mean / 60);
				var meanSec = Math.round((mean % 60) * 100) / 100;

				if (meanMin == 0) {
					var meanstrng = meanSec.toFixed(2);
				} else {
					if (meanSec < 10) {
						var meanstrng = meanMin + ":0" + meanSec.toFixed(2);
					} else {
						var meanstrng = meanMin + ":" + meanSec.toFixed(2);
					};
				};

				document.getElementById("ses_mean").innerHTML = meanstrng;
				document.getElementById("ses_not_dnf").innerHTML = ind6;
				document.getElementById("ses_length").innerHTML = sessions[sesNum - 1].length;
			};

			function calc_mo3() {
				for (var ind9 = 0; ind9 < sessions[sesNum - 1].length - 2; ind9++) {

					if (sessions[sesNum - 1][ind9].pen != "dnf" && sessions[sesNum - 1][ind9 + 1].pen != "dnf" && sessions[sesNum - 1][ind9 + 2].pen != "dnf") {

						var mean3 = (sessions[sesNum - 1][ind9].time + sessions[sesNum - 1][ind9 + 1].time + sessions[sesNum - 1][ind9 + 2].time) / 3;

						mean3Array.push(mean3);

						var m3Min = Math.floor(mean3 / 60);
						var m3Sec = Math.round((mean3 % 60) * 100) / 100;

						if (m3Min == 0) {
							var mean3strng = m3Sec.toFixed(2);
						} else {
							if (m3Sec < 10) {
								var mean3strng = m3Min + ":0" + m3Sec.toFixed(2);
							} else {
								var mean3strng = m3Min + ":" + m3Sec.toFixed(2);
							};
						};
						mean3strngArray.push(mean3strng);

						if (mean3 < bestMean3) {
							bestMean3 = mean3;
							bestMean3strng = mean3strng;
							bestM3strngArray = [sessions[sesNum - 1][ind9].strng, sessions[sesNum - 1][ind9 + 1].strng, sessions[sesNum - 1][ind9 + 2].strng];
							bestM3TraoArray = [sessions[sesNum - 1][ind9].trao, sessions[sesNum - 1][ind9 + 1].trao, sessions[sesNum - 1][ind9 + 2].trao];
						};

					} else {
						var mean3strng = "DNF";
						var mean3 = Math.pow(2, 53) - 1;
						mean3Array.push(mean3);
						mean3strngArray.push(mean3strng);
					};
				};
				document.getElementById("cur_mo3").innerHTML = mean3strngArray[mean3strngArray.length - 1];
				document.getElementById("best_mo3").innerHTML = bestMean3strng;
			};

			function calc_ao5() {
				for (var ind19 = 0; ind19 < sessions[sesNum - 1].length - 4; ind19++) {
					var ind20 = 0;
					var array5 = [];
					var array5Time = [];

					for (var ind21 = 0; ind21 < 5; ind21++) {
						array5.push(sessions[sesNum - 1][ind19 + ind21]);
						array5Time.push(sessions[sesNum - 1][ind19 + ind21].time);
					};
					for (var ind22 = 0; ind22 < 5; ind22++) {
						if (array5[ind22].pen == "dnf") {
							ind20++;
							array5Time[ind22] = Math.pow(2, 53) - 1;
						};
					};

					if (ind20 < 2) {
						array5Time.sort(compare);

						var avg5 = (array5Time[1] + array5Time[2] + array5Time[3]) / 3;

						avg5Array.push(avg5);

						var a5Min = Math.floor(avg5 / 60);
						var a5Sec = Math.round((avg5 % 60) * 100) / 100;

						if (a5Min == 0) {
							var avg5strng = a5Sec.toFixed(2);
						} else {
							if (a5Sec < 10) {
								var avg5strng = a5Min + ":0" + a5Sec.toFixed(2);
							} else {
								var avg5strng = a5Min + ":" + a5Sec.toFixed(2);
							};
						};
						avg5strngArray.push(avg5strng);

						if (avg5 < bestAvg5) {
							bestA5strngArray = [];
							bestA5TraoArray = [];
							bestAvg5 = avg5;
							bestAvg5strng = avg5strng;
							for (var ind23 = 0; ind23 < 5; ind23++) {
								bestA5strngArray.push(sessions[sesNum - 1][ind19 + ind23].strng);
								bestA5TraoArray.push(sessions[sesNum - 1][ind19 + ind23].trao);
							};
						};

					} else {
						var avg5strng = "DNF";
						var avg5 = Math.pow(2, 53) - 1;
						avg5Array.push(avg12);
						avg5strngArray.push(avg5strng);
					};
				};
				document.getElementById("cur_ao5").innerHTML = avg5strngArray[avg5strngArray.length - 1];
				document.getElementById("best_ao5").innerHTML = bestAvg5strng;
			};

			function calc_ao12() {
				for (var ind19 = 0; ind19 < sessions[sesNum - 1].length - 11; ind19++) {
					var ind20 = 0;
					var array12 = [];
					var array12Time = [];

					for (var ind21 = 0; ind21 < 12; ind21++) {
						array12.push(sessions[sesNum - 1][ind19 + ind21]);
						array12Time.push(sessions[sesNum - 1][ind19 + ind21].time);
					};
					for (var ind22 = 0; ind22 < 12; ind22++) {
						if (array12[ind22].pen == "dnf") {
							ind20++;
							array12Time[ind22] = Math.pow(2, 53) - 1;
						};
					};

					if (ind20 < 2) {
						array12Time.sort(compare);

						var avg12 = (array12Time[1] + array12Time[2] + array12Time[3] + array12Time[4] + array12Time[5] + array12Time[6] + array12Time[7] + array12Time[8] + array12Time[9] + array12Time[10]) / 10;

						avg12Array.push(avg12);

						var a12Min = Math.floor(avg12 / 60);
						var a12Sec = Math.round((avg12 % 60) * 100) / 100;

						if (a12Min == 0) {
							var avg12strng = a12Sec.toFixed(2);
						} else {
							if (a12Sec < 10) {
								var avg12strng = a12Min + ":0" + a12Sec.toFixed(2);
							} else {
								var avg12strng = a12Min + ":" + a12Sec.toFixed(2);
							};
						};
						avg12strngArray.push(avg12strng);

						if (avg12 < bestAvg12) {
							bestA12strngArray = [];
							bestA12TraoArray = [];
							bestAvg12 = avg12;
							bestAvg12strng = avg12strng;
							for (var ind23 = 0; ind23 < 12; ind23++) {
								bestA12strngArray.push(sessions[sesNum - 1][ind19 + ind23].strng);
								bestA12TraoArray.push(sessions[sesNum - 1][ind19 + ind23].trao);
							};
						};

					} else {
						var avg12strng = "DNF";
						var avg12 = Math.pow(2, 53) - 1;
						avg12Array.push(avg12);
						avg12strngArray.push(avg12strng);
					};
				};
				document.getElementById("cur_ao12").innerHTML = avg12strngArray[avg12strngArray.length - 1];
				document.getElementById("best_ao12").innerHTML = bestAvg12strng;
			};

			function calc_ao50() {
				for (var ind26 = 0; ind26 < sessions[sesNum - 1].length - 49; ind26++) {
					var ind27 = 0;
					var array50 = [];
					var array50Time = [];

					for (var ind28 = 0; ind28 < 50; ind28++) {
						array50.push(sessions[sesNum - 1][ind26 + ind28]);
						array50Time.push(sessions[sesNum - 1][ind26 + ind28].time);
					};
					for (var ind29 = 0; ind29 < 50; ind29++) {
						if (array50[ind29].pen == "dnf") {
							ind27++;
							array50Time[ind29] = Math.pow(2, 53) - 1;
						};
					};

					if (ind27 < 4) {
						array50Time.sort(compare);

						var sum50 = 0;
						for (var ind30 = 3; ind30 < 47; ind30++) {
							sum50 += array50Time[ind30];
						};
						var avg50 = sum50 / 44;

						avg50Array.push(avg50);

						var a50Min = Math.floor(avg50 / 60);
						var a50Sec = Math.round((avg50 % 60) * 100) / 100;

						if (a50Min == 0) {
							var avg50strng = a50Sec.toFixed(2);
						} else {
							if (a50Sec < 10) {
								var avg50strng = a50Min + ":0" + a50Sec.toFixed(2);
							} else {
								var avg50strng = a50Min + ":" + a50Sec.toFixed(2);
							};
						};
						avg50strngArray.push(avg50strng);

						if (avg50 < bestAvg50) {
							bestA50strngArray = [];
							bestA50TraoArray = [];
							bestAvg50 = avg50;
							bestAvg50strng = avg50strng;
							for (var ind31 = 0; ind31 < 50; ind31++) {
								bestA50strngArray.push(sessions[sesNum - 1][ind26 + ind31].strng);
								bestA50TraoArray.push(sessions[sesNum - 1][ind26 + ind31].trao);
							};
						};

					} else {
						var avg50strng = "DNF";
						var avg50 = Math.pow(2, 53) - 1;
						avg50Array.push(avg50);
						avg50strngArray.push(avg50strng);
					};
				};
				document.getElementById("cur_ao50").innerHTML = avg50strngArray[avg50strngArray.length - 1];
				document.getElementById("best_ao50").innerHTML = bestAvg50strng;
			};

			function calc_ao100() {
				for (var ind34 = 0; ind34 < sessions[sesNum - 1].length - 99; ind34++) {
					var ind35 = 0;
					var array100 = [];
					var array100Time = [];

					for (var ind36 = 0; ind36 < 100; ind36++) {
						array100.push(sessions[sesNum - 1][ind34 + ind36]);
						array100Time.push(sessions[sesNum - 1][ind34 + ind36].time);
					};
					for (var ind37 = 0; ind37 < 100; ind37++) {
						if (array100[ind37].pen == "dnf") {
							ind35++;
							array100Time[ind37] = Math.pow(2, 53) - 1;
						};
					};

					if (ind35 < 6) {
						array100Time.sort(compare);

						var sum100 = 0;
						for (var ind38 = 5; ind38 < 95; ind38++) {
							sum100 += array100Time[ind38];
						};
						var avg100 = sum100 / 90;

						avg100Array.push(avg100);

						var a100Min = Math.floor(avg100 / 60);
						var a100Sec = Math.round((avg100 % 60) * 100) / 100;

						if (a100Min == 0) {
							var avg100strng = a100Sec.toFixed(2);
						} else {
							if (a100Sec < 10) {
								var avg100strng = a100Min + ":0" + a100Sec.toFixed(2);
							} else {
								var avg100strng = a100Min + ":" + a100Sec.toFixed(2);
							};
						};
						avg100strngArray.push(avg100strng);

						if (avg100 < bestAvg100) {
							bestA100strngArray = [];
							bestA100TraoArray = [];
							bestAvg100 = avg100;
							bestAvg100strng = avg100strng;
							for (var ind39 = 0; ind39 < 100; ind39++) {
								bestA100strngArray.push(sessions[sesNum - 1][ind34 + ind39].strng);
								bestA100TraoArray.push(sessions[sesNum - 1][ind34 + ind39].trao);
							};
						};

					} else {
						var avg100strng = "DNF";
						var avg100 = Math.pow(2, 53) - 1;
						avg100Array.push(avg100);
						avg100strngArray.push(avg100strng);
					};
				};
				document.getElementById("cur_ao100").innerHTML = avg100strngArray[avg100strngArray.length - 1];
				document.getElementById("best_ao100").innerHTML = bestAvg100strng;
			};

			function calc_ao200() {
				for (var ind42 = 0; ind42 < sessions[sesNum - 1].length - 199; ind42++) {
					var ind43 = 0;
					var array200 = [];
					var array200Time = [];

					for (var ind44 = 0; ind44 < 200; ind44++) {
						array200.push(sessions[sesNum - 1][ind42 + ind44]);
						array200Time.push(sessions[sesNum - 1][ind42 + ind44].time);
					};
					for (var ind45 = 0; ind45 < 100; ind45++) {
						if (array200[ind45].pen == "dnf") {
							ind43++;
							array200Time[ind45] = Math.pow(2, 53) - 1;
						};
					};

					if (ind43 < 11) {
						array200Time.sort(compare);

						var sum200 = 0;
						for (var ind46 = 10; ind46 < 190; ind46++) {
							sum200 += array200Time[ind46];
						};
						var avg200 = sum200 / 180;

						avg200Array.push(avg200);

						var a200Min = Math.floor(avg200 / 60);
						var a200Sec = Math.round((avg200 % 60) * 100) / 100;

						if (a200Min == 0) {
							var avg200strng = a200Sec.toFixed(2);
						} else {
							if (a200Sec < 10) {
								var avg200strng = a200Min + ":0" + a200Sec.toFixed(2);
							} else {
								var avg200strng = a200Min + ":" + a200Sec.toFixed(2);
							};
						};
						avg200strngArray.push(avg200strng);

						if (avg200 < bestAvg200) {
							bestA200strngArray = [];
							bestA200TraoArray = [];
							bestAvg200 = avg200;
							bestAvg200strng = avg200strng;
							for (var ind47 = 0; ind47 < 100; ind47++) {
								bestA200strngArray.push(sessions[sesNum - 1][ind42 + ind47].strng);
								bestA200TraoArray.push(sessions[sesNum - 1][ind42 + ind47].trao);
							};
						};

					} else {
						var avg200strng = "DNF";
						var avg200 = Math.pow(2, 53) - 1;
						avg200Array.push(avg200);
						avg200strngArray.push(avg200strng);
					};
				};
				document.getElementById("cur_ao200").innerHTML = avg200strngArray[avg200strngArray.length - 1];
				document.getElementById("best_ao200").innerHTML = bestAvg200strng;
			};

			function calc_ao500() {
				for (var ind48 = 0; ind48 < sessions[sesNum - 1].length - 499; ind48++) {
					var ind49 = 0;
					var array500 = [];
					var array500Time = [];

					for (var ind50 = 0; ind50 < 500; ind50++) {
						array500.push(sessions[sesNum - 1][ind48 + ind50]);
						array500Time.push(sessions[sesNum - 1][ind48 + ind50].time);
					};
					for (var ind51 = 0; ind51 < 500; ind51++) {
						if (array500[ind51].pen == "dnf") {
							ind49++;
							array500Time[ind51] = Math.pow(2, 53) - 1;
						};
					};

					if (ind49 < 26) {
						array500Time.sort(compare);

						var sum500 = 0;
						for (var ind52 = 25; ind52 < 475; ind52++) {
							sum500 += array500Time[ind52];
						};
						var avg500 = sum500 / 450;

						avg500Array.push(avg500);

						var a500Min = Math.floor(avg500 / 60);
						var a500Sec = Math.round((avg500 % 60) * 100) / 100;

						if (a500Min == 0) {
							var avg500strng = a500Sec.toFixed(2);
						} else {
							if (a500Sec < 10) {
								var avg500strng = a500Min + ":0" + a500Sec.toFixed(2);
							} else {
								var avg500strng = a500Min + ":" + a500Sec.toFixed(2);
							};
						};
						avg500strngArray.push(avg500strng);

						if (avg500 < bestAvg500) {
							bestA500strngArray = [];
							bestA500TraoArray = [];
							bestAvg500 = avg500;
							bestAvg500strng = avg500strng;
							for (var ind53 = 0; ind53 < 500; ind53++) {
								bestA500strngArray.push(sessions[sesNum - 1][ind48 + ind53].strng);
								bestA500TraoArray.push(sessions[sesNum - 1][ind48 + ind53].trao);
							};
						};

					} else {
						var avg500strng = "DNF";
						var avg500 = Math.pow(2, 53) - 1;
						avg500Array.push(avg500);
						avg500strngArray.push(avg500strng);
					};
				};
				document.getElementById("cur_ao500").innerHTML = avg500strngArray[avg500strngArray.length - 1];
				document.getElementById("best_ao500").innerHTML = bestAvg500strng;
			};

			function calc_ao1000() {
				for (var ind54 = 0; ind54 < sessions[sesNum - 1].length - 999; ind54++) {
					var ind55 = 0;
					var array1000 = [];
					var array1000Time = [];

					for (var ind56 = 0; ind56 < 1000; ind56++) {
						array1000.push(sessions[sesNum - 1][ind54 + ind56]);
						array1000Time.push(sessions[sesNum - 1][ind54 + ind56].time);
					};
					for (var ind57 = 0; ind57 < 1000; ind57++) {
						if (array1000[ind57].pen == "dnf") {
							ind55++;
							array1000Time[ind57] = Math.pow(2, 53) - 1;
						};
					};

					if (ind55 < 6) {
						array1000Time.sort(compare);

						var sum1009 = 0;
						for (var ind58 = 50; ind58 < 950; ind58++) {
							sum1000 += array1000Time[ind58];
						};
						var avg1000 = sum1000 / 900;

						avg1000Array.push(avg1000);

						var a1000Min = Math.floor(avg1000 / 60);
						var a1000Sec = Math.round((avg1000 % 60) * 100) / 100;

						if (a1000Min == 0) {
							var avg1000strng = a1000Sec.toFixed(2);
						} else {
							if (a1000Sec < 10) {
								var avg1000strng = a1000Min + ":0" + a1000Sec.toFixed(2);
							} else {
								var avg1000strng = a1000Min + ":" + a1000Sec.toFixed(2);
							};
						};
						avg1000strngArray.push(avg1000strng);

						if (avg1000 < bestAvg1000) {
							bestA1000strngArray = [];
							bestA1000TraoArray = [];
							bestAvg1000 = avg1000;
							bestAvg1000strng = avg1000strng;
							for (var ind59 = 0; ind59 < 100; ind59++) {
								bestA1000strngArray.push(sessions[sesNum - 1][ind54 + ind59].strng);
								bestA1000TraoArray.push(sessions[sesNum - 1][ind54 + ind59].trao);
							};
						};

					} else {
						var avg1000strng = "DNF";
						var avg1000 = Math.pow(2, 53) - 1;
						avg1000Array.push(avg1000);
						avg1000strngArray.push(avg1000strng);
					};
				};
				document.getElementById("cur_ao1000").innerHTML = avg1000strngArray[avg1000strngArray.length - 1];
				document.getElementById("best_ao1000").innerHTML = bestAvg1000strng;
			};

			function compare(truoc, sau) {
				return truoc - sau;
			};

			function calc_dlc() {  // calculate standard devitation
				dlc = 0;
				var temp_sum = 0;
				for (let i = 0; i < sessions[sesNum - 1].length; i++) {
					temp_sum += Math.pow(sessions[sesNum - 1][i].time - mean, 2);
				};
				temp_sum /= sessions[sesNum - 1].length;
				dlc = Math.sqrt(temp_sum);
				var roundDLC = parseFloat(dlc); dlc = Math.round(roundDLC * 100)/100;
			}