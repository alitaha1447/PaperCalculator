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

function calculatePagesPerInch(event) {
  event.preventDefault();
  // alert('Hi')
  const caliper = parseFloat(document.getElementById('caliper').value);
  console.log(caliper)
  const calRes = 2 / caliper;
  console.log(calRes)
  document.getElementById('result').innerText = Math.round(calRes);

}

function clearForm() {
  document.getElementById('caliper').value = '';
  document.getElementById('caliperRes').innerText = 0;
}