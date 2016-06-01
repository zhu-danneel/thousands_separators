'use strict';

function thousands_separators(val) {
 	var reg1 = /^[1-9]\d*$/;//匹配正整数 100
	var reg2 = /^[1-9]\d*\.0+$/; //匹配带.000的小数 1000.000
	var reg3 = /^[1-9]\d*\.\d+$/;  //匹配带.的小数
	if (reg1.test(val)) {
		if(val < 1000)
		{
			return(val.toString());
		}
		else
		{
			val = val.toString();
			var start;
			var index;
			var temp;
			start = val.length % 3;
			temp = val.substring(0, start);
			for (var i = start; i < val.length; i += 3) {
				if (i == 0) {
					temp = val.substring(i, i + 3);
				}
				else {
					temp += "," + val.substring(i, i + 3);
				}
			}
			return temp;
		}
	}
	else if (reg2.test(val)) {
		if(val < 1000)
		{
			return(val.toString);
		}
		else
		{
			val = val.toString();
			var start;
			var index;
			var temp;
			start = val.length % 3;
			temp = val.substring(0, start);
			for (var i = start; i < val.length; i += 3) {
				if (i == 0) {
					temp = val.substring(i, i + 3);
				}
				else {
					temp += "," + val.substring(i, i + 3);
				}
			}
			return temp;
		}
	}
	else if(reg3.test(val))
	{
		if (val < 1000)
		{
			return(val.toString);
		}
		else
		{
			val.toString();
			var str = parseFloat(val).toString().split(".");
			var start;
			var index;
			var temp;
			start = str[0].length % 3;
			temp = str[0].substring(0, start);
			for (var i = start; i < str[0].length; i += 3) {
				if (i == 0) {
					temp = str[0].substring(i, i + 3);
				}
				else {
					temp += "," + str[0].substring(i, i + 3);
				}
			}
			return (temp + "." + str[1]);
		}
	}	
}


module.exports = thousands_separators;
