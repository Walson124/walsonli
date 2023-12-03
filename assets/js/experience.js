const skills = [
    'Java',
    'Python',
    'Git',
    'Scikit-Learn',
    'Tensorflow',
    'Linux',
    'HTML',
    'CSS',
    'JavaScript',
    'Postgresql',
    'Unit Testing',
    'C',
    'C#',
    'C++',
    'MATLAB',
    'SQL',
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