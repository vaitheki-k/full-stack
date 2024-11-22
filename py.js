// Accordion Toggle Functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;

        // Toggle Active Class
        accordionItem.classList.toggle('active');

        // Close other accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
            }
        });
    });
});



