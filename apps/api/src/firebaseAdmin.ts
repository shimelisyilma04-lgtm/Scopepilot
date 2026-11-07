import {applicationDefault,cert,getApps,initializeApp} from "firebase-admin/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase-admin/firestore";
function getFirebaseApp(){const existing=getApps()[0];if(existing)return existing;const projectId=process.env.FIREBASE_PROJECT_ID;if(!projectId)throw new Error("FIREBASE_PROJECT_ID is required for Firebase features");const email=process.env.FIREBASE_CLIENT_EMAIL;const privateKey=process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,"\n");if(email&&privateKey)return initializeApp({credential:cert({projectId,clientEmail:email,privateKey}),projectId});return initializeApp({credential:applicationDefault(),projectId});}
export function firebaseServices(){const app=getFirebaseApp();return{auth:getAuth(app),db:getFirestore(app)};}
