import {DocDef} from './DocDef.mjs'
import { def_Sec_1 } from './DocDef_1_Description.mjs'
import { def_Sec_2 } from './DocDef_2_Maintenance.mjs'
import { def_Sec_3 } from './DocDef_3_Inspections.mjs'
import { def_Sec_4 } from './DocDef_4_Lubrication.mjs'
import { def_Sec_5 } from './DocDef_5_Repairs.mjs'
import { def_Sec_6 } from './DocDef_6_AirworthinessLimitations.mjs'

DocDef.GetContent();

let render = () => {
    
    DocDef.RenderContent(true, document.body);
    def_Sec_1.NumberFigures("Figure 1-");
    def_Sec_2.NumberFigures("Figure 2-");

    DocDef.ResolveXrefs(DocDef);

    let tocDiv1 = document.createElement("div");
    def_Sec_1.CreateToc(false, tocDiv1,0,"1-");
    def_Sec_1.InsertToc(tocDiv1, true, true, "Table of Contents", "tocHeader");


    let tocDiv2 = document.createElement("div");
    def_Sec_2.CreateToc(false, tocDiv2,0,"2-");
    def_Sec_2.InsertToc(tocDiv2, true, true, "Table of Contents", "tocHeader");

    let tocDiv3 = document.createElement("div");
    def_Sec_3.CreateToc(false, tocDiv3, 0, "3-");
    def_Sec_3.InsertToc(tocDiv3, true, true, "Table of Contents", "tocHeader");

    let tocDiv4 = document.createElement("div");
    def_Sec_4.CreateToc(false, tocDiv4, 0, "4-");
    def_Sec_4.InsertToc(tocDiv4, true, true, "Table of Contents", "tocHeader");

    let tocDiv5 = document.createElement("div");
    def_Sec_5.CreateToc(false, tocDiv5, 0, "5-");
    def_Sec_5.InsertToc(tocDiv5, true, true, "Table of Contents", "tocHeader");

    let tocDiv6 = document.createElement("div");
    def_Sec_6.CreateToc(false, tocDiv6, 0, "6-");
    def_Sec_6.InsertToc(tocDiv6, true, true, "Table of Contents", "tocHeader");

    let style = () => {
        let st = document.createElement("link");
        st.rel = "stylesheet";
        st.href = "code/Paged.js/interface.css";
        document.head.appendChild(st);

        let sc = document.createElement("script");
        sc.src = "code/Paged.js/paged.polyfill.js"
        document.body.appendChild(sc);

        let scTableHeaders = document.createElement("script");
        scTableHeaders.src="/code/Paged.js/tableHeaders.js";
        document.body.appendChild(sc);

    }
    setTimeout(style, 5000);


};

setTimeout(render, 5000);