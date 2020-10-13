// Note this object is purely in memory
const url = require('url');
const Aether = {
  "Thorin Battlehammer":{"content":"Eden's Gate: Resurrection(Savage)","minItemLevel":"450","date":"2020-11-12","time":"12:00"},
  "Thorin BattleStorm":{"content":"Eden's Gate: Descent(Savage)","minItemLevel":"450","date":"2020-11-13","time":"12:00"},
  "Thorin Battlehammer2":{"content":"Eden's Gate: Inundation(Savage)","minItemLevel":"450","date":"2020-11-14","time":"12:00"},
  "Thorin BattleStorm2":{"content":"Eden's Gate: Sepulture(Savage)","minItemLevel":"450","date":"2020-11-15","time":"12:00"},
  "Thorin Battlehammer3":{"content":"Eden's Verse: Fulmination(Savage)","minItemLevel":"470","date":"2020-11-16","time":"12:00"},
  "Thorin BattleStorm3":{"content":"Eden's Verse: Furor(Savage)","minItemLevel":"470","date":"2020-11-17","time":"12:00"},
  "Thorin Battlehammer4":{"content":"Eden's Verse: Iconoclasm(Savage)","minItemLevel":"470","date":"2020-11-18","time":"12:00"},
  "Thorin BattleStorm4":{"content":"Eden's Verse: Refulgence(Savage)","minItemLevel":"470","date":"2020-11-19","time":"12:00"},
  "Thorin Battlehammer5":{"content":"The Epic of Alexander (Ultimate)","minItemLevel":"470","date":"2020-11-20","time":"12:00"},
};
const Primal = {
  "Thorin Battlehammer":{"content":"Eden's Gate: Resurrection(Savage)","minItemLevel":"450","date":"2020-11-12","time":"12:00"},
  "Thorin BattleStorm":{"content":"Eden's Gate: Descent(Savage)","minItemLevel":"450","date":"2020-11-13","time":"12:00"},
  "Thorin Battlehammer2":{"content":"Eden's Gate: Inundation(Savage)","minItemLevel":"450","date":"2020-11-14","time":"12:00"},
  "Thorin BattleStorm2":{"content":"Eden's Gate: Sepulture(Savage)","minItemLevel":"450","date":"2020-11-15","time":"12:00"},
  "Thorin Battlehammer3":{"content":"Eden's Verse: Fulmination(Savage)","minItemLevel":"470","date":"2020-11-16","time":"12:00"},
  "Thorin BattleStorm3":{"content":"Eden's Verse: Furor(Savage)","minItemLevel":"470","date":"2020-11-17","time":"12:00"},
  "Thorin Battlehammer4":{"content":"Eden's Verse: Iconoclasm(Savage)","minItemLevel":"470","date":"2020-11-18","time":"12:00"},
  "Thorin BattleStorm4":{"content":"Eden's Verse: Refulgence(Savage)","minItemLevel":"470","date":"2020-11-19","time":"12:00"},
  "Thorin Battlehammer5":{"content":"The Epic of Alexander (Ultimate)","minItemLevel":"470","date":"2020-11-20","time":"12:00"},
};
const Crystal = {
  "Thorin Battlehammer":{"content":"Eden's Gate: Resurrection(Savage)","minItemLevel":"450","date":"2020-11-12","time":"12:00"},
  "Thorin BattleStorm":{"content":"Eden's Gate: Descent(Savage)","minItemLevel":"450","date":"2020-11-13","time":"12:00"},
  "Thorin Battlehammer2":{"content":"Eden's Gate: Inundation(Savage)","minItemLevel":"450","date":"2020-11-14","time":"12:00"},
  "Thorin BattleStorm2":{"content":"Eden's Gate: Sepulture(Savage)","minItemLevel":"450","date":"2020-11-15","time":"12:00"},
  "Thorin Battlehammer3":{"content":"Eden's Verse: Fulmination(Savage)","minItemLevel":"470","date":"2020-11-16","time":"12:00"},
  "Thorin BattleStorm3":{"content":"Eden's Verse: Furor(Savage)","minItemLevel":"470","date":"2020-11-17","time":"12:00"},
  "Thorin Battlehammer4":{"content":"Eden's Verse: Iconoclasm(Savage)","minItemLevel":"470","date":"2020-11-18","time":"12:00"},
  "Thorin BattleStorm4":{"content":"Eden's Verse: Refulgence(Savage)","minItemLevel":"470","date":"2020-11-19","time":"12:00"},
  "Thorin Battlehammer5":{"content":"The Epic of Alexander (Ultimate)","minItemLevel":"470","date":"2020-11-20","time":"12:00"},
};
//responds with a json
const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};
//meta response
const respondJSONMeta = (request, response, status) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  response.writeHead(status, headers);
  response.end();
};
//gets the aether datacenter parties
const getAether = (request, response) => {
  let jsonToAdd = {};
  const parsedUrl = url.parse(request.url);
  if(!parsedUrl.query){
    jsonToAdd = Aether;
  }
  else{
    const stringToFind = contentPicker("/"+parsedUrl.query.substring(8,11));
    for(const key of Object.keys(Aether)){
      if(Aether[key].content == stringToFind){
        jsonToAdd[key] = Aether[key];
      }

    }
  }
  const responseJSON = jsonToAdd;
  return respondJSON(request, response, 200, responseJSON);
};
//gets the primal datacenter parties
const getPrimal = (request, response) => {
  let jsonToAdd = {};
  const parsedUrl = url.parse(request.url);
  if(!parsedUrl.query){
    jsonToAdd = Primal;
  }
  else{
    const stringToFind = contentPicker("/"+parsedUrl.query.substring(8,11));
    for(const key of Object.keys(Primal)){
      if(Aether[key].content == stringToFind){
        jsonToAdd[key] = Primal[key];
      }

    }
  }
  const responseJSON = jsonToAdd;
  return respondJSON(request, response, 200, responseJSON);
};
//gets the crystal datacenter parties
const getCrystal = (request, response) => {
  let jsonToAdd = {};
  const parsedUrl = url.parse(request.url);
  if(!parsedUrl.query){
    jsonToAdd = Crystal;
  }
  else{
    const stringToFind = contentPicker("/"+parsedUrl.query.substring(8,11));
    for(const key of Object.keys(Crystal)){
      if(Aether[key].content == stringToFind){
        jsonToAdd[key] = Crystal[key];
      }
    }
  }
  const responseJSON = jsonToAdd;
  return respondJSON(request, response, 200, responseJSON);
};

const getUsersMeta = (request, response) => respondJSONMeta(request, response, 200);
//adds a party to the correct datacenter
const addParty = (request, response, b) => {
  const responseJSON = {
    message: 'Need to fill out username and minItemLevel',
  };

  if (!b.name || !b.server || !b.content || !b.minItemLevel || !b.date || !b.time) {
    responseJSON.id = 'missingParams';

    return respondJSON(request, response, 400, responseJSON); // 400=bad request
  }
  let responseCode = 201;
  if (b.server === '/aether') {
    responseCode = addToParties(Aether,b,responseCode);
  } else if (b.server === '/primal') {
    responseCode = addToParties(Primal,b,responseCode);
  } else {
    responseCode = addToParties(Crystal,b,responseCode);
  }

  if (responseCode === 201) {
    responseJSON.message = 'Created Successfully';
    return respondJSON(request, response, responseCode, responseJSON);
  }

  return respondJSONMeta(request, response, responseCode);
};
//DRY method for adding to the correct object
const addToParties = (serverPartsie, b, responseCode) => {
  if (serverPartsie[b.name]) {
    responseCode = 204;
  } else {
    serverPartsie[b.name] = {};
  }
  // update or initialize values, as the case may be
  //serverPartsie[b.name].name = b.name;
  
  serverPartsie[b.name].content = contentPicker(b.content.substring(0,4));
  serverPartsie[b.name].minItemLevel = b.minItemLevel;
  serverPartsie[b.name].date = b.date;
  serverPartsie[b.name].time = b.time;
  return responseCode;
};
//used to get the proper string for the content
const contentPicker = (content) =>{
  let stringToReturn;
  switch(content){
    case "/e1s":
      stringToReturn = "Eden's Gate: Resurrection(Savage)";
      break;
    case "/e2s":
      stringToReturn = "Eden's Gate: Descent(Savage)";
      break;
    case "/e3s":
      stringToReturn = "Eden's Gate: Inundation(Savage)";
      break;
    case "/e4s":
      stringToReturn = "Eden's Gate: Sepulture(Savage)";
      break;
    case "/e5s":
      stringToReturn = "Eden's Verse: Fulmination(Savage)";
      break;
    case "/e6s":
      stringToReturn = "Eden's Verse: Furor(Savage)";
      break;
    case "/e7s":
      stringToReturn = "Eden's Verse: Iconoclasm(Savage)";
      break;
    case "/e8s":
      stringToReturn = "Eden's Verse: Refulgence(Savage)";
      break;
    case "/tea":
      stringToReturn = "The Epic of Alexander (Ultimate)";
      break;
    default:
      console.log(content);
      stringToReturn = content;
      break;
  }
  return stringToReturn;
};
//404 method
const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found!',
    id: 'notFound',
  };
  return respondJSON(request, response, 404, responseJSON);
};



const notFoundMeta = (request, response) => respondJSONMeta(request, response, 404);

module.exports = {
  getAether,
  getCrystal,
  getPrimal,
  getUsersMeta,
  notFound,
  notFoundMeta,
  addParty,
};
