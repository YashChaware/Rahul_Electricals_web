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

// Function to show the loading screen
function showLoadingScreen() {
    document.getElementById('loadingScreen').style.display = 'block';
}

// Function to hide the loading screen
function hideLoadingScreen() {
    document.getElementById('loadingScreen').style.display = 'none';
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwIJqTx7-IVq8ZUG5xB8QlX2qrXgQawKzx1JxiEuuxCCSt-WAXmtS0Yj7i95oMeODb5/exec';
const form = document.forms['submit-to-google-sheet'];

// Add event listener to the form submission
form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission

    // Show loading screen when form is submitted
    showLoadingScreen();

    // Validate form before submission
    if (validateForm()) {
        // If validation passes, send form data
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            hideLoadingScreen(); // Hide loading screen after form submission
            alert("Form submitted successfully");
            form.reset(); // Reset the form after successful submission
        })
        .catch(error => {
            hideLoadingScreen(); // Hide loading screen in case of error
            console.error('Error!', error.message);
        });
    } else {
        hideLoadingScreen(); // Hide loading screen if form validation fails
    }
});

function validateForm() {
    var name = document.forms["submit-to-google-sheet"]["Name"].value;
    var companyName = document.forms["submit-to-google-sheet"]["Company_Name"].value;
    var email = document.forms["submit-to-google-sheet"]["Email"].value;
    var contactNumber = document.forms["submit-to-google-sheet"]["Contact_Number"].value;
    var address = document.forms["submit-to-google-sheet"]["Address"].value;
    var requirement = document.forms["submit-to-google-sheet"]["Requirement"].value;

    // Check if name is empty
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    // Check if company name is empty
    if (companyName.trim() === "") {
        alert("Please enter your company name.");
        return false;
    }

    // Check if email is empty and valid
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if contact number is empty and exactly 10 digits
    if (contactNumber.trim() === "" || contactNumber.length !== 10 || isNaN(contactNumber)) {
        alert("Please enter a valid 10-digit contact number.");
        return false;
    }

    // Check if address is empty
    if (address.trim() === "") {
        alert("Please enter your address.");
        return false;
    }

    // Check if requirement is empty
    if (requirement.trim() === "") {
        alert("Please enter your requirement/enquiry.");
        return false;
    }
    // All validations passed
    return true;
}

window.onload = function() {
    var scrollPoint = document.getElementById("scrollPoint");
    if (scrollPoint) {
        scrollPoint.scrollIntoView();
    }
};