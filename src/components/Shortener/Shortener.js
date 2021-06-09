import React from "react";
import styled from "styled-components";

import boostbg from "../../images/bg-boost-desktop.svg";

function Shortener({ handleShortLink, onLinkChange, errmsg, btnText }) {
  return (
    <ShortnerForm onSubmit={handleShortLink}>
      <StyledInput
        name="shorten-url"
        className={`${!errmsg ? "" : "error"}`}
        type="text"
        placeholder="Shorten a link here..."
        onChange={onLinkChange}
        required
      />
      <StyledButton
        type="submit"
        className={
          btnText.toLowerCase().includes("shortening") ? "disabled" : ""
        }
      >
        {btnText}
      </StyledButton>
      {errmsg.length ? (
        <span
          style={{
            color: "hsl(0, 87%, 67%)",
            fontStyle: "italic",
            fontSize: "12px",
            justifySelf: "baseline",
          }}
        >
          {errmsg}
        </span>
      ) : null}
    </ShortnerForm>
  );
}

export default Shortener;

const StyledButton = styled.button`
  background: transparent;
  font-size: 1.1rem;
  background: #2acfcf;
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  font-weight: 700;
  color: #ffffff;
  outline: none;
  border: none;
  min-width: fit-content;
  &:hover {
    opacity: 0.5;
  }
`;

const StyledInput = styled.input`
  padding: 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1.1rem;
  width: 100%;
`;

const ShortnerForm = styled.form`
  align-items: center;
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 1rem;
  background: #3b3054;
  background-image: url(${boostbg});
  padding: 2.5rem 3rem;
  border-radius: 10px;
  justify-items: center;

  .disabled {
    pointer-events: none;
    opacity: 0.4;
  }

  .error {
    border: 2px solid #f46262;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;
