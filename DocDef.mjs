//@ts-check
import { DocSection } from './code/DocSection.mjs'
import { def_Sec_1 } from './DocDef_1_Description.mjs'
import { def_Sec_2 } from './DocDef_2_Maintenance.mjs'
import { def_Sec_3 } from './DocDef_3_Inspections.mjs'
import { def_Sec_4 } from './DocDef_4_Lubrication.mjs'
import { def_Sec_5 } from './DocDef_5_Repairs.mjs'
import { def_Sec_6 } from './DocDef_6_AirworthinessLimitations.mjs'


let def_Sec_0 = new DocSection();
def_Sec_0
    .i(false, "", false, "", true, "html/Intro/TITLE.html")
    .s([
        new DocSection().i(false, "", true, "OVERVIEW", true, "html/Intro/OVERVIEW.html"),
        new DocSection().i(false, "", true, "MANUAL DISTRIBUTION", true, "html/Intro/MANUAL DISTRIBUTION.html"),
        new DocSection().i(false, "", false, "", true, "html/Intro/TOC AND NOTES.html")
    ]);





//See DocDef_1_Description.js
////////////////////////////////////////
////////////////////////////////////////   END SECTION 1
////////////////////////////////////////










//See DocDef_2_Maintenance.js
////////////////////////////////////////
////////////////////////////////////////   END SECTION 2
////////////////////////////////////////








//See DocDef_3_Inspections.js
////////////////////////////////////////
////////////////////////////////////////   END SECTION 3
////////////////////////////////////////








//See DocDef_4_Lubrication.js
////////////////////////////////////////
////////////////////////////////////////   END SECTION 4
////////////////////////////////////////






//See DocDef_5_Repairs.js
////////////////////////////////////////
////////////////////////////////////////   END SECTION 5
////////////////////////////////////////





//See DocDef_6_AirworthinessLimitations.js
////////////////////////////////////////
////////////////////////////////////////   END SECTION 6
////////////////////////////////////////





/**@type {DocSection} */
var DocDef = new DocSection();
DocDef.IsNumbered = false;
DocDef.SectionNumber = "-1";
DocDef.DisplayTitle = false;
DocDef.SectionTitle = "DOCUMENT";
DocDef.HasContent = false;
DocDef.ContentFileUrl = "";
DocDef.Sections = [
    def_Sec_0,
    def_Sec_1,
    def_Sec_2,
    def_Sec_3,
    def_Sec_4,
    def_Sec_5,
    def_Sec_6
];
DocDef.GetContent();









export { DocDef }
