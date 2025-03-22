// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a'); // Get all links in the nav
    const sections = document.querySelectorAll('section'); // Get all sections on the page

    // Function to remove 'active' class from all sections and links
    function removeActiveClasses() {
        sections.forEach(section => section.classList.remove('active')); // Remove 'active' class from all sections
        links.forEach(link => link.classList.remove('active')); // Remove 'active' class from all links
    }

    // Add event listener to each link
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default link behavior

            removeActiveClasses(); // First, remove the active class from all sections and links

            link.classList.add('active'); // Add the active class to the clicked link

            // Get the target section based on the text of the clicked link
            const targetSection = document.querySelector(`.${link.textContent.toLowerCase()}`); // Assuming section class names are lowercase versions of link text

            if (targetSection) {
                targetSection.classList.add('active'); // Add the 'active' class to the target section
            }
        });
    });
});
