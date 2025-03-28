//@ts-check
import {DocSection} from './code/DocSection.mjs'

let def_Sec_5_1 = new DocSection().i(true, "5.1", true, "FUSELAGE FRAME REPAIRS", true, "html/Repairs/FUSELAGE FRAME REPAIRS.html");

let def_Sec_5_2 = new DocSection().i(true, "5.2", true, "FORWARD CLAMP BLOCK BOLT FAILURE", true, "html/Repairs/FORWARD CLAMP BLOCK BOLT FAILURE.html");

let def_Sec_5_3 = new DocSection().i(true, "5.3", true, "MAJOR STRUCTURAL DAMAGE", true, "html/Repairs/MAJOR STRUCTURAL DAMAGE.html");

let def_Sec_5_4 = new DocSection().i(true, "5.4", true, "MAIN LANDING GEAR SPRINGS", true, "html/Repairs/MAIN LANDING GEAR SPRINGS.html");

let def_Sec_5_5 = new DocSection().i(true, "5.5", true, "WATER IMMERSION", true, "html/Repairs/WATER IMMERSION.html");

let def_Sec_5_6_1 = new DocSection().i(true, "5.6.1", true, "Horizontal Stabilizer Strut Fitting", true, "html/Repairs/Horizontal Stabilizer Strut Fitting.html");
let def_Sec_5_6_2 = new DocSection().i(true, "5.6.2", true, "Main Gear Attach Tube Cracks", true, "html/Repairs/Main Gear Attach Tube Cracks.html");
let def_Sec_5_6_3 = new DocSection().i(true, "5.6.3", true, "Forward Lower Longeron", true, "html/Repairs/Forward Lower Longeron.html");
let def_Sec_5_6_4 = new DocSection().i(true, "5.6.4", true, "Fuselage Frame Aft Section", true, "html/Repairs/Fuselage Frame Aft Section.html");
let def_Sec_5_6_5 = new DocSection().i(true, "5.6.5", true, "Wing Main Spar Splice", true, "html/Repairs/Wing Main Spar Splice.html");
let def_Sec_5_6_6 = new DocSection().i(true, "5.6.6", true, "Leading Edge Rib", true, "html/Repairs/Leading Edge Rib.html");
let def_Sec_5_6_7 = new DocSection().i(true, "5.6.7", true, "Additional Wing Inspection Holes", true, "html/Repairs/Additional Wing Inspection Holes.html");
let def_Sec_5_6_8 = new DocSection().i(true, "5.6.8", true, "Oversized Horizontal Stabilizer Attach Holes", true, "html/Repairs/Oversized Horizontal Stabilizer Attach Holes.html");
let def_Sec_5_6_9 = new DocSection().i(true, "5.6.9", true, "Elevator / Rudder Hinge", true, "html/Repairs/Elevator - Rudder Hinge.html");
let def_Sec_5_6_10 = new DocSection().i(true, "5.6.10", true, "Tail Wheel Lock Bushing", true, "html/Repairs/Tail Wheel Lock Bushing.html");
let def_Sec_5_6 = new DocSection().i(true, "5.6", true, "STANDARD STRUCTURAL REPAIRS", true, "html/Repairs/STANDARD STRUCTURAL REPAIRS.html");
def_Sec_5_6.s([
    def_Sec_5_6_1,
    def_Sec_5_6_2,
    def_Sec_5_6_3,
    def_Sec_5_6_4,
    def_Sec_5_6_5,
    def_Sec_5_6_6,
    def_Sec_5_6_7,
    def_Sec_5_6_8,
    def_Sec_5_6_9,
    def_Sec_5_6_10
]);

let def_Sec_5 = new DocSection().i(true, "5", true, "REPAIRS", false, "", "page-break-before:always;");
def_Sec_5.s([
    def_Sec_5_1,
    def_Sec_5_2,
    def_Sec_5_3,
    def_Sec_5_4,
    def_Sec_5_5,
    def_Sec_5_6
]);
def_Sec_5.SetElementId("Sec_5");
def_Sec_5.CustomClass = "sectionRepairs";


export {def_Sec_5}