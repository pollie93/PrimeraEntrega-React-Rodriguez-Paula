import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: `AIzaSyCTIaPVQZxhOFfcikO36tt-xlAIyJKMGV4`,
  authDomain: "league-of-legends-react-coder.firebaseapp.com",
  projectId: "league-of-legends-react-coder",
  storageBucket: "league-of-legends-react-coder.appspot.com",
  messagingSenderId: "1015190287545",
  appId: "1:1015190287545:web:bfe7b1ae4b63c71cca5768"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
