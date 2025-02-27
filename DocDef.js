//@ts-check






let def_Sec_1_0_1 = new DocSection().i(true, "1.0.1", true, "CERTIFICATION BASIS", true, `html/Description/CERTIFICATION BASIS.html`);
let def_Sec_1_0_2 = new DocSection();
def_Sec_1_0_2
    .i(true, "1.0.2", true, "INSTRUCTIONS FOR CONTINUED AIRWORTHINESS (ICA's)", true, "html/Description/INSTRUCTIONS FOR CONTINUED AIRWORTHINESS.html")
    .s([
        new DocSection().i(false, "", false,"",true,"html/Description/802OM.html", "break-after: avoid"),
        new DocSection().i(false, "", false,"",true,"html/Description/ADDRESS AIR TRACTOR.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false,"",true,"html/Description/802 SERVICE LETTERS.html", "break-after: avoid"),
        new DocSection().i(false, "", false,"",true,"html/Description/ADDRESS AIR TRACTOR.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false,"",true,"html/Description/MANUAL PROPELLER.html", "break-after: avoid"),
        new DocSection().i(false, "", false,"",true,"html/Description/ADDRESS HARTZELL.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false,"",true,"html/Description/MANUAL PT6A_45.html", "break-after: avoid"),
        new DocSection().i(false, "", false,"",true,"html/Description/ADDRESS PWC.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false,"",true,"html/Description/MANUAL PT6A_65.html", "break-after: avoid"),
        new DocSection().i(false, "", false,"",true,"html/Description/ADDRESS PWC.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false,"",true,"html/Description/MANUAL PT6A_67.html", "break-after: avoid"),
        new DocSection().i(false, "", false,"",true,"html/Description/ADDRESS PWC.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false,"",true,"html/Description/MANUAL PT6A_67F.html", "break-after: avoid"),
        new DocSection().i(false, "", false,"",true,"html/Description/ADDRESS PWC.html", "padding-left: 5em;")
    ]);
let def_Sec_1_0 = new DocSection();
def_Sec_1_0
    .i(true,"1.0", true, "GENERAL INFORMATION AND REFERENCES",true,"html/Description/GENERAL INFORMATION AND REFERENCES.html")
    .s([def_Sec_1_0_1, def_Sec_1_0_2]);











let def_Sec_1 = new DocSection();
def_Sec_1
    .i(true, "1", true, "DESCRIPTION", false, "")
    .s([
        def_Sec_1_0,
        new DocSection().i(true,"1.10",true,"AILERONS",true,"html/Description/AILERONS.html"),
        new DocSection().i(true,"1.15",true,"AIR CONDITIONER",true,"html/Description/AIR CONDITIONER.html")
    ]);




/**@type {DocSection} */
var DocDef = new DocSection();
DocDef.IsNumbered = false;
DocDef.SectionNumber = "-1";
DocDef.DisplayTitle = false;
DocDef.SectionTitle = "DOCUMENT";
DocDef.HasContent = false;
DocDef.ContentFileUrl = "";
DocDef.Sections = [
    def_Sec_1
];
DocDef.GetContent();







let render = () => {
    DocDef.RenderContent(true, document.body);


    let style = () => {
       let st = document.createElement("link");
       st.rel = "stylesheet";
       st.href = "code/Paged.js/interface.css";
       document.head.appendChild(st);

        let sc = document.createElement("script");
        sc.src = "code/Paged.js/paged.polyfill.js"
        document.body.appendChild(sc);
    }
    setTimeout(style, 5000);


};
setTimeout(render , 5000)



