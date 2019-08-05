var iFileName = "mh_201885_steampunkCompendiumSpells.js";
RequiredSheetVersion(12.999);
// This file adds content from MaxHydro's Steampunk Compendium for D&D 5th Edition to MPMB's Character Record Sheet

// Define the Source
SourceList["MH:SC"] = {
		name : "Steampunk Compendium",
		abbreviation :	"MH:SC",
		group : "MaxHydro",
		url : "http://homebrewery.naturalcrit.com/share/r1mnLrkNrZ",
		date : "2018/08/05"
};

// Adds Spells

	// Cantrips
SpellsList ["black bullet"] = {
		name : "Black Bullet",
		classes : ["cleric", "warlock"],
		source : [["MH:SC", 53]],
		level : 0,
		school : "Necro",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Dex",
		description : "1 crea takes 1d4 necrotic damage and bullet clings to body until action used to remove, deals 1d4 necrotic damage at start of crea turn until removed; +1d4 at CL 5, 11, and 17",
		descriptionFull : "You conjure and fire a tiny, black orb that clings to its target like a leech, draining some of its vital force. As part of the action used to cast this spell, you must make a ranged attack with a firearm within the spell's range, otherwise the spell fails. On a hit, the target takes 1d4 necrotic damage, and the bullet clings to the target's body until it spends an action to remove it. At the start of each of the target's turns, it takes 1d4 necrotic damage as long as the bullet remains attached to it."  + "\n   " + "This spell's damage on subsequent turns increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
	},