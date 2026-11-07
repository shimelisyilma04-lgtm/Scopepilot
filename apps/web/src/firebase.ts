import{getApp,getApps,initializeApp}from"firebase/app";import{getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged,type User}from"firebase/auth";
const config={apiKey:import.meta.env.VITE_FIREBASE_API_KEY,authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,appId:import.meta.env.VITE_FIREBASE_APP_ID};
export const firebaseConfigured=Object.values(config).every(Boolean);
const app=firebaseConfigured?(getApps().length?getApp():initializeApp(config)):null;
export const auth=app?getAuth(app):null;
export function watchUser(callback:(user:User|null)=>void){return auth?onAuthStateChanged(auth,callback):()=>callback(null);}
export async function signIn(){if(!auth)throw Error("Firebase web configuration is missing.");await signInWithPopup(auth,new GoogleAuthProvider());}
export async function signOutUser(){if(auth)await signOut(auth);}
