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
                
                if(myprogressBar != null){
                    myprogressBar.style.width = progress + '%';
                }
            
            
        })
        
        
        
        // console.log(this.props.audio.props);

        // 
    }
    
    render(){
        const {data,current,width,audio} = this.props;
        const style = {
            width : width
        }
       
        
        return (
            <>
            
                    
            
            
            <div className={styleNow.now}>
                <img className={styleNow.banner} src={data[current].images} />
                <marquee><b>{data[current].name}</b></marquee>
            </div>
            <div className={styleNow.barContainer}>
                <p className={styleNow.leftPara}>{audio !== null ? Math.floor(audio.currentTime) : "0 / 0"}</p>
                {/* <input type= "range"  value= {val} className={styleNow.seekbar} id="progress" /> */}
                <div className={styleNow.fillContainer}>
                    <div className={styleNow.fill} style={style} id='progress'></div>
                </div>
                <p className={styleNow.rightPara}>{audio !== null ? Math.floor(audio.duration) : "0 / 0"}</p>
                
            </div>
            </>
        )
    }
}
