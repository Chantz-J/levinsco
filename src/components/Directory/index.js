import React from 'react'
import { StyledDiv } from './Directory.stc'
import BackgroundVideo from '../BackgroundVideo'
import plantShade from '../../assets/video.mp4'



export default function Directory(){

    const configVideo = {
        video: plantShade
    }

    return(
        <StyledDiv>
            <div className="wrapper">
                <div className="item">
                    <BackgroundVideo {...configVideo} />
                    <div className="text_container">
                        <h1>Alafia Tropical Foliage</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
                        <a href="/">find plants</a>
                    </div>
                    
                </div>
                {/* <div 
                    className="item"
                    style={{backgroundImage: `url(${ShopPlants})`}}>
                        
                        <a href="/">Find Plants</a>
                </div> */}
            </div>
        </StyledDiv>
    )
}
