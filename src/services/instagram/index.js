export const initAuthFlow = () => {
    const apiBaseUrl = "https://api.instagram.com/";
    const data = {
        "client_id": process.env.REACT_APP_INSTAGRAM_APP_ID,
        "redirect_uri": process.env.REACT_APP_INSTAGRAM_REDIRECT_URI,
        "scope": "user_profile,user_media",
        "response_type": "code"
    }
    
    const queryParams = new URLSearchParams();
    for(let item in data){
        queryParams.append(item, data[item]);
    }
    
    const authorizationUrl = apiBaseUrl + "oauth/authorize?" + queryParams.toString();
    console.log(authorizationUrl);
    // const link = document.createElement("a");
    // link.href = authorizationUrl;
    // link.click();
}