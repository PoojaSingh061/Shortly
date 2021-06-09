import React, { forwardRef, useState } from "react";
import styled from "styled-components";

const LinksList = forwardRef(({ shortLink }, ref) => {
  const [copyState, setCopyState] = useState(false);

  const onCopyClick = () => {
    setCopyState(!copyState);
    const copiedText = ref.current.full_short_link;
    navigator.clipboard.writeText(copiedText);
  };

  const { copyLinkRef } = ref;
  return (
    <ResultsContainer>
      <Links>
        <OriginalLink>{shortLink.original_link}</OriginalLink>
        <GeneratedLink ref={copyLinkRef}>
          {shortLink.full_short_link}
        </GeneratedLink>
      </Links>
      <StyledButton
        onClick={onCopyClick}
        className={!copyState ? "" : "copied"}
      >
        {!copyState ? "Copy" : "Copied!"}
      </StyledButton>
    </ResultsContainer>
  );
});

export default LinksList;

const StyledButton = styled.button`
  background: transparent;
  font-size: 1.1rem;
  background: #2acfcf;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  font-weight: 700;
  color: #ffffff;
  outline: none;
  border: none;
  position: relative;
  right: 0;
  margin: 0.5rem 1rem;
  min-width: 150px;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    background: #232127;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
`;

const ResultsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  border-radius: 5px;
  background: #ffffff;
  align-items: center;
  .copied {
    background: #232127;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const OriginalLink = styled.p`
  padding: 0.5rem;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;
const GeneratedLink = styled.span`
  color: #2acfcf;
  @media (max-width: 900px) {
    padding: 1rem;
    text-align: center;
    border-top: 3px solid #eff1f7;
    width: 100%;
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 1rem;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
