# :alarm_clock:alarm-react-app
:bulb: 알람 앱 React 리뷰용 미니 프로젝트

## :sun_with_face:프로젝트 주제 소개
- :one: 알람 추가, 삭제 및 수정기능
- :two: 지정한 시간이 되면 알람음이 울리고, 알람 끄기 버튼으로 알람을 끌 수 있음

## :sunglasses:팀원 명단
- :bust_in_silhouette:이동찬 : 알람 추가 기능 및 알람 소리 기능 구현
- :bust_in_silhouette:김현수 : 알람 현재시간 기능 및 알람울림 시간 로직(logic) 구현
- :bust_in_silhouette:이영주 : 알람 Alert 기능 및 알람 앱 Frontend CSS 구현

## <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor" width="50" height="50"/> 컴포넌트 구성

![React Component Chart](/public/react_component_chart.png "React Component Chart")

- ![#FF8C00](https://via.placeholder.com/15/FF8C00/FF8C00.png) `Form` : Alarms 컴포넌트에 Alarm 을 추가하기 위한 Form 컴포넌트
  - 알람 제목 / 오전 오후 / 시 / 분 정보 입력후 알람을 추가할 수 있다

- ![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) `Header` : 앱 제목과 현재 시간, 그리고 Form 컴포넌트로 구성된 컴포넌트
  - 현재시간은 매초 업데이트된다

- ![#6495ED](https://via.placeholder.com/15/6495ED/6495ED.png) `Alarm` : 하나의 알람의 정보를 가지고 있는 컴포넌트
  - 알람 제목을 더블 클릭하면 제목을 수정할 수 있다
  - 알람 오른쪽의 X 버튼 누르면 알람이 삭제된다
  - 각 알람의 시간과 현재시간이 동일할때 알람소리가 울리고 '알람끄기' 버튼이 생성된다
  - '알람끄기' 버튼을 누르면 알람소리가 멈춰진다

- ![#9400D3](https://via.placeholder.com/15/9400D3/9400D3.png) `Alarms` : Alarm 컴포넌트들의 목록

- ![#228B22](https://via.placeholder.com/15/228B22/228B22.png) `MainFooter` : Alarm 컴포넌트의 갯수를 표시하는 컴포넌트

- ![#0000FF](https://via.placeholder.com/15/0000FF/0000FF.png) `Main` : Alarms 와 MainFooter 컴포넌트로 구성된 컴포넌트

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


## :interrobang:트러블슈팅(에러 내역, 어떻게 해결했는지)
:x:문제 : User 객체 String Id Column Primary key 설정시 테이블 생성 불가 문제<br>
:o:해결 : Column을 String으로 선언시 default length 255, length가 길면 PK 설정 불가, @Column(length = 100)으로 문제 해결

:x:문제 : 처음 Main 화면에 접속 시 영화정보 리스트를 표현할 때 jsp 파일에서 Controller로 넘어가지 못해 리스트 표현 불가 문제<br>
:o:해결 : 따로 Controller를 만들고 로그인 성공과 로그아웃 성공 시 넘겨주어 문제 해결
ㅁㄴㅇㄻㄴㅇㄹ

## :rainbow:느낀점
- :bust_in_silhouette:이동찬 : 시작하기전엔 간단한 기능같았는데 막상 구현해보니 DB 테이블 구성부터 백엔드 프런트엔드 연결 등 어려운점이 많아 놀랐습니다. 팀원들의 도움과 구글 없었으면 절대 완성 못했을듯...ㅎㅎ
- :bust_in_silhouette:김현수 : 프론트 부분은 어색해서 한참 헤맸는데 이번에 화면 연결 구성에 대해서 많은 공부를 하였습니다. 그리고 백엔드도 보느라 머리 터질뻔....
- :bust_in_silhouette:이영주 : 

