import React from 'react'
import ButtonNav from '../../atoms/ButtonNav'
import './listElement.css'
import DOMPurify from 'dompurify'
const handleShowLyrics = (lyrics) => {

    const songLyrics = document.querySelector(`#lyrics-${lyrics}`)
    
    songLyrics.classList.toggle('active')
    


}

const handlePlayedSong = (id) => {

    const played = document.querySelector(`#song-${id}`)

    played.classList.toggle('played')
    
    played.getAttribute('draggable')==="true" ? played.setAttribute('draggable',"false") : played.setAttribute('draggable',"true")
    



}

const secondsToTime = (seconds) => {
    const min = Math.floor(seconds/60)
    const sec = seconds - min*60
    
    return `0${min}:${sec<=9 ? `0${sec}`: sec }`
}
const ListElement = (props) => {
    const {editable,played,id,name,band,duration,tags,dragStart,dragDrop,dropOver,dragOver,i,lyrics} = props

    let cleanLyrics = DOMPurify.sanitize(lyrics)

    return (
        <div draggable="true" onDragStart={(e)=>dragStart(e,i)} onDragOver={(e)=>dragOver(e,i)} onDrop={(e)=>dragDrop(e,i)} /*onDropOver={(e)=>dropOver(e,i)}*/ id={`song-${id}`} className={'song'}>
            <header>
                <div className={'names'}>
                    <h1>{name}</h1>
                    <h2>{band}</h2>
                    <h3 className={'time'}>{secondsToTime(duration)}</h3>
                </div>
                <div className={'tools-aside'}>
                    <div></div>
                    <div>
                        <nav>
                            <ButtonNav id={id} callback={handleShowLyrics} content={'📜'}/><ButtonNav id={id} callback={handlePlayedSong} content={'✅'}/>{editable && <ButtonNav id={id} callback={handleShowLyrics} content={'❌'}/>}
                        </nav>
                    </div>
                </div>
            </header>
            <main id={`lyrics-${id}`} className={'lyrics'} dangerouslySetInnerHTML={{__html:`${cleanLyrics}`}}>
            </main>
            
        </div>
    )
}

export default ListElement