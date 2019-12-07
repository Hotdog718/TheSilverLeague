
$("#ev").click(() => {
  $("#display").empty();
  $("#display").append(`<h1>EV Training</h1>`)
})

$("#iv").click(() => {
  $("#display").empty();
  $("#display").append(`
      <h1 class="header"><u>Pokemon Breeding Guide</u></h1>
      <div class="text">
        <p>Pokemon breeding is an integral part of the game. It’s essential in order to acquire certain Pokemon in order to complete the Pokedex, or if your Pokemon requires certain egg moves. However, in todays increasing competitive metagame, Pokemon breeding is a must in order to produce a strong, battle worthy team. Everything from a Pokemon’s nature to its stats can be influenced by effective breeding. So, if you are new to advanced Pokemon breeding, this guide will hopefully make you a more effective breeder. And let’s face it, as Pokemon geeks this is likely to be the only breeding we will ever do, so you may as well learm how to do it well.</p>
      </div>
      <div style="display: flex;">
        <div style="flex: 60%; padding: 6px;">
          <h1 class="header"><u>Breeding for natures</u></h1>

          <p>Whether you are new to Pokemon or have been playing for years, you may or may not know that a Pokemon’s nature can actually affect its stats. Almost all natures have both a positive and negative effect on certain stats, either increasing or decreasing their maximum potential level by 10%. Depending on the strategy you have chosen for your Pokemon, you need it to have a nature that will benefit the stats you intend to be using. For example, a fast physical sweeper will benefit most from having a nature that either boosts its attack or speed stat, while its special attack can be sacrificed due to its non use. Therefore an Adamant or Jolly nature is best. To the right is a full list of all the Pokemon natures and what stats they effect.</p>
          <p><b>Gen 4:</b><br>Females carrying an Everstone have a 50% chance of passing down their nature.<br>NOTE: In HG/SS, either parent can pass on Nature with the Everstone equiped.</p>
          <p><b>Gen 5:</b><br>Either Parent can pass on nature while equiped with the Everstone, rate of being passed on is still 50%<br>NOTE: in BW2, Pokemon equiped with the Everstone are now gaurenteed to pass down their Nature.</p>
          <p><b>Gen 6:</b><br>Either Parent equipped with the Everstone is gaurenteed to pass on their nature.</p>
          <h1 class="header"><u>Individual Values</u></h1>
          <p>You may or may not have noticed this yourself, but let’s say you catch two Pokemon of the same species that have the same nature and are both of the same level. However, when you look at their stats, you notice that they are slightly different. This is due to the Pokemon’s unique IV, or individual value, spread. Every Pokemon’s stats range from a value of 0 to 31. The higher the value, the higher the stat can potentially reach. The IV’s of wild caught and hatched Pokemon are random and set, so can’t be changed in any way without hacking. There is however ways of influencing what IV’s a Pokemon’s may have through breeding.</p>
          <p>With most people battling with strong and powerful Pokemon nowadays, having Pokemon with high IV’s in their useable stats is near essential. But how can you tell what IV’s your Pokemon has, and if any of them are at their highest IV of 31? There are a couple of methods. Firstly, look at the Trainer Memo page of your Pokemon’s summery, and you will notice one of many characteristics. Each characteristic shows which of your Pokemon’s stats has the highest IV value. Below is a list of all the characteristics and what IV’s and stats they correspond to.</p>
          <div>${getIVTable()}</div>
        </div>
        <div style="flex: 40%; padding: 6px;">
          <table style="width: 80%; margin-left: auto; margin-right: auto;">
            <tr>
              <th>Nature</th>
              <th>+Stat</th>
              <th>-Stat</th>
            </tr>
            ${getNatureTable()}
          </table>
          <h1 class="header"><u>Individual Values Cont.</u></h1>
          <p>In order to accurately check all of your Pokemon’s IV’s, you will need to have an IV battle which requires you to enter a level 100 wifi battle with a friend. This will allow you to see your Pokemon’s stats at level 100. These can then be entered into an IV calculator along with the Pokemon’s nature, to give you the exact IV’s for your Pokemon’s stats. As with effective EV training, it is required that your Pokemon be either freshly caught or bred in order for the IV’s to be calculated correctly, or that you know the exact number of EV points they have accumulated which must be entered into the calculator.</p>
        </div>
      </div>
      <div>
        <h1 class="header"><u>IV Breeding</u></h1>
        <p>Now that you know your Pokemon’s IV’s, you may wish to breed new Pokemon with better IV spreads. If some of your existing Pokemon have stats that have an IV value of 31, it is possible to pass these IV’s to the babies. This is known as IV breeding, and isn’t as difficult as you may think or have been lead to believe.</p>
        <p>When you breed two Pokemon in the daycare centre, the babies inherit 3 random stat IV’s from the parents. However, if you give one of the parents one of the EV power items to hold, the stat it corresponds to is guaranteed to be inherited from that parent. So for example, if you are breeding a male Venusaur with a Ditto, and give the Venusaur the Power Bracer to hold, the baby Bulbasaurs produced are guaranteed to inherit the Attack IV of the Venusaur. The other two stats the babies inherit will still be randomly chosen from both parents. If both parents are given Power items to hold, only one of the stats from either parent is guaranteed to be inherited.</p>
        <p>Now that the basics of IV breeding have been explained, I will give you my step by step method for breeding Pokemon of a certain nature with two 31 IV stats. For this example, we will be breeding for a Timid natured Vulpix with 31 IV’s in Special Attack and Speed, and we will assume you already possess some Pokemon in Vulpix’s egg group with 31 IV’s in those stats.</p>
        <ol>
          <li>First, give the Timid natured Ditto you should now own an Everstone to hold. Put it and either a Vulpix or Ninetales in the daycare centre. Hatch the eggs produced until you get a female Vulpix with a Timid nature inherited from the Ditto.</li>
          <li>Next, find a male Pokemon in Vulpix’s egg group who has 31 IV’s in speed (you will need to confirm this by checking its stats in an IV battle). Give this male the Power Anklet item, and breed it with the Timid female Vulpix holding an everstone until you produce a Timid female baby. You will now have a female Timid Vulpix with 31 IV’s in speed (it should have the characteristic ‘Alert to sounds’ to confirm this. Put this Vulpix in the PC for later, as we now will get a father to breed with.</li>
          <li>Using the male Pokemon with 31 IV’s in speed you used earlier, you need to breed it with a female Pokemon that has 31 IV’s in Special Attack. Again, use an IV battle to check this. Give the male Pokemon the Power Anklet once again, and breed it with the female Pokemon. You are aiming to produce a baby male Pokemon with inherits both the 31 IV’s in speed from the father, and the 31 IV’s in sp.atk from the female. Because the male is holding the Power Anklet, the babies are guaranteed to inherit his 31 IV’sin speed. In order to check whether the babies have also inherited the 31 IV’s in sp.atk, check the babies produced in an IV battle. It does not matter what nature the male has.</li>
          <li>Now that you have a male Pokemon with 31 IV’s in Special Attack and Speed, you need to breed it with the Timid female Vulpix with 31 IV’s in speed you produced earlier. Give the female Vulpix an Everstone to hold, and the male Pokemon the Power Lens. This will guarantee that the males 31 IV’s in Special Attack will be inherited by the babies, and seeing as both parents have 31 IV’s in speed the chance of it being randomly inherited by the babies is increased.</li>
          <li>Continue to breed the male Pokemon and the Vulpix, keeping any Timid natured babies you hatch. IV battle to check these babies, and eventually you should produce a baby Vulpix that is both Timid, and has inherited both 31 IV stats from the parents.</li>
        </ol>
        <p>Congratulations, you are now an IV breeder. Now that you have your perfect baby Pokemon, it’s now time to EV train it. If you haven’t done so already, read through the EV training guide in order to get the most out of your new breeding skills, and become an even better battler.</p>
      </div>
      <div>
        <h1 class="header"><u>IV Breeding in 6th Gen</u></h1>
        <p>With Pokemon X & Y Breeding has never been easier. Everything from the previous Gen has remained but with a few important additions. Which go as followed:</p>
        <ul>
          <li><b>Females can now pass on any egg moves they've learned, as well as the Pokeball they are in.</b> For example: If a female Eevee is in a Dive Ball and it knows wish and it breeds with a male Delphox, the offspring will be Eevee in Dive Balls and retain the move Wish.<br>NOTE: Ontop of being able to pass on Egg Moves, Egg Moves can now be relearned if they are forgotten from the Move Relearner just like any other move it's forgotten, meaning parents who lose egg moves during the breeding process scan retain them afterward.</li>
          <li><b>Males can now pass on Hidden Abiltiies.</b> Previously, special event Pokemon who had their DW ability like Blazekin meant it was impossible to breed better, stronger versions of these Pokemon. It also required people to work harder to find females in Dream World or during breeding in order to continue the process to get that ideal Pokemon. Now as long as one parent has the Hidden Ability, there is a 60% chance that it will be passed on.</li>
          <li>The Best change made to IV breeding is the additional effect of a previously near-useless item, Destiny Knot. <b>If either parent is holding the Destiny Knot during breeding, the off spring will now automatically inherit 5 IVs between both parents.</b> For Example, if the father has 31 in HP, Atk and Def while the mother has 31 in HP, Sp. Def and Speed, there is a chance to hatch an egg that'll inherit 31 in HP, Atk, Def, Sp. Def and Speed, and if they do not inherit those stats, the minimum lowest the IV can be is as low as both parents IVs, better parents = better Pokemon. Before, Power Items guaranteed 1 stat, while this method does not guarantee anything, a bit of time can lead to great results.</li>
        </ul>
        <p>IMPORTANT NOTE:<br>Friend Safaris are a great way to obtain Dittos for breeding as well as Pokemon with Hidden Abilities but best of all, ALL Pokemon caught in the Friend Safari are guaranteed to have 31 IVs in 2 stats, allowing for a jump start in breeding, or even with a bit of dedication, a perfect Pokemon right off the bat, though realistically...stick to using them for breeding.</p>
        <div style="margin-left: auto; margin-right: auto; text-align: center;">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/S5g8-c69NMA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div>
        <h1 class="header"><u>IV Breeding in 5th Gen</u></h1>
        <p>With new games, come new challenges, chief among them being the way we now battle. Gone are the days of level 100 wifi battles, and with them also the ability to accurately IV battle to find out your Pokemon’s IV’s. There is however a new method to discover the IV’s, and although not as accurate and as accessible as the 4th Generation, it does give you a fair idea of your Pokemon’s potential. Unfortunately, this can only be accomplished with the use of two DS’s and two copies of the B/W games. By entering a local Infared battle, all Pokemon in your party automatically become level 50, allowing you to enter in your Pokemon’s stats into the IV calculator. Of course the resultant IV’s may not be 100% accurate as your Pokemon is not level 100, however at level 50 the stats give two possible IV values, so you will have a fairly good idea of the IV spread.</p>
        <p>Alternatively, if you don’t have two DS’s and two games, thanks to the new level-up system, if your level 1 Pokemon battles a high level opponent, it could gain 20+ levels from a single battle, giving you checkable stat values. Remember to save your game beforehand if you wish to prevent your Pokemon gaining any EV’s.</p>
        <p>If you used a Pokemon with a known 31 IV stat and the corresponding power item in your breeding of the Pokemon you are checking, and that stat shows on the IV calculator as having an IV of either 30 or 31, you’ll know that 31 is the correct IV for that stat. You can then talk to the blue haired man in the main area of the Battle Subway of Nimbasa City. He will make a comment on your Pokemon’s highest stat IV. If you know that your Pokemon has 31 IV’s in a stat, and the man comments on more than one stat, you’ll therefore know which stats possess 31 IV’s.</p>
      </div>
      <div>
        <h1 class="header"><u>5th Generation Hidden Power Calculator</u></h1>
        <div style="display: flex;">
          <div style="flex: 30%">
            <table style="margin-left:auto; margin-right: auto; width: 150px;">
              <tr>
                <th>Stat</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>HP:</td>
                <td><input type="number" min="0" max="31" value="31" id="HP"></td>
              </tr>
              <tr>
                <td>Attack:</td>
                <td><input type="number" min="0" max="31" value="31" id="Attack"></td>
              </tr>
              <tr>
                <td>Defense:</td>
                <td><input type="number" min="0" max="31" value="31" id="Defense"></td>
              </tr>
              <tr>
                <td>Sp. Attack:</td>
                <td><input type="number" min="0" max="31" value="31" id="SpAttack"></td>
              </tr>
              <tr>
                <td>Sp. Defense:</td>
                <td><input type="number" min="0" max="31" value="31" id="SpDefense"></td>
              </tr>
              <tr>
                <td>Speed:</td>
                <td><input type="number" min="0" max="31" value="31" id="Speed"></td>
              </tr>
            </table>
            <div style="text-align: center; margin-left: auto; margin-right: auto;"><button style="width:150px;" onclick="getHiddenPower()">Submit</button></div>
          </div>
          <div style="flex: 70%">
            <div id="results"></div>
          </div>
        </div>
      </div>
  `)
})
var natures = [
  {
    name: "Adamant",
    boosts: "Attack",
    hinders: "Sp. Attack"
  },
  {
    name: "Bashful",
    boosts: "-",
    hinders: "-"
  },
  {
    name: "Bold",
    boosts: "Defense",
    hinders: "Attack"
  },
  {
    name: "Brave",
    boosts: "Attack",
    hinders: "Speed"
  },
  {
    name: "Calm",
    boosts: "Sp. Defense",
    hinders: "Attack"
  },
  {
    name: "Careful",
    boosts: "Sp. Defense",
    hinders: "Sp. Attack"
  },
  {
    name: "Docile",
    boosts: "-",
    hinders: "-"
  },
  {
    name: "Gentle",
    boosts: "Sp. Defense",
    hinders: "Defense"
  },
  {
    name: "Hardy",
    boosts: "-",
    hinders: "-"
  },
  {
    name: "Hasty",
    boosts: "Speed",
    hinders: "Defense"
  },
  {
    name: "Impish",
    boosts: "Defense",
    hinders: "Sp. Attack"
  },
  {
    name: "Jolly",
    boosts: "Speed",
    hinders: "Sp. Attack"
  },
  {
    name: "Lax",
    boosts: "Defense",
    hinders: "Sp. Defense"
  },
  {
    name: "Lonely",
    boosts: "Attack",
    hinders: "Defense"
  },
  {
    name: "Mild",
    boosts: "Sp. Attack",
    hinders: "Defense"
  },
  {
    name: "Modest",
    boosts: "Sp. Attack",
    hinders: "Attack"
  },
  {
    name: "Naive",
    boosts: "Speed",
    hinders: "Sp. Defense"
  },
  {
    name: "Naughty",
    boosts: "Attack",
    hinders: "Sp. Defense"
  },
  {
    name: "Quiet",
    boosts: "Sp. Attack",
    hinders: "Speed"
  },
  {
    name: "Quirky",
    boosts: "-",
    hinders: "-"
  },
  {
    name: "Rash",
    boosts: "Sp. Attack",
    hinders: "Sp. Defense"
  },
  {
    name: "Relaxed",
    boosts: "Defense",
    hinders: "Speed"
  },
  {
    name: "Sassy",
    boosts: "Sp. Defense",
    hinders: "Speed"
  },
  {
    name: "Serious",
    boosts: "-",
    hinders: "-"
  },
  {
    name: "Timid",
    boosts: "Attack",
    hinders: "Speed"
  }
];
var IVcharacteristics = {
  HP: [
    "Loves to Eat",
    "Often dozes off",
    "Often Scatters Things",
    "Scatters things often",
    "Likes to relax"
  ],
  Attack: [
    "Proud of its power",
    "Likes to thrash About",
    "A little quick tempered",
    "Likes to fight",
    "Quick tempered"
  ],
  Defense: [
    "Sturdy body",
    "Capable of taking hits",
    "Highly persistent",
    "Good endurance",
    "Good perserverance"
  ],
  "Sp. Attack": [
    "Highly curious",
    "Mischievous",
    "Thoroughly cunning",
    "Often lost in thought",
    "Very finicky"
  ],
  "Sp. Defense": [
    "Strong Willed",
    "Somewhat Vein",
    "Strongly defiant",
    "Hates to lose",
    "Somewhat stubborn"
  ],
  Speed: [
    "Likes to run",
    "Alert to sounds",
    "Impetuous and silly",
    "Somewhat of a clown",
    "Quick to flee"
  ],
}
const getHiddenPower = () => {
  let hp = $('#HP').val(), atk = $("#Attack").val(), def = $("#Defense").val(), spa = $("#SpAttack").val(), spd = $("#SpDefense").val(), spe = $("#Speed").val();
  let nhp = Math.floor(hp/2), natk = Math.floor(atk/2), ndef = Math.floor(def/2), nspa = Math.floor(spa/2), nspd = Math.floor(spd/2), nspe = Math.floor(spe/2);
  let power = Math.floor(((nhp%2 == 1 ? 1 : 0) + (natk%2 == 1 ? 2 : 0) + (ndef%2 == 1 ? 4 : 0) + (nspa%2 == 1 ? 16 : 0) + (nspd%2 == 1 ? 32 : 0) + (nspe%2 == 1 ? 8 : 0))*(40/63)+30);

  let H = hp%2 == 1 ? 1 : 0;
  let A = atk%2 == 1 ? 2 : 0;
  let D = def%2 == 1 ? 4 : 0;
  let S = spe%2 == 1 ? 8 : 0;
  let X = spa%2 == 1 ? 16 : 0;
  let Y = spd%2 == 1 ? 32 : 0;

  let val = Math.floor((H+A+D+S+X+Y)*15/63);
  let type = val == 0 ? "Fighting" : (val == 1 ? "Flying" : (val == 2 ? "Poison" : (val == 3 ? "Ground" : (val == 4 ? "Rock" : (val == 5 ? "Bug" : (val == 7 ? "Steel" : (val == 8 ? "Fire" : (val == 9 ? "Water" : (val == 10 ? "Grass" : (val == 11 ? "Electric" : (val == 12 ? "Psychic": (val == 13 ? "Ice" : (val == 14 ? "Dragon" : "Dark")))))))))))));
  $("#results").html(`Type = Math.floor((${H} + ${A} + ${D} + ${S} + ${X} + ${Y})*(15/63))<br>Type = Math.floor(${H+A+D+S+X+Y}*(15/63))<br>Type = Math.floor(${(H+A+D+S+X+Y)*(15/63)})<br>Type = ${Math.floor((H+A+D+S+X+Y)*(15/63))} (${type})<br><br>Power = Math.floor((${nhp%2==1?1:0} + ${natk%2==1?2:0} + ${ndef%2==1?4:0} + ${nspa%2==1?16:0} + ${nspd%2==1?32:0} + ${nspe%2==1?8:0})*(40/63)+30)<br>Power = Math.floor(${(nhp%2==1?1:0)+(natk%2==1?2:0)+(ndef%2==1?4:0)+(nspa%2==1?16:0)+(nspd%2==1?32:0)+(nspe%2==1?8:0)}*(40/63)+30)<br>Power = Math.floor(${((nhp%2==1?1:0)+(natk%2==1?2:0)+(ndef%2==1?4:0)+(nspa%2==1?16:0)+(nspd%2==1?32:0)+(nspe%2==1?8:0))*(40/63)}+30)<br>Power = Math.floor(${((nhp%2==1?1:0)+(natk%2==1?2:0)+(ndef%2==1?4:0)+(nspa%2==1?16:0)+(nspd%2==1?32:0)+(nspe%2==1?8:0))*(40/63)+30})<br>Power = ${Math.floor(((nhp%2 == 1 ? 1 : 0) + (natk%2 == 1 ? 2 : 0) + (ndef%2 == 1 ? 4 : 0) + (nspa%2 == 1 ? 16 : 0) + (nspd%2 == 1 ? 32 : 0) + (nspe%2 == 1 ? 8 : 0))*(40/63)+30)}`);
};
const getIVTable = () => {
  var stats = ["HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"];
  let res = `<table><tr><th style="font-size: 13px;">Possible IV's</th>`;
  for(let i = 0; i<stats.length; i++){
    res+=`<th style="font-size: 13px;">${stats[i]}</th>`;
  }
  res+=`</tr>`;
  for(let i = 0; i<=4; i++){
    res+=`<tr><td style="font-size: 12px;">`;
    for(let v = i; v<=31; v+=5){
      res+=`${v}, `
    }
    res = res.substring(0, res.length-2)+`</td>`;
    for(let r = 0; r<stats.length; r++){
      res+=`<td style="font-size: 12px;">${IVcharacteristics[stats[r]][i]}</td>`;
    }
    res+=`</tr>`;
  }


  res+=`</table>`
  return res;
}
const getNatureTable = ()=>{
  let res = ``;
  for(let i = 0; i<natures.length; i++){
    res+=`<tr><td>${natures[i].name}</td><td>${natures[i].boosts}</td><td>${natures[i].hinders}</td></tr>`
  }
  return res;
}

$("#team").click(() => {
  $("#display").empty();
  $("#display").append(`
    <div class="vertical-menu">
      <a href="#rolesandtheirfunctions">Roles and their functions</a>
      <a class="subcategory" href="#sweepers">Sweepers</a>
      <a class="subcategory" href="#situationalsweepers">Situational Sweepers</a>
      <a class="subcategory" href="#setupsweepers">Set up Sweepers</a>
      <a class="subcategory" href="#pivots">Pivots</a>
      <a class="subcategory" href="#leads">Leads</a>
      <a class="subcategory" href="#tanks">Tanks</a>
      <a class="subcategory" href="#wallbreakers">Wallbreakers</a>
      <a class="subcategory" href="#stallbreakers">Stallbreakers</a>
      <a class="subcategory" href="#revengekillers">Revenge Killers</a>
      <a class="subcategory" href="#utility">Utility</a>
      <a class="subcategory" href="#clerics">Clerics</a>
      <a class="subcategory" href="#walls">Walls</a>
      <a class="subcategory" href="#sponges">Status Sponges</a>
      <a class="subcategory" href="#niche">Niche</a>
      <a href="#setbuilding">Set Building</a>
      <a href="#teambuilding">Team Building</a>
      <a class="subcategory" href="#offense">Offense</a>
      <a class="subcategory" href="#hoffense">Hyper Offense</a>
      <a class="subcategory" href="#boffense">Bulky Offense</a>
      <a class="subcategory" href="#balance">Balance</a>
      <a class="subcategory" href="#stall">Stall</a>
      <a class="subsubcategory" href="#fundamentals">Fundamentals of Stall</a>
      <a class="subsubcategory" href="#typesofstall">Types of Stall</a>
      <a class="subsubcategory" href="#hazards">Hazards</a>
      <a href="#classes">Courses</a>
    </div>
    <div>
      <h1 class="header">Team Building Guide for Pokémon:</h1>
      <h2 class="header">Written by: Dru, w2, Dave, Hotdog, Lowres, and Red</h2>
      <p>Hello everyone, welcome to the updated version of the Training Centre. For several weeks, we have constructed this doc to teach everyone the fundamentals of team building and custom sets. The main point of this is so that you know how to find the best synergy of Pokémon to fit on a team of 6. However, we still need to give a lot of  thanks to Free for showing us the guidelines by making the old Training Centre.</p>
    </div>
    <div id="rolesandtheirfunctions">
      <h1 class="header">Roles & Their Function:</h1>
      <div id="sweepers">
        <h3><u>Sweepers:</u></h3>
        <p>They are your typical offensive Pokémon that can OHKO weakened opposing Pokémon with or without Set up. Abilities are an excellent asset. Moxie is one of the best abilities for a sweeper; it allows them to raise their attack for every KO. Most sweepers benefit from having a Stat boosting move or item such as Swords Dance or choice band to aid them. Sweepers are definitely recommended for lower skilled players. They’re very simplistic in nature, so it’s not hard to utilize them well. However, unless you’re running Hyper Offense, you should never have more than two sweepers on a team. They may be easy to use, but that also means they’re easier to work around. It’s highly recommended to have a Pokemon that can support a sweeper. A Wish passing Cleric like Sylveon, or a U-turn/Volt Switch Pokémon like Scizor or Rotom are extremely helpful.</p>
      </div>
      <div id="situationalsweepers">
        <h3><u>Situational Sweepers:</u></h3>
        <p>Sweepers can be split into two groups. The first type of sweepers are: Situation Sweepers. They are Pokémon that need particular type of support (the most common being Stealth Rock or Weather) to sweep through entire teams. Some Pokémon that fit this description are Sand Rush Excadrill, Garchomp, Salamence, Mega Swampert, and Greninja. Situational Sweepers are definitely the riskier of the two. They require a lot more attention to proper openings and are pretty vulnerable when their support disappears. Situational Sweepers are definitely risky, but they give several teams enough offensive power to justify them.</p>
      </div>
      <div id="setupsweepers">
        <h3><u>Set up Sweepers:</u></h3>
        <p>The other type of sweepers are Set-Up Sweepers. They are Pokemon that use offensive stat boosting moves to clear out your opponent’s remaining team. The most common moves they’ll utilize are Calm Mind, Swords Dance, and Dragon Dance. A Set-Up Sweeper given the right opportunity can OHKO or 2HKO the rest of your opponent’s team. They’re not too dangerous on their own though. They require proper teammates that can help them reach key damage points through chip damage on their counters. An offensive team should be focused around 1 or 2 set up sweepers; they are often your team’s win condition. They can win through sheer speed and damage, and some have plenty of bulk too. An excellent Set-Up Sweepers includes: Mega Scizor, Cloyster, Snorlax, and Kommo-o</p>
      </div>
      <div id="pivots">
        <h3><u>Pivots:</u></h3>
        <p>Fast or slow pivots have the universal role of dealing chip damage, switching out in a way that lets you see the Pokemon you’ll face before you bring out your own, and sending in a Pokemon that pressures the opposing one. Offensive pivots are the easiest way to bring momentum to your side. Offensive pivots utilize their immunities or resistances to switch into several attacks. After switching in, they can force a switch, deal heavy damage, or support in some other way. Pivots with U-Turn or Volt Switch are one of the best partners for Set-Up Sweepers due to their frailty. Defensive pivots take away momentum from your opponent by being hard to break through and thus taking most hits the opposing Pokémon throws at you.</p>
      </div>
      <div id="leads">
        <h3><u>Leads:</u></h3>
        <p>Lead Pokémon can be put into 2 groups, but both are pretty much a necessity for most Hyper Offense teams. Pokémon that can easily set up hazards at the first turn of a battle to allow your Pokémon to break through opposing teams easier are normally called “Suicide Leads”. They normally serve no other purpose then to get up hazards and deal chip damage to your opponent. Popular picks that fit this role include Landorus-Therian, Excadrill, and Ribombee. The other type of lead is a “Screen Setter”. They are extremely helpful to sweepers that heavily rely on set-up. The most well-known are Ninetales-Alola and Tapu Koko.</p>
      </div>
      <div id="tanks">
        <h3><u>Tanks:</u></h3>
        <p>A tank comes down to a Pokémon that are able to say “tank” multiple attacks on the physical or special side and can hit back hard, it does not have to do this throughout the whole match though. They can do this because of their great defensive stats backed up by a high offensive stat. It is worth mentioning the item Assault Vest, can turn some pokemon into tanks. A good example of a tank is Slowbro-Mega, while an Assault Vest tank is Tapu Bulu and Goodra.</p>
      </div>
      <div id="wallbreakers">
        <h3><u>Wallbreakers:</u></h3>
        <p>Wallbreakers, does exactly what the name entails, break walls. They need to have enough power to always pressure the opponent. A high offensive stat is great, but outside megas, it won’t get the necessary results. They need power enhancing items and/or the abilities that cater to the role. Wallbreakers often have offensive stats around 130-150. A Pokemon with launching STAB attacks with high stats and ideal item will destroy plenty of unprepared walls. A nice selection of Wallbreakers include: Chandelure, Alakazam, Hoopa-Unbound, and Landorus.</p>
      </div>
      <div id="stallbreakers">
        <h3><u>Stallbreakers:</u></h3>
        <p>Stallbreakers do what their name says: soften up stall, if not 6-0. Stallbreakers include, but are not limited to Wallbreakers. One of the most fundamental ones are Pokémon who use utility moves such as Taunt and Encore. However, the Pokemon can also use set-up moves themselves to further ruin stall tactics. Pokémon like Hoopa-Unbound, Mawile-Mega and Tapu Fini fit the role beautifully.</p>
      </div>
      <div id="revengekillers">
        <h3><u>Revenge Killers:</u></h3>
        <p>Revenge Killers are an odd beast since they require a partner. Revenge killers are very frail Pokemon that need a slow and bulky pivot or sacrifice play to bring them in safely. The Pokemon will then proceed to knock out the Pokemon that Ko-ed the Pokemon you sacrificed or punish what they switch in. Revenge killers need either a high natural speed stat (or way to increase their speed like a choice scarf) to play around their poor defenses. They also need good offensive STABS and coverage to handle as many threats as possible. The most common Pokemon revenge killers face are sweepers. Sweepers always have ways to increase their speed or naturally high speed themselves, so revenge killers without a choice scarf should carry priority.</p>
      </div>
      <div id="utility">
        <h3><u>Utility</u></h3>
        <p>Utility is probably the most general role for a team. They are Pokemon that have the ability to do most of the other roles mentioned before, but they focus on one or two of the ones your team needs. The most common roles they fulfil are setting up hazards, helping the team recover hp, immunity to certain status and ability to heal it, inflicting status on your opponent, or summoning weather. Utility requires balanced stats, a diverse movepool, and sometimes an ability or typing that tailors to one of the more obscure roles. The strength of a utility Pokemon is its unpredictability due to how adaptable and diverse it can be. A great example is Jirachi. With the exception of weather summoning, Jirachi’s typing, stats, and movepool let it fulfil every single role. It obviously can’t do them all at once, but the unpredictability is a very powerful asset. Weather summoners definitely seem like the most predictable utility, but they still serve a vital role to the team. They also have exceptions. Tyranitar is a Pokemon that primarily sets up sand but can still be an effective hazard setter, sweeper, or tank.</p>
      </div>
      <div id="clerics">
        <h3><u>Clerics</u></h3>
        <p>Every team needs some support, but a single support move doesn’t make you a cleric. The role itself is simple. They focus on moves that can help both themself and the rest of the team. The most vital moves are: Heal Bell, Aromatherapy, Wish, and Defog. However, it is essential for a cleric to ALWAYS have at least one attacking move. It can’t be stressed enough how important that is.</p>
      </div>
      <div id="walls">
        <h3><u>Walls:</u></h3>
        <p>Walls are Pokémon that reliably take hits from opposing Pokémon. They have high Physical Defense, Special Defense, or HP stat that allows them to be effective. Contrary to popular belief, Walls can deal damage a fair amount of damage through utility moves which help out the team. A wall always needs a way to heal HP through Leftovers, Black Sludge, and moves like Recover.</p>
      </div>
      <div id="sponges">
        <h3><u>Status Sponges:</u></h3>
        <p>Status Sponges are a subcategory of Walls that take the role even farther. They’re able to reliably switch into moves, but they can also absorb status effects in place of allies. Milotic, Chansey, Blissey, and Roserade can all safely take burns and paralysis for allies and heal it through switching or resting. Some Pokémon can even benefit from status effects like Conkeldurr or Gliscor.</p>
      </div>
      <div id="niche">
        <h3><u>Niche:</u></h3>
        <p>Niches are not really roles, but there was no was other place to put it on this guide. They’re Pokémon with specific sets that do one specific Job. The roles could include: taking multiple hits from a certain move from a specific Pokémon, taking out Pokémon in a very Specific situation, or setting up hazards in a certain situation. Niche Pokémon do one job and one job only.</p>
      </div>
    </div>
    <div id="setbuilding">
      <h1 class="header"><u>Set Building:</u></h1>
      <p>I honestly feel like this is needed. It’s great to use Pokemon you like, but it’s important to learn how to optimize their unique traits. Otherwise, it often ends up becoming 252/252 set, and a set that’s ultimately just an inferior version of another Pokemon. However, any Pokemon can find their niche by optimising their EV spread and moveset.</p>
      <p>The core fundamentals of custom sets can be split into 3 categories: speed creeping, jump points, and primary threats. Speed creeping is putting in a specific amount of EVs to outspeed a certain Pokemon. EVs are a vital resource for any Pokemon, so the main rule with speed creeping is to make sure your Pokemon can cripple the target enough to make it worthwhile (2hko is a good target). The main key to success here is judging your trade offs. The EVs you invest in speed could be put into your bulk or offense for other Pokemon than just the one you’re speed creeping. So carefully choose which Pokemon you need an edge over.</p>
      <p>Jump points are an interesting case (that only occur in stats with a positive nature) where investing a certain amount of EVs increases the stat by 2 instead of 1. For example, investing 12 EVs can raise the stat by 4 instead of 3. It’s very rare to get a jump point that will give you the same results as just pouring your remaining EVs into the Pokemon’s primary stats, but it’s something you should always be checking for. It’s still recommended to just pour your remaining EVs into the stats that fulfill your primary role after speed creeping. For example, a physically defensive Clefable would still use the rest of it’s EVs to maximize its physical bulk. It’s always nice to get the same results for less EVs. However, you should very rarely prioritize this over the main role your Pokemon is designed to fulfill.</p>
      <p>Of course doing both these things will not guarantee your set to work. You need to know the main threats for your Pokémon, and see if you can at least take 1 hit from it and do massive chip damage back. You can build around these threats too of course, but you need to realise there are Pokémon you can get rid of and some you blatantly lose to.</p>
      <p>It can’t be stressed enough that speed is the most important stat in the game. A lack of full investment in speed can often cripple a Pokemon. For example, an adamant nature on mimikyu gives you some extra power, but it’s outsped by Pokemon it normally checks like Kyurem-Black. A jolly nature lets you outspeed and one shot, but an adamant nature lets Kyurem-Black out speed you and one shot with it’s ability. The increase in power is not worth it in this occasion, this rule will also count for other set up sweepers due to more revenge killers outspeeding them now.</p>
      <p>At last, it is smarter for starting up battlers to learn threats and sets through learning from regular smogon sets first, and what the current meta is. In case you don’t know, meta stands for Most Effective Strategy Available. This will allow you to use your favorite Pokémon in such a way that they can counter highly prominent Pokémon, known to be the meta.</p>
    </div>
    <div id="teambuilding">
      <h1 class="header"><u>Team Building Information:</u></h1>
      <p>Team building is one of the most important aspects of Pokémon. While they will not affect the plays you know to make, they will affect the way you play a game. It’s important for you to know what a Pokémon exactly does for your team when building it, if your team does not have the needed synergy for it to work, it will most likely fail to. this guide is meant for you to know how to notice the best Pokémon for a team of each archetype.<br>In Pokémon, currently, there are 4 base archetypes: Hyper Offense, Bulky Offense, Balance, and Stall. These archetypes all have branches, but I will give the basis for all of them here, and something else that tends to be forgotten.</p>
      <div id="offense">
        <h3><u>Offense:</u></h3>
        <p>Offense can be split into two categories: Bulky Offense and Hyper Offense. An offensive play style is rather self-explanatory. It specializes in constantly pressuring your opponent, but the two types of offensive play are quite different.</p>
      </div>
      <div id="hoffense">
        <h3><u>Hyper Offense:</u></h3>
        <p>Hyper Offense is the frail approach. An effective hyper offense team have little to no defensive Pokemon. It’s easy to think six wall breakers make an ideal hyper offensive team, but a team like that will find little success. An effective team will mix in a suicide lead, set up sweepers, stall breakers and at least one cleaner. A stallbreaker in particular is highly recommended. Stall naturally has plenty of Pokémon that are specifically designed to take hits, as they can easily sponge attacks and cripple your attackers. This scenario actually represents the biggest strength and weakness of hyper offense: it’s based on team matchups. It’s common knowledge no team is perfect, but hyper offense is one of the riskiest. It’s the team structure that most often encounters that one Pokémon your team can’t break, or a team that puts enough pressure to make it hard to find an opportunity to take back the game. Hyper offense is almost entirely offense based. It’s important to always find an opportunity to allow you to have as much breathing room as possible. A quick defensive play like using a Pokemon’s immunity is a good way to create new opportunities.</p>
        <a href="https://pokepast.es/4c111585b0616cff">Sample Hyper Offensive team</a>
      </div>
      <div id="boffense">
        <h3><u>Bulky Offense:</u></h3>
        <p>Bulky Offense on the other hand is often considered the midway between Hyper Offense and Balanced, Bulky Offense focuses on maintaining offensive pressure, while still having switch-ins to prominent Pokemon and attacks. It’s a perfect blend  making it the least match up based playstyle, having a proper way to handle every Pokemon and playstyle through proper team knowledge and prediction. In-order to keep momentum this playstyle will mainly make use out of pivots, which serves as a way to get your main offensive Pokémon in safely. For Bulky Offense you’ll still want to avoid using passive Pokémon, these can cause a lot of your momentum to be lost if you don’t play them correctly, keep in mind that these are very easily readable plays too so it’s very easy for you to lose momentum by making these plays. Also don’t run Chansey on this.</p>
        <a href="https://pokepast.es/d540bd10cd79a313">Sample Bulky Offense Team</a>
      </div>
      <div id="balance">
        <h3><u>Balance:</u></h3>
        <p>Balance as an archetype, contrary to popular belief, will mainly make use out of passive Pokémon. While you’re likely expecting me to be talking about stall now, I am not, these passive pokemon exist on your team so that your offensive Pokémon can find the best opportunity to come into the field and set up or get a strong hit off. You’re never focusing on the offensive pressure you put onto an opponent when you use balance, you will mainly make use out of the bulky Pokémon at your disposal to wait out your opponent and find holes in their gameplay for you to predict them. Balance will mainly make use out of utility to soften up the opponent for your offensive pokemon, this means their checks will not be at full health and will have a big chance of them being in range of your attacks.</p>
        <a href="https://pokepast.es/d6a0431b54e250ab">Sample Balance team</a>
      </div>
      <div id="stall">
        <h3><u>Stall:</u></h3>
        <p>Ah, Stall, what a wonderful way to build a team, said no one ever.</p>
        <p>When building stall, please keep the golden rule in mind, which goes as follows; If you can win the game, DO it. There's nothing worse then deliberately stalling your opponent to death when you can finish it off by attacking.</p>
        <p>Stall, as the name implies relies on stalling your opponent and preventing them from getting the upper hand, Stall teams often have 3+ walls on their team alongside a cleric, and or a supportive Pokemon and one stallbreaker and or sweeper. That is the basic structure of stall, though slight variations do exist, with varying effectiveness, as someone who has played all sorts of stall type teams. The most common enemy to stall are brute force or stallbreakers if you want the official terminology, counter stall, and status immune sweepers like Mega Charizard X, and Mega Scizor. And we'll be using these as an example, so get used to seeing them, a lot.</p>
        <div id="fundamentals">
          <h4><u>The fundamentals of Stall</u></h4>
          <ol>
            <li>Proper game knowledge.<br>This includes such things as knowing match ups on top of your head. You can't play stall knowing nothing about how type match ups work, or Pokemon move pools that might pose a threat you your Pokemon<br><br>Ex: Clefable may be weak to Scizor, yes, but Clefable also gets flamethrower, and even fire blast. So while sending out your Scizor against a Clefable might SEEM like the right choice. If they carry the fire move, most of the time your Scizor is done for.</li>
            <li>Damage variations, seen from your opponent's perspective.<br>Standard part of the game, a move won't always do the same amount of damage, and you should know what the MAXIMUM damage roll is on your Pokemon at all times, but knowing all three of them is recommended, but if you're just starting out, try to remember the maximum rolls first.</li>
            <li>Knowing when to heal/Setup hazards.<br>Timing is EVERYTHING in stall, mess up once, and your Pokemon is going to die the next turn, the only real way to practice this is by doing it actively and learning from your mistakes, so keep a sheet of paper handy and write things down.</li>
            <li>Predicting your opponent's next move, and capitalizing on it without second guesses.<br>Timing is KEY as I said, if you predict your opponent to have a super effective move on your Pokemon 9/10 they will go for it, so you will have to capitalize on this.</li>
            <li>Knowing your Pokemon's own sets of strengths and weaknesses.<br>Each Pokemon, besides types, has things they are good at, and things they're inherently bad at from a game's standpoint. I'm sorry, but a defensive Pokemon with base 50 in defenses isn't going to solo games without proper support from the entire team</li>
            <li>Stall is a TEAM effort.<br>You have six Pokemon to use, Use ALL of them, don't rely on a single one of your walls to tear through a team, while possible, it shouldn't be the point of a stall team, this ties back into knowing your Pokemon's roles and match ups. To not even mention critical hits and or the wall just being shut down, Stall's number 1 rule is to be prepared for bad luck to strike you. So bring back ups.</li>
          </ol>
        </div>
        <div id="typesofstall">
          <p>There are 3 types of "official" stall archetypes, at least in my opinion.</p>
          <ol>
            <li>Full stall<br>Simple explanation, do not use this. But if you insist.<br><br>Full stall consists of 6 walls and hazards to chip their way to victory, the problem with this type of stall that it is A: weak to every other stall type team that exists. B: Taunt C:Brute Force<br>Ironically, Stall is VERY weak to being set up on, and without an emergency Pokemon like, Mimikyu, Tapu Lele, or just something that hits very hard and fast, your team will be run down in a couple of turns by certain threats that are immune to status.<br>Which you will always face, Yes you can burn a Scizor, but that doesn't matter if it gets to +6. Now I hear you think, but I have haze Toxapex!!!1!!!11 There's no way he can win that match up! And that's where most rookie stall players go wrong, just because you have ONE answer, doesn't mean it's a sure fire way to beat the weakness of full stall. To not even mention the easy access of Defog.<br><br>Taunt is self explanatory, you can't use status moves, meaning 6/6 Pokemon only have one very weak, or utility based attacking move, which won't save your sorry ass from being set up on by the likes of mega Charizard X. Or just get outright destroyed by a wall breaker.<br><br>So while full stall teams have a chance to succeed, any player with more than 2 brain cells can figure out a way to break through a full stall team without effort. Now I mentioned wall breakers earlier, that's your Achilles heel with EVERY stall team, can you imagine the damage a stall breaker can do to a FULL team of walls? So yeah while full stall is possible, it isn't sufficient enough to be a viable strategy in today's metagame.</li>
            <li>Wish Pass Stall.<br>Wish Pass Stall, or W.P.S is my personal favorite type of stall, but it is also the most simplistic style of stall teams, but lead to a lot of room for creativity, which I personally enjoy myself.
            W.P.S as the name implies, relies on the move Wish to keep your team in top condition at all times, which is why picking the right Cleric Pokemon is essential to the team. You want a Pokemon that can run 2 jobs without becoming too limited of a choice it becomes a hurdle on the team itself, which in where enlays the challenge of a good W.P.S team, as it's delicate balance is very easily broken.<br><br>A good example of a Wish Cleric is of course the tried and true; Eeveelutions, like Sylveon, Umbreon, and Vaporeon, each filling a specific niche as a Wish Pokemon while also performing their function to keep certain threats at bay, which I will explain here.<br><br>While Sylveon and Umbreon are quite similar in function, the way they are played varies on the team they are a part of, Umbreon is an excellent stall counter, as it's Ability Synchronise shuts down pokemon like Mega Sableye, by being able to toxic itself via Mega Sableye magic bounce, activating its ability to apply Toxic poison to the Sableye as well, then Umbreon itself can heal away it's status by the likes of heal bell.<br><br>-Sylveon, while being VERY potent at its job, has kinda fallen from grace now that Unaware clefable has risen to the scene, but that doesn't discredit it in the slightest. Sylveon's main gimmick lays in its Hidden Ability, HA for short, of Pixilate, which transforms all normal type moves into Fairy type, and gives them a 1.3x boost in power, While that SOUNDS great, with the current amount of steel, poison and fire types running around Sylveons movepool being an eeveelution is to limited to effectively do its job of spamming Hyper Voice all that well these days, but it is still an excellent destroyer of fairy type weak pokemon, and most dragon types, so while it has its uses, it's a niche<br><br>-Vaporeon, the nichest of niches of the Bulky Eeveelutions. Has two great gimmicks depending on the team you throw it into, if you're going for a rain team, you can run the slightly more offensive version with it's HA, Hydration in combination with Rest to give it a full heal and wake up at the end of the turn. But if you are running it on a not rain reliant or stall team, it's ability of water absorb is amazing to stop some of the dangerous water types dead in their tracks, water absorb, as the name suggest, absorbs all water moves and heals vaporeon, making it less reliant to run a healing move of its own to stick around, provided you have good predictions, the problem with vaporeon is the same as all Eeveelutions, being limited movepool and it hits Vaporeon the hardest. As it's usual combination of moves will consist of Scald, Wish/Rest depending on the team, Heal bell, and then Toxic or Wish depending on the previous choice. And that will be most likely it.<br><br>I would call the Eeveelutions, beginner friendly when it comes to Wish providing Pokemon. They're not bad, but lack certain key components to make W.P.S teams. Wish passers, should inherently be bulky with HP being their focus, as wish heals by half of the Wish user’s HP, not the pokemon’s HP receiving wish. I know Pikachu gets Wish, but that doesn't make it a good user of the move, by any stretch, so stop trying to make Pikachu into something good.<br><br>Moving onto the next component of W.P.S...<br><br>The pass part, used to stand for Baton Pass, but with Baton pass being banned. I like to replace it for the word Passive. As in a passive style of play. W.P.S relies on buying your team enough time to whittle down your opponent with hazards or status moves, like any old stall team, but what Wish adds to the table is that even when your walls are weakened, and especially those without reliable recovery, with proper timing and damage numbers in mind of course, as both your Wish Pokemon, and the Pokemon you want to receive the wish both have to live the hit in order to get set up the wish and then receive it the next turn, this is what I love about W.P.S it rewards good team coordination and synergy, but also general game knowledge and damage calculations, another good thing wish pass provides you with is the ability to turn a wall back into a proper wall in case you got unlucky with damage numbers or a stray critical hit.<br><br>And the last part of W.P.S...<br><br>Stall on W.P.S works a bit different then with most teams, while you still have the S&H, Status and Hazards, they're used in a far more aggressive way of play, as with Wishes constantly raining down, you can afford to make a bit more of a mistake or get a little more greedy with your hazards, Status moves on W.P.S are the thing that keeps your team alive for the most part, as W.P.S tend to have less, strong walls as they require more stallbreakers in order to drive back the other styles of Stall. So Status is a bit of a must have if you want to use W.P.S effectively<br><br>The weaknesses of W.P.S are simple, Taunt, being taunted means you can't wish, not being able to wish gives your Pokemon no sudden HP recovery, which if you're using walls without reliable recovery of their own, is a death sentence.<br><br>Set up sweepers: Chances are, that if you're using a W.P.S team, you rely more on your hazards and status afflictions to deal the significant portion of your damage, If either one of these factors is out, Pokémon like Charizard X, Mega Scizor, Tyranitar, can plow through your team like nobody's business, No, burning T-tar and Scizor won't help if they're able to get to easy +6, Remember, at +2, they are already back to their normal attack stat. So at +6 they are effectively +4 and I don't know many walls that can tank a +4 of anything they don't resist times four.<br><br>All in All, while W.P.S is easy to learn it is really tough to master, Given the requirements you have to keep track off, if you're a beginning stall player, STEER clear until you grasp the fundamentals of stall mentioned above.</li>
            <li>Big Bulky Battle<br><br>The offensive version of stall, the name of the game for this team is SLOW but hits HARD.<br>While these teams don't rely as much on status to win their battles, more so their brute force and beefy defenses to break down other teams one Pokemon at the time, these teams tend to trade Pokemon for one of theirs, meaning that they'll take out one of their opponents Pokemon, and then let their own Pokemon faint in order to get a favorable matchup again. Granted, this isn't always the case.<br><br>B.B.B is a stall team meant to beat other forms of stall teams primarily, it's the classic case of, if you can't beat em, join em.<br><br>B.B.B Relies on mostly 2 hazards wise, Being Stealth Rock and Sticky Web. Stealth rock, best Hazard each team should have it.<br>Sticky web, it's simple you slow your opponent so you can destroy the fast sweepers of your opponents team, by lowering their speed. Kill them before they kill you.<br>B.B.B has usually 2 walls, one of which sets hazards, and the other being a bulky cleric to support the team with heal bell and or wish once again, but unlike W.P.S this team has a lot more offensive Pokemon to deal a lot of damage to the opponent's team while being kept healthy themselves.</li>
          </ol>
          <a href="https://pokepast.es/fec1c154163c7865">Retro Stall Sample Team</a>
        </div>
        <div id="hazards">
          <h3><u>Hazards and hazard removal:</u></h3>
          <p>I honestly feel like this has been needed for a strong while, and I can’t stress it enough. Hazard and hazard removal are practically a must have on a team. The main options for this would be stealth rockers and defoggers. I don’t think people realize it enough, and just end up complaining about hazard stacking.</p>
          <p>Hazards are one of the best methods for putting pressure on your opponent. Both spikes and stealth rock deal chip damage on switch in, which will allow you to get your opponent in KO range of your attacks. The amount of damage that hazards can do to an opposing team tend to be underestimated, and is mainly done by forcing switches; Making predictions into Pokémon that will offensively threaten the opponent to force them to swap their counter out, or switch into a wall that disables the predicted switch from gaining momentum. This chip damage is essential for allowing your Pokemon to break through walls, tanks, and checks to your Pokemon. There’s also 2 other hazards, these are toxic spikes and sticky webs. While toxic spikes does a lot of similar things as spikes, it does this through status conditions instead of chip damage, you will not always want to stack your toxic spikes, this is because regular poison does a 12% damage and full poison keeps doing more but starts at 6%. Sticky Web, however, should only be used on hyper offense. Instead of doing chip damage, webs decrease the speed of Pokémon. This will mainly give you an advantage against faster teams, and can allow you to use slightly slower but harder hitting Pokemon than usual. There however, two important things to keep in mind when using sticky webs. You still need to use positive speed natures; Your webs will not always be up nor will most Pokémon outspeed offensive threats, the boost in power is, again not worth it. And finally, sticky web can activate 2 niche abilities; Defiant, and Competitive. Be weary of Pokemon such as Bisharp, and Milotic, as your sticky webs can give Bisharp a free Swords Dance, just by entering the field, and Milotic a free Nasty Plot.</p>
          <p>Stealth Rock is undoubtedly the best move in the game. A player is never in a situation where it won’t be helpful. Stealth Rock deals consistent chip damage to bring a Pokemon in range of a 2 or one hit knock-out. When it’s dealing chip damage to super effective it removes a quarter or even half of the opposing Pokemon’s hp for just being brought in, this helps in hurting its biggest counter, being defog, due to most users of this move being weak to stealth rocks. Most are forced to lose a quarter of their hp just to remove the hazards for the rest of their team. Some Hazards can even reveal key information about your opponent’s pokemon. Stealth Rock for instance, only does damage to a Clefable with Magic Guard, so you can remove that doubt that Clefable has Unaware second it comes out. There isn’t a single archetype that doesn’t benefit from them. Unless your opponent has the rare ability Magic Bounce, Stealth Rocks can be set up without any penalty. It regularly gives you the ability to knock out a Pokemon that could’ve devastated you, and it constantly puts pressure on teams. It deserves to be called the best move in the game, and it deserves to have a spot on any team you make. It isn’t hard to put it on a team either, this is because a majority of Pokémon gets this move.</p>
          <p>Defog and Rapid Spin are the main ways of hazard removal, these are mainly needed due to the prevalence of Stealth Rocks, but they also remove other hazards. You should avoid defog on a hazard stacking based team, this is because defog rids your own hazards too, on a team based around dual screens it can be run though, this is because it doesn’t get rid of your screens, but does take away opposing screens. Rapid Spins only has one edge over defog; it doesn’t get rid of your own hazards, compared to defog it isn’t as good though. Rapid spin does not get rid of Reflect, Lightscreen, or Aurora Veil. Rapid Spin makes contact with an opponent meaning your rapid spin user can be hurt by Rocky Helmet, and Iron Barbs, and most importantly, Ghost types are immune to Rapid Spin. Most teams dedicated to using hazards will almost always incorporate a ghost type into their team, and for these reasons, Defog is usually the better hazard removal option.</p>
        </div>
      </div>
    </div>
    <div id="classes">
      <h1 class="header"><u>Learning Courses:</u></h1>
      <p>This is a brief summary of the “courses” that will be held. These will be held in chat, and eventually test your skill in Pokémon, but are also meant to teach you the basis of competitive.
      <h2><u>Beginner:</u></h2>
      <p>The beginner course is the gateway course for newcomers to competitive play. In this course we discuss with you and teach you the basics and fundamentals of competitive play such as IV breeding, EV training, and Egg move breeding.</p>
      <h2><u>Advanced:</u></h2>
      <p>In the advanced course we’ll be taking on the more difficult side to competitive such as team building, how to use and understand the Pokemon Damage Calculator, team preview, cores, predictions, and the various archetypes of teams such as Hyper offense, Balance, Stall etc.</p>
      <h2><u>Expert:</u></h2>
      <p>Now the final course; This is where everything comes together. We take everything you’ve learned from the beginner course and advanced course, and sprinkle on a few extra things like game momentum, team pressure, role compression, gimmick sets, and specific sets meant to deal with true problems for your team and the overall knowledge of the meta to truly make your team and the knowledge of this game your own, because once you understand the meta you can play against it with whatever you want.</p>
    </div>
  `)
})

$("#classroom").click(() => {
  $("#display").empty();
  $("#display").append(`<h1 class="header">SL Classroom</h1>`)
})
