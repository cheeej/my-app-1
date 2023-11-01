import React from 'react';
import styled from 'styled-components';

function Header(props) {
    console.log(props); // const props = {title: "리액트(React)"}
    return (
        <header>
            <h1>{props.title}</h1>
            <Nav />
        </header>
    );
}

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">html</a>
                </li>
                <li>
                    <a href="/">css</a>
                </li>
                <li>
                    <a href="/">js</a>
                </li>
            </ul>
        </nav>
    );
}

function Article() {
    return (
        <article>
            <h2>타이틀1</h2>
            <p>Hello, React</p>
        </article>
    );
}

function App() {
    return (
        <div className="root">
            {/* sum(1, 2) */}
            <HeaderStyled title="리액트(React)" />
            <Article />
            <Article />
            <Article />
        </div>
    );
}

const HeaderStyled = styled(Header)`
    display: flex;
    border-bottom: 1px solid #eee;
`;

// App을 기본으로 내보내기
export default App;
