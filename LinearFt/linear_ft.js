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

function calculateLinearFt(event) {
  event.preventDefault();

  const paperGradeSize = document.getElementById('paperGradeSize').value;
  const basisWeight = parseFloat(document.getElementById('basisWeight').value);
  const rollWidth = parseFloat(document.getElementById('rollWidth').value);
  const rollWeight = parseFloat(document.getElementById('rollWeight').value);

  let dimensions;

  if (paperGradeSize.includes('x')) {
    const splitDimensions = paperGradeSize.split('x');
    dimensions = parseFloat(splitDimensions[0]) * parseFloat(splitDimensions[1]);
  } else {
    dimensions = parseFloat(paperGradeSize);
  }

  const linearFeet = ((rollWeight * dimensions) * 500) / ((basisWeight * rollWidth) * 12);
  const linearYards = linearFeet / 3;

  // Display the results
  document.getElementById('linearFeet').innerText = Math.round(linearFeet);
  document.getElementById('linearYard').innerText = Math.round(linearYards);
}

function clearForm() {
  document.getElementById('paperGradeSize').value = '';
  document.getElementById('basisWeight').value = '';
  document.getElementById('rollWidth').value = '';
  document.getElementById('rollWeight').value = '';
  document.getElementById('linearFeet').innerText = 0;
  document.getElementById('linearYard').innerText = 0;
}
