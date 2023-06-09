
import React from "react";
import Wheel from "./Wheel";
import Screen from "./Screen";
import ZingTouch from "zingtouch";
import sound1 from '../assets/songs/Starboy.mp3';
import sound2 from '../assets/songs/Labon.mp3'
import sound3 from '../assets/songs/Love.mp3'
import sound4 from '../assets/songs/Save.mp3'
import sound5 from '../assets/songs/Night.mp3'
import images1 from '../assets/images/The_Weeknd_-_Starboy_(single).jpg';
import images2 from '../assets/images/Labon.jpg';
import images3 from '../assets/images/john.jpg';
import images4 from '../assets/images/weeknd.jpg';
import images5 from '../assets/images/one.jpg';
import MenuList from "./MenuList";




export default class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            activeItem : 'NowPlaying',
            activePage : 'MenuList',
            play : false,
            audio : null,
            data : [
                {
                    url : sound1,
                    images : images1,
                    name : "StarBoy by The Weeknd",
                },
                {
                    url : sound2,
                    images : images2,
                    name : "Labon Ko By KK"
                },
                {
                    url : sound3,
                    images : images3,
                    name : "Love Me Again By John Newman",
                },
                {
                    url : sound4,
                    images : images4,
                    name : "Save Your Tears by The Weeknd",
                },
                {
                    url : sound5,
                    images : images5,
                    name : "Night Changes By One Direction",
                }
            ],
            current : 0,
            width : 0

            
            
            
        }
    }
    nextSong = () => {
        let list = [0,1,2,3,4];
        if(this.state.current < list.length - 1){
            this.setState({
                current : this.state.current + 1
            })
        }else{
            this.setState({
                current : 0
            })
        }
    }
    prevSong = () => {
        let list = [0,1];
        if(this.state.current < list.length && this.state.current > 0){
            this.setState({
                current : this.state.current - 1
            })
        }else{
            this.setState({
                current : list.length - 1
            })
        }
    }
    toggleMainMenu = () => {
        if(this.state.activeItem === 'MyMusic' || this.state.activeItem === 'Artist' || this.state.activeItem === 'Album'){
            this.setState({
                activeItem : 'Songs',
                activePage : 'MenuList'
            })
        }
        
        else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : 'MenuList'
            })
        }
    }
    changePage = () => {
        if(this.state.activeItem === "Songs"){
            this.setState({
                activeItem : 'MyMusic',
                activePage : 'MyMusic'
            })
        }else if(this.state.activeItem === "NowPlaying"){
            this.setState({
                activeItem : 'NowPlaying',
                activePage : 'NowPlaying'
            })
        }else if(this.state.activeItem === "Games"){
            this.setState({
                activeItem : 'Games',
                activePage : 'Games'
            })
        }else if(this.state.activeItem === "Settings"){
            this.setState({
                activeItem : 'Settings',
                activePage : 'Settings'
            })
        }else if(this.state.activeItem === "MyMusic"){
            this.setState({
                activeItem : 'NowPlaying',
                activePage : 'NowPlaying'
            })
        }else if(this.state.activeItem === "Artist"){
            this.setState({
                activeItem : 'Artist',
                activePage : 'Artist'
            })
        }
        else{
            this.setState({
                activeItem : 'Album',
                activePage : 'Album'
            })
        }
    }
    togglePlay = () => {
        if(this.state.activeItem === 'NowPlaying'){
            if(this.state.play){
                this.state.audio.pause();
                this.setState({
                    play : false
                })
            }else{
                this.state.audio.play();
                this.setState({
                    play : true
                })
            }
        }
    }
rotateWheel = () => {
    var rotateWheel = document.getElementById('rotating-wheel');
    var activeRegion = new ZingTouch.Region(rotateWheel);
    var change = 0;
    activeRegion.bind(rotateWheel,'rotate',(e) => {
        let newAngle = e.detail.distanceFromLast;
        
        if(newAngle > 0){
            
            change++;
            if(change === 15){
                change = 0;
                if(this.state.activePage === 'MenuList'){
                    if(this.state.activeItem === 'NowPlaying'){
                        this.setState({
                            activeItem : 'Songs'
                        });
                    }
                    else if(this.state.activeItem === 'Songs'){
                        
                        this.setState({
                            activeItem : 'Games'
                        });
                    }
                    else if(this.state.activeItem === 'Games'){
                        this.setState({
                            activeItem : 'Settings'
                        });
                    }
                    else if(this.state.activeItem === 'Settings'){
                        this.setState({
                            activeItem : 'NowPlaying'
                        });
                    }
                    
                }else if(this.state.activePage === 'MyMusic'){
                    if(this.state.activeItem === 'MyMusic'){
                        this.setState({
                            activeItem : 'Artist'
                        })
                    }
                    else if(this.state.activeItem === 'Artist'){
                        this.setState({
                            activeItem : 'Album'
                        })
                    }else{
                        this.setState({
                            activeItem : 'MyMusic'
                        })
                    }
                }
                
            }
            
        }else{
            change++;
            if(change === 15){
                change = 0;
                if(this.state.activePage === 'MenuList'){
                    if(this.state.activeItem === 'NowPlaying'){
                        this.setState({
                            activeItem : 'Settings'
                        });
                    }
                    else if(this.state.activeItem === 'Settings'){
                        this.setState({
                            activeItem : 'Games'
                        });
                    }
                    else if(this.state.activeItem === 'Games'){
                        this.setState({
                            activeItem : 'Songs'
                        });
                    }
                    else if(this.state.activeItem === 'Songs'){
                        this.setState({
                            activeItem : 'NowPlaying'
                        });
                    }
                    
                }else if(this.state.activePage === 'MyMusic'){
                    if(this.state.activeItem === 'MyMusic'){
                        this.setState({
                            activeItem : 'Album'
                        })
                    }
                    else if(this.state.activeItem === 'Album'){
                        this.setState({
                            activeItem : 'Artist'
                        })
                    }else{
                        this.setState({
                            activeItem : 'MyMusic'
                        })
                    }
                }
                
            }
        }
    })

}

    componentDidMount(){

        let audio = document.getElementById('audio-element');
        
        this.setState({ audio: audio }, () => {
            console.log("state", this.state);
        });
        
        
    // }
    // toggle = () => {
    //     if(this.state.activePage === 'NowPlaying'){
    //         if(this.state.play){
                
    //         }
    //     }
    }
    render(){
        
        return (
            <>
                <audio id="audio-element" className="audio" src = {this.state.data[this.state.current].url}></audio>
                <Screen activeItem = {this.state.activeItem} activePage = {this.state.activePage} data = {this.state.data} current = {this.state.current} play ={this.state.play} audio = {this.state.audio} width = {this.state.width} />
                
                <Wheel rotateWheel = {this.rotateWheel} changePage = {this.changePage} toggleMainMenu = {this.toggleMainMenu} toggle = {this.togglePlay} prevSong = {this.prevSong} nextSong = {this.nextSong}/>
            </>
        )
    }

}