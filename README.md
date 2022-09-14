# :sun_with_face:alarm-react-app
:bulb: 알람 앱 React 리뷰용 미니 프로젝트

## :alarm_clock:프로젝트 주제 소개
- :one: 사용자 지정 시간에 맞춰 알람해주는 애플리케이션
- :two: 알람 추가, 삭제 및 수정기능
- :three: 매번 
<img src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white"/> 사진찍을때 시간 놓치신다면 적극 추천!

## :sunglasses:팀원 명단
- :bust_in_silhouette:이동찬 : 예매 / 예매 조회 / 예매 취소 기능 백엔드 구현
- :bust_in_silhouette:김현수 : 페이지 / 기본 페이지 프론트엔드 구현
- :bust_in_silhouette:이영주 : 조회 / 조회 확인 기능 백엔드 구현

## :fire:React 
<img src="https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor" width="50" height="50"/> 컴포넌트 구성
- :clapper:Movie : 기본적인 영화정보
  - :id:id : 영화 id값
  - :name_badge:name : 영화명
  - :dollar:price : 영화가격

- :cinema:Auditorium : 상영관 (영화관 1관, 2관, ...) 상영관 및 영화에 관한 정보 가지고 있음
  - :id:id : 상영관 id값
  - :clapper:Movie : 해당 상영관에서 상영하는 영화
  - :ballot_box_with_check:maxSeatCount : 최대 좌석수

- :seat:Seat : 좌석 (좌석 A1, A2, B1, ...) 좌석, 상영관, 영화에 대한 정보를 가지고 있음
  - :id:id : 좌석 id값
  - :name_badge:name : 좌석명
  - :cinema:auditorium : 해당 좌석이 위치한 상영관

- :smile:User : 기본적인 유저정보
  - :id:id : 유저 아이디
  - :no_entry_sign:password : 유저 비밀번호

- :ticket:Ticket : 예매티켓, 좌석, 상영관, 영화, 유저 정보 다 가지고 있음
  - :id:id : 티켓 id 값 (한 좌석당 한 티켓이 존재하므로 좌석 id값과 동일)
  - :date:timeStamp : 티켓 발행 시간 및 날짜
  - :seat:Seat : 해당 티켓의 좌석 정보
  - :smile:User : 해당 티켓의 유저 정보

## :heavy_check_mark:요구사항
<p>
<img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"/>
<img src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white"/>
</p>
<p>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original-wordmark.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50" height="50" />
</p>

:warning: 

**초기 DB 데이터 추가를 위해 src/main/webapp/sql/table.sql 파일에서 sql 문들을 복사하여**

**MySQL 8.0 Command Line Client 에 붙여넣어 sql 문들을 실행해 주세요.**

![MySQL 8.0 Command Line Client Screenshot](/images/movie-sql1.png "MySQL Screenshot")

## :pencil:ERD
![ER Diagram for movie reservation project](/images/movie-erd1.png "ER Diagram")

## :book:API Document(선택) - RestAPI 사용했을 경우

## :interrobang:트러블슈팅(에러 내역, 어떻게 해결했는지)
:x:문제 : User 객체 String Id Column Primary key 설정시 테이블 생성 불가 문제<br>
:o:해결 : Column을 String으로 선언시 default length 255, length가 길면 PK 설정 불가, @Column(length = 100)으로 문제 해결

:x:문제 : 처음 Main 화면에 접속 시 영화정보 리스트를 표현할 때 jsp 파일에서 Controller로 넘어가지 못해 리스트 표현 불가 문제<br>
:o:해결 : 따로 Controller를 만들고 로그인 성공과 로그아웃 성공 시 넘겨주어 문제 해결


## :rainbow:느낀점
- :man:이동찬 : 시작하기전엔 간단한 기능같았는데 막상 구현해보니 DB 테이블 구성부터 백엔드 프런트엔드 연결 등 어려운점이 많아 놀랐습니다. 팀원들의 도움과 구글 없었으면 절대 완성 못했을듯...ㅎㅎ
- :man:김현수 : 프론트 부분은 어색해서 한참 헤맸는데 이번에 화면 연결 구성에 대해서 많은 공부를 하였습니다. 그리고 백엔드도 보느라 머리 터질뻔....
- :man:송효섭 : 아직 모르는것이 너무많아 팀원의 도움을 많이 받았다. 다음 프로젝트에선 도움을 덜 받고 혼자힘으로 구현할수 있도록 더욱 노력해야겠다는 생각이 들었습니다.
- :man:김성훈 : 직접 손으로 해보려니 이것저것 생각해야 할게 너무 많았지만 팀원분들의 큰 은혜로 프로젝트를 잘 마무리 할 수 있었습니다. 감사합니다.
