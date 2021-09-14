function tipCalculator() {
  // Define Variables
  let billAmount = document.getElementById("bill-amount").value;
  let serviceQuality = document.getElementById("service-quality").value;
  let peopleSharing = document.getElementById("people-sharing").value;

  // Validate Inputs
  if (billAmount == 0 || serviceQuality == 0) {
    alert("Please Enter Values into the Calculator!");
    return;
  }

  // Check to see if this input is empty
  if (peopleSharing == 1) {
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // Calculate Tip
  let total = (billAmount * serviceQuality) / peopleSharing;
  total = Math.round(total * 100) / 100;

  // Display Tip Amount
  document.getElementById("total-tip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
// Hide Tip on Load
document.getElementById("total-tip").style.display = "none";
document.getElementById("each").style.display = "none";

// Button Click to call function
document.getElementById("calculate").onclick = function () {
  tipCalculator();
  console.log("Calculated");
};
