//@ts-check
import { DocSection } from '../code/DocSection.mjs';
import { DocDef } from '../DocDef.mjs'

class CheckBoxWithLabel {
    /**
     * 
     * @param {string} label 
     */
    constructor(label) {
        this._d = document.createElement("div");
        // this._d.style.display = "inline-block";

        this._i = document.createElement("input");
        this._i.type = "checkbox";
        this._d.appendChild(this._i);

        let p = document.createElement("label");
        p.innerText = label;
        this._d.appendChild(p)
    }
    RenderHtml = () => {
        return this._d;
    }

    /**
     * 
     * @param {boolean} checkState 
     */
    SetCheckState = (checkState) => {
        if(checkState){
            this._i.checked = true;
        }
        else{
            this._i.checked = false;
        }
    }
}

class TextBoxWithLabel {
    /**
     * 
     * @param {string} label 
     */
    constructor(label) {
        this._d = document.createElement("div");
        // this._d.style.display = "inline-block";



        let p = document.createElement("label");
        p.innerText = label;
        this._d.appendChild(p)

        this._i = document.createElement("input");
        this._i.type = "text";
        this._d.appendChild(this._i);
    }
    RenderHtml = () => {
        return this._d;
    }

    SetText = (text) => {
        this._i.value = text;
    }
}

class AttributeViewer {
    constructor() {
        this.containerDiv = document.getElementById("attributes");
        /*
                this.IsNumbered = false;
                this.SectionNumber = "NO SECTION NUMBER";
                this.DisplayTitle = true;
                this.SectionTitle = "NO SECTION TITLE"
                this.HasContent = false;
                this.ContentFileUrl = "CONTENT FILE NOT SET";
                this.CustomStyle = "";
                this.CustomClass = "";
        */

        this.cBox_IsNumbered = new CheckBoxWithLabel("Is Numbered");
        this.containerDiv.appendChild(this.cBox_IsNumbered.RenderHtml());

        this.tBox_SectionNumber = new TextBoxWithLabel("Section Number");
        this.containerDiv.appendChild(this.tBox_SectionNumber.RenderHtml());

        this.cBox_DisplayTitle = new CheckBoxWithLabel("Display Title");
        this.containerDiv.appendChild(this.cBox_DisplayTitle.RenderHtml());

        this.tBox_SectionTitle = new TextBoxWithLabel("Section Title");
        this.containerDiv.appendChild(this.tBox_SectionTitle.RenderHtml());

        this.cBox_HasContent = new CheckBoxWithLabel("Has Html Content");
        this.containerDiv.appendChild(this.cBox_HasContent.RenderHtml());

        this.tBox_ContentUrl = new TextBoxWithLabel("Content Html Url");
        this.containerDiv.appendChild(this.tBox_ContentUrl.RenderHtml());

        this.tBox_CustomStyle = new TextBoxWithLabel("Custom Style Attribute");
        this.containerDiv.appendChild(this.tBox_CustomStyle.RenderHtml());

        this.tBox_CustomClass = new TextBoxWithLabel("Custom Class Attribute");
        this.containerDiv.appendChild(this.tBox_CustomClass.RenderHtml());
    }
    SetMode = () => {

    }

    /**
     * 
     * @param {DocSection} section 
     */
    Update = (section) => {
        this.ClearAll();
        this.cBox_IsNumbered.SetCheckState(section.IsNumbered);
        this.tBox_SectionNumber.SetText(section.SectionNumber);
        this.cBox_DisplayTitle.SetCheckState(section.DisplayTitle);
        this.tBox_SectionTitle.SetText(section.SectionTitle);
        this.cBox_HasContent.SetCheckState(section.HasContent);
        this.tBox_ContentUrl.SetText(section.ContentFileUrl);
        this.tBox_CustomStyle.SetText(section.CustomClass);
    }
    ClearAll = () => {
        this.cBox_IsNumbered.SetCheckState(false);
        this.tBox_SectionNumber.SetText("");
        this.cBox_DisplayTitle.SetCheckState(false);
        this.tBox_SectionTitle.SetText("");
        this.cBox_HasContent.SetCheckState(false);
        this.tBox_ContentUrl.SetText("");
        this.tBox_CustomStyle.SetText("");
    }
}

class PreviewFrame{
    constructor(){
        /**@type {HTMLIFrameElement} */
        this.iframe = /**@type {HTMLIFrameElement}*/ (document.getElementById("iframePreview"));

        //Get the css from elementStyling.css
        let cssUrl = "../css/elementStyling.css";
        this.css = "";
        fetch(cssUrl)
        .then(response => {
            if (!response.ok) {
                console.log("fetch not ok");
            }
            return response.text();
        }
        )
        .then(
            data => {
                this.css = data;
                let brkHere = 1;
            }
        )
        .catch(x => console.log("fetch error"));
    }

    /**
     * 
     * @param {DocSection} section 
     */
    Update = (section) => {
        if(section.HasContent){
            //Fetch the content
            //need to correct the url because the page isn't in the same folder as the content
            //this should get smarter.
            let url = "../" + section.ContentFileUrl;
            let html = "<html><head><style>STYLEHERE</style></head><body>BODYHERE</body></html>";
            if(this.css){
                html = html.replace("STYLEHERE", this.css);
            }
            fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.log("fetch not ok");
                }
                return response.text();
            }
            )
            .then(
                data => {
                    html = html.replace("BODYHERE",data);
                    //@ts-ignore
                    M.getModel().setValue(data);
                    let iframeHtml = html.replaceAll("img/","../img/");//re-link the references
                    this.iframe.srcdoc= iframeHtml;
                }
            )
            .catch(x => console.log("fetch error"));
            
        }
        else{
            let noContent = "<html><p style='background-color:aqua; font-weight:bold;'>This Section Does Not Have Its Own Html Content</p></html>";
            this.iframe.srcdoc= noContent;
        }
    }
}

class TreeItem {
    constructor() {
        this.li = document.createElement("li");
        this.li.style.cursor = "pointer";
        this.li.onclick = (e) => {
            e.stopPropagation();
            this.LiClicked(e);
        };
        this._section = null;

        this._clickHandlers = [];
    }

    /**
     * 
     * @param {DocSection} section 
     */
    Init = (section) => {
        this._section = section;
        let liText = "";
        if (section.IsNumbered) {
            liText = "Section " + section.SectionNumber;
        }
        else {
            liText = "Un-Numbered Section";
        }
        if (section.DisplayTitle) {
            liText += " - " + section.SectionTitle
        }
        this.li.innerText = liText;

    }

    GetHtmlItem = () => {
        return this.li;
    }

    /**
     * 
     * @param {(arg0: DocSection, arg1: TreeItem) => void} handler 
     */
    AddClickHandler = (handler) => {
        this._clickHandlers.push(handler);
    }

    /**
     * 
     * @param {MouseEvent} e 
     */
    LiClicked = (e) => {
        if(this._clickHandlers){
            this._clickHandlers.forEach(h => {
                h(this._section, this);
            })
        }
    }
}


let attrSection = new AttributeViewer();
let previewFrame = new PreviewFrame();

/**@type {TreeItem[]} */
let allTreeItems = [];

/**
 * 
 * @param {DocSection} section 
 * @param {TreeItem} clickedItem 
 */
let styleClickedTreeItem = (section, clickedItem) => {
    allTreeItems.forEach(ti => {
        ti.li.style.backgroundColor = "white";
    })
    clickedItem.li.style.backgroundColor = "lightblue";
}

/**
 * 
 * @param {DocSection} section 
 * @param {HTMLUListElement} parentUl 
 */
let recursiveThroughSections = (section, parentUl) => {
    let ti = new TreeItem();
    ti.Init(section);
    ti.AddClickHandler(attrSection.Update);
    ti.AddClickHandler(previewFrame.Update);
    ti.AddClickHandler(styleClickedTreeItem);
    allTreeItems.push(ti);
    parentUl.appendChild(ti.GetHtmlItem());

    if (section.Sections && section.Sections.length > 0) {
        let ul = document.createElement("ul");
        ti.GetHtmlItem().appendChild(ul);
        section.Sections.forEach(s => {
            recursiveThroughSections(s, ul);
        });
    }

}

recursiveThroughSections(DocDef, document.getElementById("tree"));




















let breakHere = 1;