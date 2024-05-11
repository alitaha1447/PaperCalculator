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

function calculateMSI_MSF(event) {
  event.preventDefault();

  // Retrieve input values
  const paperGradeSize = document.getElementById('paperGradeSize').value;
  const basisWeight = parseFloat(document.getElementById('basisWeight').value);
  const rollWeight = parseFloat(document.getElementById('rollWeight').value);

  let dimensions;

  // Calculate the Area of the Basic Size based on the input paperGradeSize
  if (paperGradeSize.includes('x')) {
    const splitDimensions = paperGradeSize.split('x');
    dimensions = parseFloat(splitDimensions[0]) * parseFloat(splitDimensions[1]);
  } else {
    dimensions = parseFloat(paperGradeSize);
  }

  // Calculate MSI using the provided formula
  const msi = rollWeight / (basisWeight / dimensions) / 2;

  // Calculate MSF
  const msf = msi / 144;


  document.getElementById('msi').innerText = Math.round(msi);
  document.getElementById('msf').innerText = msf.toFixed(3);
}

function clearForm() {
  // Clear all input fields and reset result display to 0
  document.getElementById('paperGradeSize').value = '';
  document.getElementById('basisWeight').value = '';
  document.getElementById('rollWeight').value = '';
  document.getElementById('msi').innerText = 0;
  document.getElementById('msf').innerText = 0;
}
