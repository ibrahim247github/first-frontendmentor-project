let featureDropdownMenu = document.getElementById("featureDropdownMenu");
let companyDropdownMenu = document.getElementById("companyDropdownMenu");
let toggleFeatures = document.getElementById("toggleFeatures");
let toggleCompany = document.getElementById("toggleCompany");

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

function showF(showFeatures,hideFeatures) {
    if(toggleFeatures.classList.contains("showFeatures")) {
        showFeatures();
        toggleFeatures.classList.toggle("showFeatures"); 
        toggleFeatures.classList.toggle("hideFeatures");               
    }else if(toggleFeatures.classList.contains("hideFeatures")) {
        hideFeatures();
        toggleFeatures.classList.toggle("hideFeatures");               
        toggleFeatures.classList.toggle("showFeatures"); 
    }
}

function showC(showCompany,hideCompany) {
    if(toggleCompany.classList.contains("showCompany")) {
        showCompany();
        toggleCompany.classList.toggle("showCompany"); 
        toggleCompany.classList.toggle("hideCompany");               
    }else if(toggleCompany.classList.contains("hideCompany")) {
        hideCompany();
        toggleCompany.classList.toggle("hideCompany");               
        toggleCompany.classList.toggle("showCompany"); 
    }
}
