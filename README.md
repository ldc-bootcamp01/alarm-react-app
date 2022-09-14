# :alarm_clock:alarm-react-app
알람 앱 React 리뷰용 미니 프로젝트

## :bulb:프로젝트 주제 소개
- :one: 알람 추가, 삭제 및 수정기능
- :two: 지정한 시간이 되면 알람음이 울리고, 알람 끄기 버튼으로 알람을 끌 수 있음

## :sunglasses:팀원 명단
- :man:이동찬 : 알람 추가 기능 및 알람 소리 기능 구현
- :man:김현수 : 알람 현재시간 기능 및 알람울림 시간 로직(logic) 구현
- :woman:이영주 : 알람 Alert 기능 및 알람 앱 Frontend CSS 구현

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

<img src="https://icongr.am/devicon/npm-original-wordmark.svg?size=128&color=currentColor" width="50" height="50" />

```
npm i (install)
npm start
```

<img src="https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor" width="50" height="50" /> 브라우저로 실행 권장

## :interrobang:트러블슈팅(에러 내역, 어떻게 해결했는지)
:x:문제 : setInterval(callbackFn) 함수가 원하던대로 1초에 한번 작동하지 않고, 1초에 수십번 호출됨.<br/>
:exclamation:분석: 정확한 원인은 모르겠으나, state가 바뀔때마다 화면이 렌더링되고, 그때마다 setInterval()이 계속 호출되서 정상적으로 작동하지 않는거 같음<br/>
:o:해결 : useEffect() 의 두번째 인자에 빈 배열 [] 을 사용할경우 첫 렌더링때만 setInterval() 함수 호출 가능
  
:x:문제 : 알람을 끔과 동시에 알람이 다시 시작되는 문제<br/>
:exclamation:예시: 3시 28분 알람을 3시 28분 20초에 껐을 경우, 현재 시간은 아직 3시 28분 이므로, 알람이 다시 설정됨.<br/>
:o:해결 : 가장 최근에 실행했던 Alarm id 값을 state에 저장해서 해당 id의 알람은 알람 시작 로직(logic) 에서 건너뛰기

## :rainbow:느낀점
- :man:이동찬 : React 뿐만 아니라 Git 와 GitHub 까지 리뷰할수 있어서 의미있던 프로젝트였습니다. 팀원들의 도움으로 멋진 결과물이 나온거 같습니다. :clap:
- :man:김현수 : -
- :woman:이영주 : 하나 해결하면 또 다른 곳에서 에러가 나 기능을 구현하기 어려웠습니다. app.js와 form.jsx도 헷갈리는 부분이 많았습니다. 팀원들의 끈기가 아니었다면 해결하지 못했을 프로젝트였습니다. 🙇‍♀️

