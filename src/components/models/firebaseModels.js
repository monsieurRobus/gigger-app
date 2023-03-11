import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get , child , onValue} from "firebase/database";
import { songs } from "./songs";
import {app} from '../../utils/firebase'

const db = getDatabase(app);
const songsRef = ref(db, 'mirichaquet/' )

export let songsRefList = []
onValue(songsRef, (snapshot) => {
    songsRefList = snapshot.val()
    console.log("database Updated")
})