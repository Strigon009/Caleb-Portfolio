// Get all the anchor links
const links = document.querySelectorAll('a.header-textLink');

// Get the current page URL
const currentPage = window.location.href;

// Loop through each link and compare its href with the current page
links.forEach(link => {
    const linkUrl = link.href;
    if (currentPage === linkUrl) {
        // Add the 'active' class to the matching link
        link.classList.add('active');
    }
});
