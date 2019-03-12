// convert.js $Author: Kristin Wedemeier

var newTemp = 0;
var outFlag = "";

var tempOpts = [
	"kelvin",
	"celsius",
	"fahrenheit",
	"rankine"
];

function main() {
	return 0;
}

function submit() {
	$("#Output").text("");
	var temp = $("#InTemp").val();
	var inTemp = temp.split(" ", 2);
	var target = $("#Target").val().toLowerCase();
	var student = $("#Student").val();
	if(inTemp[0] === undefined || 
		inTemp[1] === undefined ||
		target === undefined ||
		student === undefined)
		outFlag = "invalid";
	else {
		inTemp[0] = Number(inTemp[0]);
		inTemp[1] = inTemp[1].toLowerCase();
		target = target.toLowerCase();
		student = Math.round(student);
		if(isNaN(inTemp[0]))
			outFlag = "invalid";
		else if(!tempOpts.includes(inTemp[1]))
			outFlag = "invalid";
		else if(!tempOpts.includes(target))
			outFlag = "invalid";
		else if(isNaN(student))
			outFlag = "invalid";
		else {
			getFormula(inTemp,target);
			newTemp = Math.round(newTemp);
			if(newTemp === student)
				outFlag = "correct";
			else
				outFlag = "incorrect";
		}
	}
	document.getElementById("Output").innerHTML = outFlag;
}

function getFormula(inTemp,target) {
	var inputTemp = inTemp[0];
	var iFrom = inTemp[1];
	var iTo = target;

	switch (iFrom) {
		case "kelvin":
			fromK(iTo,inputTemp);
			break;
		case "celsius":
			fromC(iTo,inputTemp);
			break;
		case "fahrenheit":
			fromF(iTo,inputTemp);
			break;
		case "rankine":
			fromR(iTo,inputTemp);
			break;
	}
	return 0;
}

// From Kelvin
function fromK(iTo,inputTemp) {
	switch (iTo) {
		case "celsius":
			newTemp = inputTemp - 273.15;
			break;
		case "fahrenheit":
			newTemp = 1.8 * (inputTemp) - 459.67;
			break;
		case "rankine":
			newTemp = inputTemp * 1.8;
			break;
	}
	return 0;
}

// From Celsius
function fromC(iTo,inputTemp) {
	switch (iTo) {
		case "kelvin":
			newTemp = inputTemp + 273.15;
			break;
		case "fahrenheit":
			newTemp = 1.8 * inputTemp + 32;
			break;
		case "rankine":
			newTemp = 1.8 * inputTemp + 491.67;
			break;
	}
	return 0;
}

// From Fahrenheit
function fromF(iTo,inputTemp) {
	switch (iTo) {
		case "kelvin":
			newTemp = (inputTemp + 459.67) * (5 / 9);
			break;
		case "celsius":
			newTemp = (inputTemp - 32) * (5 / 9);
			break;
		case "rankine":
			newTemp = inputTemp + 459.67;
			break;
	}
	return 0;
}

// From Rankine
function fromR(iTo,inputTemp) {
	switch (iTo) {
		case "kelvin":
			newTemp = inputTemp * (5 / 9);
			break;
		case "celsius":
			newTemp = inputTemp * (5 / 9) - 273.15;
			break;
		case "fahrenheit":
			newTemp = inputTemp - 459.67;
			break;
	}
	return 0;
}