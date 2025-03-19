//@ts-check

function tocPostProcess() {


    let sec1Begin = getGlobalPageNumber("Sec_1")+1; //use 1 indexing so it makes sense for a page number
    let sec2Begin = getGlobalPageNumber("Sec_2")+1; //use 1 indexing so it makes sense for a page number
    let sec3Begin = getGlobalPageNumber("Sec_3")+1; //use 1 indexing so it makes sense for a page number
    let sec4Begin = getGlobalPageNumber("Sec_4")+1; //use 1 indexing so it makes sense for a page number
    let sec5Begin = getGlobalPageNumber("Sec_5")+1; //use 1 indexing so it makes sense for a page number
    let sec6Begin = getGlobalPageNumber("Sec_6")+1; //use 1 indexing so it makes sense for a page number


    let TocLinks = document.getElementsByClassName("tocGrid");
    for (let i = 0; i < TocLinks.length; i++) {
        let href = TocLinks[i].getAttribute("href");
        let id = href.substring(1);
        let elementGlobalPage = getGlobalPageNumber(id);
        let sectionPageNumber = elementGlobalPage - sec1Begin;
        let xxx = 1;
    }



    let xx = 1;
}

function getGlobalPageNumber(elementId) {
    let elementToFind = document.getElementById(elementId);
    if (!elementToFind) {
        throw "Invalid element ID";
    }


    let pagedJsPages = document.getElementsByClassName("pagedjs_page");

    let globalPageNumber = -1;
    for (let i = 0; i < pagedJsPages.length; i++) {
        let X = pagedJsPages[i].querySelector("#" + elementId);
        if (X !== null && X !== undefined) {
            globalPageNumber = i + 1;
        }
    }
    return globalPageNumber;
}

function lookForDuplicateIds() {
    /* Find duplicate DOM ids | (c) 2021 - Petros Kyladitis */
    let uid = Array();
    let did = Array();
    let e = document.querySelectorAll('*[id]');
    for (let i = 0; i < e.length; i++) {
        if (!uid.includes(e[i].id)) {
            uid.push(e[i].id);
        } else {
            did.push(e[i].id);
        }
    }

    let msg = "There are " + (did.length > 0 ? did.length : "NO") + " duplicate ids in DOM\n";
    for (let j = 0; j < did.length; j++) {
        msg += "\n" + did[j];
    }

    console.log(msg);
}