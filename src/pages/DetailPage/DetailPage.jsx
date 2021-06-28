import { useState, useEffect, React, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import LinkPreview from "../../components/LinkPreview";

function DetailPage() {
  let { slug } = useParams();
  const [Details, setDetails] = useState({});
  const [Courses, setCourses] = useState([]);
  const [Youtube, setYoutube] = useState([]);
  const [Websites, setWebsites] = useState([]);
  const [Github, setGithub] = useState([]);
  const [Tips, setTips] = useState([]);
  const bestCoursesRef = useRef(null);
  const youtubeCreatersRef = useRef(null);
  const githubPagesRef = useRef(null);
  const usefulWebsiteRef = useRef(null);
  const tipsNHacksRef = useRef(null);
  const getData = () => {
    return fetch("https://api.cswaala.in/v1/cs", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        sessionStorage.setItem("store", JSON.stringify(myJson.Resources));
        return myJson.Resources;
      });
  };
  const scroll = (ref, scrollOffset) => {
    console.log(scrollOffset);
    ref.current.scrollLeft += scrollOffset;
    console.log(ref.current);
  };

  useEffect(async () => {
    let seStor = JSON.parse(sessionStorage.getItem("store"));
    let storage = [];
    if (seStor != null) {
      storage = seStor;
    } else {
      storage = await getData();
    }
    storage.forEach((ele) => {
      if (ele.title.replace(" ", "-").toLowerCase() === slug) {
        setDetails(ele);
        setCourses(ele.courses);
        setYoutube(ele.youtube);
        setWebsites(ele.websites);
        setGithub(ele.github);
        setTips(ele.tips);
      }
    });
  }, []);

  return (
    <main className="root py-4">
      <div className="container-md">
        <div className="card_wrapper">
          <div className="cardTitle">
            <h2>{Details.title}</h2>
            <p>{Details.tag} &nbsp;</p>
            <a target="_blank" href={Details.documentation}>
              📝 Docs
            </a>
          </div>
          <div className="cardData">
            <h4>Best Courses</h4>
            <div className="scroller">
              <span className="LeftArrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  width="25px"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  onClick={() => scroll(bestCoursesRef, -300)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <ul ref={bestCoursesRef}>
                {Courses.map((value, index) => {
                  return <LinkPreview url={value} />;
                })}
              </ul>
              <span className="RightArrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  width="25px"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  onClick={() => scroll(bestCoursesRef, 300)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <h4>Youtube Creators</h4>
            <div className="scroller">
              <span className="LeftArrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  width="25px"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  onClick={() => scroll(youtubeCreatersRef, -300)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <ul ref={youtubeCreatersRef}>
                {Youtube.map((value, index) => {
                  return <LinkPreview url={value} />;
                })}
              </ul>
              <span className="RightArrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  width="25px"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  onClick={() => scroll(youtubeCreatersRef, 300)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <h4>Dedicated Github Pages</h4>

            <div className="scroller">
              <span className="LeftArrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  width="25px"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  onClick={() => scroll(githubPagesRef, -300)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <ul ref={githubPagesRef}>
                {Github.map((value, index) => {
                  return <LinkPreview url={value} />;
                })}
              </ul>
              <span className="RightArrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  width="25px"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  onClick={() => scroll(githubPagesRef, 300)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <h4>Useful Websites</h4>
            <div className="scroller">
              <span className="LeftArrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  width="25px"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  onClick={() => scroll(usefulWebsiteRef, -300)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <ul ref={usefulWebsiteRef}>
                {Websites.map((value, index) => {
                  return <LinkPreview url={value} />;
                })}
              </ul>
              <span className="RightArrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  width="25px"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  onClick={() => scroll(usefulWebsiteRef, 300)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <h4>Tips/Hacks</h4>
            <div className="scroller">
              <span className="LeftArrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  width="25px"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  onClick={() => scroll(tipsNHacksRef, -300)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <ul ref={tipsNHacksRef}>
                {Tips.map((value, index) => {
                  return <LinkPreview url={value} />;
                })}
              </ul>
              <span className="RightArrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  width="25px"
                  viewBox="0 0 20 20"
                  fill="#fff"
                  onClick={() => scroll(tipsNHacksRef, 300)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailPage;
