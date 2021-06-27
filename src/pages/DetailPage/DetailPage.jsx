import { useState, useEffect, React } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.css";
import LinkPreview from "../../components/LinkPreview";

function DetailPage() {
  let { slug } = useParams();
  const [Details, setDetails] = useState({});
  const [Courses, setCourses] = useState([]);
  const [Youtube, setYoutube] = useState([]);
  const [Websites, setWebsites] = useState([]);
  const [Github, setGithub] = useState([]);
  const [Tips, setTips] = useState([]);

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
              <ul>
                {Courses.map((value, index) => {
                  return <LinkPreview url={value} />;
                })}
              </ul>
            </div>
            <br />
            <h4>Youtube Creators</h4>
            <div className="scroller">
              <ul>
                {Youtube.map((value, index) => {
                  return <LinkPreview url={value} />;
                })}
              </ul>
            </div>
            <br />
            <h4>Dedicated Github Pages</h4>
            <div className="scroller">
              <ul>
                {Github.map((value, index) => {
                  return <LinkPreview url={value} />;
                })}
              </ul>
            </div>
            <br />
            <h4>Useful Websites</h4>
            <div className="scroller">
              <ul>
                {Websites.map((value, index) => {
                  return <LinkPreview url={value} />;
                })}
              </ul>
            </div>
            <br />
            <h4>Tips/Hacks</h4>
            <div className="scroller">
              <ul>
                {Tips.map((value, index) => {
                  return <LinkPreview url={value} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailPage;
