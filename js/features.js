var Paladin     = ["Divine Sense, Lay on Hands","Fighting Style, Spellcasting, Divine Smite","Divine Health, Sacred Oath","Ability Score Improvement","Extra Attack","Aura of Protection","Sacred Oath feature","Ability Score Improvement","","Aura of Courage","Improved Divine Smite","Ability Score Improvement","","Cleansing Touch","Sacred Oath feature","Ability Score Improvement","","Aura improvements","Ability Score Improvement","Sacred Oath feature"];
var Barb        = ["Rage, Unarmored","Reckless Attack, Danger Sense","Primal Path","Ability Score","Extra Attack, Fast Movement","Path feature","Feral Instinct","Ability Score","Brutal Critical","Path feature","Relentless Rage","Ability Score","Brutal Critical 2","Path feature","Persistent Rage","Ability Score Improvement","Brutal Critical","Indomitable","Ability Score","Primal Champion"]
var Bard        = ["Spellcasting, Bardic Inspiration (d6)","Jack of All Trades, Song of Rest (d6)","Bard College, Expertise","Ability Score Improvement","Bardic Inspiration (d8),Font of Inspiration","Countercharm, Bard College feature","xxx","Ability Score Improvement","Song of Rest (d8)","Bardic Inspiration (d10), Expertise, Magical Secrets","xxx","Ability Score Improvement","Song of Rest (d10)","Magical Secrets,Bard College feature","Bardic Inspiration (d12)","Ability Score Improvement","Song of Rest (d12)","Magical Secrets","Ability Score Improvement","Superior Inspiration"];
var Cleric      = ["Spellcasting, Divine Domain","Channel Divinity (1/rest),Divine Domain feature","xxx","Ability Score Improvement","Destroy Undead (CR 1/2)","Channel Divinity (2/rest),Divine Domain feature","xxx","Ability Score Improvement, Destroy Undead,(CR 1), Divine Domain feature","xxx","Divine Intervention","Destroy Undead (CR 2)","Ability Score Improvement","xxx","Destroy Undead (CR 3)","xxx","Ability Score Improvement","Destroy Undead (CR 4),Divine Domain feature","Channel Divinity (3/rest)","Ability Score Improvement","Divine Intervention improvement"];
var Druid       = ["Druidic, Spellcasting ","Wild Shape, Druid Circle ","— ","Wild Shape improvement, ","— ","Druid Circle feature ","— ","Wild Shape improvement, ","— ","Druid Circle feature ","— ","Ability Score Improvement ","— ","Druid Circle feature ","— ","Ability Score Improvement ","— ","Timeless Body, Beast Spells ","Ability Score Improvement ","Archdruid"];
var Fighter     = ["Fighting Style, Second Wind","Action Surge (one use)","Martial Archetype","Ability Score Improvement","Extra Attack","Ability Score Improvement","Martial Archetype feature","Ability Score Improvement","Indomitable (one use)","Martial Archetype feature","Extra Attack x2","Ability Score Improvement","Indomitable (two uses)","Ability Score Improvement","Martial Archetype feature","Ability Score Improvement","Action Surge (two uses), Indomitable (three uses)","Martial Archetype feature","Ability Score Improvement","Extra Attack x3"];
var Monk        = ["Unarmored Defense, Martial Arts","Ki, Unarmored Movement","Monastic Tradition, Deflect Missiles","Ability Score Improvement, Slow Fall","Extra Attack, Stunning Strike","Ki Empowered Strikes, Monastic Tradition feature","Evasion, Stillness of Mind","Ability Score Improvement","Unarmored Movement improvement","Purity of Body","Monastic Tradition feature","Ability Score Improvement","Tongue of the Sun and Moon","Diamond Soul","Timeless Body","Ability Score Improvement","Monastic Tradition feature","Empty Body","Ability Score Improvement","Perfect Self"];
var Ranger      = ["Favored Enemy,NaturalExplorer","Fighting Style,Spellcasting","Ranger Archetype,Primeval Awareness","Ability Score Improvement","Extra Attack","FavoredEnemy andNaturalExplorer improvements","Ranger Archetype feature","Ability ScoreImprovement,Land’s Stride","xxx","NaturalExplorer improvement,Hide inPlainSight","Ranger Archetype feature","Ability Score Improvement","xxx","FavoredEnemy improvement, Vanish","Ranger Archetype feature","Ability ScoreImprovement","xxx","FeralSenses","Ability ScoreImprovement","Foe Slayer"];
var Rogue       = ["Expertise, Sneak Attack,Thieves' Cant","Cunning Action","Roguish Archetypes","Ability Score Improvement","Uncanny Dodge","Expertise","Evasion","Ability Score Improvement","Roguish Archetype feature","Ability Score Improvement","Reliable Talent","Ability Score Improvement","Roguish Archetype feature","Blindsense","Slippery Mind","Ability Score Improvement","Roguish Archetype feature","Elusive","Ability Score Improvement","Stroke of Luck"];
var Sorcerer    = ["Spellcasting, Sorcerous Origin","Font of Magic","Metamagic","Ability Score Improvement","xxx","Sorcerous Origin feature","xxx","Ability Score Improvement","xxx","Metamagic","xxx","Ability Score Improvement","xxx","Sorcerous Origin feature","xxx","Ability Score Improvement","Metamagic","Sorcerous Origin feature","Ability Score Improvement","Sorcerous Restoration"];
var Warlock     = ["Otherworldly Patron, Pact Magic","Eldritch Invocations","Pact Boon","Ability Score Improvement","xxx","Otherworldly Patron feature","xxx","Ability Score Improvement","xxx","Otherworldly Patron feature","Mystic Arcanum (6th level)","Ability Score Improvement","Mystic Arcanum (7th level)","Otherworldly Patron feature","Mystic Arcanum (8th level)","Ability Score Improvement","Mystic Arcanum (9th level)","xxx","Ability Score Improvement","Eldritch Master"];
var spec        = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6];

console.log(spec.length);
console.log(Paladin.length);
console.log(Barb.length);
console.log(Bard.length);
console.log(Cleric.length);
console.log(Druid.length);
console.log(Fighter.length);
console.log(Monk.length);
console.log(Ranger.length);
console.log(Rogue.length);
console.log(Sorcerer.length);
console.log(Warlock.length);



var table = $('<table style="text-align:right"></table>').addClass('foo');
var level = 1

for(i=0; i<10; i++) {
    var rown   = "<tr><td>"+level + "</td><td>"+Bard[i]+"</td></tr>"
    var row = $('<tr></tr>').text(rown);
    table.append(rown);
}

$('#here_table').append(table);
