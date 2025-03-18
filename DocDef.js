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
    .i(true, "1.40", true, "ELECTRICAL SYSTEM", false, "")
    .s([
        new DocSection().i(true, "1.40.1", true, "Starter-Generator System", true, "html/Description/Starter Generator System.html"),
        new DocSection().i(true, "1.40.2", true, "Batteries", true, "html/Description/Batteries.html")
    ]);
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
        def_Sec_1_80_6,
        new DocSection().i(true, "1.80.7", true, "MVP-50T Digital Instruments", true, "html/Description/MVP-50T.html")
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







let render = () => {
    DocDef.RenderContent(true, document.body);

    let tocDiv1 = document.createElement("div");
    def_Sec_1.CreateToc(false, tocDiv1);
    def_Sec_1.InsertToc(tocDiv1, true, true, "Table of Contents", "tocHeader");


    let tocDiv2 = document.createElement("div");
    def_Sec_2.CreateToc(false, tocDiv2);
    def_Sec_2.InsertToc(tocDiv2, true, true, "Table of Contents", "tocHeader");

    let tocDiv3 = document.createElement("div");
    def_Sec_3.CreateToc(false, tocDiv3);
    def_Sec_3.InsertToc(tocDiv3, true, true, "Table of Contents", "tocHeader");

    let tocDiv4 = document.createElement("div");
    def_Sec_4.CreateToc(false, tocDiv4);
    def_Sec_4.InsertToc(tocDiv4, true, true, "Table of Contents", "tocHeader");

    let tocDiv5 = document.createElement("div");
    def_Sec_5.CreateToc(false, tocDiv5);
    def_Sec_5.InsertToc(tocDiv5, true, true, "Table of Contents", "tocHeader");

    let tocDiv6 = document.createElement("div");
    def_Sec_6.CreateToc(false, tocDiv6);
    def_Sec_6.InsertToc(tocDiv6, true, true, "Table of Contents", "tocHeader");

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



