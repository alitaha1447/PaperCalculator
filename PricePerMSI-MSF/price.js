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

function calculateMWeight(event) {
  event.preventDefault();

  // Retrieve input values
  const paperGradeSize = document.getElementById('paperGradeSize').value;
  const basisWeight = parseFloat(document.getElementById('basisWeight').value);
  const price = parseFloat(document.getElementById('price').value);



  let dimensions;

  // Calculate the Area of the Basic Size based on the input paperGradeSize
  if (paperGradeSize.includes('x')) {
    const splitDimensions = paperGradeSize.split('x');
    dimensions = parseFloat(splitDimensions[0]) * parseFloat(splitDimensions[1]);
  } else {
    dimensions = parseFloat(paperGradeSize);
  }

  // Calculate Grammage using the provided formula
  const msi = (basisWeight / dimensions) * 2 * price;
  const msi1 = msi.toFixed(4);
  const msf = msi1 * 144;
  const msj1 = msf.toFixed(4);

  // let res;
  // if ((sheetSizeL * sheetSizeW) < 336) {
  //   res = result.toFixed(2); // Rounds to 2 decimal places
  // } else {
  //   res = Math.round(result);
  // }



  // Display the results
  document.getElementById('msi').innerText = msi1
  document.getElementById('msf').innerText = msj1

}
function clearForm() {
  // Clear all input fields and reset result display to 0
  document.getElementById('paperGradeSize').value = '';
  document.getElementById('basisWeight').value = '';
  document.getElementById('sheetSizeL').value = ''
  document.getElementById('sheetSizeW').value = ''
  document.getElementById('msi').innerText = 0;
  document.getElementById('msf').innerText = 0;
}