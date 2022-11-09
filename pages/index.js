import config from "../config.json"
import styled from "styled-components"
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import {StyledTimeline} from "../src/components/Timeline";

const HomePage = () => {
    // const estilosHomePage = {backgroundColor: "red"};
    return (
        <>
            <CSSReset/>
            <div>
                <Menu/>
                <Header/>
                <Timeline playlists={config.playlists}/>
            </div>
        </>
    )

}

export default HomePage



const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-content: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;


const Header = () => {
    return (
        <StyledHeader>
            {/*<img src="banner"/>*/}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>

                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>


            </section>
        </StyledHeader>)
}
const Timeline = (props) => {
    const playlistNames = Object.keys(props.playlists)
    //Statement
    //retorno por expressao
    return (
        <StyledTimeline>
            {
                playlistNames.map((playlistname) =>
                    {
                        const videos = props.playlists[playlistname];
                        return (
                            <section>
                                <h2>{playlistname}</h2>
                                <div>
                                    {videos.map((video) => {
                                        return (
                                            <a href={video.url}>
                                                <img alt={"thumb"} src={video.thumb}/>
                                                <span>{video.title}</span>
                                            </a>
                                        )
                                    })}
                                </div>
                            </section>
                        )
                    }
                )
            }
        </StyledTimeline>)
}
