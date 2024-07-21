import React, { useContext } from "react";
import styled from "styled-components";
import "./toastify.css";
import { ToastContainer } from "react-toastify";
import themeContext from "../../../../providers/theme/themeContext";

const StyledContainer = styled(ToastContainer)`
  .Toastify__close-button {
    opacity: 1;
    color: ${(props) =>
      props.theme === "light" ? "white" : "black"} !important;
  }
`;
const Toastify = () => {
  const { theme } = useContext(themeContext);
  return (
    <>
      <StyledContainer theme={theme === "dark" ? "dark" : "light"} />
    </>
  );
};

export default Toastify;
