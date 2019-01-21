// Create a set of parallel arrays for each of the scales
let scale      = [];
let left       = [];
let right      = [];
let def        = [];
const NUM_SCALES = 6;

scale[0]  = "Mental Demand";
left[0]   = "Low";
right[0]  = "High";
def[0]    = "How much mental and perceptual activity was required (e.g. thinking, deciding, calculating, remembering, looking, searching, etc)? Was the task easy or demanding, simple or complex, exacting or forgiving?";

scale[1]  = "Physical Demand";
left[1]   = "Low";
right[1]  = "High";
def[1]    = "How much physical activity was required (e.g. pushing, pulling, turning, controlling, activating, etc)? Was the task easy or demanding, slow or brisk, slack or strenuous, restful or laborious?";

scale[2]  = "Temporal Demand";
left[2]   = "Low";
right[2]  = "High";
def[2]    = "How much time pressure did you feel due to the rate of pace at which the tasks or task elements occurred? Was the pace slow and leisurely or rapid and frantic?";

scale[3]  = "Performance";
left[3]   = "Good";
right[3]  = "Poor";
def[3]    = "How successful do you think you were in accomplishing the goals of the task set by the experimenter (or yourself)? How satisfied were you with your performance in accomplishing these goals?";

scale[4]  = "Effort";
left[4]   = "Low";
right[4]  = "High";
def[4]    = "How hard did you have to work (mentally and physically) to accomplish your level of performance?";

scale[5]  = "Frustration";
left[5]   = "Low";
right[5]  = "High";
def[5]    = "How insecure, discouraged, irritated, stressed and annoyed versus secure, gratified, content, relaxed and complacent did you feel during the task?";

// Pairs of factors in order in the original instructions
// Numbers refer to the index in the scale, left, right, def arrays.
let pair  = [];
pair[0]   = "4 3";
pair[1]   = "2 5";
pair[2]   = "2 4";
pair[3]   = "1 5";
pair[4]   = "3 5";
pair[5]   = "1 2";
pair[6]   = "1 3";
pair[7]   = "2 0";
pair[8]   = "5 4";
pair[9]   = "3 0";
pair[10]  = "3 2";
pair[11]  = "0 4";
pair[12]  = "0 1";
pair[13]  = "4 1";
pair[14]  = "5 0";

// Variable where the results end up
let results_rating = [];
let results_tally  = [];
let results_weight = [];
let results_overall;

let pair_num = 0;
for (let i = 0; i < NUM_SCALES; i++)
{
	results_tally[i] = 0;
}

// Used to randomize the pairings presented to the user
function randOrd()
{
	return (Math.round(Math.random())-0.5);
}

// Make sure things are good and mixed
for (let i = 0; i < 100; i++)
{
	pair.sort(randOrd);
}

// They click on a scale entry
function scaleClick(index, val)
{
	results_rating[index] = val;

	// Turn background color to white for all cells
	for (let i = 5; i <= 100; i += 5)
	{
		let top = "t_" + index + "_" + i;
		let bottom = "b_" + index + "_" + i;
		document.getElementById(top).bgColor='#FFFFFF';
		document.getElementById(bottom).bgColor='#FFFFFF';
	}

	let top = "t_" + index + "_" + val;
	let bottom = "b_" + index + "_" + val;
	document.getElementById(top).bgColor='#AAAAAA';
	document.getElementById(bottom).bgColor='#AAAAAA';
}

// Return the HTML that produces the table for a given scale
function getScaleHTML(index)
{
	let result = "";

	// Outer table with a column for scale, column for definition
	result += '<table><tr><td>';

	// Table that generates the scale
	result += '<table class="scale">';

	// Row 1, just the name of the scale
	result += '<tr><td colspan="20" class="heading">' + scale[index] + '</td></tr>';

	// Row 2, the top half of the scale increments, 20 total columns
	result += '<tr>';
	let num = 1;
	for (let i = 5; i <= 100; i += 5)
	{
		result += '<td id="t_' + index + '_' + i + '"   class="top' + num + '" onMouseUp="scaleClick(' + index + ', ' + i + ');"></td>';
		num++;
		if (num > 2)
			num = 1;
	}
	result += '</tr>';

	// Row 3, bottom half of the scale increments
	result += '<tr>';
	for (let i = 5; i <= 100; i += 5)
	{
		result += '<td id="b_' + index + '_' + i + '"   class="bottom" onMouseUp="scaleClick(' + index + ', ' + i + ');"></td>';
	}
	result += '</tr>';

	// Row 4, left and right of range labels
	result += '<tr>';
	result += '<td colspan="10" class="left">' + left[index] + '</td><td colspan="10" class="right">' + right[index] + '</td>';
	result += '</tr></table></td>';


	// Now for the definition of the scale
	result += '<td class="def">';
	result += def[index];
	result += '</td></tr></table>';

	return result;
}

function onLoad()
{
	// Get all the scales ready
	for (let i = 0; i < NUM_SCALES; i++)
	{
		document.getElementById("scale" + i).innerHTML = getScaleHTML(i);
	}
}


//Users want to proceed after reading the overall instructions
function buttonPart0()
{
	//Bye bye part 0, hello part 1
	document.getElementById('part0').style.display = 'none';
  	document.getElementById('buttonPart0').style.display = 'none';
	document.getElementById('part1').style.display = '';
  	document.getElementById('buttonPart1').style.display = '';
	return true;
}

// Users want to proceed after doing the scales
function buttonPart1()
{
	// Check to be sure they click on every scale
	for (let i = 0; i < NUM_SCALES; i++)
	{
		if (!results_rating[i])
		{
			alert('A value must be selected for every scale!');
			return false;
		}
	}

	// Bye bye part 1, hello part 2
	document.getElementById('part1').style.display = 'none';
  	document.getElementById('buttonPart1').style.display = 'none';
	document.getElementById('part2').style.display = '';
  	document.getElementById('buttonPart2').style.display = '';

	return true;
}

// User done reading the part 2 instructions
function buttonPart2()
{
	// Bye bye part 2, hello part 3
	document.getElementById('part2').style.display = 'none';
  	document.getElementById('buttonPart2').style.display = 'none';
	document.getElementById('part3').style.display = '';

	// Set the labels for the buttons
	setPairLabels();
	return true;
}

// Set the button labels for the pairwise comparison stage
function setPairLabels()
{
	let indexes = pair[pair_num].split(" ");

	let pair1 = scale[indexes[0]];
	let pair2 = scale[indexes[1]];

	document.getElementById('pair1').value = pair1;
	document.getElementById('pair2').value = pair2;

	document.getElementById('pair1_def').innerHTML = def[indexes[0]];
	document.getElementById('pair2_def').innerHTML = def[indexes[1]];
}

// User clicked the top pair button
function buttonPair1()
{
	let indexes = pair[pair_num].split(" ");
	results_tally[indexes[0]]++;

	nextPair();
	return true;
}

// User clicked the bottom pair button
function buttonPair2()
{
	let indexes = pair[pair_num].split(" ");
	results_tally[indexes[1]]++;
	nextPair();
	return true;
}

// Move to the next pair
function nextPair()
{
	pair_num++;
	if (pair_num >= 15)
	{
		document.getElementById('part3').style.display = 'none';

		calcResults();
		exportToConsole();


		window.location.href = '../experiments/demographics.html';

	}
	else
	{
		setPairLabels();
	}
}

// Compute the weights and the final score
function calcResults()
{
	results_overall = 0.0;

	for (let i = 0; i < NUM_SCALES; i++)
	{
		results_weight[i] = results_tally[i] / 15.0;
		results_overall += results_weight[i] * results_rating[i];
	}
}

// Output the table of results to the browser's console
function exportToConsole() {
	let result = "";

	result += ",Rating,Tally,Weight\n";
	for (let i = 0; i < NUM_SCALES; i++)
	{
		result += "\n" + scale[i] + ",";

		result += results_rating[i] + ",";

		result += results_tally[i] + ",";

		result += results_weight[i] + "";
	}

	result += "\nOverall,";
	result += results_overall;

	console.log(result);
}
