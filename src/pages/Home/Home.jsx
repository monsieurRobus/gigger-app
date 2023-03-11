import React, { useEffect, useState } from 'react'


import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get , child , onValue} from "firebase/database";
import {app} from '../../utils/firebase'
import List from '../../components/organism/lists/List'
import Header from '../../components/organism/header/Header'
import Footer from '../../components/organism/footer/Footer'
import { useParams } from 'react-router-dom';


const Home = (props) => {

  console.log(props)

    const {id} =useParams() || {}
    console.log(id)
  
    const [ songList, setSongList] = useState([])
    const db = getDatabase(app);
    const songsRef = ref(db, '/mirichaquet/' )

    let songsRefList = []

    useEffect(() => {
      
        onValue(songsRef, (snapshot) => {
            const songs = snapshot.val();
            setSongList(songs || []);
            
        });
    }, []);


  return (
    <main>
        <List app={app} listTitle={'Todas las canciones'} listDate={'-'} editable={false} songList={songList} setSongList={setSongList} db={db} songsRef={songsRef}/>        
    </main>
  )
}

export default Home