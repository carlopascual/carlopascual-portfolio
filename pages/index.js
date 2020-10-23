import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Folder from "../components/folder";
import Hover from "../components/hover";

const Instagram = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: #f09433;
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }
`;

const Github = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: white;
    background: #24292e;
  }
`;

const LinkedIn = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: white;
    background: #0e76a8;
  }
`;

export default function Home() {
  return (
    <div>
      <Folder name={"Carlo Pascual"}>
        <Folder name={"Projects"} hoverStyle={{ background: "yellow" }}>
          <Folder
            name={"Quadric"}
            hoverStyle={{ background: "#f27d00", color: "white" }}
          >
            Developed frontend components for the Quadric Index, an app that
            scores brands based on their positioning in the market. The app then
            pivoted into Feats (feats.co), which helps people get credit for
            their work. Took sole ownership of the frontend on top of
            modernizing the backend and helping design buisness requirements and
            UX.
          </Folder>
          <Folder
            name={"Feats"}
            hoverStyle={{ background: "black", color: "white" }}
          ></Folder>
          <Folder
            name={"Iceboks"}
            hoverStyle={{ background: "rgb(102, 102, 255)", color: "white" }}
          ></Folder>
        </Folder>
        <Hover
          hoverStyle={{
            color: "white",
            background: "#f09433",
            background:
              "linear-gradient(45deg,#f09433 0%, #e6683c 25%,#dc2743 50%,#cc2366 75%, #bc1888 100%)",
            filter:
              "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )",
          }}
        >
          Instagram
        </Hover>
        <Hover hoverStyle={{ background: "#0e76a8", color: "white" }}>
          LinkedIn
        </Hover>
        <Hover hoverStyle={{ background: "#24292e", color: "white" }}>
          Github
        </Hover>
      </Folder>
    </div>
  );
}
