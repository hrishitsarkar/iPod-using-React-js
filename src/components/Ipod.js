//imports
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




//Ipod component
export default class Ipod extends React.Component {
    constructor() {
        super();
        this.state = {
            activeItem: 'NowPlaying',
            activePage: 'MenuList',
            play: false,
            audio: null,
            data: [
                {
                    url: sound1,
                    images: images1,
                    name: "StarBoy by The Weeknd",

                },
                {
                    url: sound2,
                    images: images2,
                    name: "Labon Ko By KK"
                },
                {
                    url: sound3,
                    images: images3,
                    name: "Love Me Again By John Newman",
                },
                {
                    url: sound4,
                    images: images4,
                    name: "Save Your Tears by The Weeknd",
                },
                {
                    url: sound5,
                    images: images5,
                    name: "Night Changes By One Direction",
                }
            ],
            current: 0,
            time: null
        }
    }



    //function to toggle to the next song
    nextSong = () => {
        //changing the current value of the state when clicked
        this.setState({
            current: (this.state.current + 1) % 5
        })

        //to play or pause the song 
        this.togglePlay();
    }



    //function to toggle to the previous song
    prevSong = () => {
        //changing the current value of the state when clicked
        this.setState({
            current: (this.state.current - 1 + 5) % 5
        })
         //to play or pause the song 
        this.togglePlay();
    }



    //this function is used to toggle to the main menu when clicked on MENU
    toggleMainMenu = () => {

        if (this.state.activeItem === 'MyMusic' || this.state.activeItem === 'Artist' || this.state.activeItem === 'Album') {
            this.setState({
                activeItem: 'Songs',
                activePage: 'MenuList'
            })
        }

        else {
            this.setState({
                activeItem: this.state.activeItem,
                activePage: 'MenuList'
            })
        }
    }


    //this function is used to change the pages on the screen
    changePage = () => {
        if (this.state.activeItem === "Songs") {
            this.setState({
                activeItem: 'MyMusic',
                activePage: 'MyMusic'
            })
        } else if (this.state.activeItem === "NowPlaying") {
            this.setState({
                activePage: 'NowPlaying'
            })
        } else if (this.state.activeItem === "Games") {
            this.setState({
                activePage: 'Games'
            })
        } else if (this.state.activeItem === "Settings") {
            this.setState({
                activePage: 'Settings'
            })
        } else if (this.state.activeItem === "MyMusic") {
            this.setState({
                activeItem: 'NowPlaying',
                activePage: 'NowPlaying'
            })
        } else if (this.state.activeItem === "Artist") {
            this.setState({
                activePage: 'Artist'
            })
        }
        else {
            this.setState({
                activeItem: 'Album',
                activePage: 'Album'
            })
        }
    }


    //this function is used to toggle between play and pause
    togglePlay = () => {
        if (this.state.activeItem === 'NowPlaying') {
            if (this.state.play) {
                this.state.audio.pause();
                this.setState({
                    play: false
                })
            } else {
                this.state.audio.play();
                this.setState({
                    play: true
                })
            }
        }
    }


    //this function is taking care of the wheel rotation to change the menus
    rotateWheel = () => {
        //fetching the wheel
        var rotateWheel = document.getElementById('rotating-wheel');
        //selecting the active zing touch region
        var activeRegion = new ZingTouch.Region(rotateWheel);

        var change = 0;
        //binding the rotate event
        activeRegion.bind(rotateWheel, 'rotate', (e) => {
            let newAngle = e.detail.distanceFromLast;
            //if rotated clockwise
            if (newAngle > 0) {

                change++;
                if (change === 15) {
                    change = 0;
                    //checking if it is menuslist component and based on activeItem changing the state accoirdingly
                    if (this.state.activePage === 'MenuList') {
                        if (this.state.activeItem === 'NowPlaying') {
                            
                            this.setState({
                                activeItem: 'Songs'
                            });
                        }
                        else if (this.state.activeItem === 'Songs') {

                            this.setState({
                                activeItem: 'Games'
                            });
                        }
                        else if (this.state.activeItem === 'Games') {
                            this.setState({
                                activeItem: 'Settings'
                            });
                        }
                        else if (this.state.activeItem === 'Settings') {
                            this.setState({
                                activeItem: 'NowPlaying'
                            });
                        }
                        //checking if it is MyMusic component
                    } else if (this.state.activePage === 'MyMusic') {
                        //checking for sub-menus
                        if (this.state.activeItem === 'MyMusic') {
                            this.setState({
                                activeItem: 'Artist'
                            })
                        }
                        else if (this.state.activeItem === 'Artist') {
                            this.setState({
                                activeItem: 'Album'
                            })
                        } else {
                            this.setState({
                                activeItem: 'MyMusic'
                            })
                        }
                    }

                }

            }
            //for anti-clockwise
            else {
                change++;
                if (change === 15) {
                    change = 0;
                    if (this.state.activePage === 'MenuList') {
                        if (this.state.activeItem === 'NowPlaying') {
                            this.setState({
                                activeItem: 'Settings'
                            });
                        }
                        else if (this.state.activeItem === 'Settings') {
                            this.setState({
                                activeItem: 'Games'
                            });
                        }
                        else if (this.state.activeItem === 'Games') {
                            this.setState({
                                activeItem: 'Songs'
                            });
                        }
                        else if (this.state.activeItem === 'Songs') {
                            this.setState({
                                activeItem: 'NowPlaying'
                            });
                        }

                    } else if (this.state.activePage === 'MyMusic') {
                        if (this.state.activeItem === 'MyMusic') {
                            this.setState({
                                activeItem: 'Album'
                            })
                        }
                        else if (this.state.activeItem === 'Album') {
                            this.setState({
                                activeItem: 'Artist'
                            })
                        } else {
                            this.setState({
                                activeItem: 'MyMusic'
                            })
                        }
                    }

                }
            }
        })

    }
    
    
    //this function displays real time
    displayTime = () => {
        //fetching the time without seconds
        let date = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        //changing the states so I can send required value to the props
        this.setState({
            time: date
        })
        setTimeout(this.displayTime, 1000);
    }


    
    componentDidMount() {
        //fetching the audio tag
        let audio = document.getElementById('audio-element');
        //changing the states
        this.setState({ audio: audio }, () => {
            
        });
        //adding event to window
        window.onload = this.displayTime();
    }



    render() {

        return (
            <>
                <audio id="audio-element" className="audio" src={this.state.data[this.state.current].url}></audio>
                <Screen activeItem={this.state.activeItem} activePage={this.state.activePage} data={this.state.data} current={this.state.current} play={this.state.play} audio={this.state.audio} width={this.state.width} time={this.state.time} />

                <Wheel rotateWheel={this.rotateWheel} changePage={this.changePage} toggleMainMenu={this.toggleMainMenu} toggle={this.togglePlay} prevSong={this.prevSong} nextSong={this.nextSong} />
            </>
        )
    }

}