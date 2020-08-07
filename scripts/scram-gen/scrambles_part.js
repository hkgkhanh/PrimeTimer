//##### GENERATE AND GET SCRAMBLE #####

var lastDraw;
var newDiv;
function generateScram(){
				lastScram = scramble;
				document.getElementById("draw_other_wca").innerHTML = "";
				document.getElementById("scram_con").scrollTo(0, 0);
				scramType_value = document.getElementById("scram_type").value;

				if (scramType_value == "333mbf"){
					generate_333mbf();
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "skewb"){
					scramble = skewb_scrambler.getSkewbWCAScramble();
					drawCubeS(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "block";

				} else if (scramType_value == "clock"){
					generateClock();
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "relay25"){
					generate_relay25();
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "relay27"){
					generate_relay27();
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "mini_guildfold"){
					generate_mini_guildfold();
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "guildfold"){
					generate_guildfold();
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "112") {
					scramble = megascramble("112", Math.random()*2 + 2);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "133") {
					scramble = scrambler133.get133scramble();
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "223") {
					scramble = megascramble("223", Math.random()*3 + 8);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "233") {
					scramble = megascramble("233", Math.random()*7 + 18);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "334") {
					scramble = megascramble("334", Math.random()*10 + 30);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "335") {
					scramble = formatscramble("335", Math.random()*10 + 50);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "336") {
					scramble = megascramble("336", Math.random()*10 + 70);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "888") {
					scramble = megascramble("888", Math.random()*10 + 120);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "999") {
					scramble = megascramble("999", Math.random()*10 + 120);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "101010") {
					scramble = megascramble("101010", Math.random()*10 + 120);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "111111") {
					scramble = megascramble("111111", Math.random()*10 + 120);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "15p") {
					scramble = do15puzzle(false, Math.random()*5 + 30);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "sq2") {
					scramble = dosq2(Math.random()*5 + 20);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "ssq1t") {
					scramble = ssq1t_scramble(Math.random()*5 + 30);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "bsq") {
					scramble = sq1_scramble(2, Math.random()*5 + 20);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "bic") {
					scramble = bicube("bic", Math.random()*5 + 25);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "heli") {
					scramble = helicubescramble(Math.random()*5 + 40);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "cm3") {
					scramble = megascramble("cm3", 20);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "cm2") {
					scramble = megascramble("cm2", 20);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "fto") {
					scramble = megascramble("fto", Math.random()*3 + 20);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "gear") {
					scramble = megascramble("gear", Math.random()*2 + 3);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "sfl") {
					scramble = megascramble("sfl", Math.random()*5 + 20);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "ufo") {
					scramble = megascramble("ufo", Math.random()*5 + 20);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "prco") {
					scramble = megascramble("prco", Math.random()*5 + 40);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "giga") {
					scramble = gigascramble(300);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					
				} else if (scramType_value == "2223") {
					scramble = megascramble("2223", 25);
					drawCube2(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "block";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "2226") {
					scramble = megascramble("2226", 25);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "222so") {
					scramble = scramble_222.getRandomScramble();
					drawCube2(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "block";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "222o") {
					scramble = scramble_222.getOptimalScramble();
					drawCube2(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "block";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "222eg") {
					scramble = scramble_222.getEGScramble();
					drawCube2(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "block";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "222eg0") {
					scramble = scramble_222.getEG0Scramble();
					drawCube2(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "block";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "222eg1") {
					scramble = scramble_222.getEG1Scramble();
					drawCube2(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "block";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "222eg2") {
					scramble = scramble_222.getEG2Scramble();
					drawCube2(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "block";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "2gen") {
					scramble = megascramble("2gen", 25);
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "2genl") {
					scramble = megascramble("2genl", 25);
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "3gen_L") {
					scramble = megascramble("3gen_L", 25);
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "3gen_F") {
					scramble = megascramble("3gen_F", 25);
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "half") {
					scramble = megascramble("half", 25);
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "RrU") {
					scramble = megascramble("RrU", 25);
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "RrUu") {
					scramble = megascramble("RrUu", 25);
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "333r") {
					scramble = scramble_333.getRandomScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "lsll") {
					scramble = scramble_333.getLSLLScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "333e") {
					scramble = scramble_333.getEdgeScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "333c") {
					scramble = scramble_333.getCornerScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "333ll") {
					scramble = scramble_333.getLLScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "zbll") {
					scramble = scramble_333.getZBLLScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "zbls") {
					scramble = scramble_333.getZBLSScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "zzll") {
					scramble = scramble_333.getZZLLScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "f2l") {
					scramble = scramble_333.getF2LScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "l6e") {
					scramble = scramble_333.getLSEScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "cmll") {
					scramble = scramble_333.getCMLLScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
				} else if (scramType_value == "coll") {
					scramble = scramble_333.getCLLScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "ell") {
					scramble = scramble_333.getELLScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "eoline") {
					scramble = scramble_333.getEOLineScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "333bf" && wideMoves == true) {
					scramble = scramble_333.get3BLDScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "easy_cross") {
					scramble = scramble_333.getEasyCrossScramble();
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "roux") {
					scramble = megascramble("roux", 25);
					drawCube3(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "block";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "444si") {
					scramble = megascramble("444si", 40);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "4edge") {
					scramble = edgescramble("4edge", 10);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "555si") {
					scramble = megascramble("555si", 60);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "5edge") {
					scramble = edgescramble("5edge", 10);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "666p") {
					scramble = megascramble("666p", 80);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "666s") {
					scramble = megascramble("666s", 80);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "666si") {
					scramble = megascramble("666si", 80);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "6edge") {
					scramble = edgescramble("6edge", 15);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "777p") {
					scramble = megascramble("777p", 100);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "777s") {
					scramble = megascramble("777s", 100);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "777si") {
					scramble = megascramble("777si", 100);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "7edge") {
					scramble = edgescramble("7edge", 15);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "mgmo") {
					scramble = oldminxscramble(70);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "mgmp") {
					scramble = pochscramble(10, Math.ceil(70 / 10));
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "mgmc") {
					scramble = carrotscramble(10, Math.ceil(70 / 10));
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "minx2g") {
					scramble = megascramble("minx2g", 30);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "mlsll") {
					scramble = megascramble("mlsll", 17);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "pyro") {
					scramble = pyra_scrambler.getPyraOptimalScramble();
					drawCubeP(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "block";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "skbo") {
					scramble = skewb_scrambler.getSkewbOptimalScramble();
					drawCubeS(scramble);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "block";

				} else if (scramType_value == "sq1h") {
					scramble = sq1_scramble(1, 40);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "sq1t") {
					scramble = sq1_scramble(2, 20);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "clkj") {
					scramble = "UU" + c("u") + "dU" + c("u") + "dd" + c("u") + "Ud" + c("u") + "dU" + c("u") + "Ud" + c("u") + "UU" + c("u") + "UU" + c("u") + "UU" + c("u") + "dd" + c3() + c2() + "\ndd" + c("d") + "dU" + c("d") + "UU" + c("d") + "Ud" + c("d") + "UU" + c3() + "UU" + c3() + "Ud" + c3() + "dU" + c3() + "UU" + c3() + "dd" + c("d") + c2();
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "clkc") {
					ret = "";
					for (var i = 0; i < 4; i++) ret += "(" + (rn(12) - 5) + ", " + (rn(12) - 5) + ") / ";
					for (var i = 0; i < 6; i++) ret += "(" + (rn(12) - 5) + ") / ";
					for (var i = 0; i < 4; i++) ret += rndEl(["d", "U"]);

					scramble = ret;
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "clke") {
					scramble = "UU" + c("u") + "dU" + c("u") + "dU" + c("u") + "UU" + c("u") + "UU" + c("u") + "UU" + c("u") + "Ud" + c("u") + "Ud" + c("u") + "dd" + c("u") + "dd" + c3() + c2() + "\nUU" + c3() + "UU" + c3() + "dU" + c("d") + "dU" + c3() + "dd" + c("d") + "Ud" + c3() + "Ud" + c("d") + "UU" + c3() + "UU" + c("d") + "dd" + c("d") + c2();
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				} else if (scramType_value == "444yj") {
					scramble = yj4x4(40);
					document.getElementById("draw_other_wca").style.display = "none";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";

				}
				else {
					scramblers[scramType_value].initialize();
					randomScramble = scramblers[scramType_value].getRandomScramble();
					scramble = randomScramble.scramble_string;

					lastDraw = newDiv;
					newDiv = document.createElement("div");
					scramblers[scramType_value].drawScramble(newDiv, randomScramble.state, 200, 160);
					document.getElementById("draw_other_wca").style.display = "block";
					document.getElementById("222_draw_div").style.display = "none";
					document.getElementById("333_draw_div").style.display = "none";
					document.getElementById("pyram_draw_div").style.display = "none";
					document.getElementById("skb_draw_div").style.display = "none";
					document.getElementById("draw_other_wca").appendChild(newDiv);
				};

				if (scramble.length < 100) {
					document.getElementById("scram_con").style.overflowY = "hidden";
					document.getElementById("scram").style.fontSize = "20px";
				} else if (scramble.length >= 100 && scramble.length < 200) {
					document.getElementById("scram_con").style.overflowY = "hidden";
					document.getElementById("scram").style.fontSize = "17px";
				} else {
					document.getElementById("scram_con").style.overflowY = "scroll";
					document.getElementById("scram").style.fontSize = "14px";
				}
				document.getElementById("scram").innerHTML = scramble;
};
			
			//get mbld scrambles
			function generate_333mbf(){

				var mbfCubes = prompt("Enter number of cubes:");

				scramble = "";

				if (mbfCubes != null){

					for (var ind2 = 1; ind2 <= mbfCubes; ind2++) {

						var randomScramble = scramblers["333bf"].getRandomScramble();

						scramble = scramble + "" + ind2 + ") " + randomScramble.scramble_string + "<br>";
					};
				};
			};

			function generateClock() {
				var clkNum = ["0+", "1+", "2+", "3+", "4+", "5+", "6+", "1-", "2-", "3-", "4-", "5-"];
				var clkLastFour = [["", " UR"], ["", " DR"], ["", " DL"], ["", " UL"]];
				scramble = "UR? DR? DL? UL? U? R? D? L? ALL? y2 U? R? D? L? ALL?????";

				for (var i = 0; i < 14; i++) {
					scramble = scramble.replace('?', clkNum[Math.floor(Math.random() * clkNum.length)]);
				};
				for (var i = 0; i < 4; i++) {
					scramble = scramble.replace('?', clkLastFour[i][Math.floor(Math.random() * clkLastFour[i].length)]);
				};
			};

			function generate_relay25() {
				scramble = "";
				var randomScramble;
				randomScramble = scramblers["222"].getRandomScramble();
				scramble = scramble + "2) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["333"].getRandomScramble();
				scramble = scramble + "3) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["444"].getRandomScramble();
				scramble = scramble + "4) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["555"].getRandomScramble();
				scramble = scramble + "5) " + randomScramble.scramble_string + "<br>";
			};

			function generate_relay27() {
				scramble = "";
				var randomScramble;
				randomScramble = scramblers["222"].getRandomScramble();
				scramble = scramble + "2) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["333"].getRandomScramble();
				scramble = scramble + "3) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["444"].getRandomScramble();
				scramble = scramble + "4) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["555"].getRandomScramble();
				scramble = scramble + "5) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["666"].getRandomScramble();
				scramble = scramble + "6) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["777"].getRandomScramble();
				scramble = scramble + "7) " + randomScramble.scramble_string + "<br>";
			};

			function generate_mini_guildfold() {
				scramble = "";
				var randomScramble;
				randomScramble = scramblers["222"].getRandomScramble();
				scramble = scramble + "2) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["333"].getRandomScramble();
				scramble = scramble + "3) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["444"].getRandomScramble();
				scramble = scramble + "4) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["555"].getRandomScramble();
				scramble = scramble + "5) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["333oh"].getRandomScramble();
				scramble = scramble + "OH) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["pyram"].getRandomScramble();
				scramble = scramble + "Pyra) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["minx"].getRandomScramble();
				scramble = scramble + "Mega) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["sq1"].getRandomScramble();
				scramble = scramble + "Sq1) " + randomScramble.scramble_string + "<br>";
				//clock scram generate
				var clkNum = ["0+", "1+", "2+", "3+", "4+", "5+", "6+", "1-", "2-", "3-", "4-", "5-"];
				var clkLastFour = [["", " UR"], ["", " DR"], ["", " DL"], ["", " UL"]];
				clkScram = "UR? DR? DL? UL? U? R? D? L? ALL? y2 U? R? D? L? ALL?????";

				for (var i = 0; i < 14; i++) {
					clkScram = clkScram.replace('?', clkNum[Math.floor(Math.random() * clkNum.length)]);
				};
				for (var i = 0; i < 4; i++) {
					clkScram = clkScram.replace('?', clkLastFour[i][Math.floor(Math.random() * clkLastFour[i].length)]);
				};
				scramble = scramble + "Clk) " + clkScram + "<br>";
				scramble = scramble + "Skb) " + skewb_scrambler.getSkewbWCAScramble();
			};

			function generate_guildfold() {
				scramble = "";
				var randomScramble;
				randomScramble = scramblers["222"].getRandomScramble();
				scramble = scramble + "2) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["333"].getRandomScramble();
				scramble = scramble + "3) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["444"].getRandomScramble();
				scramble = scramble + "4) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["555"].getRandomScramble();
				scramble = scramble + "5) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["666"].getRandomScramble();
				scramble = scramble + "6) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["777"].getRandomScramble();
				scramble = scramble + "7) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["333oh"].getRandomScramble();
				scramble = scramble + "OH) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["pyram"].getRandomScramble();
				scramble = scramble + "Pyra) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["minx"].getRandomScramble();
				scramble = scramble + "Mega) " + randomScramble.scramble_string + "<br>";
				randomScramble = scramblers["sq1"].getRandomScramble();
				scramble = scramble + "Sq1) " + randomScramble.scramble_string + "<br>";
				//clock scram generate
				var clkNum = ["0+", "1+", "2+", "3+", "4+", "5+", "6+", "1-", "2-", "3-", "4-", "5-"];
				var clkLastFour = [["", " UR"], ["", " DR"], ["", " DL"], ["", " UL"]];
				clkScram = "UR? DR? DL? UL? U? R? D? L? ALL? y2 U? R? D? L? ALL?????";

				for (var i = 0; i < 14; i++) {
					clkScram = clkScram.replace('?', clkNum[Math.floor(Math.random() * clkNum.length)]);
				};
				for (var i = 0; i < 4; i++) {
					clkScram = clkScram.replace('?', clkLastFour[i][Math.floor(Math.random() * clkLastFour[i].length)]);
				};
				scramble = scramble + "Clk) " + clkScram + "<br>";
				scramble = scramble + "Skb) " + skewb_scrambler.getSkewbWCAScramble();
			};

function drawScram() {
	document.getElementById("draw_other_wca").innerHTML = "";
	scramType_value = document.getElementById("scram_type").value;
	drawType_value = document.getElementById("draw_type").value;
	
	if (scramType_value == "222" || scramType_value == "333" || scramType_value == "444" || scramType_value == "555" || scramType_value == "666" || scramType_value == "777" || scramType_value == "sq1" || scramType_value == "minx" || scramType_value == "pyram" || scramType_value == "333oh" || scramType_value == "333fm" || scramType_value == "333bf" || scramType_value == "444bf" || scramType_value == "555bf") {

		lastDraw = newDiv;
		newDiv = document.createElement("div");
		scramblers[scramType_value].drawScramble(newDiv, randomScramble.state, 200, 160);
		document.getElementById("draw_other_wca").appendChild(newDiv);
	};
};

function drawLastScram() {
	document.getElementById("draw_other_wca").innerHTML = "";
	scramType_value = document.getElementById("scram_type").value;
	let scrT = scramType_value;
	
	if (scramType_value == "222" || scramType_value == "333" || scramType_value == "444" || scramType_value == "555" || scramType_value == "666" || scramType_value == "777" || scramType_value == "sq1" || scramType_value == "mega" || scramType_value == "pyram" || scramType_value == "333oh" || scramType_value == "333fm" || scramType_value == "333bf" || scramType_value == "444bf" || scramType_value == "555bf") {

		document.getElementById("draw_other_wca").appendChild(lastDraw);

	} else if (scrT == "2223" || scrT == "222so" || scrT == "222o" || scrT == "222eg" || scrT == "222eg0" || scrT == "222eg1" || scrT == "222eg2") {
		document.getElementById("draw_other_wca").style.display = "none";
		document.getElementById("222_draw_div").style.display = "block";
		document.getElementById("333_draw_div").style.display = "none";
		document.getElementById("pyram_draw_div").style.display = "none";
		document.getElementById("skb_draw_div").style.display = "none";
		drawCube2(scramble);

	} else if (scrT == "333r" || scrT == "2gen" || scrT == "2genl" || scrT == "roux" || scrT == "3gen_L" || scrT == "3gen_F"  || scrT == "half"
		|| scrT == "RrU" || scrT == "RrUu" || scrT == "lsll" || scrT == "333e" || scrT == "333c" || scrT == "f2l" || scrT == "easy_cross"
		|| scrT == "333ll" || scrT == "zbll" || scrT == "zbls" || scrT == "l6e" || scrT == "cmll" || scrT == "coll" || scrT == "ell" || scrT == "eoline") {
		document.getElementById("draw_other_wca").style.display = "none";
		document.getElementById("222_draw_div").style.display = "none";
		document.getElementById("333_draw_div").style.display = "block";
		document.getElementById("pyram_draw_div").style.display = "none";
		document.getElementById("skb_draw_div").style.display = "none";
		drawCube3(scramble);
	} else if (scrT == "pyro") {
		document.getElementById("draw_other_wca").style.display = "none";
		document.getElementById("222_draw_div").style.display = "none";
		document.getElementById("333_draw_div").style.display = "none";
		document.getElementById("pyram_draw_div").style.display = "block";
		document.getElementById("skb_draw_div").style.display = "none";
		drawCubeP(scramble);

	} else if (scrT == "skbo" || scrT == "skewb") {
		document.getElementById("draw_other_wca").style.display = "none";
		document.getElementById("222_draw_div").style.display = "none";
		document.getElementById("333_draw_div").style.display = "none";
		document.getElementById("pyram_draw_div").style.display = "none";
		document.getElementById("skb_draw_div").style.display = "block";
		drawCubeS(scramble);
	};
};


//##### https://github.com/euphwes/pyTwistyScrambler/tree/development/pyTwistyScrambler/js_resources

function circleOri(arr, a, b, c, d, ori) {
	var temp = arr[a];
	arr[a] = arr[d] ^ ori;
	arr[d] = arr[c] ^ ori;
	arr[c] = arr[b] ^ ori;
	arr[b] = temp ^ ori;
}

function circle(arr) {
	var length = arguments.length - 1, temp = arr[arguments[length]];
	for (var i=length; i>1; i--) {
		arr[arguments[i]] = arr[arguments[i-1]];
	}
	arr[arguments[1]] = temp;
	return circle;
}

function rndEl(x) {
	return x[~~(Math.random()*x.length)];
}

function rn(n) {
	return ~~(Math.random()*n)
}

function rndProb(plist) {
	var cum = 0;
	var curIdx = 0;
	for (var i = 0; i < plist.length; i++) {
		if (plist[i] == 0) {
			continue;
		}
		// console.log(plist, plist[i] / (cum + plist[i]));
		if (Math.random() < plist[i] / (cum + plist[i])) {
			curIdx = i;
		}
		cum += plist[i];
	}
	return curIdx;
}

function bicube(type, len) {
		function canMove(face) {
			var u = [],
				i, j, done, z = 0;
			for (i = 0; i < 9; i++) {
				done = 0;
				for (j = 0; j < u.length; j++) {
					if (u[j] == start[d[face][i]]) done = 1;
				}
				if (done == 0) {
					u[u.length] = start[d[face][i]];
					if (start[d[face][i]] == 0) z = 1;
				}
			}
			return (u.length == 5 && z == 1);
		}

		function doMove(face, amount) {
			for (var i = 0; i < amount; i++) {
				var t = start[d[face][0]];
				start[d[face][0]] = start[d[face][6]];
				start[d[face][6]] = start[d[face][4]];
				start[d[face][4]] = start[d[face][2]];
				start[d[face][2]] = t;
				t = start[d[face][7]];
				start[d[face][7]] = start[d[face][5]];
				start[d[face][5]] = start[d[face][3]];
				start[d[face][3]] = start[d[face][1]];
				start[d[face][1]] = t;
			}
		}

		var d = [
			[0, 1, 2, 5, 8, 7, 6, 3, 4],
			[6, 7, 8, 13, 20, 19, 18, 11, 12],
			[0, 3, 6, 11, 18, 17, 16, 9, 10],
			[8, 5, 2, 15, 22, 21, 20, 13, 14]
		];
		var start = [1, 1, 2, 3, 3, 2, 4, 4, 0, 5, 6, 7, 8, 9, 10, 10, 5, 6, 7, 8, 9, 11, 11],
			move = "UFLR",
			s = "",
			arr = [],
			poss, done, i, j, x, y;
		while (arr.length < len) {
			poss = [1, 1, 1, 1];
			for (j = 0; j < 4; j++) {
				if (poss[j] == 1 && !canMove(j))
					poss[j] = 0;
			}
			done = 0;
			while (done == 0) {
				x = rn(4);
				if (poss[x] == 1) {
					y = rn(3) + 1;
					doMove(x, y);
					done = 1;
				}
			}
			arr[arr.length] = [x, y];
			if (arr.length >= 2) {
				if (arr[arr.length - 1][0] == arr[arr.length - 2][0]) {
					arr[arr.length - 2][1] = (arr[arr.length - 2][1] + arr[arr.length - 1][1]) % 4;
					arr = arr.slice(0, arr.length - 1);
				}
			}
			if (arr.length >= 1) {
				if (arr[arr.length - 1][1] == 0) {
					arr = arr.slice(0, arr.length - 1);
				}
			}
		}
		for (i = 0; i < len; i++) {
			s += move[arr[i][0]] + cubesuff[arr[i][1] - 1] + " ";
		}
		return s;
}

// Clock functions.
function c(s) {
	var array = [s + "=0", s + "+1", s + "+2", s + "+3", s + "+4", s + "+5", s + "+6", s + "-5", s + "-4", s + "-3", s + "-2", s + "-1"];
	return " " + rndEl(array) + " ";
}

function c2() {
	return rndEl(["U", "d"]) + rndEl(["U", "d"]);
}

function c3() {
	return "     "
}

function do15puzzle(mirrored, len) {
	var moves = (mirrored ? ["U", "L", "R", "D"] : ["D", "R", "L", "U"]);
	var effect = [
		[0, -1],
		[1, 0],
		[-1, 0],
		[0, 1]
	];
	var x = 0,
		 y = 3,
		 k, done, r, lastr = 5;
	ret = "";
	for (k = 0; k < len; k++) {
		done = false;
		while (!done) {
			r = rn(4);
			if (x + effect[r][0] >= 0 && x + effect[r][0] <= 3 && y + effect[r][1] >= 0 && y + effect[r][1] <= 3 && r + lastr != 3) {
				done = true;
				x += effect[r][0];
				y += effect[r][1];
				ret += moves[r] + " ";
				lastr = r;
			}
		}
	}
	return ret;
}

function pochscramble(x, y) {
	var ret = "";
	var i, j;
	for (i = 0; i < y; i++) {
		ret += "  ";
		for (j = 0; j < x; j++) {
			ret += (j % 2 == 0 ? "R" : "D") + rndEl(["++", "--"]) + " ";
		}
		ret += "U" + (ret.endsWith("-- ") ? "'\n" : " \n") + "<br>";
	}
	return ret;
}

function carrotscramble(x, y) {
	var ret = "";
	var i, j;
	for (i = 0; i < y; i++) {
		ret += " ";
		for (j = 0; j < x / 2; j++) {
			ret += rndEl(["+", "-"]) + rndEl(["+", "-"]) + " ";
		}
		ret += "U" + rndEl(["'\n", " \n"]) + "<br>";
	}
	return ret;
}

function gigascramble(len) {
	var ret = "";
	var i, j;
	for (i = 0; i < Math.ceil(len / 10); i++) {
		ret += "  ";
		for (j = 0; j < 10; j++) {
			ret += (j % 2 == 0 ? ("Rr".charAt(rn(2))) : ("Dd".charAt(rn(2)))) + rndEl(["+ ", "++", "- ", "--"]) + " ";
		}
		ret += "y" + rndEl(minxsuff) + "\n";
	}
	return ret;
}

function oldminxscramble(len) {
	var faces = ["F", "B", "U", "D", "L", "DBR", "DL", "BR", "DR", "BL", "R", "DBL"];
	// adjacency table
	var adj = [0x554, 0xaa8, 0x691, 0x962, 0xa45, 0x58a, 0x919, 0x626, 0x469, 0x896, 0x1a5, 0x25a];
	var used = 0;
	var face;
	var ret = "";
	for (var j = 0; j < len; j++) {
		do {
			face = rn(12);
		} while (((used >> face) & 1) != 0);
		ret += faces[face] + rndEl(minxsuff) + " ";
		used &= ~adj[face];
		used |= 1 << face;
	}
	return ret;
}

function dosq2(len) {
	var i = 0;
	ret = "";
	while (i < len) {
		var rndu = rn(12) - 5;
		var rndd = rn(12) - 5;
		if (rndu != 0 || rndd != 0) {
			i++;
			ret += "(" + rndu + "," + rndd + ") / ";
		}
	}
	return ret;
}

var cubesuff=["","2","'"];
var minxsuff=["","2","'","2'"];
var args = {
		"111": [[["x"],["y"],["z"]],cubesuff], // 1x1x1
		"2223": [[["U"],["R"],["F"]],cubesuff], // 2x2x2 (3-gen)
		"2226": [[[["U","D"]],[["R","L"]],[["F","B"]]],cubesuff], // 2x2x2 (6-gen)
		"333o": [[["U","D"],["R","L"],["F","B"]],cubesuff], // 3x3x3 (old style)
		"334": [[[["U","U'","U2"],["u","u'","u2"]],[["R2","L2","M2"]],[["F2","B2","S2"]]]], // 3x3x4
		"336": [[[["U","U'","U2"],["u","u'","u2"],["3u","3u2","3u'"]],[["R2","L2","M2"]],[["F2","B2","S2"]]]], // 3x3x6
		"888": [[["U","D","u","d","3u","3d","4u"],["R","L","r","l","3r","3l","4r"],["F","B","f","b","3f","3b","4f"]],cubesuff], // 8x8x8 (SiGN)
		"999": [[["U","D","u","d","3u","3d","4u","4d"],["R","L","r","l","3r","3l","4r","4l"],["F","B","f","b","3f","3b","4f","4b"]],cubesuff], // 9x9x9 (SiGN)
		"101010": [[["U","D","u","d","3u","3d","4u","4d","5u"],["R","L","r","l","3r","3l","4r","4l","5r"],["F","B","f","b","3f","3b","4f","4b","5f"]],cubesuff], // 10x10x10 (SiGN)
		"111111": [[["U","D","u","d","3u","3d","4u","4d","5u","5d"],["R","L","r","l","3r","3l","4r","4l","5r","5l"],["F","B","f","b","3f","3b","4f","4b","5f","5b"]],cubesuff], // 11x11x11 (SiGN)
		"444si": [[["U","D","u"],["R","L","r"],["F","B","f"]],cubesuff], // 4x4x4 (SiGN)
		"444wca": [[["U","D","Uw"],["R","L","Rw"],["F","B","Fw"]],cubesuff], // 4x4x4 (WCA)
		"555si": [[["U","D","u","d"],["R","L","r","l"],["F","B","f","b"]],cubesuff], // 5x5x5 (SiGN)
		"555wca": [[["U","D","Uw","Dw"],["R","L","Rw","Lw"],["F","B","Fw","Bw"]],cubesuff], // 5x5x5 (WCA)
		"666p": [[["U","D","2U","2D","3U"],["R","L","2R","2L","3R"],["F","B","2F","2B","3F"]],cubesuff], // 6x6x6 (prefix)
		"666wca": [[["U","D","Uw","Dw","3Uw"],["R","L","Rw","Lw","3Rw"],["F","B","Fw","Bw","3Fw"]],cubesuff], // 6x6x6 (WCA)
		"666s": [[["U","D","U&sup2;","D&sup2;","U&sup3;"],["R","L","R&sup2;","L&sup2;","R&sup3;"],["F","B","F&sup2;","B&sup2;","F&sup3;"]],cubesuff], // 6x6x6 (suffix)
		"666si": [[["U","D","u","d","3u"],["R","L","r","l","3r"],["F","B","f","b","3f"]],cubesuff], // 6x6x6 (SiGN)
		"777p": [[["U","D","2U","2D","3U","3D"],["R","L","2R","2L","3R","3L"],["F","B","2F","2B","3F","3B"]],cubesuff], // 7x7x7 (prefix)
		"777wca": [[["U","D","Uw","Dw","3Uw","3Dw"],["R","L","Rw","Lw","3Rw","3Lw"],["F","B","Fw","Bw","3Fw","3Bw"]],cubesuff], // 7x7x7 (prefix)
		"777s": [[["U","D","U&sup2;","D&sup2;","U&sup3;","D&sup3;"],["R","L","R&sup2;","L&sup2;","R&sup3;","L&sup3;"],["F","B","F&sup2;","B&sup2;","F&sup3;","B&sup3;"]],cubesuff], // 7x7x7 (suffix)
		"777si": [[["U","D","u","d","3u","3d"],["R","L","r","l","3r","3l"],["F","B","f","b","3f","3b"]],cubesuff], // 7x7x7 (SiGN)
		"cm3": [[[["U<","U>","U2"],["E<","E>","E2"],["D<","D>","D2"]],[["R^","Rv","R2"],["M^","Mv","M2"],["L^","Lv","L2"]]]], // Cmetrick
		"cm2": [[[["U<","U>","U2"],["D<","D>","D2"]],[["R^","Rv","R2"],["L^","Lv","L2"]]]], // Cmetrick Mini
		"233": [[[["U","U'","U2"]],["R2","L2"],["F2","B2"]]], // Domino/2x3x3
		"223": [[[["U","U'","U2"],["D","D'","D2"]],["R2"],["F2"]]], // 2x2x3
		"fto": [[["U","D"],["F","B"],["L","BR"],["R","BL"]],["","'"]], // FTO/Face-Turning Octa
		"gear": [[["U"],["R"],["F"]],["","2","3","4","5","6","'","2'","3'","4'","5'"]],
		"sfl": [[["R","L"],["U","D"]],cubesuff], // Super Floppy Cube
		"ufo": [[["A"],["B"],["C"],[["U","U'","U2'","U2","U3"]]]], // UFO
		"2gen": [[["U"],["R"]],cubesuff], // 2-generator <R,U>
		"2genl": [[["U"],["L"]],cubesuff], // 2-generator <L,U>
		"roux": [[["U"],["M"]],cubesuff], // Roux-generator <M,U>
		"3gen_F": [[["U"],["R"],["F"]],cubesuff], // 3-generator <F,R,U>
		"3gen_L": [[["U"],["R","L"]],cubesuff], // 3-generator <R,U,L>
		"RrU": [[["U"],["R","r"]],cubesuff], // 3-generator <R,r,U>
		"RrUu": [[["U","u"],["R","r"]],cubesuff], // <R,r,U,u>
		"minx2g": [[["U"],["R"]],minxsuff], // megaminx 2-gen
		"mlsll": [[[["R U R'","R U2 R'","R U' R'","R U2' R'"]],[["F' U F","F' U2 F","F' U' F","F' U2' F"]],[["U","U2","U'","U2'"]]]], // megaminx LSLL
		"half": [[["U","D"],["R","L"],["F","B"]],["2"]], // 3x3x3 half turns
		"lsll": [[[["R U R'","R U2 R'","R U' R'"]],[["F' U F","F' U2 F","F' U' F"]],[["U","U2","U'"]]]], // 3x3x3 last slot + last layer (old)
		"lsll_L": [[[["L' U L","L' U2 L","L' U' L"]],[["F U F'","F U2 F'","F U' F'"]],[["U","U2","U'"]]]], // 3x3x3 last slot + last layer lefty
		"prco": [[["F","B"],["U","D"],["L","DBR"],["R","DBL"],["BL","DR"],["BR","DL"]],minxsuff], // Pyraminx Crystal (old style)
		"skb": [[["R"],["L"],["B"],["U"]],["","'"]], // Skewb
		"112": [[["R"],["R"]],cubesuff], // 1x1x2
}
	
var args2 = {
		'sia113': '#{[["U","u"],["R","r"]],%c} z2 #{[["U","u"],["R","r"]],%c}',
		'sia123': '#{[["U"],["R","r"]],%c} z2 #{[["U"],["R","r"]],%c}',
		'sia222': '#{[["U"],["R"],["F"]],%c} z2 y #{[["U"],["R"],["F"]],%c}',
		'335': '#{[[["U","U\'","U2"],["D","D\'","D2"]],["R2","L2"],["F2","B2"]]} / ${333}',
		'337': '#{[[["U","U\'","U2","u","u\'","u2","U u","U u\'","U u2","U\' u","U\' u\'","U\' u2","U2 u","U2 u\'","U2 u2"],["D","D\'","D2","d","d\'","d2","D d","D d\'","D d2","D\' d","D\' d\'","D\' d2","D2 d","D2 d\'","D2 d2"]],["R2","L2"],["F2","B2"]]} / ${333}',
		'r234': '2) ${222so}\n3) ${333}\n4) ${[444,40]}',
		'r2345': '${r234}\n5) ${["555",60]}',
		'r23456': '${r2345}\n6) ${["666p",80]}',
		'r234567': '${r23456}\n7) ${["777p",100]}'
}

var edges = {
		'4edge': ["r b2",["b2 r'","b2 U2 r U2 r U2 r U2 r"],["u"]],
		'5edge': ["r R b B",["B' b' R' r'","B' b' R' U2 r U2 r U2 r U2 r"],["u","d"]], 
		'6edge': ["3r r 3b b",["3b' b' 3r' r'","3b' b' 3r' U2 r U2 r U2 r U2 r","3b' b' r' U2 3r U2 3r U2 3r U2 3r","3b' b' r2 U2 3r U2 3r U2 3r U2 3r U2 r"],["u","3u","d"]],
		'7edge': ["3r r 3b b",["3b' b' 3r' r'","3b' b' 3r' U2 r U2 r U2 r U2 r","3b' b' r' U2 3r U2 3r U2 3r U2 3r","3b' b' r2 U2 3r U2 3r U2 3r U2 3r U2 r"],["u","3u","3d","d"]]
}

function megascramble(type, length) {
	var value = args[type];
	switch (value.length) {
		case 1: return mega(value[0], [""], length);
		case 2: return mega(value[0], value[1], length);
		case 3: return mega(value[0], value[1], value[2]);
	}
}

function edgescramble(type, length) {
	var value = edges[type];
	return edge(value[0], value[1], value[2], length);
}

function edge(start, end, moves, len) {
		var u=0,d=0,movemis=[];
		var triggers=[["R","R'"],["R'","R"],["L","L'"],["L'","L"],["F'","F"],["F","F'"],["B","B'"],["B'","B"]];
		var ud=["U","D"];
		var scramble = start;
		// initialize move misalignments
		for (var i=0; i<moves.length; i++) {
			movemis[i] = 0;
		}

		for (var i=0; i<len; i++) {
			// apply random moves
			var done = false;
			while (!done) {
				var v = "";
				for (var j=0; j<moves.length; j++) {
					var x = rn(4);
					movemis[j] += x;
					if (x!=0) {
						done = true;
						v += " " + moves[j] + cubesuff[x-1];
					}
				}
			}
			// apply random trigger, update U/D
			var trigger = rn(8);
			var layer = rn(2);
			var turn = rn(3);
			scramble += v + " " + triggers[trigger][0] + " " + ud[layer] + cubesuff[turn] + " " + triggers[trigger][1];
			if (layer==0) {u += turn+1;}
			if (layer==1) {d += turn+1;}
		}

		// fix everything
		for (var i=0; i<moves.length; i++) {
			var x = 4-(movemis[i]%4);
			if (x<4) {
				scramble += " " + moves[i] + cubesuff[x-1];
			}
		}
		u = 4-(u%4); d = 4-(d%4);
		if (u<4) {
			scramble += " U" + cubesuff[u-1];
		}
		if (d<4) {
			scramble += " D" + cubesuff[d-1];
		}
		scramble += " " + rndEl(end);
		return scramble;
}

function mega(turns, suffixes, length) {
		if (suffixes == undefined) {
			suffixes = [""];
		}
		if (length == undefined) {
			length = len;
		}
		var donemoves = 0;
		var lastaxis = -1;
		var s = [];
		var first, second;
		for (var i = 0; i < length; i++) {
			do {
				first = rn(turns.length);
				second = rn(turns[first].length);
				if (first != lastaxis) {
					donemoves = 0;
					lastaxis = first;
				}
			} while (((donemoves >> second) & 1) != 0);
			donemoves |= 1 << second;
			if (turns[first][second].constructor == Array) {
				s.push(rndEl(turns[first][second]) + rndEl(suffixes));
			} else {
				s.push(turns[first][second] + rndEl(suffixes));
			}
		}
		return s.join(' ');
}

function gigascramble(len) {
	var ret = "";
	var i, j;
	for (i = 0; i < Math.ceil(len / 10); i++) {
		ret += "  ";
		for (j = 0; j < 10; j++) {
			ret += (j % 2 == 0 ? ("Rr".charAt(rn(2))) : ("Dd".charAt(rn(2)))) + rndEl(["+ ", "++", "- ", "--"]) + " ";
		}
		ret += "y" + rndEl(minxsuff) + "\n" + "<br>";
	}
	return ret;
}

function helicubescramble(len) {
	var faces = ["UF", "UR", "UB", "UL", "FR", "BR", "BL", "FL", "DF", "DR", "DB", "DL"];
	// adjacency table
	var adj = [0x09a, 0x035, 0x06a, 0x0c5, 0x303, 0x606, 0xc0c, 0x909, 0xa90, 0x530, 0xa60, 0x5c0];
	var used = 0;
	var face;
	var ret = [];
	for (var j = 0; j < len; j++) {
		do {
			face = rn(12);
		} while (((used >> face) & 1) != 0);
		ret.push(faces[face]);
		used &= ~adj[face];
		used |= 1 << face;
	}
	return ret.join(" ");
}

function sq1_scramble(type, len) {
	seq = [];
	var i, k;
	sq1_getseq(1, type, len);
	var s = "";
	for (i = 0; i < seq[0].length; i++) {
		k = seq[0][i];
		if (k[0] == 7) {
			s += "/";
		} else {
			s += " (" + k[0] + "," + k[1] + ") ";
		}
	}
	return s;
}

function ssq1t_scramble(len) {
		seq = [];
		var i;
		sq1_getseq(2, 0, len);
		var s = seq[0],
			t = seq[1],
			u = "";
		if (s[0][0] == 7) s = [
			[0, 0]
		].concat(s);
		if (t[0][0] == 7) t = [
			[0, 0]
		].concat(t);
		for (i = 0; i < len; i++) {
			u += "(" + s[2 * i][0] + "," + t[2 * i][0] + "," + t[2 * i][1] + "," + s[2 * i][1] + ") / ";
		}
		return u;
}

function sq1_getseq(num, type, len) {
		for (var n = 0; n < num; n++) {
			p = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0];
			seq[n] = [];
			var cnt = 0;
			while (cnt < len) {
				var x = rn(12) - 5;
				var y = (type == 2) ? 0 : rn(12) - 5;
				var size = (x == 0 ? 0 : 1) + (y == 0 ? 0 : 1);
				if ((cnt + size <= len || type != 1) && (size > 0 || cnt == 0)) {
					if (sq1_domove(x, y)) {
						if (type == 1) cnt += size;
						if (size > 0) seq[n][seq[n].length] = [x, y];
						if (cnt < len || type != 1) {
							cnt++;
							seq[n][seq[n].length] = [7, 0];
							sq1_domove(7, 0);
						}
					}
				}
			}
		}
}

function sq1_domove(x, y) {
		var i, px, py;
		if (x == 7) {
			for (i = 0; i < 6; i++) {
				circle(p, i + 6, i + 12);
			}
			return true;
		} else {
			if (p[(17 - x) % 12] || p[(11 - x) % 12] || p[12 + (17 - y) % 12] || p[12 + (11 - y) % 12]) {
				return false;
			} else {
				// do the move itself
				px = p.slice(0, 12);
				py = p.slice(12, 24);
				for (i = 0; i < 12; i++) {
					p[i] = px[(12 + i - x) % 12];
					p[i + 12] = py[(12 + i - y) % 12];
				}
				return true;
			}
		}
}

function yj4x4(len) {
		// the idea is to keep the fixed center on U and do Rw or Lw, Fw or Bw, to not disturb it
		var turns = [
			["U", "D"],
			["R", "L", "r"],
			["F", "B", "f"]
		];
		var donemoves = [];
		var lastaxis;
		var fpos = 0; // 0 = Ufr, 1 = Ufl, 2 = Ubl, 3 = Ubr
		var j, k;
		var s = "";
		lastaxis = -1;
		for (j = 0; j < len; j++) {
			var done = 0;
			do {
				var first = rn(turns.length);
				var second = rn(turns[first].length);
				if (first != lastaxis || donemoves[second] == 0) {
					if (first == lastaxis) {
						donemoves[second] = 1;
						var rs = rn(cubesuff.length);
						if (first == 0 && second == 0) {
							fpos = (fpos + 4 + rs) % 4;
						}
						if (first == 1 && second == 2) { // r or l
							if (fpos == 0 || fpos == 3) s += "l" + cubesuff[rs] + " ";
							else s += "r" + cubesuff[rs] + " ";
						} else if (first == 2 && second == 2) { // f or b
							if (fpos == 0 || fpos == 1) s += "b" + cubesuff[rs] + " ";
							else s += "f" + cubesuff[rs] + " ";
						} else {
							s += turns[first][second] + cubesuff[rs] + " ";
						}
					} else {
						for (k = 0; k < turns[first].length; k++) {
							donemoves[k] = 0;
						}
						lastaxis = first;
						donemoves[second] = 1;
						var rs = rn(cubesuff.length);
						if (first == 0 && second == 0) {
							fpos = (fpos + 4 + rs) % 4;
						}
						if (first == 1 && second == 2) { // r or l
							if (fpos == 0 || fpos == 3) s += "l" + cubesuff[rs] + " ";
							else s += "r" + cubesuff[rs] + " ";
						} else if (first == 2 && second == 2) { // f or b
							if (fpos == 0 || fpos == 1) s += "b" + cubesuff[rs] + " ";
							else s += "f" + cubesuff[rs] + " ";
						} else {
							s += turns[first][second] + cubesuff[rs] + " ";
						}
					}
					done = 1;
				}
			} while (done == 0);
		}
		return s;
}