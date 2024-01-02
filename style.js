function openPage(page) {
    if(page === 'refresh') {
        window.location.href = 'index.html';
    } else if (page === 'login'){
        window.location.href ='login.html';
    }else if (page === 'notepad'){
        window.location.href ='textHolder.html';
    } else if (page === 'back')
    window.location.href = 'note.html';

};


function validateEmail() {
    const email = document.getElementById('emailSide').value;
    const password = document.getElementById('pwd').value;


    if (email ==="" && password ===""){
        alert('Please fill the form');
        return false;
    }
    else if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return false;
    } else if(password === "") {
        alert('Password field cannot be empty');
        return false;
    } else {
        window.location.href = 'note.html';
        return true;
    }
};

const checkEmptyPassword = () => {
        
    };


    let noteCounter = 1; // Counter for unique hidden note IDs
    const colors = ['#876FB9', '#CC768F', '#639F49', '#6B85BB', '#ff9f00', '#050']; // Array of colors

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function openNewNote() {
        const gridContainer = document.querySelector('.boxes');
        const newNote = document.createElement('div');
        newNote.classList.add('hiddenNote');
        newNote.style.display = 'grid'; // Or any other desired display value
        newNote.style.backgroundColor = getRandomColor(); // Set random color
        newNote.innerHTML = `
            <div class="ellipsis-icon">
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
            <h5 class="noteHeader" style="color: white;">New Note ${noteCounter}</h5>
            <h6 class="noteText">Contents here....</h6>
        `;
        gridContainer.appendChild(newNote);
        noteCounter++; // Increment the note counter for uniqueness
    };