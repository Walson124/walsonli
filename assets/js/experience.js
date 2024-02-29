const skills = [
    'Java',
    'Python',
    'Git',
    'HTML',
    'CSS',
    'JavaScript',
    'SQL',
    'Flask',
    'Scikit-Learn',
    'Tensorflow',
    'Linux',
    'Angular',
    'Postgresql',
    'Unit Testing',
    'C',
    'C#',
    'C++',
    'MATLAB',
    'Windows',
    'MacOS',
    'Debian',
    'Teaching',
    'Teamwork',
    'Communication',
    'Leadership',
    'Problem-solving',
]

createSkillsList();

function createSkillsList() {
    const skillsDiv = document.getElementById('skills-list');
    for (let i = 0; i < skills.length; i++) {
        const span = document.createElement('span');
        span.innerText = skills[i];
        span.classList.add('span-list');
        skillsDiv.append(span);
    }
}