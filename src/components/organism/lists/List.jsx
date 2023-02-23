import React, {useState} from 'react'
import { songs } from '../../models/songs'
import ListElement from '../../molecules/listElement/ListElement'

const List = () => {

    const [ songList, setSongList] = useState(songs)
    const handleDragStart = (e,index) => {
        e.dataTransfer.setData("index",index)
    }

    const handleDrop = (e,index) => {
        e.preventDefault()

        const dragIndex = e.dataTransfer.getData("index")

        const newSongList = [...songList]
        const [songDragged] = newSongList.splice(dragIndex,1)

        newSongList.splice(index,0,songDragged)
        setSongList(newSongList)
    }

    const handleDropOver = (e,index) => {
        e.preventDefault();
    }

    return (
        <main>
            <h1>Mirichaquets' Romance</h1>  
            <section>
                {   
                    songList.map((song,index)=> 

                        (
                            <ListElement key={index} i={index} lyrics={song.lyrics} dragStart={handleDragStart} dragDrop={handleDrop} dragOver={handleDropOver} tag={song.id} id={song.id} name={song.name} band={song.band} duration={song.duration} tags={song.tags} />
                        )
 

                    )
                }
            </section>

        </main>
    )
}

export default List