// Button and skills section ke elements ko DOM se access karna
const toggleButton = document.getElementById('toggleSkills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Event listener to handle button click
toggleButton.addEventListener('click', () => {
    // Skills section ka display property check karna
    if (skillsSection.style.display === 'none') {
        // Agar section hidden hai, to show karna
        skillsSection.style.display = 'block';
    } else {
        // Agar visible hai, to hide karna
        skillsSection.style.display = 'none';
    }
});