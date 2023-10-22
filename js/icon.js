const favicon = document.querySelector("link[rel='icon']")



function Slides() {
    favicon.setAttribute("href", "/js/icons/Slides.png");
    localStorage.setItem("favicon", "js/icons/Slides.png");
    localStorage.setItem("title", "Google Slides");
    document.title = localStorage.getItem("title");
    
}

function Googledrive() {
    favicon.setAttribute("href", "/js/icons/Drive.png");
    localStorage.setItem("favicon", "js/icons/Drive.png")
    localStorage.setItem("title", "Google Drive - My Drive");
    document.title = localStorage.getItem("title");
    
}

function reset() {
    favicon.setAttribute("href", "favicon (2).png");
    localStorage.setItem("favicon", "favicon (2).png")
    localStorage.setItem("title", "Plasm - Grin");
    document.title = localStorage.getItem("title");
    
}

function Schoology() {
    favicon.setAttribute("href", "js/icons/Schoology.png");
    localStorage.setItem("favicon", "js/icons/Schoology.png")
    localStorage.setItem("title", "Schoology");
    document.title = localStorage.getItem("title");
    
}

function Studentvue() {
    favicon.setAttribute("href", "js/icons/Studentvue.png");
    localStorage.setItem("favicon", "js/icons/Studentvue.png")
    localStorage.setItem("title", "Student Vue");
    document.title = localStorage.getItem("title");
    
}

function Google() {
    favicon.setAttribute("href", "js/icons/Google.png");
    localStorage.setItem("favicon", "js/icons/Google.png")
    localStorage.setItem("title", "Google");
    document.title = localStorage.getItem("title");
    
}

function Googledocs() {
    favicon.setAttribute("href", "js/icons/Googledocs.png");
    localStorage.setItem("favicon", "js/icons/Googledocs.png")
    localStorage.setItem("title", "Google Docs");
    document.title = localStorage.getItem("title");
    
}




