// Hide and Show Formula Functionality
function toggleVisibility() {
  var content = document.getElementById('contentParagraph');
  var toggleText = document.getElementById('toggleText');
  // Check current display style and toggle between 'none' and 'block'
  if (content.style.display === "none") {
    content.style.display = "block";
    toggleText.innerHTML = "HIDE FORMULA"; // Update button text
  } else {
    content.style.display = "none";
    toggleText.innerHTML = "SHOW FORMULA"; // Update button text
  }
}

function calculateGrammage(event) {
  event.preventDefault();

  // Retrieve input values
  const paperGradeSize = document.getElementById('paperGradeSize').value;
  const basisWeight = parseFloat(document.getElementById('basisWeight').value);


  let dimensions;

  // Calculate the Area of the Basic Size based on the input paperGradeSize
  if (paperGradeSize.includes('x')) {
    const splitDimensions = paperGradeSize.split('x');
    dimensions = parseFloat(splitDimensions[0]) * parseFloat(splitDimensions[1]);
  } else {
    dimensions = parseFloat(paperGradeSize);
  }

  // Calculate Grammage using the provided formula
  const result = basisWeight * 1406.5 / dimensions;


  // Display the results
  document.getElementById('result').innerText = Math.round(result);


}
function clearForm() {
  // Clear all input fields and reset result display to 0
  document.getElementById('paperGradeSize').value = '';
  document.getElementById('basisWeight').value = '';
  document.getElementById('result').innerText = 0;
}