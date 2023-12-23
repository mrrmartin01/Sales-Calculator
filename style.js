function openPage(page) {
    if(page === 'refresh') {
        window.location.href = 'index.html';
    } else if (page === 'login'){
        window.location.href ='login.html';
    }
    else if (page === 'notes'){
        window.location.href ='note.html';
    }
};

// function validateEmail() {
//     const email = document.getElementById('emailSide').value;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(email)) {
//         alert('Please enter a valid email address.');
//         return false; // Prevent form submission
//     }

//     // If the email is valid, redirect to notes.html
//     window.location.href = 'notes.html';
// }
