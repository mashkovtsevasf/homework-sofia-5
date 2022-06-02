const age = confirm("Are you 18 years old?");
if (age !== true){
  alert ("You are not allowed to take the survey");
} else {
  const time = prompt ("What time do you get up?");
  if (isNaN(time) || time === ""){
    alert("Incorrect input");
  } else {
    if (time > 0 && time <= 5) {
      alert ("Very early");
    } else if (time > 5 && time <= 8) {
      alert ("It's still early");
    } else if (time > 8 && time <= 11) {
      alert ("Fine");
    } else if (time > 11 && time <= 14) {
      alert ("Too late");
    } else if (time > 14 && time <= 24) {
      alert ("Very very late");
    } else if (time <= 0 || time > 24) {
      alert ("Learn to use the clock!");
    }
  }
}
