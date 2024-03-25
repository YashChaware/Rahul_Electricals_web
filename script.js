// Function to show the "go to top" button when user scrolls down
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goToTopBtn").style.display = "block";
    } else {
        document.getElementById("goToTopBtn").style.display = "none";
    }
}

// Function to smoothly scroll to the top of the page
function scrollToTop() {
    // Smooth scrolling to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to add click event listeners to product cards
function addCardClickListeners() {
    // Select all product cards
    const productCards = document.querySelectorAll('.pr_cards');

    // Loop through each product card
    productCards.forEach(card => {
        // Add click event listener
        card.addEventListener('click', function() {
            // Get the ID of the clicked card
            const cardId = this.id;
            
            // Redirect the user to the corresponding page based on the card ID
            switch (cardId) {
                case 'PCC Panels':
                    window.location.href = 'pcc.html';
                    break;
                case 'MCC Panels':
                    window.location.href = 'mcc.html';
                    break;
                case 'HT Feedar Piller':
                    window.location.href = 'ht_feedar_pillers.html';
                    break;
                case 'LT Feedar Piller':
                    window.location.href = 'Lt_feeder_pillers.html';
                    break;
                case 'APFC Panels':
                    window.location.href = 'APFC.html';
                    break;
                case 'Control Desk Panels':
                    window.location.href = 'control_desk.html';
                    break;
                // Add more cases for other product cards if needed
                default:
                    break;
            }
        });
    });
}

// Call the function to add click event listeners to product cards
addCardClickListeners();
