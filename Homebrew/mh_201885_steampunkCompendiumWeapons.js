var iFileName = "mh_201885_steampunkCompendiumWeapons.js";
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

// Adds Weapons


	// Simple Melee weapons
WeaponsList ["garrote wire"] =  {		
		regExpSearch :  /^(?=.*(garrote))(?=.*(wire)).*$/i,
		name : "Garrote Wire",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Simple",
		damage : [1, 4, "slashing"],
		range : "Melee",
		weight : 0.009,
		description : "Finesse, light, two-handed, on-hit target is grappled and cannot breathe, only can be used against Small and Medium creatures",
		abilitytodamage : true,
		monkweapon : false
	};
	
WeaponsList ["riding crop"] =  {		
		regExpSearch :  /^(?=.*(riding))(?=.*(crop)).*$/i,
		name : "Riding Crop",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Simple",
		damage : [1, 4, "slashing"],
		range : "Melee",
		weight : 1,
		description : "Light",
		abilitytodamage : true,
		monkweapon : true
	};
	
WeaponsList ["sap"] =  {		
		regExpSearch :  /^(?=.*(sap)).*$/i,
		name : "Sap",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Simple",
		damage : [1, 4, "bludgeoning"],
		range : "Melee",
		weight : 2,
		description : "Finesse, light, hidden",
		abilitytodamage : true,
		monkweapon : true
	};
	
WeaponsList ["cestus"] =  {		
		regExpSearch :  /^(?=.*(cestus)).*$/i,
		name : "Cestus",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Simple",
		damage : [1, 4, "bludgeoning"],
		range : "Melee",
		weight : 1,
		description : "Finesse, light, a monk wielding this weapon can add its damage to their unarmed strikes",
		abilitytodamage : true,
		monkweapon : true
	};
	
WeaponsList ["brass knuckles"] =  {		
		regExpSearch :  /^(?=.*(cestus)).*$/i,
		name : "Brass Knuckles",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Simple",
		damage : [1, 4, "bludgeoning"],
		range : "Melee",
		weight : 2,
		description : "Light, hidden",
		abilitytodamage : true,
		monkweapon : true
	};
	
WeaponsList ["stiletto knife"] =  {		
		regExpSearch :  /^(?=.*(stiletto))(?=.*(knife)).*$/i,
		name : "Stiletto Knife",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Simple",
		damage : [1, 4, "piercing"],
		range : "Melee, 20/60 ft",
		weight : 2,
		description : "Finesse, light, hidden, thrown",
		abilitytodamage : true,
		monkweapon : true
	};
	
WeaponsList ["switchblade"] =  {		
		regExpSearch :  /^(?=.*(stiletto))(?=.*(knife)).*$/i,
		name : "Switchblade",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Simple",
		damage : [1, 6, "piercing"],
		range : "Melee, 20/60 ft",
		weight : 2,
		description : "Light, hidden",
		abilitytodamage : true,
		monkweapon : true
	};
	
WeaponsList ["walking cane"] =  {		
		regExpSearch :  /^(?=.*(walking))(?=.*(cane|stick)).*$/i,
		name : "Walking Cane",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Simple",
		damage : [1, 8, "bludgeoning"],
		range : "Melee, 20/60 ft",
		weight : 2,
		description : "Hidden, versatile (1d10), conceals a blade which can be unsheathed as part of the weapon attack",
		abilitytodamage : true,
		monkweapon : false
	};
	
	// Simple Ranged weapons
WeaponsList ["bola"] =  {		
		regExpSearch :  /^(?=.*(bola)).*$/i,
		name : "Bola",
		source : [["MH:SC", 67]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [1, 4, "bludgeoning"],
		range : "50/100 ft",
		weight : 2,
		description : "Light, thrown, large or smaller creature must succeed DC 12 Dex Save or be grappled",
		abilitytodamage : true,
		monkweapon : true
	};
	
WeaponsList ["blight grenade/mine"] =  {		
		regExpSearch :  /^(?=.*(blight|rot))(?=.*(grenade|mine|hand bomb)).*$/i,
		name : "Blight Grenade/Mine",
		source : [["MH:SC", 68]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [2, 6, "necrotic"],
		range : "5 x Strength  ft",
		weight : 1,
		description : "Thrown, when activated everyone in a 20-ft cube must make a DC 15 Dex Save",
		abilitytodamage : false,
		monkweapon : false
	};
	
WeaponsList ["concussion grenade/mine"] =  {		
		regExpSearch :  /^(?=.*(concussion|thunder|impact))(?=.*(grenade|mine|hand bomb)).*$/i,
		name : "Concussion Grenade/Mine",
		source : [["MH:SC", 68]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [4, 6, "thunder"],
		range : "5 x Strength  ft",
		weight : 1,
		description : "Thrown, non-lethal, when activated everyone in a 20-ft sphere must make a DC 15 Dex Save",
		abilitytodamage : false,
		monkweapon : false
	};
	
WeaponsList ["corrosive grenade/mine"] =  {		
		regExpSearch :  /^(?=.*(corrosive|acid|solvent))(?=.*(grenade|mine|hand bomb)).*$/i,
		name : "Corrosive Grenade/Mine",
		source : [["MH:SC", 68]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [2, 6, "acid"],
		range : "5 x Strength  ft",
		weight : 1,
		description : "Thrown, when activated everyone in a 10-ft cylinder must make a DC 15 Dex Save",
		abilitytodamage : false,
		monkweapon : false
	};
	
WeaponsList ["drake grenade/mine"] =  {		
		regExpSearch :  /^(?=.*(drake|napalm|incendiary))(?=.*(grenade|mine|hand bomb)).*$/i,
		name : "Drake Grenade/Mine",
		source : [["MH:SC", 68]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [3, 6, "fire"],
		range : "5 x Strength  ft",
		weight : 1,
		description : "Thrown, when activated everyone in a 10-ft cube must make a DC 15 Dex Save",
		abilitytodamage : false,
		monkweapon : false
	};
	
WeaponsList ["flash grenade/mine"] =  {		
		regExpSearch :  /^(?=.*(flash|bright))(?=.*(grenade|mine|hand bomb)).*$/i,
		name : "Flash Grenade/Mine",
		source : [["MH:SC", 68]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [4, 6, "radiant"],
		range : "5 x Strength  ft",
		weight : 1,
		description : "Thrown, non-lethal, when activated everyone in a 30-ft sphere must make a DC 15 Dex Save",
		abilitytodamage : false,
		monkweapon : false
	};
	
WeaponsList ["frag grenade/mine"] =  {		
		regExpSearch :  /^(?=.*(frag))(?=.*(grenade|mine|hand bomb)).*$/i,
		name : "Frag Grenade/Mine",
		source : [["MH:SC", 68]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [3, 6, "piercing"],
		range : "5 x Strength  ft",
		weight : 1,
		description : "Thrown, when activated everyone in a 20-ft cube must make a DC 15 Dex Save",
		abilitytodamage : false,
		monkweapon : false
	};
	
WeaponsList ["frost grenade/mine"] =  {		
		regExpSearch :  /^(?=.*(frost|freezer))(?=.*(grenade|mine|hand bomb)).*$/i,
		name : "Frost Grenade/Mine",
		source : [["MH:SC", 68]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [3, 6, "cold"],
		range : "5 x Strength  ft",
		weight : 2,
		description : "Thrown, when activated everyone in a 20-ft cube must make a DC 15 Dex Save",
		abilitytodamage : false,
		monkweapon : false
	};
	
WeaponsList ["gas grenade/mine"] =  {		
		regExpSearch :  /^(?=.*(poison|gas))(?=.*(grenade|mine|hand bomb)).*$/i,
		name : "Grenade/Mine",
		source : [["MH:SC", 68]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [2, 8, "poison"],
		range : "5 x Strength  ft",
		weight : 2,
		description : "Thrown, when activated everyone in a 20-ft sphere must make a DC 15 Dex Save",
		abilitytodamage : false,
		monkweapon : false
	};
	
WeaponsList ["pressure grenade/mine"] =  {		
		regExpSearch :  /^(?=.*(force|pressure))(?=.*(grenade|mine|hand bomb)).*$/i,
		name : "Pressure Grenade/Mine",
		source : [["MH:SC", 68]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [2, 8, "force"],
		range : "5 x Strength  ft",
		weight : 2,
		description : "Thrown, when activated everyone in a ~~ must make a DC 15 Dex Save",
		abilitytodamage : false,
		monkweapon : false
	};
	
WeaponsList ["shock grenade/mine"] =  {		
		regExpSearch :  /^(?=.*(shock|lightning|static|electric))(?=.*(grenade|mine|hand bomb)).*$/i,
		name : "Grenade/Mine",
		source : [["MH:SC", 68]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [3, 6, "lightning"],
		range : "5 x Strength  ft",
		weight : 2,
		description : "Thrown, when activated everyone in a 20-ft sphere must make a DC 15 Dex Save",
		abilitytodamage : false,
		monkweapon : false
	};
	
WeaponsList ["slingshot"] =  {		
		regExpSearch :  /^(?=.*(slingshot)).*$/i,
		name : "Slingshot",
		source : [["MH:SC", 6]],
		list : "ranged",
		ability : 2,
		type : "Simple",
		damage : [1, 4, "bludgeoning"],
		range : "30/90 ft",
		weight : 1,
		description : "Ammunition, two-handed",
		abilitytodamage : true,
		monkweapon : false
	};

	// Martial Melee weapons
WeaponsList ["buzzsaw"] =  {		
		regExpSearch :  /^(?=.*(buzz|chain))(?=.*(saw|blade)).*$/i,
		name : "Buzzsaw",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [2, 6, "slashing"],
		range : "Melee",
		weight : 15,
		description : "Heavy, two-handed, can be heard up to 60 ft outside (30 ft inside)",
		abilitytodamage : true,
		monkweapon : false
	}; 
	
WeaponsList ["claw glove"] =  {		
		regExpSearch :  /^(?=.*(claw|talon))(?=.*(glove|gauntlet)).*$/i,
		name : "Claw Glove",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [1, 6, "slashing"],
		range : "Melee",
		weight : 2,
		description : "Light",
		abilitytodamage : true,
		monkweapon : true
	};
	
WeaponsList ["cutlass"] =  {		
		regExpSearch :  /^(?=.*(cutlass)).*$/i,
		name : "Cutlass",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [1, 8, "slashing"],
		range : "Melee",
		weight : 3,
		description : "Finesse, light",
		abilitytodamage : true,
		monkweapon : false
	};
	
WeaponsList ["boot knife"] =  {		
		regExpSearch :  /^(?=.*(shoe|boot|heel))(?=.*(blade|knife|dagger|dirk)).*$/i,
		name : "Boot Knife",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [1, 4, "piercing"],
		range : "Melee",
		weight : 1,
		description : "Hidden, light, deploy as bonus action/re-arm as action, while deployed normal terrain is difficult and difficult is impassable",
		abilitytodamage : true,
		monkweapon : false
	};
	
WeaponsList ["boot knife"] =  {		
		regExpSearch :  /^(?=.*(shoe|boot|heel))(?=.*(blade|knife|dagger|dirk)).*$/i,
		name : "Boot Knife",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [1, 4, "piercing"],
		range : "Melee",
		weight : 1,
		description : "Hidden, light, deploy as bonus action/re-arm as action, while deployed normal terrain is difficult and difficult is impassable",
		abilitytodamage : true,
		monkweapon : true
	};
	
WeaponsList ["ball & chain"] =  {		
		regExpSearch :  /^(?=.*(ball|spike|blade|kunai))(?=.*(\&|and))(?=.*(chain|rope)).*$/i,
		name : "Ball & Chain",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [1, 8, "bludgeoning"],
		range : "Melee",
		weight : 12,
		description : "Heavy, two-handed, reach",
		abilitytodamage : true,
		monkweapon : true
	};
	
WeaponsList ["sabre"] =  {		
		regExpSearch :  /^(?=.*(sabre)).*$/i,
		name : "Sabre",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [1, 8, "slashing"],
		range : "Melee",
		weight : 3,
		description : "Finesse",
		abilitytodamage : true,
		monkweapon : false
	};
	
WeaponsList ["estoc"] =  {		
		regExpSearch :  /^(?=.*(estoc)).*$/i,
		name : "Estoc",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [1, 8, "piercing"],
		range : "Melee",
		weight : 3,
		description : "Finesse, versatile (1d10)",
		abilitytodamage : true,
		monkweapon : false
	};
	
WeaponsList ["sawtooth sword"] =  {		
		regExpSearch :  /^(?=.*(sawtooth))(?=.*(sword)).*$/i,
		name : "Sawtooth Sword",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [2, 4, "slashing"],
		range : "Melee",
		weight : 3,
		description : "Light, On a roll and hit of 19 or 20 target takes 1d4 slashing damage on each of its turns until it uses an action to stop the bleeding",
		abilitytodamage : true,
		monkweapon : false
	};
	
WeaponsList ["chain whip"] =  {		
		regExpSearch :  /^(?=.*(chain|saw))(?=.*(whip)).*$/i,
		name : "Chain Whip",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [1, 6, "slashing"],
		range : "Melee",
		weight : 3,
		description : "Light, reach",
		abilitytodamage : true,
		monkweapon : false
	};
	
WeaponsList ["gauntlet blade"] =  {		
		regExpSearch :  /^(?=.*(gauntlet))(?=.*(blade|dagger|dirk|stiletto)).*$/i,
		name : "Chain Whip",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [1, 4, "piercing"],
		range : "Melee",
		weight : 3,
		description : "Finesse, light, hidden, deploy as free action retract as a bonus action",
		abilitytodamage : true,
		monkweapon : true
	};
	
WeaponsList ["lightning baton"] =  {		
		regExpSearch :  /^(?=.*(lightning|shock|static|electric))(?=.*(baton|prod)).*$/i,
		name : "Lightning Baton",
		source : [["MH:SC", 67]],
		list : "melee",
		ability : 1,
		type : "Martial",
		damage : [2, 6, "lightning"],
		range : "Melee",
		weight : 3,
		description : "Non-lethal, reach, if dropped into water of at least ankle height creatures in the water must make a DC 13 Dex Save or take damage as if critically hit by the weapon (also applies if the target is wet)",
		abilitytodamage : true,
		monkweapon : true
	};