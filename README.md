# Movie_App With ReactJS

๐ก ๋ฆฌ์กํธ๋ก ๋ง๋  ์ํ ๊ฒ์ ์ฑ์๋๋ค. Naver Movie API ์ redux ์ ๋๋ฅผ ์ฌ์ฉํ ์ต์์๋๋ค.

โก ~http://moviefinder.ddns.net~

## Movie_App (tag : v1.9)
- redux toolkit
    - { createSlice } has reducer & action

## Movie_App (tag : v1.8)
- redux toolkit
    - npm i @reduxjs/toolkit
    - createReducer ๋ฅผ ์ฌ์ฉํ๋ฉด, reudcer์์ mutate ๊ฐ ๊ฐ๋ฅํด์ง๋ค
    - { createAction, createReducer, configureStore }
        - configureStore -> chorme tools
            - Redux DevTools
            - React Developer Tools    

## Movie_App (tag : v1.7)
- reudx ์ ์ฉ
    - store / reducer / state / action  / dispatch / subscribe
    - {connect}

## Movie_App (tag : v1.6)
- add search bar
    - constructor & state bind

## Movie_App (tag : v1.5)
- Link : sharing props between routes
    - import {Link} from "react-router-dom";
    - Link๋ redirect  ์์ด ๋ผ์ฐํ์ ๋๋๋ค
    - Link๋ ๋ผ์ฐํฐ์์ ์กด์ฌ ํด์ผ ํ๋ค
    - Navigation ์ปดํฌ๋ํธ์ ํ์ฉ
    - location / history / match

## Movie_App (tag : v1.4)
- npm i react-router-dom
    - BrowserRouter 
    - HashRouter
    - Route
        - exact={true} ์ด๋ฉด, ์ค๋ณต ๋ผ์ฐํ์ ํ์ง ์๋๋ค.
- noip + Naver Cloud : free ddns + unbuntu server
    - http://moviefinder.ddns.net:3000/

- ~~gitgub pages~~
    - ~~๋ฌด๋ฃ๋ก static ์ฝ๋๋ฅผ ๋น๋ ํ ๋ฐฐํฌ ํด์ค๋ค~~
    - proxy ๋๋ฌธ์ naver cloud ๋ก ๋์ฒด ํ์๋ค
```
npm i gh-pages
package.json

"scripts": {
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
}

 "homepage": "https://basepage90.github.io/movie_app/"
```
- npm i react-router-dom : navigation package

## Movie_App (tag : v1.3)
- css
    - simple dynamic css

## Movie_App (tag : v1.2)
- useEffect ์์กด์ฑ ๋ฐฐ์ด
    - useEffect์์ sideEffect function์ async ๋ก ๋ง๋ค๋ฉด ์ค๋ฅ ๋ฐ์
        - reason : sideEffect function์ ํจ์๋ง ๋ฐํํ  ์ ์๋๋ฐ, async ํจ์๋ Promise Obejct๋ฅผ ๋ฐํํ๊ธฐ๋๋ฌธ์ด๋ค
        - solution : side effect function ๋ด๋ถ์์ async ํจ์๋ฅผ ์ฌ์ฉํ๋ค
    - useEffect ์ธ๋ถ์์ ์์ฑํ ํจ์ ํธ์ถ์, ์์กด์ฑ ๋ฐฐ์ด ๊ฒฝ๊ณ  ๋ฐ์
        - ๋ ๋๋ง๋๋ง๋ค ํธ์ถํ์ง ์๋๋กํ๊ธฐ์ํ์ฌ, asycํจ์๋ฅผ  useCallback ์  side effect ๋ก ๋ฐฐ์น
        - ํ๋ ์์กด์ฑ ๋ฐฐ์ด์ ๋ฒ๊ทธ์ ๋ฐ ๋ฐ ๊ด๋ฆฌ ๋ฌธ์ ๋ก ์ฌ์ฉํ์ง ์๋ ๊ฒ์ด ์ข๋ค
    - useEffect์ side effect์์ ๋ถ๊ธฐ์ฒ๋ฆฌํ์ฌ ์คํ์์  ์ปจํธ๋กค
        - state ์ ๋ฐ๋ฅธ ๋ถ๊ธฐ์ฒ๋ฆฌ๋ฅผ ํด์ฃผ์๋ค

## Movie_App (tag : v1.1)
- Hook
    - useState
        - class ์ state + setState ์ ์ ์ฌ
        - state ๋ค์ state ์์ json ๊ฐ์ฒด๋ก ์ ์ธํด์ผ, ๋ถํ์ํ render ํ์๋ฅผ ์ค์ผ ์ ์๋ค.
    - useReducer
        - useState ๋ณด๋ค state ๊ฐ์ ์ข๋ ๊ตฌ์ฒด์ ์ผ๋ก ๋ณ๊ฒฝํ๊ธฐ์ํด, ์ผ์ข์ ์ฝ๋ฐฑํจ์๊ฐ ์ถ๊ฐ๋ ํํ์ด๋ค.
    - useEffect
        - class ์ componentDidMount ์ ์ ์ฌ
        - ๋ฐฐ์ดํํ๋ก state ๊ฐ์ ๋ฃ์ด์ฃผ๋ฉด, ํด๋น state ๊ฐ ๋ณ๊ฒฝ๋์์๋๋ง  useEffect ํ๋ค
        - ์์กด์ฑ ๋ฐฐ์ด : ๋น์ด์๋ ๋ฐฐ์ด๋ก ([])์ผ๋ก ๋ช์ํ์ง์์ผ๋ฉด ๋ฌดํ๋ฃจํ์ ๋น ์ง ์ ์๋ค.

## Movie_App (tag : v1.0)
- movie๋ฅผ class ์์ function ์ผ๋ก ๋ค์ ๊ต์ฒด ํ์๋ค.
    - useState

## Movie_App (tag : v0.9)
- movie๋ฅผ function  ์์ class ๋ก ๊ต์ฒดํ์๋ค.
- cheerio : naver api ์์๋ ๊ณ ํ๋ฆฌํฐ ํฌ์คํฐ ์ฃผ์๋ฅผ ์ ๊ณตํด์ฃผ์ง์์ผ๋ฏ๋ก, ๋ค์ด๋ฒ์ํ ํฌ์คํฐ๋ฅผ ์คํฌ๋ฉํ์ฌ ๊ฐ์ ธ์๋ค.

## Movie_App (tag : v0.8)
- naver search api ๋ฅผ ํตํด์, ์ํ ์ ๋ณด๋ฅผ ๊ฐ์ ธ์จ๋ค.
    - naver api ํน์ฑ์ ์ํ์ ๋ชฉ ๊ฒ์์ด๊ฐ ํ์์ด๋ฏ๋ก, ๋ฉ์ธํ๋ฉด์ ๋ํดํธ๋ก ๋์คํ๋ ์ด๋  ์ํ๋ค์ ๋ค์ด๋ฒ์ํ์์ ํฌ๋กค๋งํ๋๋กํ์.
- proxy middleware
    - naver api๋ฅผ ์ด์ฉํ๋ฉด์, CORS ๋ฅผ ํด๊ฒฐํ๊ธฐ์ํด proxy middleware ๋ฅผ ์ฌ์ฉํ์๋ค.
    - package.json ์์ proxy ์ค์ ์ ํ๋ ๋ฐฉ๋ฒ๋ ์์ง๋ง, ๋๊ฐ์ ํ๋ก์ ์ค์ ์ ์ํ์ฌ ์ ํํ์ง ์์๋ค.
- axios : ๋น๋๊ธฐํต์ ์ ์ํด์, fetch ๋์  ์ฌ์ฉํ์๋ค.
    - async & await  / promise

## Movie_App (tag : v0.7)
- state and componentDidMount 

## Movie_App (tag : v0.6)
- class
    - extends React.Component
    - The Component Lifecycle
        - mount : constructor() - render() - componentDidMount()
        - update : render() - componentDidUpdate()
        - unmount : componentWillUnmount()
        <img src="./storage/The Component Lifecycle.PNG">

- React ์์ function ์ ()๋ก ๋ซ์๊ฒฝ์ฐ, ์ฆ์ ๋์ํ๋ค. ์ฆ, onClick ์์ ๋ซ์ง์๋๋ค.
- state
    - react ๋ state ๋ฅผ ๋ณ๊ฒฝํ์๋๋ง, render ํจ์๋ฅผ ํธ์ถํ๋ค. ์ฆ, refresh ํ๋ค.
    - ๋จ์ํ, state ๋ฅผ ์ถ๋ ฅํ๋๊ฒ๋ง์ผ๋ก๋ refresh ํ์ง ์๋๋ค.


## Movie_App (tag : v0.5)
- propTypes
    - prop validator

## Movie_App (tag : v0.4)
- using map
    - function in function

## Movie_App (tag : v0.3)
- Dynamic Component Generation

## Movie_App (tag : v0.2)
- Reusable Component with JSX
    - prop in component

## Movie_App (tag : v0.1)
- Understanding React operation
    - component in component

## Movie_App (Initial Commit)
```
    npx create-react-app movie_app
```
---
(This source is based on Nomad Coder's lecture. Thanks to Nico)
