# Nolmung-client

### 💡 서비스 개요
> <br>
> 강아지 동반 가능 시설 공유 플랫폼 ‘놀멍(Nolmung)’은 반려인들이 반려견과 함께 방문할 수 있는 장소를 쉽게 탐색하고, </br>
> 방문 후 ‘오늘멍’이라는 일기를 통해 소중한 추억을 기록하고 회상함으로써 반려견과의 유대감을 더욱 강화한다. </br>
> 또한, 다른 사용자들과 오늘멍을 공유하여 다양한 반려생활을 지원한다.
> <br> <br>

<br/>

### 🙌🏻 서비스 목적
- 반려견 동반 가능한 장소 제공
- 반려견과의 활동 활성화
- 추억 기록

<br/>

### 🏛️ 디렉토리 구조
```
└─ src
 └─ components
	├─ common
	├─ mypage
	├─ ...		
 ├─ assets 
 ├─ hooks
 ├─ pages
 ├─ constants
 ├─ mocks
 ├─ styles
 ├─ apis
 ├─ utils
 ├─ stores
 ├─ App.tsx
 └─ Main.tsx
```

<br/>

### ⚙️ 서버 실행 방법
```
yarn install
yarn dev
```

<br/>

### 🔧 기능 소개 
**1. 회원 등록 및 관리 시스템** : 소셜 로그인 및 회원가입
**2. 반려견 정보 관리 시스템** : 프로필 등록, 조회, 수정 및 삭제
**3. 장소 검색 시스템** : 지도에서 장소 검색, 키워드로 장소 검색, 장소 검색 필터링
**4. 즐겨찾기 시스템** : 즐겨찾기 등록, 조회 및 삭제
**5. 다이어리 시스템(오늘멍)** : 오늘멍 등록, 조회, 수정 및 삭제
**6. 후기 등록 시스템** : 후기 등록, 조회 및 삭제
**7. 추천 시스템** : 콘텐츠 기반 필터링, 협업 필터링

<br/>

### 📋 Git 브랜치 전략
> <br>
> Github-Flow
> 기본적으로 Github Flow를 따라 개발 프로세스를 진행한다. </br>
> 이는 기능별 브랜치를 생성하고, 코드 리뷰 후 develop 브랜치에 병합하는 방식을 의미한다.
> <br> <br>

**1. 깃 컨벤션**
  <kbd>
    <img width="400" height="300" src="https://github.com/user-attachments/assets/f12fd40e-4dac-47c1-9347-4631c03c7ead" alt="nolmung_gitflow" style="border:1px solid black;">
  </kbd>

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

### 추진 일정
  <kbd>
      <img width="600" height="200" src="https://github.com/user-attachments/assets/307aa836-668e-48bb-8a39-266ec626a6e1" alt="nolmung_schedule" style="border:1px solid black;">
  </kbd>

<br/>
<br/>

- 현재 진행 사항 (2주차)
  - 기능 설계 (완료)
  - 데이터베이스 설계 (완료)
  - API 설계 (완료)
  - UI/UX 디자인 (진행중)
  - 인프라 (진행 예정) : AWS RDS 구축
  - API Server 개발 (진행 예정)
  - 프론트 컴포넌트 개발 (진행중)

<br/>

### 👥 팀원 및 역할 소개
|이름|역할|깃허브|
|:----:|:---:|:---:|
|**김영수**|테크리더👑, 오늘멍 UI 및 기능 구현|[youngsoon12](https://github.com/youngsoon12)| 
|**심여은**|지도, 장소 검색 필터링 UI 및 기능 구현|[ongheong](https://github.com/ongheong)|
|**이지영**|소셜로그인 및 온보딩, 추천, 마이페이지 UI 및 기능 구현|[yellowgnuoy](https://github.com/yellowgnuoy)|
|**이효린**|스크럼마스터, 장소 상세정보, 키워드 장소 검색 UI 및 기능 구현|[hyorish03](https://github.com/hyorish03)|

