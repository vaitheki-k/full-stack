// Detect when elements enter the viewport
document.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.slide-up');
    const triggerPoint = window.innerHeight * 0.8;
  
    images.forEach((image) => {
      const rect = image.getBoundingClientRect();
      if (rect.top < triggerPoint) {
        image.classList.add('visible');
      }
    });
  });

  // Add accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
  
      // Toggle visibility of the content
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
  

  
 


  
  