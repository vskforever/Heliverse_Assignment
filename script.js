// Show different views based on user selection
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
        console.log(row);
    });

}