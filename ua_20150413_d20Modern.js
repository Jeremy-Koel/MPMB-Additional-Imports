var iFileName = "bs_20150413_d20Modern.js";
RequiredSheerVersion(12.999);
// This file adds the content from the Behind the Screens: My New D20 Modern Campaign article to MPMB's Character Record Sheet

// Define the Source
SourceList["BS:D20"] = {
		name : "Behind the Screens: My New D20 Modern Campaign",
		abbreviation :	"BS:D20",
		group : "Behind the Screens",
		url : "https://dnd.wizards.com/articles/features/my-new-d20-modern-campaign",
		date : "2015/04/13"
};

// Adds Armour
ArmourList["heavy coat"] = {
	regExpSearch : /^(?=.*(heavy|large|dense|thick|big|hefty))(?=.*(coat|tunic)).*$/i,
	name : "Heavy coat",
	source : ["BS:D20", 1],
	type : "light",
	ac : 11,
	stealthdis : true,
	weight : 6,
	strReq : 0
};
		
ArmourList["leather jacket"] = {
	regExpSearch : /^(?=.*(skin|hide|leather))(?=.*jacket).*$/i,
	name : "Leather jacket",
	source : ["BS:D20", 1],
	type : "light",
	ac : 11,
	stealthdis : false,
	weight : 4,
	strReq : 0
};
		
ArmourList["light undercover shirt"] = {
	regExpSearch : /^(?=.*light)(?=.*undercover)(?=.*(shirt|top|blouse|garment)).*$/i,
	name : "Light undercover shirt",
	source : ["BS:D20", 1],
	type : "light",
	ac : 11,
	stealthdis : false,
	weight : 2,
	strReq : 0
};
		
ArmourList["kevlar-lined coat"] = {
	regExpSearch : /^(?=.*(kevlar|armor))(?=.*(coat|tunic)).*$/i,
	name : "Kevlar-lined coat",
	source : ["BS:D20", 1],
	type : "light",
	ac : 12,
	stealthdis : false,
	weight : 8,
	strReq : 0
};
		
ArmourList["undercover vest"] = {
	regExpSearch : /^(?=.*undercover)(?=.*vest).*$/i,
	name : "Undercover vest",
	source : ["BS:D20", 1],
	type : "light",
	ac : 13,
	stealthdis : false,
	weight : 3,
	strReq : 0
};
		
ArmourList["concealable vest"] = {
	regExpSearch : /^(?=.*concealable|discrete|hidden|)(?=.*vest).*$/i,
	name : "Concealable vest",
	source : ["BS:D20", 1],
	type : "medium",
	ac : 13,
	stealthdis : false,
	weight : 4,
	strReq : 0
};
		
ArmourList["light-duty vest"] = {
	regExpSearch : /^(?=.*light-duty)(?=.*vest).*$/i,
	name : "Light-duty vest",
	source : ["BS:D20", 1],
	type : "medium",
	ac : 14,
	stealthdis : false,
	weight : 8,
	strReq : 0
};
		
ArmourList["tactical vest"] = {
	regExpSearch : /^(?=.*(tactical|armored|protective))(?=.*vest).*$/i,
	name : "Tactical vest",
	source : ["BS:D20", 1],
	type : "medium",
	ac : 15,
	stealthdis : true,
	weight : 10,
	strReq : 10
};
		
ArmourList["special response vest"] = {
	regExpSearch : /^(?=.*(special response|military|combat))(?=.*vest).*$/i,
	name : "Special response vest",
	source : ["BS:D20", 1],
	type : "heavy",
	ac : 15,
	stealthdis : true,
	weight : 15,
	strReq : 10
};
		
ArmourList["land warrior armor"] = {
	regExpSearch : /^(?=.*(land|marine))(?=.*(warrior|infantry))(?=.*(armor|gear)).*$/i,
	name : "Land warrior armor",
	source : ["BS:D20", 1],
	type : "heavy",
	ac : 17,
	stealthdis : true,
	weight : 10,
	strReq : 13
};
		
ArmourList["forced entry unit"] = {
	regExpSearch : /^(?=.*(forced|tactical|strategic|military))(?=.*(entry|breaching|assault))(?=.*(unit|armor|gear)).*$/i,
	name : "Forced entry unit",
	source : ["BS:D20", 1],
	type : "heavy",
	ac : 18,
	stealthdis : true,
	weight : 20,
	strReq : 13
};