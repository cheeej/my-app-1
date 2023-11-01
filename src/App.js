import React from "react";
import styled from "styled-components";

function Header(props) {
  console.log(props); // const props = {title: "리액트(React)"}
  return (
    <header>
      <h1>{props.title}</h1>
      {/* <Nav /> */}
    </header>
  );
}

function Nav(props) {
  // map() 함수를 사용한 배열 출력
  const list = props.nav.map((item, index) => (
    <li key={index}>
      <a href={"/sub/" + item.title}>{item.title}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{list}</ul>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </article>
  );
}

function App() {
  const navArr = [{ title: "html" }, { title: "css" }, { title: "js" }];
  return (
    <div className="root">
      {/* sum(1, 2) */}
      <HeaderStyled title="리액트(React)" />
      <Nav nav={navArr} />
      <Article title="리액트란?" desc="desc1" />
      <Article title="컴포넌트란?" desc="desc2" />
      <Article title="props란?" desc="desc3" />
    </div>
  );
}

const HeaderStyled = styled(Header)`
  display: flex;
  border-bottom: 1px solid #eee;
`;

// App을 기본으로 내보내기
export default App;
