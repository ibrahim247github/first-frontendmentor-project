let featureDropdownMenu = document.getElementById("featureDropdownMenu");
let companyDropdownMenu = document.getElementById("companyDropdownMenu");

let companyUpIcon = document.getElementById("company-up");
let companyDownIcon = document.getElementById("company");

let featureUpIcon = document.getElementById("features-up");
let featureDownIcon = document.getElementById("features");

function showFeatures() {
    featureDropdownMenu.style.display = "block";
    featureDownIcon.style.display = "none";
    featureUpIcon.style.display = "inline-block";
}

function hideFeatures() {
    featureDropdownMenu.style.display = "none";
    featureDownIcon.style.display = "inline-block";
    featureUpIcon.style.display = "none";
}

function showCompany() {
    companyDropdownMenu.style.display = "block";
    companyDownIcon.style.display = "none";
    companyUpIcon.style.display = "inline-block";
}

function hideCompany() {
    companyDropdownMenu.style.display = "none";
    companyDownIcon.style.display = "inline-block";
    companyUpIcon.style.display = "none";
}