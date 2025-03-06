//@ts-check



let def_Sec_0 = new DocSection();
def_Sec_0
    .i(false, "", false, "", true, "html/Intro/TITLE.html")
    .s([
        new DocSection().i(false, "", true, "OVERVIEW", true, "html/Intro/OVERVIEW.html"),
        new DocSection().i(false, "", true, "MANUAL DISTRIBUTION", true, "html/Intro/MANUAL DISTRIBUTION.html"),
        new DocSection().i(false, "", false, "", true, "html/Intro/TOC AND NOTES.html")
    ]);




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

let def_Sec_1_30 = new DocSection();
def_Sec_1_30
    .i(true, "1.30", true, "CONTROL SYSTEMS", false, "")
    .s([
        new DocSection().i(true, "1.30.1", true, "Aileron and Elevator Controls", true, "html/Description/Aileron and Elevator Controls.html"),
        new DocSection().i(true, "1.30.2", true, "Elevator Trim Controls", true, "html/Description/Elevator and Trim Controls.html"),
        new DocSection().i(true, "1.30.3", true, "Electric Aileron Trim Tab", true, "html/Description/Electric Aileron Trim Tab.html"),
        new DocSection().i(true, "1.30.4", true, "Rudder Controls", true, "html/Description/Rudder Controls.html"),
        new DocSection().i(true, "1.30.6", true, "Aileron - Rudder Interconnect System", true, "html/Description/Aileron - Rudder Interconnect System.html"),
        new DocSection().i(true, "1.30.7", true, "Elevator - Flap Interconnect System", true, "html/Description/Elevator - Flap Interconnect System.html")
    ]);
let def_Sec_1_35 = new DocSection();
def_Sec_1_35
    .i(true, "1.35", true, "DISPERSAL SYSTEM", true, "html/Description/DISPERSAL SYSTEM.html");
let def_Sec_1_40 = new DocSection();
def_Sec_1_40
    .i(true, "1.40", true, "ELECTRICAL SYSTEM", true, "html/Description/ELECTRICAL SYSTEM.html");
let def_Sec_1_50 = new DocSection();
def_Sec_1_50
    .i(true, "1.50", true, "ENGINE", true, "html/Description/ENGINE.html")
    .s([
        new DocSection().i(true, "1.50.1", true, "Induction System", true, "html/Description/Induction System.html"),
        new DocSection().i(true, "1.50.2", true, "Exhaust System", true, "html/Description/Exhaust System.html")
    ]);
let def_Sec_1_55 = new DocSection();
def_Sec_1_55
    .i(true, "1.55", true, "ENGINE CONTROLS", true, "html/Description/ENGINE CONTROLS.html")
    .s([
        new DocSection().i(true, "1.55.1", true, "Air Tractor Throttle Quadrant", true, "html/Description/Air Tractor Throttle Quadrant.html"),
        new DocSection().i(true, "1.55.2", true, "Kawak Throttle Quadrant", true, "html/Description/Kawak Throttle Quadrant.html"),
        new DocSection().i(true, "1.55.3", true, "Control Cables", true, "html/Description/Control Cables.html"),
    ])
let def_Sec_1_70 = new DocSection();
def_Sec_1_70
    .i(true, "1.70", true, "FLAPS", true, "html/Description/FLAPS.html")
    .s([
        new DocSection().i(true, "1.70.1", true, "Flap Actuator", true, "html/Description/Flap Actuator.html")
    ]);
let def_Sec_1_80_6 = new DocSection();
def_Sec_1_80_6
    .i(true, "1.80.6", true, "Analog Engine Instruments", true, "html/Description/Analog Engine Instruments.html")
    .s([
        new DocSection().i(false, "", true, "Fuel Gauges", true, "html/Description/Fuel Gauges.html"),
        new DocSection().i(false, "", true, "ITT Gauge", true, "html/Description/ITT Gauge.html"),
        new DocSection().i(false, "", true, "Gas Generator Tachometer", true, "html/Description/Gas Generator Tachometer.html"),
        new DocSection().i(false, "", true, "Oil Pressure Gauge", true, "html/Description/Oil Pressure Gauge.html"),
        new DocSection().i(false, "", true, "Propeller Tachometer", true, "html/Description/Propeller Tachometer.html"),
        new DocSection().i(false, "", true, "Torque-Meter", true, "html/Description/Torque-Meter.html"),
        new DocSection().i(false, "", true, "Volt-Ammeter and Voltmeter", true, "html/Description/Volt-Ammeter and Voltmeter.html")
    ]);
let def_Sec_1_85 = new DocSection();
def_Sec_1_85
    .i(true, "1.85", true, "INSTRUMENTS", true, "html/Description/INSTRUMENTS.html")
    .s([
        new DocSection().i(true, "1.85.1", true, "Altimeter", true, "html/Description/Altimeter.html"),
        new DocSection().i(true, "1.85.2", true, "Airspeed Indicator", true, "html/Description/Airspeed Indicator.html"),
        new DocSection().i(true, "1.85.3", true, "Compass", true, "html/Description/Compass.html"),
        new DocSection().i(true, "1.85.4", true, "Attitude Indicator", true, "html/Description/Attitude Indicator.html"),
        new DocSection().i(true, "1.85.5", true, "Low Fuel Warning Light System", true, "html/Description/Low Fuel Warning Light System.html"),
        def_Sec_1_80_6
    ]);

let def_Sec_1 = new DocSection();
def_Sec_1
    .i(true, "1", true, "DESCRIPTION", false, "")
    .s([
        def_Sec_1_0,
        new DocSection().i(true, "1.10", true, "AILERONS", true, "html/Description/AILERONS.html"),
        new DocSection().i(true, "1.15", true, "AIR CONDITIONER", true, "html/Description/AIR CONDITIONER.html"),
        new DocSection().i(true, "1.20", true, "COCKPIT", true, "html/Description/COCKPIT.html"),
        new DocSection().i(true, "1.25", true, "COCKPIT HEATER", true, "html/Description/COCKPIT HEATER.html"),
        def_Sec_1_30,
        def_Sec_1_35,
        def_Sec_1_40,
        new DocSection().i(true, "1.45", true, "EMPENNAGE", true, "html/Description/EMPENNAGE.html"),
        def_Sec_1_50,
        def_Sec_1_55,
        new DocSection().i(true, "1.60", true, "FCU MANUAL OVERRIDE", true, "html/Description/FCU MANUAL OVERRIDE.html"),
        new DocSection().i(true, "1.65", true, "FIRE RETARDANT DISPERSAL SYSTEM (FRDS)", true, "html/Description/FIRE RETARDANT DISPERSAL SYSTEM.html"),
        def_Sec_1_70,
        new DocSection().i(true, "1.75", true, "FUEL SYSTEM", true, "html/Description/FUEL SYSTEM.html"),
        new DocSection().i(true, "1.80", true, "FUSELAGE", true, "html/Description/FUSELAGE.html"),
        def_Sec_1_85
    ])
    .SetElementId("Sec_1")
    .CustomClass = "sectionDescription";

////////////////////////////////////////
////////////////////////////////////////   END SECTION 1
////////////////////////////////////////










let def_Sec_2 = new DocSection().i(true, "2", true, "MAINTENANCE", false, "", "break-before:right;");
def_Sec_2.CustomClass = "breakBeforeRight";
////////////////////////////////////////
////////////////////////////////////////   END SECTION 2
////////////////////////////////////////








let def_Sec_3_0 = new DocSection().i(true, "3.0", true, "GENERAL", true, `html/Inspection/GENERAL.html`);


let def_Sec_3_1_0 = new DocSection().i(true, "3.1.0", true, "General", true, `html/Inspection/Insp_GENERAL.html`);
let def_Sec_3_1_1 = new DocSection().i(true, "3.1.1", true, "Propeller", true, `html/Inspection/Insp_PROPELLER.html`);
let def_Sec_3_1_2 = new DocSection().i(true, "3.1.2", true, "Engine and Mount", true, `html/Inspection/Insp_ENGINE AND MOUNT.html`);
let def_Sec_3_1_3 = new DocSection().i(true, "3.1.3", true, "Electrical System", true, `html/Inspection/Insp_ELECTRICAL SYSTEM.html`);
let def_Sec_3_1_4 = new DocSection().i(true, "3.1.4", true, "Fuel System", true, `html/Inspection/Insp_FUEL SYSTEM.html`);
let def_Sec_3_1_5 = new DocSection().i(true, "3.1.5", true, "Oil System", true, `html/Inspection/Insp_OIL SYSTEM.html`);
let def_Sec_3_1_6 = new DocSection().i(true, "3.1.6", true, "Power and Propeller Speed Coordinating System", true, `html/Inspection/Insp_POWER AND PROPELLER SPEED COORDINATING SYSTEM.html`);
let def_Sec_3_1_7 = new DocSection().i(true, "3.1.7", true, "Induction System", true, `html/Inspection/Insp_INDUCTION SYSTEM.html`);
let def_Sec_3_1_8 = new DocSection().i(true, "3.1.8", true, "Main Landing Gear and Brakes", true, `html/Inspection/Insp_MAIN LANDING GEAR AND BRAKES.html`);
let def_Sec_3_1_9 = new DocSection().i(true, "3.1.9", true, "Tail Gear", true, `html/Inspection/Insp_TAIL GEAR.html`);
let def_Sec_3_1_10 = new DocSection().i(true, "3.1.10", true, "Fuselage Frame", true, `html/Inspection/Insp_FUSELAGE FRAME.html`);
let def_Sec_3_1_11 = new DocSection().i(true, "3.1.11", true, "Fuselage Fixed Skins", true, `html/Inspection/Insp_FUSELAGE FIXED SKINS.html`);
let def_Sec_3_1_12 = new DocSection().i(true, "3.1.12", true, "Control System", true, `html/Inspection/Insp_CONTROL SYSTEM.html`);
let def_Sec_3_1_13 = new DocSection().i(true, "3.1.13", true, "Wings", true, `html/Inspection/Insp_WINGS.html`);
let def_Sec_3_1_14 = new DocSection().i(true, "3.1.14", true, "Ailerons", true, `html/Inspection/Insp_AILERONS.html`);
let def_Sec_3_1_15 = new DocSection().i(true, "3.1.15", true, "Flaps", true, `html/Inspection/Insp_FLAPS.html`);
let def_Sec_3_1_16 = new DocSection().i(true, "3.1.16", true, "Empennage", true, `html/Inspection/Insp_EMPENNAGE.html`);
let def_Sec_3_1_17 = new DocSection().i(true, "3.1.17", true, "Cockpit", true, `html/Inspection/Insp_COCKPIT.html`);
let def_Sec_3_1_18 = new DocSection().i(true, "3.1.18", true, "Dispersal Equipment", true, `html/Inspection/Insp_DISPERSAL EQUIPMENT.html`);
let def_Sec_3_1_19 = new DocSection().i(true, "3.1.19", true, "Air Conditioning System", true, `html/Inspection/Insp_AIR CONDITIONING SYSTEM.html`);
let def_Sec_3_1_20 = new DocSection().i(true, "3.1.20", true, "Fire Gate Gen II Hydraulic System (If Equipped)", true, `html/Inspection/Insp_FIRE GATE GEN II HYDRAULIC SYSTEM.html`);
let def_Sec_3_1_21 = new DocSection().i(true, "3.1.21", true, "Fire Gate Gen III Electric System (If Equipped)", true, `html/Inspection/Insp_FIRE GATE GEN III ELECTRIC SYSTEM.html`);
let def_Sec_3_1 = new DocSection().i(true, "3.1", true, "SCHEDULED INSPECTIONS", true, `html/Inspection/SCHEDULED INSPECTIONS.html`);
def_Sec_3_1
    .s([
        def_Sec_3_1_0,
        def_Sec_3_1_1,
        def_Sec_3_1_2,
        def_Sec_3_1_3,
        def_Sec_3_1_4,
        def_Sec_3_1_5,
        def_Sec_3_1_6,
        def_Sec_3_1_7,
        def_Sec_3_1_8,
        def_Sec_3_1_9,
        def_Sec_3_1_10,
        def_Sec_3_1_11,
        def_Sec_3_1_12,
        def_Sec_3_1_13,
        def_Sec_3_1_14,
        def_Sec_3_1_15,
        def_Sec_3_1_16,
        def_Sec_3_1_17,
        def_Sec_3_1_18,
        def_Sec_3_1_19,
        def_Sec_3_1_20,
        def_Sec_3_1_21
    ]);

let def_Sec_3_2_1 = new DocSection().i(true, "3.2.1", true, "Hard / Heavy Landing Inspection", true, "html/Inspection/Insp_HARD OR HEAVY LANDING INSPECTION.html");
let def_Sec_3_2_2 = new DocSection().i(true, "3.2.2", true, "Flight Into Turbulent Air and Post Flight Inspections", true, "html/Inspection/Insp_FLIGHT INTO TURBULENT AIR AND POST FLIGHT INSPECTIONS.html");
let def_Sec_3_2_3 = new DocSection().i(true, "3.2.3", true, "Flight Into Thunderstorms and Post Flight Inspections", true, "html/Inspection/Insp_FLIGHT INTO THUNDERSTORMS AND POST FLIGHT INSPECTIONS.html");
let def_Sec_3_2_4 = new DocSection().i(true, "3.2.4", true, "Obstacle Collision", true, "html/Inspection/Insp_Obstacle Collision.html");
let def_Sec_3_2_5 = new DocSection().i(true, "3.2.5", true, "Propeller Stike / Sudden Stoppage", true, "html/Inspection/Insp_Propeller Strike or Sudden Stoppage.html");
let def_Sec_3_2_6 = new DocSection().i(true, "3.2.6", true, "Starter-Generator Malfunction", true, "html/Inspection/Insp_Starter-Generator Malfunction.html");
let def_Sec_3_2 = new DocSection().i(true, "3.2", true, "UNSCHEDULED INSPECTIONS", false, "");
def_Sec_3_2
    .s([
        def_Sec_3_2_1,
        def_Sec_3_2_2,
        def_Sec_3_2_3,
        def_Sec_3_2_4,
        def_Sec_3_2_5,
        def_Sec_3_2_6
    ]);

let def_Sec_3 = new DocSection().i(true, "3", true, "INSPECTION", false, "", "page-break-before:always;");
def_Sec_3.CustomClass = "sectionInspection";
def_Sec_3.
    s([
        def_Sec_3_0,
        def_Sec_3_1,
        def_Sec_3_2
    ])
    .SetElementId("Sec_3");
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
    def_Sec_0,
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

    let tocDiv = document.createElement("div");
    def_Sec_1.CreateToc(false, tocDiv);
    def_Sec_1.InsertToc(tocDiv,true, true,"Table of Contents","tocHeader");

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



