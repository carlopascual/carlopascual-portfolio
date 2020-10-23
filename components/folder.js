import { useState } from "react";
import styled from "styled-components";
import Hover from "./hover";

const Spacer = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

const Folder = ({ name, hoverStyle, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Spacer>
      <Hover hoverStyle={hoverStyle} onClick={() => setExpanded(!expanded)}>{`${
        expanded ? "v" : ">"
      } ${name}`}</Hover>
      {expanded && <Spacer style={{ marginLeft: "2rem" }}>{children}</Spacer>}
    </Spacer>
  );
};

export default Folder;
