 function showPrincipalView() {
    hideAllViews();
    document.getElementById('principal-view').classList.remove('hidden');
}

function showTeacherView() {
    hideAllViews();
    document.getElementById('teacher-view').classList.remove('hidden');
}

function showStudentView() {
    hideAllViews();
    document.getElementById('student-view').classList.remove('hidden');
}

function hideAllViews() {
    document.getElementById('principal-view').classList.add('hidden');
    document.getElementById('teacher-view').classList.add('hidden');
    document.getElementById('student-view').classList.add('hidden');
    document.getElementById('forms').classList.add('hidden');
}

// Principal functionalities
function showCreateClassroomForm() {
    hideAllForms();
    document.getElementById('forms').classList.remove('hidden');
    document.getElementById('create-classroom-form').classList.remove('hidden');
}

function showAssignTeacherForm() {
    hideAllForms();
    document.getElementById('forms').classList.remove('hidden');
    document.getElementById('assign-teacher-form').classList.remove('hidden');
}

function hideAllForms() {
    document.getElementById('create-classroom-form').classList.add('hidden');
    document.getElementById('assign-teacher-form').classList.add('hidden');
    document.getElementById('create-timetable-form').classList.add('hidden');
}

function createClassroom() {
    const name = document.getElementById('classroom-name').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const days = document.getElementById('days').value;

    const classroomRow = `<tr><td>${name}</td><td>Unassigned</td><td><button onclick="deleteRow(this)">Delete</button></td></tr>`;
    document.querySelector('#principal-view table').innerHTML += classroomRow;

    const classroomOption = `<option value="${name}">${name}</option>`;
    document.getElementById('classroom-select').innerHTML += classroomOption;

    alert('Classroom created successfully!');
}

function assignTeacher() {
    const teacherName = document.getElementById('teacher-name').value;
    const classroomSelect = document.getElementById('classroom-select').value;

    const rows = document.querySelectorAll('#principal-view table tr');
    rows.forEach(row => {
        if (row.cells[0].innerText === classroomSelect) {
            row.cells[1].innerText = teacherName;
        }
    });

    alert('Teacher assigned successfully!');
}

function createTimetable() {
    const subject = document.getElementById('subject').value;
    const startTime = document.getElementById('subject-start-time').value;
    const endTime = document.getElementById('subject-end-time').value;

    const timetableRow = `<tr><td>${subject}</td><td>${startTime}</td><td>${endTime}</td></tr>`;
    document.querySelector('#student-view table').innerHTML += timetableRow;

    alert('Timetable period added successfully!');
}

function deleteRow(button) {
    button.closest('tr').remove();
    alert('Classroom deleted successfully!');
}
function showTeacherView() {
    hideAllViews();
    document.getElementById('teacher-view').classList.remove('hidden');
}

function showCreateTimetableForm() {
    hideAllForms();
    document.getElementById('forms').classList.remove('hidden');
    document.getElementById('create-timetable-form').classList.remove('hidden');
}

function createTimetable() {
    const subject = document.getElementById('subject').value;
    const startTime = document.getElementById('subject-start-time').value;
    const endTime = document.getElementById('subject-end-time').value;

    if (subject && startTime && endTime) {
        const timetableRow = `<tr><td>${subject}</td><td>${startTime}</td><td>${endTime}</td></tr>`;
        document.querySelector('#teacher-view #student-list table').innerHTML += timetableRow;

        alert('Timetable period added successfully!');
        
        // Clear the form after adding
        document.getElementById('subject').value = '';
        document.getElementById('subject-start-time').value = '';
        document.getElementById('subject-end-time').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}

function hideAllForms() {
    document.getElementById('create-classroom-form').classList.add('hidden');
    document.getElementById('assign-teacher-form').classList.add('hidden');
    document.getElementById('create-timetable-form').classList.add('hidden');
}
let classrooms = []; // Store classroom data here
let timetables = {}; // Store timetables by classroom

// Function to show the Principal Dashboard
function showPrincipalView() {
    hideAllViews();
    document.getElementById('principal-view').classList.remove('hidden');
}

// Function to show the Teacher Dashboard
function showTeacherView() {
    hideAllViews();
    document.getElementById('teacher-view').classList.remove('hidden');
}

// Function to show the Student Dashboard
function showStudentView() {
    hideAllViews();
    document.getElementById('student-view').classList.remove('hidden');
    updateStudentDashboard(); // Update the dashboard each time it's shown
}

// Function to create a classroom
function createClassroom() {
    const name = document.getElementById('classroom-name').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const days = document.getElementById('days').value;

    if (name && startTime && endTime && days) {
        classrooms.push({ name, startTime, endTime, days, teacher: 'Unassigned' });

        const classroomRow = `<tr><td>${name}</td><td>Unassigned</td><td><button onclick="deleteRow(this)">Delete</button></td></tr>`;
        document.querySelector('#principal-view table').innerHTML += classroomRow;

        const classroomOption = `<option value="${name}">${name}</option>`;
        document.getElementById('classroom-select').innerHTML += classroomOption;

        alert('Classroom created successfully!');
    } else {
        alert('Please fill out all fields.');
    }
}

// Function to assign a teacher to a classroom
function assignTeacher() {
    const teacherName = document.getElementById('teacher-name').value;
    const classroomSelect = document.getElementById('classroom-select').value;

    classrooms.forEach(classroom => {
        if (classroom.name === classroomSelect) {
            classroom.teacher = teacherName;
        }
    });

    const rows = document.querySelectorAll('#principal-view table tr');
    rows.forEach(row => {
        if (row.cells[0].innerText === classroomSelect) {
            row.cells[1].innerText = teacherName;
        }
    });

    alert('Teacher assigned successfully!');
}

// Function to create a timetable
function createTimetable() {
    const subject = document.getElementById('subject').value;
    const startTime = document.getElementById('subject-start-time').value;
    const endTime = document.getElementById('subject-end-time').value;
    const classroomSelect = document.getElementById('classroom-select').value;

    if (subject && startTime && endTime && classroomSelect) {
        if (!timetables[classroomSelect]) {
            timetables[classroomSelect] = [];
        }
        timetables[classroomSelect].push({ subject, startTime, endTime });

        const timetableRow = `<tr><td>${subject}</td><td>${startTime}</td><td>${endTime}</td></tr>`;
        document.querySelector('#teacher-view #student-list table').innerHTML += timetableRow;

        alert('Timetable period added successfully!');
        
        // Clear the form after adding
        document.getElementById('subject').value = '';
        document.getElementById('subject-start-time').value = '';
        document.getElementById('subject-end-time').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}

// Function to update the Student Dashboard
function updateStudentDashboard() {
    const studentTimetable = document.querySelector('#student-view #class-timetable table');
    studentTimetable.innerHTML = `
        <tr>
            <th>Classroom</th>
            <th>Subject</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Teacher</th>
        </tr>`;

    classrooms.forEach(classroom => {
        if (timetables[classroom.name]) {
            timetables[classroom.name].forEach(entry => {
                const row = `
                    <tr>
                        <td>${classroom.name}</td>
                        <td>${entry.subject}</td>
                        <td>${entry.startTime}</td>
                        <td>${entry.endTime}</td>
                        <td>${classroom.teacher}</td>
                    </tr>`;
                studentTimetable.innerHTML += row;
            });
        }
    });
}

// Utility function to hide all views
function hideAllViews() {
    document.getElementById('principal-view').classList.add('hidden');
    document.getElementById('teacher-view').classList.add('hidden');
    document.getElementById('student-view').classList.add('hidden');
    document.getElementById('forms').classList.add('hidden');
}

// Utility function to hide all forms
function hideAllForms() {
    document.getElementById('create-classroom-form').classList.add('hidden');
    document.getElementById('assign-teacher-form').classList.add('hidden');
    document.getElementById('create-timetable-form').classList.add('hidden');
}

function deleteRow(button) {
    const row = button.closest('tr');
    const classroomName = row.cells[0].innerText;
    classrooms = classrooms.filter(classroom => classroom.name !== classroomName);
    delete timetables[classroomName];
    row.remove();
    alert('Classroom deleted successfully!');
}

