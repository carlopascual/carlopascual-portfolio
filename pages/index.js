import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Folder from "../components/folder";

const Instagram = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
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
        <Folder name={"Projects"}>
          <Folder name={"Quadric"}></Folder>
          <Folder name={"Feats"}></Folder>
          <Folder name={"Iceboks"}></Folder>
        </Folder>
        <Instagram>Instagram</Instagram>
        <LinkedIn>LinkedIn</LinkedIn>
        <Github>Github</Github>
      </Folder>
    </div>
  );
}
