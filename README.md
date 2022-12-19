# 👕H&M👕

# 사용기술
- json-server
- React-Router
- React-Bootstrap
- useEffect
- useState

# 간단한 설명
#### React-Router을 사용하여 디테일 페이지, 로그인 이벤트를 구현한 H&M SPA사이트 입니다.
##### 루트 폴더 안에 데이터베이스 역할을 해주는 db.josn파일을 생성해주고, 안에는 
##### 이미지의 url, 기타 텍스트 정보들이 기입되어 있습니다. 서버를 실행시켜주고 fetch를 통해
##### api의 값을 갖고오는 형태로 구현 되었습니다.
##### react-bootstrap과 미디어쿼리를 사용해 반응형을 구현하였습니다, 
##### 검색기능은 router의 쿼리 기능을 사용하여 input에 텍스트가 입력되어지고 keydown시 처음 api를 갖고오는 fetch에 쿼리값이 대입
##### 되어 지는 형식으로 해당 키워드가 포함된 데이터가 불러와지게끔 구현하였습니다
##### 또한 useParams를 이용하며 클릭한 id값과 불러온 api의 id값과 동일한 데이터를 불러와 detail페이지를 구현하였습니다.

# 느낀점, 알게된점, 나의 생각
##### 크게 두가지 유용한 기능을 알게되었다. 첫번째로 useParams이다. path에서의 :id 값을 일반적인 문자, 숫자가 아닌
##### 변수의 형태를 띄고 있어, 해당되는 id값의 데이터만 도출해내는 방법으로 detail페이지를 구현하게 되었다.
##### 두번째로는 json-server이다. 서버가 없는 환경에서 서버를 제공해준다는 것은 엄청난 기능이라고 생각한다. 특히
##### 프론트엔드 작업 환경에서 간단한 실무적인 기능을 구현할때 정말 유용하게 사용할 수 있을 것 같다.
##### 화면이 새로고침 없이 특정부분만 렌더링 되는 형태의 기능을 다른 사이트와 앱에서 보기만 했었다.
##### 그치만 React-Router의 컴포넌트와 hook을 사용해 직접 구현해보니 정말 유용한 기능이고 좋은 경험이었다.
##### 웹, 앱에서 자주 사용하는 기능이라 SPA에 대해 더 깊히 학습 욕구가 생기게 되었다.
