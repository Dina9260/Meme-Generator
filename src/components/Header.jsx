import troll from "../images/troll-face.png";
export default function Header(){
    return (
        <header>
            <img src={troll} alt="troll"/>
            <h1>Meme Generator</h1>
        </header>
    )
}