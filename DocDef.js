//@ts-check






let def_Sec_1_0_1 = new DocSection().i(true, "1.0.1", true, "CERTIFICATION BASIS", true, `html/Description/CERTIFICATION BASIS.html`);
let def_Sec_1_0_2 = new DocSection();
def_Sec_1_0_2
    .i(true, "1.0.2", true, "INSTRUCTIONS FOR CONTINUED AIRWORTHINESS (ICA's)", true, "html/Description/INSTRUCTIONS FOR CONTINUED AIRWORTHINESS.html")
    .s([
        new DocSection().i(false, "", false, "", true, "html/Description/802OM.html", "break-after: avoid"),
        new DocSection().i(false, "", false, "", true, "html/Description/ADDRESS AIR TRACTOR.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false, "", true, "html/Description/802 SERVICE LETTERS.html", "break-after: avoid"),
        new DocSection().i(false, "", false, "", true, "html/Description/ADDRESS AIR TRACTOR.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false, "", true, "html/Description/MANUAL PROPELLER.html", "break-after: avoid"),
        new DocSection().i(false, "", false, "", true, "html/Description/ADDRESS HARTZELL.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false, "", true, "html/Description/MANUAL PT6A_45.html", "break-after: avoid"),
        new DocSection().i(false, "", false, "", true, "html/Description/ADDRESS PWC.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false, "", true, "html/Description/MANUAL PT6A_65.html", "break-after: avoid"),
        new DocSection().i(false, "", false, "", true, "html/Description/ADDRESS PWC.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false, "", true, "html/Description/MANUAL PT6A_67.html", "break-after: avoid"),
        new DocSection().i(false, "", false, "", true, "html/Description/ADDRESS PWC.html", "padding-left: 5em;"),
        new DocSection().i(false, "", false, "", true, "html/Description/MANUAL PT6A_67F.html", "break-after: avoid"),
        new DocSection().i(false, "", false, "", true, "html/Description/ADDRESS PWC.html", "padding-left: 5em;")
    ]);
let def_Sec_1_0 = new DocSection();
def_Sec_1_0
    .i(true, "1.0", true, "GENERAL INFORMATION AND REFERENCES", true, "html/Description/GENERAL INFORMATION AND REFERENCES.html")
    .s([def_Sec_1_0_1, def_Sec_1_0_2]);

let def_Sec_1 = new DocSection();
def_Sec_1
    .i(true, "1", true, "DESCRIPTION", false, "")
    .s([
        def_Sec_1_0,
        new DocSection().i(true, "1.10", true, "AILERONS", true, "html/Description/AILERONS.html"),
        new DocSection().i(true, "1.15", true, "AIR CONDITIONER", true, "html/Description/AIR CONDITIONER.html")
    ]);


////////////////////////////////////////
////////////////////////////////////////   END SECTION 1
////////////////////////////////////////










let def_Sec_2 = new DocSection().i(true, "2", true, "MAINTENANCE", false, "", "break-before:right;");
def_Sec_2.CustomClass = "breakBeforeRight";
////////////////////////////////////////
////////////////////////////////////////   END SECTION 2
////////////////////////////////////////








let def_Sec_3_0 = new DocSection().i(true, "3.0", true, "GENERAL", true, `html/Inspection/GENERAL.html`);


let def_Sec_3_1_0 = new DocSection().i(true,"3.1.0",true,"General",true,`html/Inspection/Insp_GENERAL.html`);
let def_Sec_3_1_1 = new DocSection().i(true,"3.1.1",true,"Propeller",true,`html/Inspection/Insp_PROPELLER.html`);
let def_Sec_3_1 = new DocSection().i(true, "3.1", true, "SCHEDULED INSPECTIONS", true, `html/Inspection/SCHEDULED INSPECTIONS.html`,"padding-left:1em;");
def_Sec_3_1.s([
    def_Sec_3_1_0,
    def_Sec_3_1_1
]);




let def_Sec_3 = new DocSection().i(true, "3", true, "INSPECTION", false, "", "page-break-before:always;");
def_Sec_3.CustomClass = "breakBeforeRight";
def_Sec_3.s([
    def_Sec_3_0,
    def_Sec_3_1
]);
////////////////////////////////////////
////////////////////////////////////////   END SECTION 3
////////////////////////////////////////













let def_Sec_4 = new DocSection().i(true, "4", true, "LUBRICATION", false, "", "page-break-before:always;");
def_Sec_4.CustomClass = "breakBeforeRight";
let def_Sec_5 = new DocSection().i(true, "5", true, "REPAIRS", false, "", "page-break-before:always;");
def_Sec_5.CustomClass = "breakBeforeRight";
let def_Sec_6 = new DocSection().i(true, "6", true, "AIRWORTHINESS LIMITATIONS", false, "", "page-break-before:always;");
def_Sec_6.CustomClass = "breakBeforeRight";


/**@type {DocSection} */
var DocDef = new DocSection();
DocDef.IsNumbered = false;
DocDef.SectionNumber = "-1";
DocDef.DisplayTitle = false;
DocDef.SectionTitle = "DOCUMENT";
DocDef.HasContent = false;
DocDef.ContentFileUrl = "";
DocDef.Sections = [
    def_Sec_1,
    def_Sec_2,
    def_Sec_3,
    def_Sec_4,
    def_Sec_5,
    def_Sec_6
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
setTimeout(render, 5000)



