
import styleGame from '../styles/games.module.css'
import game from '../assets/images/game.gif'
export default function Games(){
    return (
        <>
        <div className={styleGame.game}>
            <img className={styleGame.gif} src={game} />
        </div>
        </>
    )
}