// Profile data object
const profile = {
    name: "John Doe",
    age: 25,
    hobbies: ["Coding", "Photography", , "Reading", "Hiking"]
};

let isProfileVisible = true;

// Function to toggle profile visibility
function toggleProfileVisibility() {
    isProfileVisible = !isProfileVisible;
    const profileCard = document.getElementById('profileCard');
    if (!isProfileVisible) {
        profileCard.classList.add('hidden');
    } else {
        profileCard.classList.remove('hidden');
    }
}

// Function to determine age category
function getAgeCategory() {
    if (profile.age < 13) {
        return "Child";
    } else if (profile.age < 20) {
        return "Teenager";
    } else {
        return "Adult";
    }
}

// Display hobbies
function displayHobbies() {
    const hobbiesList = document.getElementById('hobbiesList');
    profile.hobbies.forEach(hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });
}

// Display age category
function displayAgeCategory() {
    const ageCategoryElement = document.getElementById('ageCategory');
    ageCategoryElement.textContent = `Age Category: ${getAgeCategory()}`;
}

// Initialize the profile card
window.onload = function() {
    displayHobbies();
    displayAgeCategory();
};