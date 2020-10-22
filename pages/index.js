import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Folder = styled.div`
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

export default function Home() {
  return (
    <div>
      <Folder>Carlo Pascual</Folder>
    </div>
  );
}
