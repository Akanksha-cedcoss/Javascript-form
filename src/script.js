function validateInput(name, age, weight) {
  var errors = [];
  if (!name) {
    errors.push("Name field is empty.");
  }
  if (!age) {
    errors.push(alert("Age field is empty."));
  }
  if (isNaN(age)) {
    errors.push(alert("Age must be a number"));
  }
  if (!weight) {
    errors.push(alert("Weight field is empty."));
  }
  if (isNaN(weight)) {
    errors.push(alert("Weight must be a number"));
  }
  return errors;
}
function recommendedWeight(age) {
  if (age >= 5 && age <= 7) {
    return "15 - 20";
  }
  if (age >= 8 && age <= 10) {
    return "21 - 25";
  }
  if (age >= 11 && age <= 15) {
    return "26 - 30";
  }
  if (age >= 16 && age <= 20) {
    return "31 - 40";
  }
}
function displayResult(age, answer) {
  var name = document.getElementById("name").value;
  const weight = document.getElementById("weight").value;
  let recommended = recommendedWeight(age);
  name = "Hello " + name + " !!! Your weight is ";
  var show = "";
  if (answer == "under") {
    show =
      name +
      "less than recommended value of " +
      recommended +
      "KG at an age of " +
      age;
  } else if (answer == "over") {
    show =
      name +
      "greater than recommended value of " +
      recommended +
      "KG at an age of " +
      age;
  } else {
    show = name + "perfect.";
  }
  document.getElementById("result").innerHTML = "<p>" + show + "</p>";
}
function checkWeight(age, weight, minWeight, maxWeight) {
  if (weight < minWeight) {
    displayResult(age, "under");
  } else if (weight > maxWeight) {
    displayResult(age, "over");
  } else {
    displayResult(age, "perfect");
  }
}
function checkAge(age, weight) {
  let err = "Values entered by you is not in the input table.";
  if (age >= 5 && age <= 7) {
    checkWeight(age, weight, 15, 20);
  } else if (age >= 8 && age <= 10) {
    checkeWeight(age, weight, 21, 25);
  } else if (age >= 11 && age <= 15) {
    checkWeight(age, weight, 26, 30);
  } else if (age >= 16 && age <= 20) {
    checkWeight(age, weight, 31, 40);
  } else {
    document.getElementById("result").innerHTML =
      "<p>Values entered by you is not in the table.</p>";
  }
}

function submitForm() {
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const name = document.getElementById("name").value;
  var err = validateInput(name, age, weight);
  if (err.length == 0) {
    checkAge(age, weight);
  }
}
