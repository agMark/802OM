


let def_Sec_6_00 = new DocSection().i(false,"",false,"",true,"html/Limitations/RevisionHistory.html");


let def_Sec_6_01 = new DocSection().i(false,"",true,"AIRWORTHINESS LIMITATIONS",true,"html/Limitations/Limitations.html");


let def_Sec_6_1 = new DocSection().i(true,"6.1",true, "LIFE LIMITED ENGINE PARTS", true, "html/Limitations/EngineParts.html");

let def_Sec_6_2 = new DocSection().i(true,"6.2",true, "LIFE LIMITED AIRFRAME PARTS", true, "html/Limitations/AirframeParts.html");





let def_Sec_6 = new DocSection().i(true, "6", true, "AIRWORTHINESS LIMITATIONS", false, "", "page-break-before:always;");
def_Sec_6.s([
    def_Sec_6_00,
    def_Sec_6_01,
    def_Sec_6_1,
    def_Sec_6_2
]);
def_Sec_6.SetElementId("Sec_6");
def_Sec_6.CustomClass = "sectionLimitations";
