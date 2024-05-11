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

function calculateFTandTD(event) {
  event.preventDefault();

  // Retrieve input values
  const rollWidth = parseFloat(document.getElementById('rollWidth').value);
  const price = parseFloat(document.getElementById('price').value);

  // Calculate price per linear foot and yard
  const ft = (price * rollWidth) / 12000; // Price per linear foot
  const yd = (price * rollWidth) / 4000; // Price per linear yard (since 1 yard = 3 feet)

  // Display the results
  document.getElementById('ft').innerText = ft.toFixed(4); // Display up to 2 decimal places
  document.getElementById('yd').innerText = yd.toFixed(4); // Display up to 2 decimal places
}

function clearForm() {
  // Clear all input fields and reset result display to 0

  document.getElementById('rollWidth').value = '';
  document.getElementById('price').value = ''
  document.getElementById('ft').innerText = 0;
  document.getElementById('yd').innerText = 0;
}