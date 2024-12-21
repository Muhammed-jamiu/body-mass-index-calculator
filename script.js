document.getElementById("btn").addEventListener("click", function () {
  var height_val = document.getElementById("height").value; // in cm
  var weight_val = document.getElementById("weight").value; // in kg
  const result = document.getElementById("result");

  result.innerHTML = "Your BMI is " + bmio;
  if (height_val === "" && weight_val === "") {
    console.log("Try again later");
    result.innerHTML = "Sorry! Fill the required field!";
    result.style.color = "red";
  } else {
    result.style.color = "green";
  }
});
