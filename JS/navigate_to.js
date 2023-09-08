// Get references to HTML elements
const slider = document.getElementsByClassName('swiper-slide'); // Assuming your slider has this ID

// Function to get the currently displayed slide's ID
// Function to get the currently selected slide's ID
function getCurrentSlideId() {
    const slides = document.querySelectorAll('.swiper-slide');
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('swiper-slide-active')) {
            return slides[i].id;
        }
    }
    return null; // No slide is currently active
}


// Function to navigate to different content based on the current slide's ID
function navigateToDetail() {
    const currentSlideId = getCurrentSlideId();
    if (currentSlideId) {
        // Handle navigation based on the current slide's ID
        switch (currentSlideId) {
            case 'bleach':
                // Navigate to content related to Slide 1
                window.location.href ='Bleach.html';
                break;
            case 'jojo':
                // Navigate to content related to Slide 2
                window.location.href = 'jojo.html';
                break;
            case 'berserk':
                    // Navigate to content related to Slide 1
                window.location.href ='Berserk.html';
                break;

            case 'jjk':
                    // Navigate to content related to Slide 1
                window.location.href ='jujutsu.html';
                break;

            case 'black_clover':
                    // Navigate to content related to Slide 1
                window.location.href ='black-clover.html';
                break;

            case 'mha':
                    // Navigate to content related to Slide 1
                window.location.href ='bokuno.html';
                break;

            case 'aot':
                    // Navigate to content related to Slide 1
                window.location.href ='aot.html';
                break;

            case 'vinland':
                    // Navigate to content related to Slide 1
                window.location.href ='vinland.html';
                break;
            case 'chainsaw':
                    // Navigate to content related to Slide 1
                window.location.href ='chainsaw.html';
                break;    
            default:
                break;
        }
    }
}

//navigation to Sign-in and About

// Get a reference to the button element
var button = document.getElementById("nav-menu-btn");

// Add a click event listener to the button
button.addEventListener("click", function() {
    // Navigate to another page (replace 'destination.html' with the desired URL)
    window.location.href = "sign-in.html";
});
var button = document.getElementById("about-btn");

// Add a click event listener to the button
button.addEventListener("click", function() {
    // Navigate to another page (replace 'destination.html' with the desired URL)
    window.location.href = "about.html";
});

