import styled from "styled-components";

const Hover = styled.div`
  cursor: pointer;

  &:hover {
    font-weight: bold;
    ${({ hoverStyle }) =>
      hoverStyle
        ? Object.entries(hoverStyle)
            .map(([k, v]) => `${k}:${v}`)
            .join(";")
        : ""}
`;

export default Hover;
