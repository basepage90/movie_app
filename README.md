# Movie_App With ReactJS

💡 리액트로 만든 영화 검색 앱입니다. Naver Movie API 와 redux 정도를 사용한 습작입니다.

⚡ http://moviefinder.ddns.net

## Movie_App (tag : v1.9)
- redux toolkit
    - { createSlice } has reducer & action

## Movie_App (tag : v1.8)
- redux toolkit
    - npm i @reduxjs/toolkit
    - createReducer 를 사용하면, reudcer에서 mutate 가 가능해진다
    - { createAction, createReducer, configureStore }
        - configureStore -> chorme tools
            - Redux DevTools
            - React Developer Tools    

## Movie_App (tag : v1.7)
- reudx 적용
    - store / reducer / state / action  / dispatch / subscribe
    - {connect}

## Movie_App (tag : v1.6)
- add search bar
    - constructor & state bind

## Movie_App (tag : v1.5)
- Link : sharing props between routes
    - import {Link} from "react-router-dom";
    - Link는 redirect  없이 라우팅을 돕는다
    - Link는 라우터안에 존재 해야 한다
    - Navigation 컴포넌트에 활용
    - location / history / match

## Movie_App (tag : v1.4)
- npm i react-router-dom
    - BrowserRouter 
    - HashRouter
    - Route
        - exact={true} 이면, 중복 라우팅을 하지 않는다.
- noip + Naver Cloud : free ddns + unbuntu server
    - http://moviefinder.ddns.net:3000/

- ~~gitgub pages~~
    - ~~무료로 static 코드를 빌드 후 배포 해준다~~
    - proxy 때문에 naver cloud 로 대체 하였다
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
- useEffect 의존성 배열
    - useEffect에서 sideEffect function을 async 로 만들면 오류 발생
        - reason : sideEffect function은 함수만 반환할 수 있는데, async 함수는 Promise Obejct를 반환하기때문이다
        - solution : side effect function 내부에서 async 함수를 사용한다
    - useEffect 외부에서 생성한 함수 호출시, 의존성 배열 경고 발생
        - 렌더링때마다 호출하지 않도록하기위하여, asyc함수를  useCallback 의  side effect 로 배치
        - 허나 의존성 배열은 버그유발 및 관리 문제로 사용하지 않는 것이 좋다
    - useEffect의 side effect에서 분기처리하여 실행시점 컨트롤
        - state 에 따른 분기처리를 해주었다

## Movie_App (tag : v1.1)
- Hook
    - useState
        - class 의 state + setState 와 유사
        - state 들은 state 안에 json 객체로 선언해야, 불필요한 render 횟수를 줄일 수 있다.
    - useReducer
        - useState 보다 state 값을 좀더 구체적으로 변경하기위해, 일종의 콜백함수가 추가된 형태이다.
    - useEffect
        - class 의 componentDidMount 와 유사
        - 배열형태로 state 값을 넣어주면, 해당 state 가 변경되었을때만  useEffect 한다
        - 의존성 배열 : 비어있는 배열로 ([])으로 명시하지않으면 무한루프에 빠질 수 있다.

## Movie_App (tag : v1.0)
- movie를 class 에서 function 으로 다시 교체 하였다.
    - useState

## Movie_App (tag : v0.9)
- movie를 function  에서 class 로 교체하였다.
- cheerio : naver api 에서는 고퀄리티 포스터 주소를 제공해주지않으므로, 네이버영화 포스터를 스크랩하여 가져왔다.

## Movie_App (tag : v0.8)
- naver search api 를 통해서, 영화 정보를 가져온다.
    - naver api 특성상 영화제목 검색어가 필수이므로, 메인화면에 디폴트로 디스플레이될 영화들은 네이버영화에서 크롤링하도록하자.
- proxy middleware
    - naver api를 이용하면서, CORS 를 해결하기위해 proxy middleware 를 사용하였다.
    - package.json 에서 proxy 설정을 하는 방법도 있지만, 두개의 프록시 설정을 위하여 선택하지 않았다.
- axios : 비동기통신을 위해서, fetch 대신 사용하였다.
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

- React 에서 function 은 ()로 닫을경우, 즉시 동작한다. 즉, onClick 에서 닫지않는다.
- state
    - react 는 state 를 변경했을때만, render 함수를 호출한다. 즉, refresh 한다.
    - 단순히, state 를 출력하는것만으로는 refresh 하지 않는다.


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
    npm create-react-app movie_app
```
---
(This source is based on Nomad Coder's lecture. Thanks to Nico)
