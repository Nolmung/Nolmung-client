## 서비스 개요

![readme_1_edit](https://github.com/user-attachments/assets/6e080230-c4e0-4953-91cf-816ede37fd9e)
![readme_2](https://github.com/user-attachments/assets/71df676c-e96a-49e3-9a6f-6febb9e4da08)
![readme_3](https://github.com/user-attachments/assets/48df4c7d-4b37-4c7a-b351-b3e198881ed9)
![readme_4](https://github.com/user-attachments/assets/fe9ed836-fdaf-45b6-bd6a-1f64b467d5d8)
![readme_5](https://github.com/user-attachments/assets/1110ff65-eff5-485e-b89d-a9ea237a50c7)
<div align="center">
	
### [오늘멍 바로가기](https://nolmung-official.netlify.app/)
</div>

<br/>

## 기능 소개 
**1. 회원 등록 및 관리 시스템** : 소셜 로그인 및 회원가입

**2. 반려견 정보 관리 시스템** : 프로필 등록, 조회, 수정 및 삭제

**3. 장소 검색 시스템** : 지도에서 장소 검색, 키워드로 장소 검색, 장소 검색 필터링

**4. 즐겨찾기 시스템** : 즐겨찾기 등록, 조회 및 삭제

**5. 다이어리 시스템(오늘멍)** : 오늘멍 등록, 조회, 수정 및 삭제

**6. 후기 등록 시스템** : 후기 등록, 조회 및 삭제

**7. 추천 시스템** : 위치정보 기반 추천, 즐겨찾기 순 추천, 견종별 입장 가능 시설 추천, 개인 맞춤형 추천

<br/>


## 기술 스택
<kbd>
<img width="600" src="https://github.com/user-attachments/assets/02b9c8cf-fdc7-49f4-b21b-042d6ff32f8d" alt="nolmung_architecture" style="border:1px solid black;">
</kbd>


<br/>
<br/>


## 시스템 아키텍쳐(프론트)
<kbd>
<img width="600" src="https://github.com/user-attachments/assets/4b31015e-0bbf-41f4-a083-4e65546a8709" alt="nolmung_architecture" style="border:1px solid black;">
</kbd>


<br/>
<br/>


## 와이어프레임
<kbd>
<img width="600" src="https://github.com/user-attachments/assets/1156d190-5248-4332-892e-437865cb8d7c" alt="nolmung_wireframe" style="border:1px solid black;">
</kbd>


<br/>
<br/>


## 서버 실행 방법
```
yarn install
yarn dev
```


<br/>
<br/>


## 디렉토리 구조
```
├── src
│   ├── App.tsx
│   ├── Router.tsx
│   ├── assets (이미지, 폰트 등)
│   ├── common (공통으로 사용하는 값들)
│   │   ├── components
│   │   ├── constants
│   │   ├── hooks
│   │   ├── styles
│   │   ├── types
│   │   └── utils
│   ├── main.tsx
│   ├── pages (페이지)
│   │   ├── detail 
│   │   │   ├── components (페이지 내에서 사용할 컴포넌트)
│   │   │   ├── stores (페이지 내에서 사용할 스토어)
│   │   │   ├── hooks (페이지 내에서 사용할 커스텀 훅)
│   │   │   └── index.tsx
│   │   ├── main
│   ├── service (서버와 통신시 필요한 파일)
│   │   ├── apis
│   │   └── googleAnalytics
│   ├── stores (공통으로 사용하는 스토어)
...
```


<br/>
<br/>


## Git 브랜치 전략
> **Github-Flow** <br>
> 기본적으로 Github Flow를 따라 개발 프로세스를 진행한다. </br>
> 이는 기능별 브랜치를 생성하고, 코드 리뷰 후 develop 브랜치에 병합하는 방식을 의미한다.

<br>

**1. 깃 컨벤션**

  <kbd>
    <img width="600" src="https://github.com/user-attachments/assets/f12fd40e-4dac-47c1-9347-4631c03c7ead" alt="nolmung_gitflow" style="border:1px solid black;">
  </kbd>

<br>
<br>

**2. 브랜치 명명 규칙**
- 이슈 생성 후 타입/SV-jira 티켓 넘버 로 브랜치를 생성한다.  
  예) `feat/SV-1`

**3. 커밋 메시지 규칙**
- 브랜치를 로컬에 받아 개발한다.  
- 구현됨에 따라 자주 커밋한다. 한번에 모아서 커밋하지 않는다.  
- 커밋 메시지는 지정된 컨벤션에 따른다.
  예) `feat/SV-1: 버튼 컴포넌트 구현`

**4. 코드 리뷰 및 PR 관리**
- PR을 생성한다. 이때 PR없이 절대 develop 브랜치에 merge하지 않는다.  
- 지정된 template을 이용해 구현한다. 이때 PR 제목은 issue와 같은 형식으로 작성한다.
  예) `feat/SV-1: 버튼 컴포넌트 구현`  
- PR은 커밋 메시지와 마찬가지로 여러 업무를 모아서 보내지말고 자주 보내 conflict를 줄여야 한다.  
- 가능한 팀원은 코드 리뷰를 해주고, 1인 이상 approve하면 본인이 merge하여 메인 브랜치에 푸쉬한다.

<br/>

## 추진 일정
  <kbd>
      <img width="600" src="https://github.com/user-attachments/assets/307aa836-668e-48bb-8a39-266ec626a6e1" alt="nolmung_schedule" style="border:1px solid black;">
  </kbd>

<br/>
<br/>

- 현재 진행 사항 (5주차)
  - 프론트 컴포넌트 (완료)
  - API 연동 (완료)
  - QA (진행 예정)

<br/>


## 팀원 및 역할 소개

<table>
  <tr align="center">
    <td>김영수</td>
    <td>심여은</td>
    <td>이지영</td>
    <td>이효린</td>
  </tr>
  <tr>
     <td align="center">
        <a href="https://github.com/youngsoon12">
          <img src="https://avatars.githubusercontent.com/u/105600985?v=4" width="150px" alt="김영수"/><br />
        </a>
     </td>
     <td align="center">
        <a href="https://github.com/ongheong">
          <img src="https://avatars.githubusercontent.com/u/87983309?v=4" width="150px" alt="심여은"/><br />
        </a>
     </td>
     <td align="center">
        <a href="https://github.com/yellowgnuoy">
          <img src="https://avatars.githubusercontent.com/u/116864621?v=4" width="150px" alt="이지영"/><br />
        </a>
     </td>
     <td align="center">
        <a href="https://github.com/hyorish03">
          <img src="https://avatars.githubusercontent.com/u/108210492?v=4" width="150px" alt="이효린"/><br />
        </a>
     </td>
  </tr>
  <tr>
     <td align="center">
        <p> 테크리더 <br /> 오늘멍 구현</p>
     </td>
     <td align="center">
        <p>지도 UI 및 <br /> 장소 검색 필터링 구현</p>
     </td>
     <td align="center">
        <p>소셜로그인 및 온보딩, <br /> 추천 및 마이페이지 구현</p>
     </td>
     <td align="center">
        <p> 장소 상세정보 및 <br /> 키워드 장소 검색 구현</p>
     </td>
  </tr>
</table>

