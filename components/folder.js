import { useState } from "react";
import styled from "styled-components";

const FolderName = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: yellow;
  }
`;

const Spacer = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

const Folder = ({ name, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Spacer>
      <FolderName onClick={() => setExpanded(!expanded)}>{`${
        expanded ? "v" : ">"
      } ${name}`}</FolderName>
      {expanded && <Spacer style={{ marginLeft: "2rem" }}>{children}</Spacer>}
    </Spacer>
  );
};

export default Folder;
