var addEducationButton = document.getElementById('addEducation');
var addSkillButton = document.getElementById('addSkill');
var addExperienceButton = document.getElementById('addExperience');
var submitButton = document.getElementById('submit');
var uploadPhotoButton = document.getElementById('uploadPhoto');
var resumeForm = document.getElementById('resumeForm');
var uploadedImageSrc = '';
addEducationButton.addEventListener('click', addMoreEducation);
addSkillButton.addEventListener('click', addMoreSkills);
addExperienceButton.addEventListener('click', addMoreExperience);
submitButton.addEventListener('click', submitResume);
uploadPhotoButton.addEventListener('click', uploadPhoto);
function addMoreEducation(event) {
    event.preventDefault();
    var educationList = document.getElementById('educationList');
    var newEducation = document.createElement('li');
    newEducation.innerHTML = "<input type=\"text\" name=\"education\" size=\"50\" placeholder=\"Education Details\">";
    educationList === null || educationList === void 0 ? void 0 : educationList.appendChild(newEducation);
}
function addMoreSkills(event) {
    event.preventDefault();
    var skillsList = document.getElementById('skillsList');
    var newSkill = document.createElement('li');
    newSkill.innerHTML = "<input type=\"text\" name=\"skills\" size=\"20\" placeholder=\"Skill\">";
    skillsList === null || skillsList === void 0 ? void 0 : skillsList.appendChild(newSkill);
}
function addMoreExperience(event) {
    event.preventDefault();
    var experienceList = document.getElementById('experienceList');
    var newExperience = document.createElement('li');
    newExperience.innerHTML = "<input type=\"text\" name=\"experience\" size=\"50\" placeholder=\"Work Experience\">";
    experienceList === null || experienceList === void 0 ? void 0 : experienceList.appendChild(newExperience);
}
function uploadPhoto(event) {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', function () {
        var _a;
        var file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a, _b;
                var imgElement = uploadPhotoButton.querySelector('img');
                imgElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                uploadedImageSrc = (_b = e.target) === null || _b === void 0 ? void 0 : _b.result;
            };
            reader.readAsDataURL(file);
        }
    });
    input.click();
}
function submitResume(event) {
    event.preventDefault();
    var formData = new FormData(resumeForm);
    var resumeData = {
        firstName: formData.get('FirstName'),
        lastName: formData.get('LastName'),
        gender: formData.get('gender'),
        email: formData.get('email'),
        dob: formData.get('DOB'),
        nationality: formData.get('Nationality'),
        maritalStatus: formData.get('maritalStatus'),
        contact: formData.get('Contact'),
        education: formData.getAll('education'),
        skills: formData.getAll('skills'),
        experience: formData.getAll('experience')
    };
    if (!resumeData.firstName || !resumeData.lastName || !resumeData.gender || !resumeData.email ||
        !resumeData.dob || !resumeData.nationality || !resumeData.contact) {
        alert('Please fill out all the required personal details.');
        return;
    }
    var educationList = document.getElementById('educationList');
    if (educationList.children.length === 0 || resumeData.education.some(function (e) { return e.trim() === ""; })) {
        alert('Please add at least one valid education detail.');
        return;
    }
    var skillsList = document.getElementById('skillsList');
    if (skillsList.children.length === 0 || resumeData.skills.some(function (s) { return s.trim() === ""; })) {
        alert('Please add at least one valid skill.');
        return;
    }
    var experienceList = document.getElementById('experienceList');
    if (experienceList.children.length === 0 || resumeData.experience.some(function (exp) { return exp.trim() === ""; })) {
        alert('Please add at least one valid work experience.');
        return;
    }
    var newWindow = window.open();
    newWindow.document.write("\n        <html>\n        <head>\n            <title>".concat(resumeData.firstName, " ").concat(resumeData.lastName, " - Resume</title>\n            <style>\n                * {\n                    margin: 0;\n                    padding: 0;\n                    box-sizing: border-box;\n                }\n\n                body {\n                    font-family: Arial, Helvetica, sans-serif;\n                    background-color: rgb(100, 200, 255);\n                    color: #333;\n                    line-height: 1.9;\n                    padding: 20px;\n                }\n\n                .container {\n                    max-width: 800px;\n                    margin: auto;\n                    padding: 18px;\n                    background-color: #f5f5f5;\n                    border-radius: 15px;\n                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);\n                }\n\n                .header {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    padding-bottom: 20px;\n                    border-bottom: 2px solid #ccc;\n                }\n\n                .header h1 {\n                    font-size: 2.5em;\n                }\n\n                .header img {\n                    border-radius: 10%;\n                    height: 120px;\n                }\n\n                section {\n                    margin: 20px 0;\n                    padding: 15px;\n                    background-color: #e0f5fa;\n                    border-radius: 8px;\n                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n                }\n\n                section h2 {\n                    color: #ffffff;\n                    background-color: rgb(22, 14, 3);\n                    border-radius: 8px;\n                    font-size: 1.8em;\n                    padding: 5px;\n                    border-bottom: 2px solid #3498db;\n                }\n\n                p,\n                li {\n                    font-size: 1.1em;\n                }\n\n                ol,\n                ul {\n                    margin-left: 20px;\n                }\n\n                button {\n                    padding: 10px;\n                    background-color: rgba(247, 156, 156, 0.796);\n                    color: white;\n                    border-radius: 10px;\n                    border: none;\n                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n                    font-size: 1.1em;\n                }\n\n            </style>\n        </head>\n        <body>\n            <div class=\"container\">\n                <div class=\"header\">\n                    <h1>").concat(resumeData.firstName, " ").concat(resumeData.lastName, " - Resume </h1>\n                    <img src=\"").concat(uploadedImageSrc, "\" alt=\"Profile Photo\">\n                </div>\n                <section>\n                    <h2>Personal Details</h2>\n                    <p><strong>Gender:</strong> ").concat(resumeData.gender, "</p>\n                    <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n                    <p><strong>Date of Birth:</strong> ").concat(resumeData.dob, "</p>\n                    <p><strong>Nationality:</strong> ").concat(resumeData.nationality, "</p>\n                    <p><strong>Marital Status:</strong> ").concat(resumeData.maritalStatus, "</p>\n                    <p><strong>Contact:</strong> ").concat(resumeData.contact, "</p>\n                </section>\n                <section>\n                    <h2>Education</h2>\n                    <ul>\n                        ").concat(resumeData.education.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "\n                    </ul>\n                </section>\n                <section>\n                    <h2>Skills</h2>\n                    <ul>\n                        ").concat(resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                    </ul>\n                </section>\n                <section>\n                    <h2>Work Experience</h2>\n                    <ol>\n                        ").concat(resumeData.experience.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "\n                    </ol>\n                </section>\n            </div>\n        </body>\n        </html>\n    "));
    newWindow.document.close();
}
