console.log("Shorts hiding extension loaded !");

const shortsContainerTypes = ['grid-shelf-view-model', 'ytd-rich-shelf-renderer', 'ytd-reel-shelf-renderer']

function findAndHideShortsSection() {
    let shortsSectionFound = false;

    shortsContainerTypes.forEach(
        shortsContainerType => {
            const shortsSections = Array.from(document.querySelectorAll(shortsContainerType));

            if (shortsSections.length > 0) {
                hideSections(shortsSections)
                shortsSectionFound = true;
            }
        }
    )

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
        findAndHideShortsSection()
    });
    observer.observe(document.body, { childList: true, subtree: true });
}