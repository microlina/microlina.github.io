function validatePart1()
{
	let group1Line1 = document.getElementsByName('group1Line1');
	let group1Line2 = document.getElementsByName('group1Line2');
	let group1Line3 = document.getElementsByName('group1Line3');
	let group1Line4 = document.getElementsByName('group1Line4');
	let group1Line5 = document.getElementsByName('group1Line5');
	let group1Line6 = document.getElementsByName('group1Line6');
	let group1Line7 = document.getElementsByName('group1Line7');

	let group1Line1Selected = false;
	let group1Line2Selected = false;
	let group1Line3Selected = false;
	let group1Line4Selected = false;
	let group1Line5Selected = false;
	let group1Line6Selected = false;
	let group1Line7Selected = false;

	document.getElementById('group1Line1Phrase').style.color = 'Black';
	document.getElementById('group1Line2Phrase').style.color = 'Black';
	document.getElementById('group1Line3Phrase').style.color = 'Black';
	document.getElementById('group1Line4Phrase').style.color = 'Black';
	document.getElementById('group1Line5Phrase').style.color = 'Black';
	document.getElementById('group1Line6Phrase').style.color = 'Black';
	document.getElementById('group1Line7Phrase').style.color = 'Black';

	for (let i = 0; i < group1Line1.length; i++) {
		if(group1Line1[i].checked) {
			group1Line1Selected = true;
		}
		if(group1Line2[i].checked) {
			group1Line2Selected = true;
		}
		if(group1Line3[i].checked) {
			group1Line3Selected = true;
		}
		if(group1Line4[i].checked) {
			group1Line4Selected = true;
		}
		if(group1Line5[i].checked) {
			group1Line5Selected = true;
		}
		if(group1Line6[i].checked) {
			group1Line6Selected = true;
		}
		if(group1Line7[i].checked) {
			group1Line7Selected = true;
		}
	}

	if(group1Line1Selected && group1Line2Selected && group1Line3Selected && group1Line4Selected && group1Line5Selected && group1Line6Selected && group1Line7Selected) {
		document.getElementById('genderMagPart1').style.display = 'none';
	  	document.getElementById('endGenderMagPart1').style.display = 'none';
		document.getElementById('genderMagPart2').style.display = '';
	  	document.getElementById('endGenderMagPart2').style.display = '';
		document.getElementById('mandatoryMag').style.display = 'none';
	}
	else {
		if(!group1Line1Selected) {
			document.getElementById('group1Line1Phrase').style.color = 'Orange';
		}
		if(!group1Line2Selected) {
			document.getElementById('group1Line2Phrase').style.color = 'Orange';
		}
		if(!group1Line3Selected) {
			document.getElementById('group1Line3Phrase').style.color = 'Orange';
		}
		if(!group1Line4Selected) {
			document.getElementById('group1Line4Phrase').style.color = 'Orange';
		}
		if(!group1Line5Selected) {
			document.getElementById('group1Line5Phrase').style.color = 'Orange';
		}
		if(!group1Line6Selected) {
			document.getElementById('group1Line6Phrase').style.color = 'Orange';
		}
		if(!group1Line7Selected) {
			document.getElementById('group1Line7Phrase').style.color = 'Orange';
		}

		document.getElementById('mandatoryMag').style.display = '';
		document.getElementById('mandatoryMag').style.color = 'Orange';
	}

}

function validatePart2()
{

	let group2Line1 = document.getElementsByName('group2Line1');
	let group2Line2 = document.getElementsByName('group2Line2');
	let group2Line3 = document.getElementsByName('group2Line3');
	let group2Line4 = document.getElementsByName('group2Line4');

	let group2Line1Selected = false;
	let group2Line2Selected = false;
	let group2Line3Selected = false;
	let group2Line4Selected = false;

	document.getElementById('group2Line1Phrase').style.color = 'Black';
	document.getElementById('group2Line2Phrase').style.color = 'Black';
	document.getElementById('group2Line3Phrase').style.color = 'Black';
	document.getElementById('group2Line4Phrase').style.color = 'Black';

	for (let i = 0; i < group2Line1.length; i++) {
		if(group2Line1[i].checked) {
			group2Line1Selected = true;
		}
		if(group2Line2[i].checked) {
			group2Line2Selected = true;
		}
		if(group2Line3[i].checked) {
			group2Line3Selected = true;
		}
		if(group2Line4[i].checked) {
			group2Line4Selected = true;
		}
	}

	if(group2Line1Selected && group2Line2Selected && group2Line3Selected && group2Line4Selected) {
		document.getElementById('genderMagPart2').style.display = 'none';
		document.getElementById('endGenderMagPart2').style.display = 'none';
		document.getElementById('genderMagPart3').style.display = '';
		document.getElementById('endGenderMagPart3').style.display = '';
		document.getElementById('mandatoryMag').style.display = 'none';
	}
	else {
		if(!group2Line1Selected) {
			document.getElementById('group2Line1Phrase').style.color = 'Orange';
		}
		if(!group2Line2Selected) {
			document.getElementById('group2Line2Phrase').style.color = 'Orange';
		}
		if(!group2Line3Selected) {
			document.getElementById('group2Line3Phrase').style.color = 'Orange';
		}
		if(!group2Line4Selected) {
			document.getElementById('group2Line4Phrase').style.color = 'Orange';
		}

		document.getElementById('mandatoryMag').style.display = '';
		document.getElementById('mandatoryMag').style.color = 'Orange';
	}
}

function validatePart3()
{

	let group3Line1 = document.getElementsByName('group3Line1');
	let group3Line2 = document.getElementsByName('group3Line2');
	let group3Line3 = document.getElementsByName('group3Line3');
	let group3Line4 = document.getElementsByName('group3Line4');

	let group3Line1Selected = false;
	let group3Line2Selected = false;
	let group3Line3Selected = false;
	let group3Line4Selected = false;

	document.getElementById('group3Line1Phrase').style.color = 'Black';
	document.getElementById('group3Line2Phrase').style.color = 'Black';
	document.getElementById('group3Line3Phrase').style.color = 'Black';
	document.getElementById('group3Line4Phrase').style.color = 'Black';

	for (let i = 0; i < group3Line1.length; i++) {
		if(group3Line1[i].checked) {
			group3Line1Selected = true;
		}
		if(group3Line2[i].checked) {
			group3Line2Selected = true;
		}
		if(group3Line3[i].checked) {
			group3Line3Selected = true;
		}
		if(group3Line4[i].checked) {
			group3Line4Selected = true;
		}
	}

	if(group3Line1Selected && group3Line2Selected && group3Line3Selected && group3Line4Selected) {
		document.getElementById('genderMagPart3').style.display = 'none';
		document.getElementById('endGenderMagPart3').style.display = 'none';
		document.getElementById('genderMagPart4').style.display = '';
		document.getElementById('endGenderMagPart4').style.display = '';
		document.getElementById('mandatoryMag').style.display = 'none';
	}
	else {
		if(!group3Line1Selected) {
			document.getElementById('group3Line1Phrase').style.color = 'Orange';
		}
		if(!group3Line2Selected) {
			document.getElementById('group3Line2Phrase').style.color = 'Orange';
		}
		if(!group3Line3Selected) {
			document.getElementById('group3Line3Phrase').style.color = 'Orange';
		}
		if(!group3Line4Selected) {
			document.getElementById('group3Line4Phrase').style.color = 'Orange';
		}

		document.getElementById('mandatoryMag').style.display = '';
		document.getElementById('mandatoryMag').style.color = 'Orange';
	}
}

function validatePart4()
{

	let group4Line1 = document.getElementsByName('group4Line1');
	let group4Line2 = document.getElementsByName('group4Line2');
	let group4Line3 = document.getElementsByName('group4Line3');
	let group4Line4 = document.getElementsByName('group4Line4');
	let group4Line5 = document.getElementsByName('group4Line5');

	let group4Line1Selected = false;
	let group4Line2Selected = false;
	let group4Line3Selected = false;
	let group4Line4Selected = false;
	let group4Line5Selected = false;

	document.getElementById('group4Line1Phrase').style.color = 'Black';
	document.getElementById('group4Line2Phrase').style.color = 'Black';
	document.getElementById('group4Line3Phrase').style.color = 'Black';
	document.getElementById('group4Line4Phrase').style.color = 'Black';
	document.getElementById('group4Line4Phrase').style.color = 'Black';
	document.getElementById('group4Line5Phrase').style.color = 'Black';

	for (let i = 0; i < group4Line1.length; i++) {
		if(group4Line1[i].checked) {
			group4Line1Selected = true;
		}
		if(group4Line2[i].checked) {
			group4Line2Selected = true;
		}
		if(group4Line3[i].checked) {
			group4Line3Selected = true;
		}
		if(group4Line4[i].checked) {
			group4Line4Selected = true;
		}
		if(group4Line5[i].checked) {
			group4Line5Selected = true;
		}
	}

	if(group4Line1Selected && group4Line2Selected && group4Line3Selected && group4Line4Selected && group4Line5Selected) {
		document.getElementById('genderMagPart4').style.display = 'none';
		document.getElementById('endGenderMagPart4').style.display = 'none';
		document.getElementById('genderMag').style.display = 'none';
		document.getElementById('thanks').style.display = '';
		document.getElementById('mandatoryMag').style.display = 'none';
	}
	else {
		if(!group4Line1Selected) {
			document.getElementById('group4Line1Phrase').style.color = 'Orange';
		}
		if(!group4Line2Selected) {
			document.getElementById('group4Line2Phrase').style.color = 'Orange';
		}
		if(!group4Line3Selected) {
			document.getElementById('group4Line3Phrase').style.color = 'Orange';
		}
		if(!group4Line4Selected) {
			document.getElementById('group4Line4Phrase').style.color = 'Orange';
		}
		if(!group4Line5Selected) {
			document.getElementById('group4Line5Phrase').style.color = 'Orange';
		}

		document.getElementById('mandatoryMag').style.display = '';
		document.getElementById('mandatoryMag').style.color = 'Orange';
	}
}
