console.log("Shorts hiding extension loaded !");

function findAndHideShortsSection() {
    let shortsSectionFound = false;

    const shortsSections = Array.from(document.querySelectorAll('ytd-rich-shelf-renderer:not([items-per-row])'));
    if (shortsSections.length > 0) {
        hideSections(shortsSections)
        shortsSectionFound = true;
    }

    const shortsReelsSections = Array.from(document.querySelectorAll('ytd-reel-shelf-renderer'));
    if (shortsReelsSections.length > 0) {
        hideSections(shortsReelsSections)
        shortsSectionFound = true;
    }

    return shortsSectionFound;
}

function hideSections(sectionsToHide){
    console.log("Shorts section found");
    sectionsToHide.forEach( element => {
        element.remove();
    })
}

if (!findAndHideShortsSection()) {
    //If not shorts section found, observe the page for changes
    const observer = new MutationObserver(() => {
        if (findAndHideShortsSection()) {
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}