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


    let noteCounter = 1; // Counter for unique hidden note IDs
    const colors = ['#876FB9', '#CC768F', '#639F49', '#6B85BB', '#ff9f00', '#050']; // Array of colors

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function openNewNote() {
        const gridContainer = document.querySelector('.boxes');
        const newNote = document.createElement('div');
        newNote.classList.add('hiddenNote');
        newNote.style.display = 'grid';             //* Or any other desired display value
        newNote.style.backgroundColor = getRandomColor(); // Set random color
        newNote.innerHTML = `
            <div class="ellipsis-icon" onclick="openPage('notepad')">
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
            <h5 class="noteHeader" style="color: white;">New Note ${noteCounter}</h5>
            <h6 class="noteText">Contents here....</h6>
        `;
        gridContainer.appendChild(newNote);
        noteCounter++; // Increment the note counter for uniqueness
    };




    // Notes js
    let allNotes = [];

    let title = document.querySelector('.textHead');
    let content = document.querySelector('#editor');
    let saveButton = document.querySelector('.saveButton');
    let deleteButton = document.querySelector('.deleteButton');


    if (localStorage.getItem('notes')){
        let storedData = JSON.parse(localStorage.getItem('notes'))

        title.value = storedData.title
        content.value = storedData.content
    }
 
    

    saveButton.addEventListener('click', () => {
        let titleValue = title.value;
        let contentValue = content.value;
        allNotes.push({
            title: titleValue,
            content: contentValue
        })
    
        localStorage.setItem('notes', JSON.stringify({
            title:titleValue,
            content:contentValue
        }));
        
        title.value = titleValue
        content.value = contentValue
    });
    

    deleteButton.addEventListener('click', () => {
        allNotes.shift({
             noteCounter
        })
    })










    
    // const titleInput = document.getElementById('titleInput');
    // const editor = document.getElementById('editor');

    // // Load saved data from local storage on page load
    // window.addEventListener('load', () => {
    //     if (localStorage.getItem('title')) {
    //         titleInput.value = localStorage.getItem('title');
    //     }
    //     if (localStorage.getItem('notes')) {
    //         editor.value = localStorage.getItem('notes');
    //     }
    // });

    // // Autosave function for input and textarea elements
    // titleInput.addEventListener('input', () => {
    //     localStorage.setItem('title', titleInput.value);
    // });

    // editor.addEventListener('input', () => {
    //     localStorage.setItem('notes', editor.value);
    // });