import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

const Linkresult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  const fetchData = async () => {
    try {
      setloading(true);

      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      seterror(err);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (inputValue) fetchData();
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  if (loading) return <p className="loading">Loading...</p>;

  if (error) return <p className="error">Something went wrong...</p>;

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : " "}>
              Copy To Clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default Linkresult;
