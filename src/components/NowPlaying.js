import React from "react";
import styleNow from '../styles/nowplaying.module.css';

export default class NowPlaying extends React.Component {



    componentDidMount() {

        var progress;
        //fetching audio element
        let audio = document.getElementById('audio-element');


        //adding event listened on audio
        audio.addEventListener("timeupdate", function () {
            //to do this asynchronously we use setTimeout
            setTimeout(() => {
                //fetching the progress
                progress = ((audio.currentTime / audio.duration) * 100);
                //fetching the progress bar
                let myprogressBar = document.getElementById('progress');

                if (myprogressBar != null) {
                    //changing the width as the song progresses in percentage
                    myprogressBar.style.width = progress + '%';
                }

            }, 1000);




        })
    }



    render() {
        //destructuring
        const { data, current, audio } = this.props;



        return (
            <>
                {/* rendering data dynamically */}
                <div className={styleNow.now}>

                    <img className={styleNow.banner} src={data[current].images} />
                    <marquee><b>{data[current].name}</b></marquee>
                </div>
                <div className={styleNow.barContainer}>
                    <p className={styleNow.leftPara}>{audio !== null ? Math.floor(audio.currentTime) : "0 / 0"}</p>

                    <div className={styleNow.fillContainer}>
                        <div className={styleNow.fill} id='progress'></div>
                    </div>
                    <p className={styleNow.rightPara}>{audio !== null && !isNaN(audio.duration) ? Math.floor(audio.duration) : ""}</p>

                </div>
            </>
        )
    }
}
