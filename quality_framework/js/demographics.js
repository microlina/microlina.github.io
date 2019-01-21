let not_selected = " ";
let email = not_selected;
let age = not_selected;
let gender = not_selected;
let nationality = not_selected;
let field = not_selected;
let vision = not_selected;
let completed_education = not_selected;
let current_education = not_selected;
let current_occupation = not_selected;
let previous_experience = not_selected;
let use_time = not_selected;
let last_use = not_selected;
let other_languages = not_selected;

function changeEmail()
{
  email = document.getElementById("input_email").value;
  document.getElementById("input_email").style.background = "White";
}

function changeAge()
{
  age = document.getElementById("input_age").value;
  document.getElementById("input_age").style.background = "White";
}

function changeGender()
{
  gender = document.getElementById("input_gender").value;
  document.getElementById("input_gender").style.background = "White";
}

function changeNationality()
{
  nationality = document.getElementById("input_nationality").value;
  document.getElementById("input_nationality").style.background = "White";
}

function changeField()
{
  field = document.getElementById("input_field").value;
  document.getElementById("input_field").style.background = "White";
}

function changeVision()
{
  vision = document.getElementById("input_vision").value;
  document.getElementById("input_vision").style.background = "White";
}

function changeEducation()
{
  completed_education = document.getElementById("input_education").value;
  document.getElementById("input_education").style.background = "White";
}

function changeCurrentEducation()
{
  current_education = document.getElementById("input_current_education").value;
  document.getElementById("input_current_education").style.background = "White";
}

function changeOccupation()
{
  current_occupation = document.getElementById("input_occupation").value;
  document.getElementById("input_occupation").style.background = "White";
}

function changeExperience()
{
  previous_experience = document.getElementById("input_experience").value;
  document.getElementById("input_experience").style.background = "White";

  if (previous_experience !== not_selected && previous_experience !== "This was my first contact with it") {
    document.getElementById('if_has_experience').style.display = '';
  }
  else {
    document.getElementById('if_has_experience').style.display = 'none';
  }
}

function changeUseTime()
{
  use_time = document.getElementById("input_use_time").value;
  document.getElementById("input_use_time").style.background = "White";
}

function changeLastUse()
{
  last_use = document.getElementById("input_last_use").value;
  document.getElementById("input_last_use").style.background = "White";
}

function changeLanguages()
{
  other_languages = document.getElementById("input_other_languages").value;
}

function validateDemographics()
{
  let valid_email = validateEmail();
  let valid_age = validateAge();
  let valid_gender = validateGender();
  let valid_nationality = validateNationality();
  let valid_field = validateField();
  let valid_vision = validateVision();
  let valid_completed_education = validateCompletedEducation();
  let valid_current_education = validateCurrentEducation();
  let valid_current_occupation = validateCurrentOccupation();
  let valid_previous_experience = validatePreviousExperience();
  let valid_use_time = validateUseTime();
  let valid_last_use = validateLastUse();

  if (valid_email && valid_age && valid_gender && valid_nationality && valid_field && valid_vision && valid_completed_education && valid_current_education && valid_current_occupation && valid_previous_experience && valid_use_time && valid_last_use) {
    document.getElementById('mandatory').style.display = 'none';
    document.getElementById('mandatory').style.color = 'White';
    document.getElementById('demographics').style.display = 'none';
    document.getElementById('genderMag').style.display = '';
    exportToConsole();
  }
  else {
    document.getElementById('mandatory').style.display = '';
    document.getElementById('mandatory').style.color = 'Orange';
  }
}

function validateEmail()
{
  let is_valid = true;
  if (email !== not_selected) {
    if (email.includes("@")) {
      document.getElementById("input_email").style.background = "White";
    }
    else {
      document.getElementById("input_email").style.background = "Orange";
      is_valid = false;
    }
  }
  return is_valid;
}

function validateAge()
{
  let is_valid = false;
  if (age !== not_selected) {
    is_valid = true;
    document.getElementById("input_age").style.background = "White";
  }
  else {
    document.getElementById("input_age").style.background = "Orange";
  }
  return is_valid;
}

function validateGender()
{
  let is_valid = false;
  if (gender !== not_selected) {
    is_valid = true;
    document.getElementById("input_gender").style.background = "White";
  }
  else {
    document.getElementById("input_gender").style.background = "Orange";
  }
  return is_valid;
}

function validateNationality()
{
  let is_valid = false;
  if (nationality !== not_selected) {
    is_valid = true;
    document.getElementById("input_nationality").style.background = "White";
  }
  else {
    document.getElementById("input_nationality").style.background = "Orange";
  }
  return is_valid;
}

function validateField()
{
  let is_valid = false;
  if (field !== not_selected) {
    is_valid = true;
    document.getElementById("input_field").style.background = "White";
  }
  else {
    document.getElementById("input_field").style.background = "Orange";
  }
  return is_valid;
}

function validateVision()
{
  let is_valid = false;
  if (vision !== not_selected) {
    is_valid = true;
    document.getElementById("input_vision").style.background = "White";
  }
  else {
    document.getElementById("input_vision").style.background = "Orange";
  }
  return is_valid;
}

function validateCompletedEducation()
{
  let is_valid = false;
  if (completed_education !== not_selected) {
    is_valid = true;
    document.getElementById("input_education").style.background = "White";
  }
  else {
    document.getElementById("input_education").style.background = "Orange";
  }
  return is_valid;
}

function validateCurrentEducation()
{
  let is_valid = false;
  if (current_education !== not_selected) {
    is_valid = true;
    document.getElementById("input_current_education").style.background = "White";
  }
  else {
    document.getElementById("input_current_education").style.background = "Orange";
  }
  return is_valid;
}

function validateCurrentOccupation()
{
  let is_valid = false;
  if (current_occupation !== not_selected) {
    is_valid = true;
    document.getElementById("input_occupation").style.background = "White";
  }
  else {
    document.getElementById("input_occupation").style.background = "Orange";
  }
  return is_valid;
}

function validatePreviousExperience()
{
  let is_valid = false;
  if (previous_experience !== not_selected) {
    is_valid = true;
    document.getElementById("input_experience").style.background = "White";
  }
  else {
    document.getElementById("input_experience").style.background = "Orange";
  }
  return is_valid;
}

function validateUseTime()
{
  let is_valid = false;
  if (previous_experience !== not_selected && previous_experience !== "This was my first contact with it")
  {
    if (use_time !== not_selected) {
      is_valid = true;
      document.getElementById("input_use_time").style.background = "White";
    }
    else {
      document.getElementById("input_use_time").style.background = "Orange";
    }
  }
  else
  {
    is_valid = true;
  }
  return is_valid;
}

function validateLastUse()
{
  let is_valid = false;
  if (previous_experience !== not_selected && previous_experience !== "This was my first contact with it")
  {
    if (last_use !== not_selected) {
      is_valid = true;
      document.getElementById("input_last_use").style.background = "White";
    }
    else {
      document.getElementById("input_last_use").style.background = "Orange";
    }
  }
  else
  {
    is_valid = true;
  }
  return is_valid;
}


// Output the table of results to the browser's console
function exportToConsole()
{
  let result = "";

  result += "Email,Age,Gender,Nationality,Field of study,Vision,Completed education,Currect year of education,Current occupation,Previous experience with i*,Use time,Last use\n";

  result += email + "," + age + "," + gender + "," + nationality + "," + field + "," + vision + "," +  completed_education + "," + current_education + "," + current_occupation + "," + previous_experience + "," + use_time + "," + last_use;

  console.log(result);
}
