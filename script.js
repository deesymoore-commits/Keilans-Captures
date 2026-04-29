// Basic JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {

            // Fullscreen photo modal logic
            const photoModal = document.getElementById('photoModal');
            const modalImg = document.getElementById('modalImg');
            const closeModal = document.getElementById('closeModal');
            // Add click event to all images in #photos
            document.querySelectorAll('#photos ul li img').forEach(img => {
                img.style.cursor = 'pointer';
                img.addEventListener('click', function() {
                    modalImg.src = img.src;
                    modalImg.alt = img.alt;
                    photoModal.style.display = 'flex';
                });
            });
            // Close modal on X click or background click
            closeModal.addEventListener('click', function() {
                photoModal.style.display = 'none';
                modalImg.src = '';
            });
            photoModal.addEventListener('click', function(e) {
                if (e.target === photoModal) {
                    photoModal.style.display = 'none';
                    modalImg.src = '';
                }
            });
        // Dark mode toggle functionality
        const darkModeToggle = document.getElementById('darkModeToggle');
        darkModeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark-mode');
        });
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });

    const h1 = document.querySelector('h1');
    h1.addEventListener('click', function() {
        alert('Hello! You clicked the heading.');
    });

    const p = document.querySelector('p');
    p.addEventListener('mouseover', function() {
        p.style.color = 'red';
    });
    p.addEventListener('mouseout', function() {
        p.style.color = '#666';
    });

    // Train image hover functionality
    const trainImage = document.getElementById('trainImage');
    const trainDesc = document.getElementById('trainDesc');
    if (trainImage && trainDesc) {
        trainImage.addEventListener('mouseenter', function() {
            trainDesc.style.display = 'block';
        });
        trainImage.addEventListener('mouseleave', function() {
            trainDesc.style.display = 'none';
        });
    }
});

function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}