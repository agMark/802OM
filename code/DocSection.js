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

        /**@type {DocSection[]} */
        this.Sections = [];


        this._html = [];
    }


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
     * 
     * @param {boolean} recursive 
     * @param {HTMLElement} targetElement 
     */
    RenderContent = (recursive, targetElement) => {
        let d = document.createElement("div");

        if(this.CustomStyle){d.setAttribute("style", this.CustomStyle);}
        if(this.CustomClass){d.classList.add(this.CustomClass);}

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
    }

    static _countChars(str, char) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                count++;
            }
        }
        return count;
    }
}