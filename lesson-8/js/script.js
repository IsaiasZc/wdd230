// last modified 

let lastModification = new Date(document.lastModified);

let compiledtrSpan=  document.querySelector(".compiled-tr__span");

compiledtrSpan.innerHTML =`${lastModification.getDay()}.${lastModification.getMonth()}.${lastModification.getFullYear()}`;