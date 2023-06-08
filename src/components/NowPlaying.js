import React from "react";
import styleNow from '../styles/nowplaying.module.css';

export default class NowPlaying extends React.Component{
    
    
    componentDidMount(){
        var progress;
       let audio = document.getElementById('audio-element');
       console.log(audio);
       
       
       audio.addEventListener("timeupdate",function(){
            progress = ((audio.currentTime/audio.duration) * 100);
            console.log(progress)

            let myprogressBar = document.getElementById('progress');
            myprogressBar.value = progress;
        })
        
        
        
        // console.log(this.props.audio.props);

        // 
    }
    render(){
        const {data,current} = this.props;
        return (
            <>
            <audio id="audio-element" className="audio" src = {data[current].url} autoPlay>
                    
            </audio>
            
            <div className={styleNow.now}>
                <img className={styleNow.banner} src={data[current].images} />
                <marquee><b>{data[current].name}</b></marquee>
            </div>
            <div className={styleNow.barContainer}>
                <p className={styleNow.leftPara}>0</p>
                <input type= "range" className={styleNow.seekbar} id="progress" />
                    
                
            </div>
            </>
        )
    }
}