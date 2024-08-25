document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.small-image');
    image.addEventListener('click', function() {
        image.classList.toggle('clicked');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.small-image');
    const seeMoreButton = document.getElementById('see-more-button');
    const workItems = document.querySelectorAll('.works-gallery .work-item');
    
    // Initially hide all work items
    workItems.forEach(item => item.style.display = 'none');
    
    // Toggle visibility on button click
    seeMoreButton.addEventListener('click', function() {
        workItems.forEach(item => item.style.display = 'block');
        seeMoreButton.style.display = 'none'; // Optionally hide the button after showing items
    });
});
