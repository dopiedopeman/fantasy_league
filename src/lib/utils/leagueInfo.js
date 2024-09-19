/*   STEP 1   */
export const leagueID = "1087043658865569792"; // your league ID
export const leagueName = "Jeden Verdammten Sonntag"; // your league name
export const dues = 5; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Gegründet im Jahre 2016 als eine 6-Team League mit den Gründungsmitgliedern Chris, Bö, Maggi, Ecki, Hembes und Marcus. Zuerst waren wir auf der Plattform ESPN vertreten. Dort spielten wir bis 2019, als schließlich der Wechsel auf die Plattform Sleeper vollzogen wurde.</p>
  <p>Jedes Jahr wettstreiten die Manager um den begehrten Pokal unserer Liga zu erhalten und natürlich um den Toiletten-Pokal zu verhindern.</p>
  <p>Im Jahr 2017 erweiterte sich die Liga durch die Aufnahme von Mehrfeld und Lars auf eine 8-Team League. Und direkt im Jahr 2018 durch die neuen Mitglieder David Schwarz und Nico auf eine 10-Team League.</p>
  <p>Erst im Jahr 2021 wurden wir dann zu einer 12-Team League. Die neuen Manager waren Marten und Janosch. Leider verließ uns Lars nach dieser Saison und wir nahmen 2022 Manu in unsere Mitte auf. </p>
  <p>2024 verließ uns Janosch und wir gewanne Thomas dazu. </p>
  <p>Jedes Jahr wettstreiten die Manager um den begehrten Pokal unserer Liga zu erhalten und natürlich um den Toiletten-Pokal zu verhindern</p>
  <p>Viele Manager begannen ihre Karriere mit überraschenden Siegen und Platzierungen, viele warten bis heute noch auf den große Coup. Viele Manager haben große Siege geholt, andere wirklich peinliche Punktausbeuten - häufig gezeichnet durch große Verletzungssorgen.</p>
  <p>Aber man merkt jedem von uns an, dieses Spiel ernst zu nehmen und ein Teil seines Privatlebens dafür jeden Tag zu opfern.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
       "managerID": "279654563668029440",
       "name": "DopieDopeMan",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
       "bio": "Seit Anfang an dabei. Eines der Gründungsmitglieder und der Gott-Commissioner.",
       "photo": "/managers/Marcus.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Chris", // Can be anything (usually your rival's name)
    //     link: 1, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/Chris.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
       "favoritePlayer": 4046, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Glück ist alles.",
       "tradingScale": 8, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "197758243047481344",
       "name": "chrizinger",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
       "bio": "Entweder Finale oder Loser",
       "photo": "/managers/Chris.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   //    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
  //       name: "Maggi", // Can be anything (usually your rival's name)
   //      link: 4, // manager array number within this array, or null to link back to all managers page
   //      image: "/managers/Maggi.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
   //    },
       "favoritePlayer": 947, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Stay Water",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "558424400673222656",
       "name": "Ecki",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Darmstadt", // (optional)
       "bio": "Hier gibt es nicht zu erzählen, außer dass ich der erste und niemals wieder einohlbare Prämierensieger der Liga bin. Ansonsten gobt es nur zu sagen: Fuck Dallas und Go Birds",
       "photo": "/managers/Ecki.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "12", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
   //      name: "David S.", // Can be anything (usually your rival's name)
   //      link: 6, // manager array number within this array, or null to link back to all managers page
   //      image: "/managers/David S.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
  //     "favoritePlayer": 4663, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Verdammt schon wieder Best Player available. Und immer mit Bö traden. Kann gar nicht schiefgehen.",
       "tradingScale": 6, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "558653280494415872",
       "name": "bronconick72",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Rostock", // (optional)
       "bio": "Spiele seit 2016. Erst NFL Fantasy und seit 2018 in Jeden Verdammten Sonntag. Bis zur Gründung der Dynasty League auch parallel in NFL aber seitdem nur noch Sleeper.",
       "photo": "/managers/Niko.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Maggi", // Can be anything (usually your rival's name)
  //       link: 4, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/Maggi.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
 //      },
       "favoritePlayer": 7641, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Pokal oder Hospital", // (optional)
       "tradingScale": 5, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "558928395059785728",
       "name": "biggmag",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
       "bio": "Back-to-back Sieger der Liga Jeden verdammten Sonntag im Fantasy Football",
       "photo": "/managers/Maggi.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
 //     "mode": "last", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
 //      "rival": {
//         name: "Chris", // Can be anything (usually your rival's name)
//         link: 1, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/Chris.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
       "favoritePlayer": 4663, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Ich spiele um zu gewinnen", // (optional)
       "tradingScale": 4, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "560805700412952576",
       "name": "boesen",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Wiesbaden", // (optional)
       "bio": "GOAT",
       "photo": "/managers/Boe.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
 //      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Alle", // Can be anything (usually your rival's name)
 //        link: null, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
 //      },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
 //    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Alles geht, nix muss.", // (optional)
       "tradingScale": 4, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "560811833737588736",
       "name": "DaSaz",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
       "bio": "Unterschätzter Underdog, der den Pokal fest im Blick hat. Egal, welchen!",
       "photo": "/managers/David S.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
 //        name: "Marcus", // Can be anything (usually your rival's name)
   //      link: 0, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/Marcus.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
       "favoritePlayer": 4098, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
 //      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Man kann nie genug Defenses haben!", // (optional)
       "tradingScale": 6, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "564455798316253184",
       "name": "TeamBayPackers",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Waldalgesheim", // (optional)
       "bio": "Von Anfang an dabei. Und von Anfang an viel Pech beim draft und noch mehr bei den jeweiligen Gegnern. Oft das Glück gegen andere teams zu spielen, die ausgerechnet dann richtig abliefern... Letztes Jahr Winner der loosers round und damit diesjährigen First pick - hat nix geholfen",
       "photo": "/managers/Hembes.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
   //      name: "Keiner", // Can be anything (usually your rival's name)
  //       link: null, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/question.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
  //     },
       "favoritePlayer": 4307, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //     "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Irgendwann wird's Mal was werden!", // (optional)
       "tradingScale": 3, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "813483676607328256",
       "name": "lions50",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Dalheim", // (optional)
    //   "bio": "Lorem ipsum...",
       "photo": "/managers/Manu.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
  //       name: "Niemand", // Can be anything (usually your rival's name)
  //       link: null, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
 //      },
       "favoritePlayer": 6151, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
       "tradingScale": 2, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "566035862595772416",
       "name": "David247",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Hochheim", // (optional)
       "bio": "Seit 2017 dabei. Direkt ins Finale und da gegen Bö dank Devonta Freeman verkackt. Seitdem ein auf und ab auch dank vieler Verletzungen. Zumindest das Klo konnte bisher vermieden werden. Aber dieses Jahr recht aussichtsreich dabei.",
       "photo": "/managers/David M.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
 //      "rival": {
 //        name: "Bö", // Can be anything (usually your rival's name)
 //        link: 5, // manager array number within this array, or null to link back to all managers page
 //        image: "/managers/Boe.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
 //      },
       "favoritePlayer": 4035, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
 //      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Mit viel Herz und Freude dabei!", // (optional)
       "tradingScale": 8, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "1004009205742788608",
       "name": "SoGradSo",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Augsburg", // (optional)
    //   "bio": "Lorem ipsum...",
       "photo": "/managers/Marten.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
       "tradingScale": 7, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "1087230497639550976",
       "name": "ThommyG9",
       "tookOver": 2024, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Mainz", // (optional)
  //     "bio": "Chiefs Fan, schaue fast jedes NFL Spiel inkl. Night Games, vergesse trotzdem jedes Jahr gute RBs zu draften. Kenne eigentlich nur Ecki und David Schwarz",
       "photo": "/managers/Thomas.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2024, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
  //     "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
  //     "rival": {
   //      name: "Ecki", // Can be anything (usually your rival's name)
  //       link: 2, // manager array number within this array, or null to link back to all managers page
  //       image: "/managers/Ecki.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
 //      },
  //     "favoritePlayer": 1466, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
 //      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
 //      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
 //      "philosophy": "Leute aus dem Playoff-Rennen zu schmeißen ist alles!", // (optional)
//       "tradingScale": 7, // 1 - 10 (optional)
       "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
