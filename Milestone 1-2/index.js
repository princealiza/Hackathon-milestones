// Button and skills section ke elements ko DOM se access karna
var toggleButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skills');
// Event listener to handle button click
toggleButton.addEventListener('click', function () {
    // Skills section ka display property check karna
    if (skillsSection.style.display === 'none') {
        // Agar section hidden hai, to show karna
        skillsSection.style.display = 'block';
    }
    else {
        // Agar visible hai, to hide karna
        skillsSection.style.display = 'none';
    }
});
