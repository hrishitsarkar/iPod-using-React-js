import React from "react";
import styleNow from '../styles/nowplaying.module.css';

export default class NowPlaying extends React.Component{
    render(){
        return (
            <>
            <div className={styleNow.now}>
                <img className={styleNow.banner} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/The_Weeknd_-_Starboy_%28single%29.jpg/220px-The_Weeknd_-_Starboy_%28single%29.jpg" />
                <marquee><b>Starboy by The Weeknd</b></marquee>
            </div>
            </>
        )
    }
}