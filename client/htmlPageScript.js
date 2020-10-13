//handles the response
const handleResponse = (xhr, parseResponse) => {
    const content = document.querySelector('#content');
    const message = document.querySelector("#error");
    switch(xhr.status){
        case 200:
            console.log("Success!");
            break;
        case 201:
            console.log("Created!");
        break;
        case 204:
            console.log("updated!");
            break;
        case 400:
            console.log("bad request")
            break;
        case 404:
            console.log("Resource not found")
            break;
        default:
            console.log("Error code not implemented by client")
            break;
    }
    if(parseResponse){
        
        const obj = JSON.parse(xhr.response);
        const userForm = document.querySelector('#getParties');
        const url = userForm.querySelector('#dataCenter').value
        console.log(obj);
        if(url == "/aether"){
            content.innerHTML = "";
        }else if(url == "/crystal"){
            content.innerHTML = "";
        }else{
            content.innerHTML = "";
        }
        for (const key of Object.keys(obj)) {
            console.log(key, obj[key]);
            let stringToAdd = `<div id="partyDiv"><h2>${obj[key].content}</h2><p>Username: ${key}</p>`;
            stringToAdd += `<p>Minimum Item Level: ${obj[key].minItemLevel}</p><p>Date: ${obj[key].date}</p><p>Time: ${obj[key].time}</p></div>`;
            content.innerHTML += stringToAdd;
        }
        //content.innerHTML = `<p>${xhr.response}</p>`;
    }else{
        //content.innerHTML = `<p>metadata received</p>`;
    }
  };
  //get for the different datacenter and content
  const requestUpdate = (e, userForm) => {
    const url = userForm.querySelector('#dataCenter').value;
    const parameter = userForm.querySelector('#highEndContent').value;
    const method = 'get';
    const xhr = new XMLHttpRequest();
    if(parameter != "any"){
        xhr.open(method,url+"?"+`content=${parameter}`,true)
    }
    else{
        xhr.open(method,url);
    }
    xhr.setRequestHeader("Accept","application/json");
    if(method === 'get'){
        xhr.onload = () => handleResponse(xhr,true);
    }else{
        xhr.onload = () => handleResponse(xhr,false);
    }
    xhr.send();
    e.preventDefault();
    return false;
  };
  //sends the party info to the server
  const sendPost = (e, nameForm) => {
    e.preventDefault();
    const nameAction = nameForm.getAttribute("action");
    const nameMethod = nameForm.getAttribute("method");
    const nameField = nameForm.querySelector("#nameField");
    const dataCenterField = nameForm.querySelector("#dataCenter");
    const highEndContentField = nameForm.querySelector("#highEndContent");
    const minItemLevelField = nameForm.querySelector("#itemLevelField");
    const DateField = nameForm.querySelector("#raidDate");
    const timeField = nameForm.querySelector("#raidTime");
    const xhr = new XMLHttpRequest();
    xhr.open(nameMethod,nameAction);
    xhr.setRequestHeader('Accept','application/json');
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.onload = () => handleResponse(xhr,false);
    const formData = `name=${nameField.value}&server=${dataCenterField.value}&content=${highEndContentField.value}
                        &minItemLevel=${minItemLevelField.value}&date=${DateField.value}&time=${timeField.value}`;
    xhr.send(formData);
    return false;
  };

  //called when the page loads
  const init = () => {
    //GET and HEAD button requests
    const getPartyForm = document.querySelector('#getParties');
    const getUsers = (e) => requestUpdate(e, getPartyForm);
    getPartyForm.addEventListener('submit', getUsers);
    //POST button request
    const partyForm = document.querySelector('#postParty');
    const addParty = (e) => sendPost(e, partyForm);
    partyForm.addEventListener('submit', addParty);
  };

  window.onload = init;