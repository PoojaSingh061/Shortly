import React, { useState, useEffect, useRef } from "react";

import Shortener from "./Shortener";
import LinksList from "./LinksList";

function LinkShortener() {
  const [linkContent, setLinkContent] = useState("");
  const [url, setUrl] = useState("");
  const [btnText, setBtnText] = useState("Shorten-it!");
  const [errmsg, setErrMsg] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const copyLinkRef = useRef();

  useEffect(() => {
    copyLinkRef.current = url;
  }, [url]);

  const onLinkChange = (e) => {
    setLinkContent(e.target.value);
    setErrMsg("");
  };

  const handleShortLink = (e) => {
    e.preventDefault();
    if (!linkContent) {
      setErrMsg("Please add a link");
    } else if (
      !linkContent.includes("http") &&
      !linkContent.includes("https") &&
      !linkContent.includes("www")
    ) {
      setErrMsg("Please enter a valid URL");
    } else {
      setBtnText("Shortening...");
      getShortLink();
    }
  };

  const getShortLink = async () => {
    const apiLink = `https://api.shrtco.de/v2/shorten?url=${linkContent}`;
    const existingLink = shortenedLinks.find(
      (shortLink) => shortLink["original_link"] === linkContent
    );
    if (!existingLink) {
      const res = await fetch(apiLink);
      const fetchedShortUrl = await res.json();
      if (fetchedShortUrl.ok) {
        fetchedShortUrl.result["copy"] = true;
        setUrl(fetchedShortUrl.result);
        setShortenedLinks([...shortenedLinks, fetchedShortUrl.result]);
      } else {
        setErrMsg("Something went wrong.");
      }
    } else {
      setErrMsg("A shortened link for this URL already exists.");
    }
    setBtnText("Shorten-it!");
  };

  return (
    <div>
      <Shortener
        errmsg={errmsg}
        handleShortLink={handleShortLink}
        linkContent={linkContent}
        onLinkChange={onLinkChange}
        btnText={btnText}
      />
      {shortenedLinks.map((shortLink, index) => (
        <LinksList key={index} shortLink={shortLink} ref={copyLinkRef} />
      ))}
    </div>
  );
}

export default LinkShortener;
