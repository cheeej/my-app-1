import React from "react";
import styled from "styled-components";

function Header({ title, nav }) {
  // console.log(props); // const props = {title: "리액트(React)"}
  // props.nav = [{ title: "html" }, { title: "css" }, { title: "js" }]
  // const { title, nav } = props;
  return (
    <header>
      <h1>{title}</h1>
      <Nav nav={nav} />
    </header>
  );
}

function Nav({ nav }) {
  // map() 함수를 사용한 배열 출력
  // const list = props.nav.map((item, index) => (
  //   <li key={index}>
  //     <a href={"/sub/" + item.title}>{item.title}</a>
  //   </li>
  // ));

  // props.nav = [{ title: "html" }, { title: "css" }, { title: "js" }]

  // const{nav}=props;
  return (
    <nav>
      <ul>
        {nav.map((item, index) => (
          <li key={index}>
            <a href={"/sub/" + item.title}>{item.title}</a>
          </li>
        ))}
      </ul>
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
      <HeaderStyled title="리액트(React)" nav={navArr} />
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
