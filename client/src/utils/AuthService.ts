import * as decode from "jwt-decode";
import { browserHistory } from "react-router";
import * as auth0 from "auth0-js";
const ID_TOKEN_KEY = "id_token";
const ACCESS_TOKEN_KEY = "access_token";

const CLIENT_ID = "c0H06zefpvyMKltCMw30e3Bt0q3AKwT8";
const CLIENT_DOMAIN = "pro-habits-test111.eu.auth0.com"; // "AUTH0_DOMAIN";
const REDIRECT = "http://localhost:3000/callback";
const SCOPE = "YOUR_SCOPE";
const AUDIENCE = "AUDIENCE_ATTRIBUTE";

var auth = new auth0.WebAuth({
    clientID: CLIENT_ID,
    domain: CLIENT_DOMAIN
});

export function login() {
    auth.authorize({
        responseType: "token id_token",
        redirectUri: REDIRECT,
        audience: AUDIENCE,
        scope: SCOPE
    });
};

export function logout() {
    clearIdToken();
    clearAccessToken();
    browserHistory.push("/");
};

type replaceFunc = (param: { pathname: string }) => void;

export function requireAuth(nextState: {}, replace: replaceFunc) {
    if (!isLoggedIn()) {
        replace({ pathname: "/" });
    }
};

export function getIdToken() {
    return localStorage.getItem(ID_TOKEN_KEY);
};

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

function clearIdToken() {
    localStorage.removeItem(ID_TOKEN_KEY);
};

function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
};

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name: string) {
    let match = RegExp("[#&]" + name + "=([^&]*)").exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
};

// Get and store access_token in local storage
export function setAccessToken() {
    let accessToken: string = getParameterByName("access_token") || "";
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

// Get and store id_token in local storage
export function setIdToken() {
    let idToken: string = getParameterByName("id_token") || "";
    localStorage.setItem(ID_TOKEN_KEY, idToken);
};

export function isLoggedIn() {
    const idToken = getIdToken();
    return !!idToken && !isTokenExpired(idToken);
};

function getTokenExpirationDate(encodedToken: string) {
    const token = decode(encodedToken);
    if (!token.exp) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
}

function isTokenExpired(token: string) {
    const expirationDate: Date = getTokenExpirationDate(token) || new Date(0, 0);
    return expirationDate < new Date();
} 