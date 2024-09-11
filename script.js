document.addEventListener('DOMContentLoaded', () => {
    const bioText = document.getElementById('bio-text');
    const toggleBioButton = document.getElementById('toggle-bio');

    const fullBio = `Hello! I'm Ashutosh Pandey Age:21 from gomtinagar lko, and my Professional Qualification is BCA with AI and my Education Qualification is 12th with CBSC Board. My major skill is in web development making sites (frontend) and my strength  is communication skills,hard work, Time management and my hobbies are  reading books,news and music production`;
    
    const shortBio = "Hello! I'm Ashutosh Pandey of Age 21.";

    bioText.textContent = shortBio;
    
    toggleBioButton.addEventListener('click', () => {
        if (bioText.textContent === shortBio) {
            bioText.textContent = fullBio;
            toggleBioButton.textContent = "Read Less";
        } else {
            bioText.textContent = shortBio;
            toggleBioButton.textContent = "Read More";
        }
    });
});
