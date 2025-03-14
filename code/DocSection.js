//@ts-check
class DocSection {
    constructor() {
        this.IsNumbered = false;
        this.SectionNumber = "NO SECTION NUMBER";
        this.DisplayTitle = true;
        this.SectionTitle = "NO SECTION TITLE"
        this.HasContent = false;
        this.ContentFileUrl = "CONTENT FILE NOT SET";
        this.CustomStyle = "";
        this.CustomClass = "";
        this.ElementId = "";
        /**@type {DocSection[]} */
        this.Sections = [];


        this._html = [];
        this._div = null;
    }


    /**
     * Recursively retrieves the section's and subsection's content.
     */
    GetContent = () => {
        if (this.HasContent) {
            fetch(this.ContentFileUrl)
                .then(response => {
                    if (!response.ok) {
                        console.log("fetch not ok");
                    }
                    return response.text();
                }
                )
                .then(
                    data => {
                        let parser = new DOMParser();
                        let doc = parser.parseFromString(data, "text/html");

                        doc.body.childNodes.forEach(c => {
                            this._html.push(c);
                        })
                    }
                )
                .catch(x => console.log("fetch error"));

        }


        this.Sections.forEach(s => {
            s.GetContent();
        });

    }

    /**
     * Renders the html content into an html element.
     * @param {boolean} recursive True to recursively render subjection's content
     * @param {HTMLElement} targetElement 
     */
    RenderContent = (recursive, targetElement) => {
        /**@type {HTMLElement} */
        let d = document.createElement("div");
        this._div = d;
        if (this.ElementId) {
            d.id = this.ElementId;
        }


        if (this.CustomStyle) { d.setAttribute("style", this.CustomStyle); }
        if (this.CustomClass) { d.classList.add(this.CustomClass); }

        if (this.DisplayTitle) {
            let titleString = this.SectionTitle;
            if (this.IsNumbered) {
                titleString = this.SectionNumber + " - " + titleString
                let level = DocSection._countChars(this.SectionNumber, ".");
                level = level + 1;
                let elementType = "h" + level;
                let hHeader = document.createElement(elementType);
                hHeader.innerText = titleString;
                d.appendChild(hHeader);
            }
            else {
                let pHeader = document.createElement("p");
                pHeader.className = "unnumberedHeader";
                pHeader.innerText = titleString;
                d.appendChild(pHeader);
            }
        }

        this._html.forEach(e => {
            d.appendChild(e);
        });


        targetElement.appendChild(d);
        if (recursive) {
            this.Sections.forEach(s => {
                s.RenderContent(true, d);
            });
        }
    }

    /**
     * Creates unique id's to be used as the element's ID for a table of contents and links.
     * @param {boolean} recursive 
     * @param {string[]} ids 
     */
    CreateIdsForTOC = (recursive, ids) => {
        let x = DocSection._generateRandomString(20);
        while (ids.indexOf(x) > -1) {
            x = DocSection._generateRandomString(20);
        }
        this.SetElementId(x);
        ids.push(x);
        if (recursive) {
            this.Sections.forEach(s => {
                s.CreateIdsForTOC(true, ids);
            })
        }
    }


    /**
     * 
     * @param {boolean} includeSelf Include the first level (first section) in the table of contents.
     * @param {HTMLElement} targetDiv 
     * @param {number} parentLevel Set to 0 if you are ignoring the Section header
     */
    CreateToc = (includeSelf, targetDiv, parentLevel = 0) => {
        /*Styling from: https://css-tricks.com/a-perfect-table-of-contents-with-html-css/ */
        let thisLevel = parentLevel + 1;
        if (includeSelf) {
            if (this.DisplayTitle) {
                let d = document.createElement("div");
                d.className = "tocLevel" + thisLevel.toFixed(0);
                let a = document.createElement("a");
                a.className = "tocGrid";
                //TEST
                if(!this.ElementId){
                    this._div.id = DocSection._generateRandomString(20);
                    a.href = "#" + this._div.id;
                }
                //TEST
                
                d.appendChild(a);

                let lineText = "";
                if (this.IsNumbered) {
                    lineText += this.SectionNumber + " - " + this.SectionTitle;
                }
                else {
                    lineText += this.SectionTitle;
                }
                let span1 = document.createElement("span");
                span1.innerText = (lineText);
                let spanLeaders = document.createElement("span");
                spanLeaders.className = "tocLeaders";
                spanLeaders.setAttribute("aria-hidden", "true");
                span1.appendChild(spanLeaders);
                a.appendChild(span1);
                let span2 = document.createElement("span");
                span2.className = "tocPageNum";
                span2.innerText = "XXX";
                a.appendChild(span2);
                targetDiv.appendChild(d);
            }
        }

        this.Sections.forEach(s => {
            s.CreateToc(true, targetDiv, thisLevel);
        })
    }


    /**
     * Inserts table of contents right after the section header.
     * @param {HTMLElement} tocDiv 
     */
    InsertToc = (tocDiv, breakPageAfterToc = false, createTocHeader = false, tocHeaderText = "", tocHeaderClass = "") => {
        if (createTocHeader) {
            let tDiv = document.createElement("div");
            let pHeader = document.createElement("p");
            pHeader.innerText = tocHeaderText;
            if (tocHeaderClass) {
                pHeader.className = tocHeaderClass;
            }
            tDiv.appendChild(pHeader);
            tDiv.appendChild(tocDiv);
            if (breakPageAfterToc) { tDiv.className = "breakAfter"; }
            this._div.insertBefore(tDiv, this._div.childNodes[1]);
        }
        else {
            if (breakPageAfterToc) { tocDiv.className = "breakAfter"; }
            this._div.insertBefore(tocDiv, this._div.childNodes[1]);
        }
    }

    /**
     * Sets the html id attribute of the section's main div.
     * @param {string} id 
     */
    SetElementId = (id) => {
        this.ElementId = id;
        return this;
    }

    /**
     * Simple initialization function that sets the properties for most sections.
     * 
     * @param {boolean} isNumbered 
     * @param {string} sectionNumber 
     * @param {boolean} displayTitle
     * @param {string} sectionTitle 
     * @param {boolean} hasContent 
     * @param {string} contentFileUrl 
     * @param {string} customStyle Custom CSS style applied to the wrapping DIV
     * @returns 
     */
    i = (isNumbered, sectionNumber, displayTitle, sectionTitle, hasContent, contentFileUrl, customStyle = "") => {
        this.IsNumbered = isNumbered;
        this.SectionNumber = sectionNumber;
        this.DisplayTitle = displayTitle;
        this.SectionTitle = sectionTitle;
        this.HasContent = hasContent;
        this.ContentFileUrl = contentFileUrl;
        this.CustomStyle = customStyle;
        return this;
    }

    /**
     * Set the section's subsections.
     * 
     * @param {DocSection[]} sections 
     */
    s = (sections) => {
        this.Sections = sections;
        return this;
    }

    /**
     * Function used internally.
     * Counts the number of characters (char) in a string (str)
     * 
     * @param {string} str 
     * @param {string} char 
     * @returns 
     */
    static _countChars(str, char) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                count++;
            }
        }
        return count;
    }

    /**
     * Generates a random string from standard letters and numbers.
     * @param {number} length Length of the string to be generated.
     * @returns 
     */
    static _generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}