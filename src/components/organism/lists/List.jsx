import React, {useState,useEffect} from 'react'
import ListElement from '../../molecules/listElement/ListElement'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './List.css'


const List = (props) => {

    const {listTitle,listDate,editable,songList,setSongList,db,songsRef} =props
    
    
   
    const handleDragStart = (e,index) => {
        // e.preventDefault()
        e.dataTransfer.setData("index",index)
    }

    const handleDrop = (e,index) => {
        e.preventDefault()

        if(e.target.closest('.song').getAttribute('draggable')==="true") {
            const dragIndex = e.dataTransfer.getData("index")

            const newSongList = [...songList]
            const [songDragged] = newSongList.splice(dragIndex,1)

            newSongList.splice(index,0,songDragged)
            setSongList(newSongList)

            const padre = e.target.closest(`.song`)
            padre.classList.add('dropped')
            setTimeout(()=>padre.classList.remove('dropped'),500)
        }
        


    }

    const handleDragOver = (e,index) => {
        e.preventDefault()
    }

    const handleDropOver = (e,index) => {
        e.preventDefault();
    }

    const alreadyPlayed = (e,index) => {
        // const padre = e.target.closest('.song')
        console.log(e.target)
        // padre.classList.toggle('played')

        // padre.getAttribute('draggable') ? padre.setAttribute('draggable',false) : padre.setAttribute('draggable',false) 

    }

    return (
        <main className={"main-view"}>
            <section>
            <Header name={listTitle} date={listDate}/>
                {   
                    songList?.length > 0 && songList.map((song,index)=> 
                        (
                            <ListElement editable={editable} played={alreadyPlayed} key={index} i={index} lyrics={song.lyrics} dragStart={handleDragStart} dragOver={handleDragOver} dragDrop={handleDrop} dropOver={handleDropOver} tag={song.id} id={song.id} name={song.name} band={song.band} duration={song.duration} tags={song.tags} />
                        )
                    )
                }
            </section>
            <Footer />
        </main>
    )
}

export default List