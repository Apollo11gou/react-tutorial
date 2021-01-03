import React from "react";

import Lesson from "./Lesson";

class Main extends React.Component {
  render() {
    const lessonitem = {
      name: "HTML & CSS",
      image:
        "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg",
    };

    return (
      <div className="mian-wrapper">
        <div className="main">
          <div className="copy-container">
            <h1>Hello, World</h1>
            <h2>プログラミングの世界へようこそ！</h2>
          </div>
          <div className="lesson-container">
            <h3 className="sction-title">学べるレッスン</h3>
            <Lesson name={lessonitem.name} image={lessonitem.image} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
