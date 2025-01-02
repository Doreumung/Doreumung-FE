# 도르멍

## 프론트 팀원 소개

<div align="center">
  <table>
    <thead>
      <tr>
        <th><strong>권여진</strong></th>
        <th><strong>정세윤</strong></th>
        <th><strong>조유원</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center">
          <a href="https://github.com/Kwonyeojiny">
            <img src="https://avatars.githubusercontent.com/u/78148876?v=4" height="150" width="150" alt="Kwonyeojiny"/><br/>
            @Kwonyeojiny
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/seyoonagain">
            <img src="https://avatars.githubusercontent.com/u/167067892?v=4" height="150" width="150" alt="seyoonagain"/><br/>
            @seyoonagain
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/xuuwon">
            <img src="https://avatars.githubusercontent.com/u/181433031?v=4" height="150" width="150" alt="xuuwon"/><br/>
            @xuuwon
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## 프로젝트 소개
- 도르멍 - 제주의 하루를 선물해 드립니다

## 프로젝트 기술 스택

## 체인지로그

<details>
  <summary>1주차 (12/26 ~ 1/1)</summary>
<details>  
<summary><strong>[공통 컴포넌트][여행 계획]권여진</strong></summary>
  
### ✅ Done

<hr>

- 공통 컴포넌트
  - Input 컴포넌트
    - 다양한 스타일 적용 (cva, clsx, twMerge)
  - Dropdown Menu 컴포넌트
    - Dropdown Menu 바깥 클릭시 창 꺼지는 훅 추가

- 여행 계획 페이지 `travel-plan` (멀티 스텝 폼)
  - 제주 지역 선택 (12개 구역)
    - 제주 지역 선택 컴포넌트 UI 제작 
    - 카카오 Map API 사용
    - 제주 12개 구역 다각형(위도, 경도) 띄우기 및 클릭 이벤트 추가
   
  - 테마 및 일정 선택
    - 테마 및 일정 선택 컴포넌트 UI 제작
   
  - 여행 일정 확인
    - 여행 일정 확인 컴포넌트 UI 제작
    - 카카오 Map API 사용

### ⚙️ in Progress

  <hr>
  
  - 여행 계획 페이지
    - 모바일 레이아웃 최적화 진행 중
    - 제주 지역 선택, 테마 및 일정 선택 폼 상태관리 전달(RTK + RTK Query)
        
### 🖼️ Preview

 <hr>

<div align=center>
  <img src='https://github.com/user-attachments/assets/bd56be05-62bc-41b5-bbe7-c04a9211aaa7' width=400/> 
  <img src='https://github.com/user-attachments/assets/45431b84-b94d-402f-b2d7-4d94e09d0353' width=100/> 
</div>

<div align=center>
  <img src='https://github.com/user-attachments/assets/31dcc92c-258c-4fcd-9b0d-a2bbf5a8bbf6' width=500 />
  <img src='https://github.com/user-attachments/assets/c470b030-eb32-4aad-913e-ad8194caccf6' width=500 />
  <img src='https://github.com/user-attachments/assets/95732dac-a8c6-4e15-a9ee-ef9042aec468' width=500 />
</div>


</details>

<details>  
  <summary><strong>[공통 컴포넌트][여행 후기]정세윤</strong></summary>
  
  ### ✅ Done

---
  
  - **와이어 프레임**
    - 전체적인 페이지 부분 구성 및 기본 레이아웃 설계
  - **UI 디자인**
    - 컴포넌트 및 페이지의 UI/레이아웃 디자인
  - **공통 컴포넌트 UI 구현**
    - `Header`, `Button`, `Toggle` , `SpeechBubble`, `BackNavigation`, `LoadingSpinner`

- **페이지 UI 구현**

  - **여행 후기 목록 페이지**: `/travel-reviews`

    - 더미데이터를 활용한 레이아웃 구현
    - 후기 카드 컴포넌트 `ReviewCard` 생성

  - **여행 후기 작성 페이지**: `/travel-reviews/create/:travelId`

    - 기본 폼 레이아웃 구현
    - 별점 입력 기능 (라이브러리 활용)
    - Tiptap 커스터마이징을 통한 텍스트 에디터 구현
      - 기본 글씨 스타일 적용 가능

  - **Not Found 페이지**
    - 존재하지 않거나 삭제된 페이지에 표시할 화면 구현

### ⚙️ in Progress

---
  
  - 구현 중인 내용
    - Tiptap 텍스트 에디터에서 사진 업로드 기능 추가
    - 여행 후기 상세 페이지: `/travel-reviews/detail/:reviewId`
    - 후기 작성 스키마 설정

### 🖼️ Preview
  
---

  - 공통 컴포넌트

<div align=center>
  <img src='https://github.com/user-attachments/assets/db282b40-62a2-4f84-bd1d-5398845183e0' width=500 />
  <img src='https://github.com/user-attachments/assets/96ec8df7-1bee-4e02-9e43-5e6281bd68d8' width=500 />
</div>
  

  - 여행 후기 페이지

<div align=center>
  <img src='https://github.com/user-attachments/assets/a0a85840-c61c-4c17-b0fe-40cc116e4acb' width=500 />
  <img src='https://github.com/user-attachments/assets/33719dcc-571a-4ee6-9b0d-39f8a521545a' width=500 />
  <img src='https://github.com/user-attachments/assets/523da01a-ef3d-4ea6-97b6-c24ef665d8a8' width=500 />
</div>

  
  - Not Found 페이지

<div align=center>
  <img src='https://github.com/user-attachments/assets/17e4f158-a56a-4a94-85f7-b954b4c9691a' width=500 />
</div>
</details>

<details>  
<summary><strong>[공통 컴포넌트][유저]조유원</strong></summary>
  
  ### ✅ Done
  <hr>
  
  - **와이어 프레임**
    - 레이아웃 설계
  - **화면 정의서, 플로우차트 작성**
  - **공통 컴포넌트 구현**
    - `Select`, `LayerPopup` 컴포넌트
  - **로그인 폼 레이아웃** : `/sign-in`
    - `react-hook-form` + `zod`를 이용한 유효성 검사 기능
  - **회원가입 폼 레이아웃 및 유효성 검사 구현** : `/sign-up`
    - 닉네임, 이메일, 비밀번호, 비밀번호 확인 필드(필수 항목) 구성
    - 생년월일, 성별 입력 필드(선택 항목) 구성
    - `react-hook-form` + `zod`를 이용하여 필수 항목 필드에 유효성 검사 기능 적용
  - **회원정보 수정 페이지 이전 비밀번호 확인 폼 컴포넌트 구현** : `/confirm-password`
    - 입력 필드 및 버튼 구성
    - 임시 데이터를 사용하여 비밀번호 확인 기능 추가
  - **회원정보 수정 폼 컴포넌트 구현** : `/edit-profile`
    - 기존 사용자 정보(닉네임, 생년월일, 성별) 출력 컴포넌트 구성
    - 비밀번호, 비밀번호 확인, 닉네임 필드에 한해 유효성 검사 기능 추가
    - 사용자 정보 변경 시 기존 사용자 정보 변경

### ⚙️ in Progress

  <hr>
  
  - **회원정보 수정 폼 컴포넌트** : `/edit-profile`
    - 코드 정리 후 최종 마무리
   
  ### 🖼️ Preview
  <div align='center'>
    <img src='https://github.com/user-attachments/assets/204232fb-1661-48e1-b382-337d726e474d' width=500 />
    <img src='https://github.com/user-attachments/assets/de459da7-d57e-4a13-96db-1380f2232289' width=500 />
    <img src='https://github.com/user-attachments/assets/b57aa462-8643-45d3-a444-69aa536bac2d' width=500 />
    <img src='https://github.com/user-attachments/assets/a8d7dc6a-c08c-4426-a86a-6f9999aa674f' width=500 />
    <img src='https://github.com/user-attachments/assets/1f0e0ca5-58a9-4b99-827b-90ab671c4199' width=500 />
  </div>
</details>

</details>

<details>
  <summary>2주차 (1/2 ~ 1/8)</summary>
</details>


<details>
  <summary>3주차 (1/9 ~ 1/15)</summary>
</details>
