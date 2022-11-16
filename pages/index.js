import config from "../config.json"
import styled from "styled-components"
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu/index";
import {StyledTimeline} from "../src/components/Timeline";
import React from "react";

const HomePage = () => {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("A");
    // const valorDoFiltro = "Angular"
    return (
        <>
            <CSSReset/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header/>
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>
            </div>
        </>
    )

}

export default HomePage


const StyledHeader = styled.div`
  background-color: ${(theme) => theme.backgroundLevel1};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 32px;
    gap: 16px;
    margin-top: 10px;
  }`;

const StyledBanner = styled.section`
  margin-top: 50px;
  background-image: url(${({bg}) => bg});
  background-color: #CCC;
  color: black;
  height: 250px;
`;

const Header = () => {
    return (
        <StyledHeader>
            {/*<img src="banner"/>*/}
            <StyledBanner bg={config.bg}/>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
                <div id={"user-info-text-background"}>
                    <h2 className={"user-info-text"}>{config.name}</h2>
                    <p className={"user-info-text"}>{config.job}</p>
                </div>
            </section>
        </StyledHeader>)
}

const Timeline = ({searchValue, ...props}) => {
    const playlistNames = Object.keys(props.playlists)
    //Statement
    //retorno por expressao
    return (
        <StyledTimeline>
            {playlistNames.map((playlistname) => {
                    const videos = props.playlists[playlistname];
                    return (
                        <section key={props.playlists[playlistname].toString()}>
                            <h2>{playlistname}</h2>
                            <div>
                                {videos.filter((video) => {
                                    const titleNormalized = video.title.toLowerCase()
                                    const searchValueNormalized = searchValue.toLowerCase()
                                    return titleNormalized.includes(searchValueNormalized)
                                })

                                    .map((video) => {
                                        return (
                                            <a key={video.thumb} href={video.url}>
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
