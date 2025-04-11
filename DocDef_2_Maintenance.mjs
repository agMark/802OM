//@ts-check

import {DocSection} from './code/DocSection.mjs'

let defSec_2_0_1 = new DocSection().i(true, "2.0.1", true, "Towing", true, "html/Maintenance/Towing.html");
let defSec_2_0_2 = new DocSection().i(true, "2.0.2", true, "Tie Down Instructions", true, "html/Maintenance/Tie Down Instructions.html");
let defSec_2_0_3 = new DocSection().i(true, "2.0.3", true, "Storage", true, "html/Maintenance/Storage.html");
let defSec_2_0_4 = new DocSection().i(true, "2.0.4", true, "Lifting and Jacking", true, "html/Maintenance/Lifting and Jacking.html");
let defSec_2_0_5 = new DocSection().i(true, "2.0.5", true, "Leveling", true, "html/Maintenance/Leveling.html");
let defSec_2_0_6 = new DocSection().i(true, "2.0.6", true, "Weight and Balance", true, "html/Maintenance/Weight and Balance.html");
let defSec_2_0_7 = new DocSection().i(true, "2.0.7", true, "Standard Torque and Bolt Installation", true, "html/Maintenance/TORQUE VALUES AND GUIDANCE FOR BOLT INSTALLATION.html");
let defSec_2_0_8 = new DocSection().i(true, "2.0.8", true, "Special Tools and Equipment", true, "html/Maintenance/Special Tools and Equipment.html");
let def_Sec_2_0 = new DocSection();
def_Sec_2_0
    .i(true, "2.0", true, "GENERAL", false, "")
    .s([
        defSec_2_0_1,
        defSec_2_0_2,
        defSec_2_0_3,
        defSec_2_0_4,
        defSec_2_0_5,
        defSec_2_0_6,
        defSec_2_0_7,
        defSec_2_0_8
    ]);





let defSec_2_10_1 = new DocSection().i(true, "2.10.1", true, "Ailerons", true, "html/Maintenance/Ailerons.html");
let defSec_2_10_2 = new DocSection().i(true, "2.10.2", true, "Aileron Counterweights", true, "html/Maintenance/Aileron Counterweights.html");
let defSec_2_10_3 = new DocSection().i(true, "2.10.3", true, "Aileron Supports and Bellcranks", true, "html/Maintenance/Aileron Supports and Bellcranks.html");
let def_Sec_2_10 = new DocSection();
def_Sec_2_10
    .i(true, "2.10", true, "AILERONS", false, "")
    .s([
        defSec_2_10_1,
        defSec_2_10_2,
        defSec_2_10_3
    ]);





let defSec_2_15_1 = new DocSection().i(true, "2.15.1", true, "Cautionary Information", true, "html/Maintenance/Cautionary Information.html");
let defSec_2_15_2 = new DocSection().i(true, "2.15.2", true, "R134a and PAG Oil Precautions", true, "html/Maintenance/R134a Information.html");
let defSec_2_15_3 = new DocSection().i(true, "2.15.3", true, "Approved Oil and Refrigerants", true, "html/Maintenance/Approved Oil and Refrigerants.html");
let defSec_2_15_4 = new DocSection().i(true, "2.15.4", true, "Common Causes of Compressor Failure", true, "html/Maintenance/Common Causes of Compressor Failure.html");
let defSec_2_15_5 = new DocSection().i(true, "2.15.5", true, "Diagnosis of Compressor Failure", true, "html/Maintenance/Diagnosis of Compressor Failure.html");

let defSec_2_15_6 = new DocSection().i(true, "2.15.6", true, "Compressor Removal and Replacement", true, "html/Maintenance/Compressor Replacement.html");
let defSec_2_15_7 = new DocSection().i(true, "2.15.7", true, "Belt Tensioning", true, "html/Maintenance/Belt Tensioning.html");
let defSec_2_15_8 = new DocSection().i(true, "2.15.8", true, "Service Procedures - Flushing", true, "html/Maintenance/Flushing.html");
let defSec_2_15_9 = new DocSection().i(true, "2.15.9", true, "Service Procedures - Evacuation", true, "html/Maintenance/Evacuation.html");
let defSec_2_15_10 = new DocSection().i(true, "2.15.10", true, "Service Procedures - Charging", true, "html/Maintenance/Charging.html");
let defSec_2_15_11 = new DocSection().i(true, "2.15.11", true, "Service Procedures - Oiling", true, "html/Maintenance/Oiling.html");
let defSec_2_15_12 = new DocSection().i(true, "2.15.12", true, "Service Procedures - Contamination Check", true, "html/Maintenance/Contamination Check.html");
let def_Sec_2_15 = new DocSection();
def_Sec_2_15
    .i(true, "2.15", true, "AIR CONDITIONER", true, "html/Maintenance/ENGINE DRIVEN AIR CONDITIONER.html")
    .s([
        defSec_2_15_1,
        defSec_2_15_2,
        defSec_2_15_3,
        defSec_2_15_4,
        defSec_2_15_5,
        defSec_2_15_6,
        defSec_2_15_7,
        defSec_2_15_8,
        defSec_2_15_9,
        defSec_2_15_10,
        defSec_2_15_11,
        defSec_2_15_12
    ]);




let defSec_2_20_1 = new DocSection().i(true, "2.20.1", true, "Cockpit Cleaning and Maintenance", true, "html/Maintenance/Cockpit Cleaning and Maintenance.html");
let defSec_2_20_2 = new DocSection().i(true, "2.20.2", true, "Amsafe Airbag System", true, "html/Maintenance/Amsafe Airbag System.html");
let def_Sec_2_20 = new DocSection();
def_Sec_2_20
    .i(true, "2.20", true, "COCKPIT", false, "")
    .s([
        defSec_2_20_1,
        defSec_2_20_2
    ]);



let def_Sec_2_25 = new DocSection();
def_Sec_2_25
    .i(true, "2.25", true, "COCKPIT HEATER", true, "html/Maintenance/COCKPIT HEATER.html")
    .s([

    ]);


let defSec_2_30_1 = new DocSection().i(true, "2.30.1", true, "Aileron Rigging ", true, "html/Maintenance/Aileron Rigging.html");
let defSec_2_30_2 = new DocSection().i(true, "2.30.2", true, "Aileron - Rudder Interconnect System Rigging", true, "html/Maintenance/Aileron - Rudder Interconnect System Rigging.html");
let defSec_2_30_3 = new DocSection().i(true, "2.30.3", true, "Aileron Boost Tab Trim and Rigging", true, "html/Maintenance/Aileron Boost Tab Trim and Rigging.html");
let defSec_2_30_4 = new DocSection().i(true, "2.30.4", true, "Elevator Controls", true, "html/Maintenance/Elevator Controls.html");
let defSec_2_30_5 = new DocSection().i(true, "2.30.5", true, "Elevator Trim Tab Controls", true, "html/Maintenance/Elevator Trim Tab Controls.html");
let defSec_2_30_6 = new DocSection().i(true, "2.30.6", true, "Elevator - Flap Interconnect System Rigging", true, "html/Maintenance/Elevator - Flap Interconnect System Rigging.html");
let def_Sec_2_30 = new DocSection();
def_Sec_2_30
    .i(true, "2.30", true, "CONTROL SYSTEMS", false, "")
    .s([
        defSec_2_30_1,
        defSec_2_30_2,
        defSec_2_30_3,
        defSec_2_30_4,
        defSec_2_30_5,
        defSec_2_30_6
    ]);





let defSec_2_35_1 = new DocSection().i(true, "2.35.1", true, "Hopper Tanks", true, "html/Maintenance/Hopper Tanks.html");
let defSec_2_35_2 = new DocSection().i(true, "2.35.2", true, "Hopper Gate Box and Adapter", true, "html/Maintenance/Hopper Gate Box and Adapter.html");
let defSec_2_35_3 = new DocSection().i(true, "2.35.3", true, "Hopper Lid", true, "html/Maintenance/Hopper Lid.html");
let defSec_2_35_4 = new DocSection().i(true, "2.35.4", true, "Gate Box Controls", true, "html/Maintenance/Gate Box Controls.html");
let defSec_2_35_5 = new DocSection().i(true, "2.35.5", true, "Spray Lever Controls", true, "html/Maintenance/Spray Lever Controls.html");
let defSec_2_35_6 = new DocSection().i(true, "2.35.6", true, "Spray Pump", true, "html/Maintenance/Spray Pump.html");
let defSec_2_35_7 = new DocSection().i(true, "2.35.7", true, "Spray Plumbing", true, "html/Maintenance/Spray Plumbing.html");
let defSec_2_35_8 = new DocSection().i(true, "2.35.8", true, "Bottom- Load Plumbing", true, "html/Maintenance/Bottom - Load Plumbing.html");
let defSec_2_35_9 = new DocSection().i(true, "2.35.9", true, "Spray Nozzles", true, "html/Maintenance/Spray Nozzles.html");
let defSec_2_35_10 = new DocSection().i(true, "2.35.10", true, "Filling the Hopper Tanks", true, "html/Maintenance/Filling the Hopper Tanks.html");
let defSec_2_35_11 = new DocSection().i(true, "2.35.11", true, "Minimizing Spray System Corrosion", true, "html/Maintenance/Minimizing Spray System Corrosion.html");
let def_Sec_2_35 = new DocSection();
def_Sec_2_35
    .i(true, "2.35", true, "DISPERSAL EQUIPMENT", false, "")
    .s([
        defSec_2_35_1,
        defSec_2_35_2,
        defSec_2_35_3,
        defSec_2_35_4,
        defSec_2_35_5,
        defSec_2_35_6,
        defSec_2_35_7,
        defSec_2_35_8,
        defSec_2_35_9,
        defSec_2_35_10,
        defSec_2_35_11
    ]);


let def_Sec_2_40 = new DocSection();
def_Sec_2_40
    .i(true, "2.40", true, "ELECTRICAL SYSTEM", true, "html/Maintenance/ELECTRICAL SYSTEM.html")
    .s([

    ]);




let defSec_2_45_1 = new DocSection().i(true, "2.45.1", true, "Horizontal Stabilizers", true, "html/Maintenance/Horizontal Stabilizers.html");
let defSec_2_45_2 = new DocSection().i(true, "2.45.2", true, "Horizontal Stabilizer Struts", true, "html/Maintenance/Horizontal Stabilizer Struts.html");
let defSec_2_45_3 = new DocSection().i(true, "2.45.3", true, "Horizontal Stabilizer Rigging", true, "html/Maintenance/Horizontal Stabilizer Rigging.html");
let defSec_2_45_4 = new DocSection().i(true, "2.45.4", true, "Elevators ", true, "html/Maintenance/Elevators.html");
let defSec_2_45_5 = new DocSection().i(true, "2.45.5", true, "Elevator Trim Tabs", true, "html/Maintenance/Elevator Trim Tabs.html");
let defSec_2_45_6 = new DocSection().i(true, "2.45.6", true, "Vertical Fin", true, "html/Maintenance/Vertical Fin.html");
let defSec_2_45_7 = new DocSection().i(true, "2.45.7", true, "Rudder", true, "html/Maintenance/Rudder.html");
let defSec_2_45_8 = new DocSection().i(true, "2.45.8", true, "Rudder Trim Tab", true, "html/Maintenance/Rudder Trim Tab.html");
let defSec_2_45_9 = new DocSection().i(true, "2.45.9", true, "Deflector Cable", true, "html/Maintenance/Deflector Cable.html");
let def_Sec_2_45 = new DocSection();
def_Sec_2_45
    .i(true, "2.45", true, "EMPENNAGE", false, "")
    .s([
        defSec_2_45_1,
        defSec_2_45_2,
        defSec_2_45_3,
        defSec_2_45_4,
        defSec_2_45_5,
        defSec_2_45_6,
        defSec_2_45_7,
        defSec_2_45_8,
        defSec_2_45_9
    ]);




let defSec_2_50_1 = new DocSection().i(true, "2.50.1", true, "Cleaning Engine Exterior", true, "html/Maintenance/Cleaning Engine Exterior.html");
let defSec_2_50_2 = new DocSection().i(true, "2.50.2", true, "Fuel Requirements", true, "html/Maintenance/Fuel Requirements.html");
let defSec_2_50_3 = new DocSection().i(true, "2.50.3", true, "Fuel Filter Cleaning", true, "html/Maintenance/Fuel Filter Cleaning.html");
let defSec_2_50_4 = new DocSection().i(true, "2.50.4", true, "Fuel Header Tank Sump Draining ", true, "html/Maintenance/Fuel Header Tank Sump Draining.html");
let defSec_2_50_5 = new DocSection().i(true, "2.50.5", true, "Negative Fuel Pressure Warning", true, "html/Maintenance/Negative Fuel Pressure Warning.html");
let defSec_2_50_6 = new DocSection().i(true, "2.50.6", true, "Fuel Nozzle Cleaning", true, "html/Maintenance/Fuel Nozzle Cleaning.html");
let defSec_2_50_7 = new DocSection().i(true, "2.50.7", true, "Oil Requirements ", true, "html/Maintenance/Oil Requirements.html");
let defSec_2_50_8 = new DocSection().i(true, "2.50.8", true, "Oil Filter", true, "html/Maintenance/Oil Filter.html");
let defSec_2_50_9 = new DocSection().i(true, "2.50.9", true, "Chip Detector", true, "html/Maintenance/Chip Detector.html");
let defSec_2_50_10 = new DocSection().i(true, "2.50.10", true, "Air Filters", true, "html/Maintenance/Air Filters.html");
let defSec_2_50_11 = new DocSection().i(true, "2.50.11", true, "Engine-Control Cables", true, "html/Maintenance/Engine-Control Cables.html");
let defSec_2_50_12 = new DocSection().i(true, "2.50.12", true, "Compressor Washes", true, "html/Maintenance/Compressor Washes.html");
let defSec_2_50_13 = new DocSection().i(true, "2.50.13", true, "Engine Starting Procedures", true, "html/Maintenance/Engine Starting Procedures.html");
let defSec_2_50_14 = new DocSection().i(true, "2.50.14", true, "Engine Removal", true, "html/Maintenance/Engine Removal.html");
let defSec_2_50_15 = new DocSection().i(true, "2.50.15", true, "Engine Build Up", true, "html/Maintenance/Engine Build Up.html");
let defSec_2_50_16 = new DocSection().i(true, "2.50.16", true, "Engine Replacement", true, "html/Maintenance/Engine Replacement.html");

let def_Sec_2_50 = new DocSection();
def_Sec_2_50
    .i(true, "2.50", true, "ENGINE MAINTENANCE", false, "")
    .s([
        defSec_2_50_1,
        defSec_2_50_2,
        defSec_2_50_3,
        defSec_2_50_4,
        defSec_2_50_5,
        defSec_2_50_6,
        defSec_2_50_7,
        defSec_2_50_8,
        defSec_2_50_9,
        defSec_2_50_10,
        defSec_2_50_11,
        defSec_2_50_12,
        defSec_2_50_13,
        defSec_2_50_14,
        defSec_2_50_15,
        defSec_2_50_16
    ]);


let defSec_2_55_1 = new DocSection().i(true, "2.55.1", true, "Power Lever Rigging Procedures", true, "html/Maintenance/Power Lever Rigging Procedures.html");
let defSec_2_55_2 = new DocSection().i(true, "2.55.2", true, "Propeller Lever Rigging Procedures", true, "html/Maintenance/Propeller Lever Rigging Procedures.html");
let defSec_2_55_3 = new DocSection().i(true, "2.55.3", true, "Start Control Lever Rigging Procedures", true, "html/Maintenance/Start Control Lever Rigging Procedures.html");
let defSec_2_55_4 = new DocSection().i(true, "2.55.4", true, "Kawak Throttle Quadrant ", true, "html/Maintenance/Kawak Throttle Quadrant.html");
let def_Sec_2_55 = new DocSection();
def_Sec_2_55
    .i(true, "2.55", true, "ENGINE CONTROLS", false, "")
    .s([
        defSec_2_55_1,
        defSec_2_55_2,
        defSec_2_55_3,
        defSec_2_55_4
    ]);


let defSec_2_60_1 = new DocSection().i(true, "2.60.1", true, "FCU Manual Override Rigging", true, "html/Maintenance/FCU Manual Override Rigging.html");
let def_Sec_2_60 = new DocSection();
def_Sec_2_60
    .i(true, "2.60", true, "FCU MANUAL OVERRIDE", false, "")
    .s([
        defSec_2_60_1
    ]);


let def_Sec_2_65 = new DocSection();
def_Sec_2_65
    .i(true, "2.65", true, "FIRE RETARDANT DISPERSAL SYSTEM", true, "html/Maintenance/FIRE RETARDANT DISPERSAL SYSTEM.html")
    .s([
    ]);


let defSec_2_70_1 = new DocSection().i(true, "2.70.1", true, "Flap Removal", true, "html/Maintenance/Flap Removal.html");
let defSec_2_70_2 = new DocSection().i(true, "2.70.2", true, "Flap Installation", true, "html/Maintenance/Flap Installation.html");
let defSec_2_70_3 = new DocSection().i(true, "2.70.3", true, "Flap Rigging", true, "html/Maintenance/Flap Rigging.html");
let defSec_2_70_4 = new DocSection().i(true, "2.70.4", true, "Flap Bellcrank and Supports ", true, "html/Maintenance/Flap Bellcrank and Supports.html");
let defSec_2_70_5 = new DocSection().i(true, "2.70.5", true, "Flap Actuator", true, "html/Maintenance/Flap Actuator.html");
let defSec_2_70_6 = new DocSection().i(true, "2.70.6", true, "Flap Actuator Troubleshooting", true, "html/Maintenance/Flap Actuator Troubleshooting.html");
let defSec_2_70_7 = new DocSection().i(true, "2.70.7", true, "Flap Motor Troubleshooting", true, "html/Maintenance/Flap Motor Troubleshooting.html");
let defSec_2_70_8 = new DocSection().i(true, "2.70.8", true, "Flap Actuator Removal Instructions", true, "html/Maintenance/Flap Actuator Removal Instructions.html");
let defSec_2_70_9 = new DocSection().i(true, "2.70.9", true, "Flap Actuator Installation Instructions", true, "html/Maintenance/Flap Actuator Installation Instructions.html");
let defSec_2_70_10 = new DocSection().i(true, "2.70.10", true, "Flap Relay Troubleshooting", true, "html/Maintenance/Flap Relay Troubleshooting.html");
let def_Sec_2_70 = new DocSection();
def_Sec_2_70
    .i(true, "2.70", true, "FLAPS", true, "html/Maintenance/Flaps.html")
    .s([
        defSec_2_70_1,
        defSec_2_70_2,
        defSec_2_70_3,
        defSec_2_70_4,
        defSec_2_70_5,
        defSec_2_70_6,
        defSec_2_70_7,
        defSec_2_70_8,
        defSec_2_70_9,
        defSec_2_70_10
    ]);

let defSec_2_75_1 = new DocSection().i(true, "2.75.1", true, "Fuel Tanks", true, "html/Maintenance/Fuel Tanks.html");
let defSec_2_75_2 = new DocSection().i(true, "2.75.2", true, "Fuel Tank Sealing", true, "html/Maintenance/Fuel Tank Sealing.html");
let defSec_2_75_3 = new DocSection().i(true, "2.75.3", true, "Fuel Tank Senders", true, "html/Maintenance/Fuel Tank Senders.html");
let defSec_2_75_4 = new DocSection().i(true, "2.75.4", true, "Fuel Tank Receiver", true, "html/Maintenance/Fuel Tank Receiver.html");
let defSec_2_75_5 = new DocSection().i(true, "2.75.5", true, "Fuel System Drains", true, "html/Maintenance/Fuel System Drains.html");
let defSec_2_75_6 = new DocSection().i(true, "2.75.6", true, "Fuel System Screens and Filters", true, "html/Maintenance/Fuel System Screens and Filters.html");
let defSec_2_75_7 = new DocSection().i(true, "2.75.7", true, "Airframe Fuel Pump", true, "html/Maintenance/Airframe Fuel Pump.html");
let def_Sec_2_75 = new DocSection();
def_Sec_2_75
    .i(true, "2.75", true, "FUEL SYSTEM", false, "")
    .s([
        defSec_2_75_1,
        defSec_2_75_2,
        defSec_2_75_3,
        defSec_2_75_4,
        defSec_2_75_5,
        defSec_2_75_6,
        defSec_2_75_7
    ]);

let defSec_2_80_1 = new DocSection().i(true, "2.80.1", true, "Fuselage Removable Skins", true, "html/Maintenance/Fuselage Removable Skins.html");
let defSec_2_80_2 = new DocSection().i(true, "2.80.2", true, "Fuselage Fixed Skins", true, "html/Maintenance/Fuselage Fixed Skins.html");
let defSec_2_80_3 = new DocSection().i(true, "2.80.3", true, "Fuselage Cockpit Skins", true, "html/Maintenance/Fuselage Cockpit Skins.html");
let defSec_2_80_4 = new DocSection().i(true, "2.80.4", true, "Fuselage Frame", true, "html/Maintenance/Fuselage Frame.html");
let defSec_2_80_5 = new DocSection().i(true, "2.80.5", true, "Windshield", true, "html/Maintenance/Windshield.html");
let defSec_2_80_6 = new DocSection().i(true, "2.80.6", true, "Canopy Doors", true, "html/Maintenance/Canopy Doors.html");
let defSec_2_80_7 = new DocSection().i(true, "2.80.7", true, "Seat", true, "html/Maintenance/Seat.html");
let def_Sec_2_80 = new DocSection();
def_Sec_2_80
    .i(true, "2.80", true, "FUSELAGE", false, "")
    .s([
        defSec_2_80_1,
        defSec_2_80_2,
        defSec_2_80_3,
        defSec_2_80_4,
        defSec_2_80_5,
        defSec_2_80_6,
        defSec_2_80_7
    ]);


let defSec_2_85_1 = new DocSection().i(true, "2.85.1", true, "Altimeter / Static System", true, "html/Maintenance/Altimeter - Static System.html");
let defSec_2_85_2 = new DocSection().i(true, "2.85.2", true, "Airspeed System", true, "html/Maintenance/Airspeed System.html");
let defSec_2_85_3 = new DocSection().i(true, "2.85.3", true, "Compass", true, "html/Maintenance/Compass Calibration.html");
let defSec_2_85_4 = new DocSection().i(true, "2.85.4", true, "Reserved", false, "");
let defSec_2_85_5 = new DocSection().i(true, "2.85.5", true, "Low Fuel Warning System", true, "html/Maintenance/Low Fuel Warning System.html");
let defSec_2_85_6 = new DocSection().i(true, "2.85.6", true, "Engine Instruments", true, "html/Maintenance/Engine Instruments.html");
let defSec_2_85_7 = new DocSection().i(true, "2.85.7", true, "MVP-50T Engine Instrument System", true, "html/Maintenance/MVP-50T.html");
let def_Sec_2_85 = new DocSection();
def_Sec_2_85
    .i(true, "2.85", true, "INSTRUMENTS", false, "")
    .s([
        defSec_2_85_1,
        defSec_2_85_2,
        defSec_2_85_3,
        defSec_2_85_4,
        defSec_2_85_5,
        defSec_2_85_6,
        defSec_2_85_7
    ]);



let defSec_2_90_1 = new DocSection().i(true, "2.90.1", true, "Tire Inflation", true, "html/Maintenance/Tire Inflation.html");
let defSec_2_90_2 = new DocSection().i(true, "2.90.2", true, "Main Wheels", true, "html/Maintenance/Main Wheels.html");
let defSec_2_90_3 = new DocSection().i(true, "2.90.3", true, "Main Wheel Alignment", true, "html/Maintenance/Main Wheel Alignment.html");
let defSec_2_90_4 = new DocSection().i(true, "2.90.4", true, "Main Gear Spring", true, "html/Maintenance/Main Gear Spring.html");
let defSec_2_90_5 = new DocSection().i(true, "2.90.5", true, "Tail Wheel", true, "html/Maintenance/Tail Wheel.html");
let defSec_2_90_6 = new DocSection().i(true, "2.90.6", true, "Tail Wheel Fork", true, "html/Maintenance/Tail Wheel Fork.html");
let defSec_2_90_7 = new DocSection().i(true, "2.90.7", true, "Tail Wheel Lock Pin and Housing", true, "html/Maintenance/Tail Wheel Lock Pin and Housing.html");
let defSec_2_90_8 = new DocSection().i(true, "2.90.8", true, "Tail Gear Spring", true, "html/Maintenance/Tail Gear Spring.html");
let defSec_2_90_9 = new DocSection().i(true, "2.90.9", true, "Brake Removal and Replacement", true, "html/Maintenance/Brake Removal and Replacement.html");
let defSec_2_90_10 = new DocSection().i(true, "2.90.10", true, "Brake Discs", true, "html/Maintenance/Brake Discs.html");
let defSec_2_90_11 = new DocSection().i(true, "2.90.11", true, "Brake Linings", true, "html/Maintenance/Brake Linings.html");
let defSec_2_90_12 = new DocSection().i(true, "2.90.12", true, "Brake Master-Cylinders", true, "html/Maintenance/Brake Master-Cylinders.html");
let defSec_2_90_13 = new DocSection().i(true, "2.90.13", true, "Brake Bleeding", true, "html/Maintenance/Brake Bleeding.html");
let defSec_2_90_14 = new DocSection().i(true, "2.90.14", true, "Parking Brake", true, "html/Maintenance/Parking Brake.html");
let def_Sec_2_90 = new DocSection();
def_Sec_2_90
    .i(true, "2.90", true, "LANDING GEAR AND BRAKES", false, "")
    .s([
        defSec_2_90_1,
        defSec_2_90_2,
        defSec_2_90_3,
        defSec_2_90_4,
        defSec_2_90_5,
        defSec_2_90_6,
        defSec_2_90_7,
        defSec_2_90_8,
        defSec_2_90_9,
        defSec_2_90_10,
        defSec_2_90_11,
        defSec_2_90_12,
        defSec_2_90_13,
        defSec_2_90_14
    ]);


let defSec_2_95_1 = new DocSection().i(true, "2.95.1", true, "Propeller Removal", true, "html/Maintenance/Propeller Removal.html");
let defSec_2_95_2 = new DocSection().i(true, "2.95.2", true, "Propeller Replacement", true, "html/Maintenance/Propeller Replacement.html");
let def_Sec_2_95 = new DocSection();
def_Sec_2_95
    .i(true, "2.95", true, "PROPELLER MAINTENANCE", false, "")
    .s([
        defSec_2_95_1,
        defSec_2_95_2
    ]);

let defSec_2_100_1 = new DocSection().i(true, "2.100.1", true, "Wing Attachment to Fuselage", true, "html/Maintenance/Wing Attachment to Fuselage.html");
let defSec_2_100_2 = new DocSection().i(true, "2.100.2", true, "Wing Center Splice Connection", true, "html/Maintenance/Wing Center Splice Connection.html");
let defSec_2_100_3 = new DocSection().i(true, "2.100.3", true, "Wing Walk", true, "html/Maintenance/Wing Walk.html");
let def_Sec_2_100 = new DocSection();
def_Sec_2_100
    .i(true, "2.100", true, "WINGS", false, "")
    .s([
        defSec_2_100_1,
        defSec_2_100_2,
        defSec_2_100_3
    ]);


let defSec_2_105_1 = new DocSection().i(true, "2.105.1", true, "Stripping and Repainting Aluminum Parts", true, "html/Maintenance/Stripping and Repainting Aluminum Parts.html");
let defSec_2_105_2 = new DocSection().i(true, "2.105.2", true, "Priming Aluminum Parts with Chromated Alkyd Primer", true, "html/Maintenance/Priming Aluminum Parts with Chromated Alkyd Primer.html");
let defSec_2_105_3 = new DocSection().i(true, "2.105.3", true, "Stripping and Repainting Steel Parts", true, "html/Maintenance/Stripping and Repainting Steel Parts.html");
let defSec_2_105_4 = new DocSection().i(true, "2.105.4", true, "Materials Used for Stripping Painting and Preservation", true, "html/Maintenance/Materials Used for Stripping Painting and Preservation.html");
let def_Sec_2_105 = new DocSection();
def_Sec_2_105
    .i(true, "2.105", true, "PAINT AND FINISHES", false, "")
    .s([
        defSec_2_105_1,
        defSec_2_105_2,
        defSec_2_105_3,
        defSec_2_105_4
    ]);

let defSec_2_200_1 = new DocSection().i(true, "2.200.1", true, "Recommended Time Limits", true, "html/Maintenance/Recommended Time Limits.html");
let defSec_2_200_2 = new DocSection().i(true, "2.200.2", true, "Suggested Time Limits", true, "html/Maintenance/Suggested Time Limits.html");
let def_Sec_2_200 = new DocSection();
def_Sec_2_200
    .i(true, "2.200", true, "TIME LIMITED PARTS", true, "html/Maintenance/TIME LIMITED PARTS.html")
    .s([
        defSec_2_200_1,
        defSec_2_200_2
    ])

let def_Sec_2 = new DocSection().i(true, "2", true, "MAINTENANCE", false, "", "break-before:right;");
def_Sec_2.s([
    def_Sec_2_0,
    def_Sec_2_10,
    def_Sec_2_15,
    def_Sec_2_20,
    def_Sec_2_25,
    def_Sec_2_30,
    def_Sec_2_35,
    def_Sec_2_40,
    def_Sec_2_45,
    def_Sec_2_50,
    def_Sec_2_55,
    def_Sec_2_60,
    def_Sec_2_65,
    def_Sec_2_70,
    def_Sec_2_75,
    def_Sec_2_80,
    def_Sec_2_85,
    def_Sec_2_90,
    def_Sec_2_95,
    def_Sec_2_100,
    def_Sec_2_105,
    def_Sec_2_200
]);
def_Sec_2.CustomClass = "sectionMaintenance";
def_Sec_2.SetElementId("Sec_2");




export {def_Sec_2}