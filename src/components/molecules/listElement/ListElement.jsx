import React from 'react'
import ButtonNav from '../../atoms/ButtonNav'
import './listElement.css'

const handleShowLyrics = (lyrics) => {
    const songLyrics = document.querySelector(`#${lyrics}`)
    
    songLyrics.classList.toggle('active')
    


}


const ListElement = (props) => {
    const {id,name,band,duration,tags,dragStart,dragDrop,dragOver,i,lyrics} = props



    return (
        <div draggable="true" onDragStart={(e)=>dragStart(e,i)} onDrop={(e)=>dragDrop(e,i)} onDragOver={(e)=>dragOver(e,i)} id={`song-${id}`}className={'song'}>
            <header>
                <div className={'names'}>
                    <h1>{name}</h1>
                    <h2>{band}</h2>
                </div>
                <div className={'tools-aside'}>
                    <div><h3 className={'time'}>{duration}</h3></div>
                    <div>
                        <nav>
                            <ButtonNav id={id} callback={handleShowLyrics} content={'📜'}/><ButtonNav id={id} callback={handleShowLyrics} content={'❌'}/>
                        </nav>
                    </div>
                </div>
            </header>
            <main id={`lyrics-${id}`} className={'lyrics'}>
                {lyrics}
            </main>
            
        </div>
    )
}

export default ListElement