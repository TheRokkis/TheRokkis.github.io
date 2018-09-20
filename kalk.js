var karta2 = [0,0,0]
var karta4 = [133333,0,6667]
var	karta5 = [200000,43750,18750]
var karta6 = [750000,125000,50000]

function gold() {
	var index1 = parseInt(document.getElementById('den1_bg1').value) - 1;
	var index2 = parseInt(document.getElementById('den1_bg2').value) - 1;
	var index3 = parseInt(document.getElementById('den1_bg3').value) - 1;
  var index4 = parseInt(document.getElementById('den2_bg1').value) - 1;
	var index5 = parseInt(document.getElementById('den2_bg2').value) - 1;
	var index6 = parseInt(document.getElementById('den2_bg3').value) - 1;
  var index7 = parseInt(document.getElementById('den3_bg1').value) - 1;
	var index8 = parseInt(document.getElementById('den3_bg2').value) - 1;
	var index9 = parseInt(document.getElementById('den3_bg3').value) - 1;
  var index10 = parseInt(document.getElementById('den4_bg1').value) - 1;
	var index11 = parseInt(document.getElementById('den4_bg2').value) - 1;
	var index12 = parseInt(document.getElementById('den4_bg3').value) - 1;
  var index13 = parseInt(document.getElementById('den5_bg1').value) - 1;
	var index14 = parseInt(document.getElementById('den5_bg2').value) - 1;
	var index15 = parseInt(document.getElementById('den5_bg3').value) - 1;
	var listQwe = [karta2[0], karta4[0], karta5[0], karta6[0]];
	var value1 = listQwe[index1];
	var value2 = listQwe[index2];
	var value3 = listQwe[index3];
  var value4 = listQwe[index4];
	var value5 = listQwe[index5];
	var value6 = listQwe[index6];
  var value7 = listQwe[index7];
	var value8 = listQwe[index8];
	var value9 = listQwe[index9];
  var value10 = listQwe[index10];
	var value11 = listQwe[index11];
	var value12 = listQwe[index12];
  var value13 = listQwe[index13];
	var value14 = listQwe[index14];
	var value15 = listQwe[index15];
  var day1 = value1+value2+value3;
  var day2 = value4+value5+value6;
  var day3 = value7+value8+value9;
  var day4 = value10+value11+value12;
  var day5 = value13+value14+value15;
  
  if (index1==2 && index2==2) {
   var day1 = value3+value2+value1+value2;
} 
  else if (index2==2 && index3==2) {
  var day1 = value3+value2+value1+value2;
} 
  else if (index1==2 && index3==2) {
  var day1 = value3+value2+value1+value1;
} 
 else if (index1==3 && index2==3) {
   var day1 = value3+value2+value1+value2;
} 
  else if (index2==3 && index3==3) {
  var day1 = value3+value2+value1+value2;
} 
  else if (index1==3 && index3==3) {
  var day1 = value3+value2+value1+value1;
} 
  else if (index4==2 && index5==2) {
   var day2 = value6+value5+value4+value5;
} 
  else if (index5==2 && index6==2) {
  var day2 = value6+value5+value4+value5;
} 
  else if (index4==2 && index6==2) {
  var day2 = value6+value5+value4+value4;
} 
 else if (index4==3 && index5==3) {
   var day2 = value6+value5+value4+value5;
} 
  else if (index5==3 && index6==3) {
  var day2 = value6+value5+value4+value5;
} 
  else if (index4==3 && index6==3) {
  var day2 = value6+value5+value4+value4;
} 
  else if (index7==2 && index8==2) {
   var day3 = value9+value8+value7+value8;
} 
  else if (index8==2 && index9==2) {
  var day3 = value9+value8+value7+value8;
} 
  else if (index7==2 && index9==2) {
  var day3 = value9+value8+value7+value7;
} 
 else if (index7==3 && index8==3) {
   var day3 = value9+value8+value7+value8;
} 
  else if (index8==3 && index9==3) {
  var day3 = value9+value8+value7+value8;
} 
  else if (index7==3 && index9==3) {
  var day3 = value9+value8+value7+value7;
}
   else if (index10==2 && index11==2) {
   var day4 = value12+value11+value10+value11;
} 
  else if (index11==2 && index12==2) {
  var day4 = value12+value11+value10+value11;
} 
  else if (index10==2 && index12==2) {
  var day4 = value12+value11+value10+value10;
} 
 else if (index10==3 && index11==3) {
   var day4 = value12+value11+value10+value11;
} 
  else if (index11==3 && index12==3) {
  var day4 = value12+value11+value10+value11;
} 
  else if (index10==3 && index12==3) {
  var day4 = value12+value11+value10+value10;
}
  else if (index13==2 && index14==2) {
   var day5 = value15+value14+value13+value14;
} 
  else if (index14==2 && index15==2) {
  var day5 = value15+value14+value13+value14;
} 
  else if (index13==2 && index15==2) {
  var day5 = value15+value14+value13+value13;
} 
 else if (index13==3 && index14==3) {
   var day5 = value15+value14+value13+value14;
} 
  else if (index14==3 && index15==3) {
  var day5 = value15+value14+value13+value14;
} 
  else if (index13==3 && index15==3) {
  var day5 = value15+value14+value13+value13;
}
  sum =day1+day2+day3+day4+day5; 
	document.getElementById('resultgold').innerHTML = sum;
}

function BC() {
	var index1 = parseInt(document.getElementById('den1_bg1').value) - 1;
	var index2 = parseInt(document.getElementById('den1_bg2').value) - 1;
	var index3 = parseInt(document.getElementById('den1_bg3').value) - 1;
  var index4 = parseInt(document.getElementById('den2_bg1').value) - 1;
	var index5 = parseInt(document.getElementById('den2_bg2').value) - 1;
	var index6 = parseInt(document.getElementById('den2_bg3').value) - 1;
  var index7 = parseInt(document.getElementById('den3_bg1').value) - 1;
	var index8 = parseInt(document.getElementById('den3_bg2').value) - 1;
	var index9 = parseInt(document.getElementById('den3_bg3').value) - 1;
  var index10 = parseInt(document.getElementById('den4_bg1').value) - 1;
	var index11 = parseInt(document.getElementById('den4_bg2').value) - 1;
	var index12 = parseInt(document.getElementById('den4_bg3').value) - 1;
  var index13 = parseInt(document.getElementById('den5_bg1').value) - 1;
	var index14 = parseInt(document.getElementById('den5_bg2').value) - 1;
	var index15 = parseInt(document.getElementById('den5_bg3').value) - 1;
	var listQwe = [karta2[1], karta4[1], karta5[1], karta6[1]];
	var value1 = listQwe[index1];
	var value2 = listQwe[index2];
	var value3 = listQwe[index3];
  var value4 = listQwe[index4];
	var value5 = listQwe[index5];
	var value6 = listQwe[index6];
  var value7 = listQwe[index7];
	var value8 = listQwe[index8];
	var value9 = listQwe[index9];
  var value10 = listQwe[index10];
	var value11 = listQwe[index11];
	var value12 = listQwe[index12];
  var value13 = listQwe[index13];
	var value14 = listQwe[index14];
	var value15 = listQwe[index15];
  var day1 = value1+value2+value3;
  var day2 = value4+value5+value6;
  var day3 = value7+value8+value9;
  var day4 = value10+value11+value12;
  var day5 = value13+value14+value15;
  
  if (index1==2 && index2==2) {
   var day1 = value3+value2+value1+value2;
} 
  else if (index2==2 && index3==2) {
  var day1 = value3+value2+value1+value2;
} 
  else if (index1==2 && index3==2) {
  var day1 = value3+value2+value1+value1;
} 
 else if (index1==3 && index2==3) {
   var day1 = value3+value2+value1+value2;
} 
  else if (index2==3 && index3==3) {
  var day1 = value3+value2+value1+value2;
} 
  else if (index1==3 && index3==3) {
  var day1 = value3+value2+value1+value1;
} 
  else if (index4==2 && index5==2) {
   var day2 = value6+value5+value4+value5;
} 
  else if (index5==2 && index6==2) {
  var day2 = value6+value5+value4+value5;
} 
  else if (index4==2 && index6==2) {
  var day2 = value6+value5+value4+value4;
} 
 else if (index4==3 && index5==3) {
   var day2 = value6+value5+value4+value5;
} 
  else if (index5==3 && index6==3) {
  var day2 = value6+value5+value4+value5;
} 
  else if (index4==3 && index6==3) {
  var day2 = value6+value5+value4+value4;
} 
  else if (index7==2 && index8==2) {
   var day3 = value9+value8+value7+value8;
} 
  else if (index8==2 && index9==2) {
  var day3 = value9+value8+value7+value8;
} 
  else if (index7==2 && index9==2) {
  var day3 = value9+value8+value7+value7;
} 
 else if (index7==3 && index8==3) {
   var day3 = value9+value8+value7+value8;
} 
  else if (index8==3 && index9==3) {
  var day3 = value9+value8+value7+value8;
} 
  else if (index7==3 && index9==3) {
  var day3 = value9+value8+value7+value7;
}
   else if (index10==2 && index11==2) {
   var day4 = value12+value11+value10+value11;
} 
  else if (index11==2 && index12==2) {
  var day4 = value12+value11+value10+value11;
} 
  else if (index10==2 && index12==2) {
  var day4 = value12+value11+value10+value10;
} 
 else if (index10==3 && index11==3) {
   var day4 = value12+value11+value10+value11;
} 
  else if (index11==3 && index12==3) {
  var day4 = value12+value11+value10+value11;
} 
  else if (index10==3 && index12==3) {
  var day4 = value12+value11+value10+value10;
}
  else if (index13==2 && index14==2) {
   var day5 = value15+value14+value13+value14;
} 
  else if (index14==2 && index15==2) {
  var day5 = value15+value14+value13+value14;
} 
  else if (index13==2 && index15==2) {
  var day5 = value15+value14+value13+value13;
} 
 else if (index13==3 && index14==3) {
   var day5 = value15+value14+value13+value14;
} 
  else if (index14==3 && index15==3) {
  var day5 = value15+value14+value13+value14;
} 
  else if (index13==3 && index15==3) {
  var day5 = value15+value14+value13+value13;
}
  sum =day1+day2+day3+day4+day5; 
	document.getElementById('resultBG').innerHTML = sum;
 }

function loyalty() {
	var index1 = parseInt(document.getElementById('den1_bg1').value) - 1;
	var index2 = parseInt(document.getElementById('den1_bg2').value) - 1;
	var index3 = parseInt(document.getElementById('den1_bg3').value) - 1;
  var index4 = parseInt(document.getElementById('den2_bg1').value) - 1;
	var index5 = parseInt(document.getElementById('den2_bg2').value) - 1;
	var index6 = parseInt(document.getElementById('den2_bg3').value) - 1;
  var index7 = parseInt(document.getElementById('den3_bg1').value) - 1;
	var index8 = parseInt(document.getElementById('den3_bg2').value) - 1;
	var index9 = parseInt(document.getElementById('den3_bg3').value) - 1;
  var index10 = parseInt(document.getElementById('den4_bg1').value) - 1;
	var index11 = parseInt(document.getElementById('den4_bg2').value) - 1;
	var index12 = parseInt(document.getElementById('den4_bg3').value) - 1;
  var index13 = parseInt(document.getElementById('den5_bg1').value) - 1;
	var index14 = parseInt(document.getElementById('den5_bg2').value) - 1;
	var index15 = parseInt(document.getElementById('den5_bg3').value) - 1;
	var listQwe = [karta2[2], karta4[2], karta5[2], karta6[2]];
	var value1 = listQwe[index1];
	var value2 = listQwe[index2];
	var value3 = listQwe[index3];
  var value4 = listQwe[index4];
	var value5 = listQwe[index5];
	var value6 = listQwe[index6];
  var value7 = listQwe[index7];
	var value8 = listQwe[index8];
	var value9 = listQwe[index9];
  var value10 = listQwe[index10];
	var value11 = listQwe[index11];
	var value12 = listQwe[index12];
  var value13 = listQwe[index13];
	var value14 = listQwe[index14];
	var value15 = listQwe[index15];
  var day1 = value1+value2+value3;
  var day2 = value4+value5+value6;
  var day3 = value7+value8+value9;
  var day4 = value10+value11+value12;
  var day5 = value13+value14+value15;
  
  if (index1==2 && index2==2) {
   var day1 = value3+value2+value1+value2;
} 
  else if (index2==2 && index3==2) {
  var day1 = value3+value2+value1+value2;
} 
  else if (index1==2 && index3==2) {
  var day1 = value3+value2+value1+value1;
} 
 else if (index1==3 && index2==3) {
   var day1 = value3+value2+value1+value2;
} 
  else if (index2==3 && index3==3) {
  var day1 = value3+value2+value1+value2;
} 
  else if (index1==3 && index3==3) {
  var day1 = value3+value2+value1+value1;
} 
  else if (index4==2 && index5==2) {
   var day2 = value6+value5+value4+value5;
} 
  else if (index5==2 && index6==2) {
  var day2 = value6+value5+value4+value5;
} 
  else if (index4==2 && index6==2) {
  var day2 = value6+value5+value4+value4;
} 
 else if (index4==3 && index5==3) {
   var day2 = value6+value5+value4+value5;
} 
  else if (index5==3 && index6==3) {
  var day2 = value6+value5+value4+value5;
} 
  else if (index4==3 && index6==3) {
  var day2 = value6+value5+value4+value4;
} 
  else if (index7==2 && index8==2) {
   var day3 = value9+value8+value7+value8;
} 
  else if (index8==2 && index9==2) {
  var day3 = value9+value8+value7+value8;
} 
  else if (index7==2 && index9==2) {
  var day3 = value9+value8+value7+value7;
} 
 else if (index7==3 && index8==3) {
   var day3 = value9+value8+value7+value8;
} 
  else if (index8==3 && index9==3) {
  var day3 = value9+value8+value7+value8;
} 
  else if (index7==3 && index9==3) {
  var day3 = value9+value8+value7+value7;
}
   else if (index10==2 && index11==2) {
   var day4 = value12+value11+value10+value11;
} 
  else if (index11==2 && index12==2) {
  var day4 = value12+value11+value10+value11;
} 
  else if (index10==2 && index12==2) {
  var day4 = value12+value11+value10+value10;
} 
 else if (index10==3 && index11==3) {
   var day4 = value12+value11+value10+value11;
} 
  else if (index11==3 && index12==3) {
  var day4 = value12+value11+value10+value11;
} 
  else if (index10==3 && index12==3) {
  var day4 = value12+value11+value10+value10;
}
  else if (index13==2 && index14==2) {
   var day5 = value15+value14+value13+value14;
} 
  else if (index14==2 && index15==2) {
  var day5 = value15+value14+value13+value14;
} 
  else if (index13==2 && index15==2) {
  var day5 = value15+value14+value13+value13;
} 
 else if (index13==3 && index14==3) {
   var day5 = value15+value14+value13+value14;
} 
  else if (index14==3 && index15==3) {
  var day5 = value15+value14+value13+value14;
} 
  else if (index13==3 && index15==3) {
  var day5 = value15+value14+value13+value13;
}
  sum =day1+day2+day3+day4+day5; 
	document.getElementById('resultloyalty').innerHTML = sum;
 }