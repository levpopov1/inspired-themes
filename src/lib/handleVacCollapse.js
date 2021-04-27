const getAncestorByClassName = (el, target) => {
  while (el && el.parentNode) {
    el = el.parentNode;
    if(el.classList.contains(target)){
      return el;
    }
  }
  return null;
}

// Should be called when opening a section programatically
// Will handler outer section and inner collapsible opening/closing
// Will not propagate to Bootstrap accordion features
const openSection = (id) => {

  let currentlyOpen = document.querySelector("#vac .vac-section.open");
  let currentlyOpenSection = document.querySelector("#vac .vac-section.open .section-content");
  
  if(currentlyOpen.id === id){
    // corrent section already open
    return null;
  }

  let nextSection = document.querySelector("#" + id);
  let nextSectionContent = document.querySelector("#"+ id + " .section-content");

  // close previous section and open the next one
  currentlyOpen.classList.remove('open');
  currentlyOpenSection.classList.remove('show');
  nextSection.classList.add("open");
  nextSectionContent.classList.add('show');
}

// Shoul be called on click of the section link toggle
// Only toggles open state on named sections
// Bootstrap will handle opening/closing the rest of the accordion
// and its inner collapsibles.
const toggleDisplayState = (e) => {

  let prevSection = document.querySelector("#vac .vac-section.open");

  setTimeout(() => {
    // clear open calss from all .vac-section elements
    let allSections = document.querySelectorAll('#vac .vac-section');
    allSections.forEach(function(item){
      item.classList.remove('open');
    });
  
    // add .open to currently open .vac-section element
    let vacSection = getAncestorByClassName(e.target, "vac-section");

    if(prevSection && prevSection.id === vacSection.id){
      let gallery = document.querySelector("#gallery");
      let gallerySection = document.querySelector('#vac #s00');
      gallery.classList.add("open");
      gallerySection.classList.add('show');
    }
    else{
      vacSection.classList.add("open");
    }
  }, 360);
}

export {
  toggleDisplayState,
  openSection
}