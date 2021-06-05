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
            <a href={Details.documentation}>📝 Docs</a>
          </div>
          <div className="cardData ">
            <h4>Courses</h4>
            <ul className="scroller">
              {Courses.map((value, index) => {
                return <LinkPreview url={value} />;
              })}
            </ul>
            <h4>Youtube</h4>
            <ul className="scroller">
              {Youtube.map((value, index) => {
                return <LinkPreview url={value} />;
              })}
            </ul>
            <h4>Github</h4>
            <ul className="scroller">
              {Github.map((value, index) => {
                return <LinkPreview url={value} />;
              })}
            </ul>
            <h4>Websites</h4>
            <ul className="scroller">
              {Websites.map((value, index) => {
                return <LinkPreview url={value} />;
              })}
            </ul>
            <h4>Tips</h4>
            <ul className="scroller">
              {Tips.map((value, index) => {
                return <LinkPreview url={value} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailPage;
