// Get references to cursor circle elements
const cursorCircle = document.getElementById('cursor-circle');

// Add event listener for mouse movement on the document
document.addEventListener('mousemove', function(e) {
  // Move the cursor circle to the current mouse position using translate3d
  cursorCircle.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
  // Make the cursor circle visible by setting its opacity to 1
  cursorCircle.style.opacity = '1';
});

// Add event listener for when the mouse leaves the page
document.addEventListener('mouseout', function() {
  // Hide the cursor circle by setting its opacity to 0
  cursorCircle.style.opacity = '0';
});

includeHTML();