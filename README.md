# Movie_App With ReactJS

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
