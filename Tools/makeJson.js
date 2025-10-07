//This file converts from the original javascript doc def to a json file.

import { DocSection } from '../code/DocSection.mjs'
import { def_Sec_1 } from '../DocDef_1_Description.mjs'
import { def_Sec_2 } from '../DocDef_2_Maintenance.mjs'
import { def_Sec_3 } from '../DocDef_3_Inspections.mjs'
import { def_Sec_4 } from '../DocDef_4_Lubrication.mjs'
import { def_Sec_5 } from '../DocDef_5_Repairs.mjs'
import { def_Sec_6 } from '../DocDef_6_AirworthinessLimitations.mjs'


let def_Sec_0 = new DocSection();
def_Sec_0
    .i(false, "", false, "", true, "html/Intro/TITLE.html")
    .s([
        new DocSection().i(false, "", true, "OVERVIEW", true, "html/Intro/OVERVIEW.html"),
        new DocSection().i(false, "", true, "MANUAL DISTRIBUTION", true, "html/Intro/MANUAL DISTRIBUTION.html"),
        new DocSection().i(false, "", false, "", true, "html/Intro/TOC AND NOTES.html")
    ]);

import { DocDef } from '../DocDef.mjs'

import fs from 'fs'

fs.writeFileSync("jsonDataOut.json",JSON.stringify(DocDef));

console.log("done");