import styled from "styled-components";

import { devices } from "../device";

export const ModalBg = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(3, 3, 3, 0.2);

  @media ${devices.tablet} {
    width: 100%;
    min-width: 280px;
    right: 0px;
  }
`;

export const ModalBody = styled.div`
  display: absolute;
  z-index: 100;
  left: 50%;
  top: 50%;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

  @media ${devices.tablet} {
    top: 50%;
    left: 50%;
  }
`;
