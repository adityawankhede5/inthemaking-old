import axios from "axios";

const apiBaseUrl = "https://api.instagram.com/";
export const initAuthFlow = () => {
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
    // console.log(authorizationUrl);
    const link = document.createElement("a");
    link.href = authorizationUrl;
    link.click();
}

export const getAccessToken = (code) => {
    const data = {
        "client_id": process.env.REACT_APP_INSTAGRAM_APP_ID,
        "client_secret": process.env.REACT_APP_INSTAGRAM_SECRET,
        "grant_type": "authorization_code",
        "redirect_uri": process.env.REACT_APP_INSTAGRAM_REDIRECT_URI,
        code: code
    }
    const formData = new FormData();
    for(let item in data){
        formData.append(item, data[item]);
    }
    const tokenUrl = apiBaseUrl + "oauth/access_token";
    
    return axios.post(tokenUrl, formData).then(resp => {
        const {access_token, user_id} = resp.data;
        localStorage.setItem("instagram", JSON.stringify({access_token, user_id}));
        window.location.replace(window.location.origin + window.location.pathname);
    }).catch(err => {
        console.error(err)
        window.location.replace(window.location.origin + window.location.pathname);
    })
    
}

// export const getLongLivedAccessToken = async (code) => {
//     let {access_token, user_id}  = await getAccessToken(code);
//     if(!access_token) return {success: false};
//     console.log({access_token, user_id})
//     const data = {
//         "grant_type": "ig_exchange_token",
//         "client_secret": process.env.REACT_APP_INSTAGRAM_SECRET,
//         "access_token": access_token
//     }
//     const queryParams = new URLSearchParams();
//     for(let item in data){
//         queryParams.append(item, data[item]);
//     }
//     const tokenUrl = "https://graph.instagram.com/access_token" + queryParams.toString();
//     axios.get(tokenUrl).then(resp => {
//         console.log(resp);
//         let {access_token, token_type, expires_in} = resp.data;
//         console.log({access_token, token_type, expires_in});
//     }).catch(err => {
//         console.error(err)
//     })

// }