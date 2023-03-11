import styled from "@emotion/styled";

export const Label = styled.label`
  position: relative;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 10;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  visibility: visible;
  opacity: 1;
  transition: all 0.2s ease-in-out 0s;

  &.hidden {
    visibility: hidden;
    opacity: 0;
  }

  @media (max-width: 760px) {
    padding: 5px 0;
  }

  & * {
    font-family: "SofiaPro";
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.6);
    font-weight: bold;
  }

  & select {
    border: none;
    outline: none;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    margin: 0;
    display: block;
    width: 100%;
    font-size: 16px;
    color: black;
    font-family: "SofiaPro";
    font-weight: 900;
    text-align: left;
    cursor: pointer;
  }
`;

export const Flag = styled.div`
  background-color: red;
  min-height: 20px;
  min-width: 30px;
  overflow: hidden;
  border-radius: 3px;
  position: relative;
  background-color: yellow;
  margin-right: 10px;

  & > img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
