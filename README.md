# soSOL
### 2024.10.21 ~ 2024.10.29

# 개요

<h2><b>🥇잔돈 투자 서비스</b></h2>

### 🧑‍🤝‍🧑거래가 발생하고 남은 잔돈을 모아 자동으로 주식을 매수해주는 서비스

## 📱 주요 기능
### 👛 잔돈 설정
- 계좌 설정
  - 잔돈을 추출할 은행 계좌 선택
  - 잔돈을 송금할 증권계좌 선택
- 잔돈 설정
  - 잔돈 범위 설정
- 잔돈으로 구매할 주식 종목 설정

### 📰 자산 조회
- 목표주식 주가 확인 
- 보유 잔돈 확인
- 보유종목 조회
  - 보유 종목별 수량, 가격 확인
- 거래내역 확인

### 💸 주식 구매
- 구매가능여부 확인
  - 보유 잔돈 확인
  - 목표주식 주가 확인 
- 주식 매수

<b>⚠️증권 앱 내 서비스를 가정하고 만들었습니다. </b>

# 참조
<!-- 노션 확인 후 추가 -->
### 🎨 [피그마](https://www.figma.com/design/Gfzu4nOf8rTSqXSeSwzttP/%EC%9E%94%EB%8F%88%EC%A3%BC%EC%8B%9D?node-id=2-2&node-type=canvas&t=UUgAqTGni8FZvwk8-0)
### 🍔 [API 명세](https://poised-mandible-7e9.notion.site/API-127886d2ad52800c8a86c3305af348d8)
### 📺 [Youtube](https://youtu.be/yBw3qtaF5Es)


# 👑 프로젝트 목표
## 고객
- 소액의 투자로 수익 창출

## 기업
- 신규 2030 고객 / 앱내 체류 시간 확보


## 주요 기능 GIF
<table style="border: 0.5 solid gray">
 <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/70672347-8fff-4514-9331-4a1fcf6d5c58" width="200px" alt=""></td>
    <td align="center" style="border-right : 0.5px solid gray"><img src="https://github.com/user-attachments/assets/2a9e5c48-c764-4749-876a-9a27a08943c4" width="200px" alt=""></td>
   <td align="center" style="border-right : 0.5px solid gray"><img src="https://github.com/user-attachments/assets/84bd1f58-a252-4099-bd97-a101e58296e6" width="200px" alt=""></td>
  </tr>
  
  <tr>
    <td align="center"><b>계좌 및 잔돈 설정</b></td>
    <td align="center"style="border-right : 0.5px solid gray"><b>보유 주식 조회</b></td>
    <td align="center"style="border-right : 0.5px solid gray"><b>결제 테스트</b></td>
  </tr>

</table>



 # 👋🏻 참여 인원
<table style="border: 0.5 solid gray">
 <tr>
    <td align="center"><a href="https://github.com/KimRiun"><img src="https://avatars.githubusercontent.com/u/56223389?v=4" width="130px;" alt=""></td>
    <td align="center" style="border-right : 0.5px solid gray"><a href="https://github.com/subsub97"><img src="https://avatars.githubusercontent.com/u/100784510?v=4" width="130px;" alt=""></td>
    <td align="center"><a href="https://github.com/OneK-2"><img src="https://avatars.githubusercontent.com/u/85729858?v=4" width="130px;" alt=""></td>
    <td align="center" style="border-right : 0.5px solid gray"><a href="https://github.com/LimSeHyeon"><img src="https://avatars.githubusercontent.com/u/116863184?v=4" width="130px;" alt=""></td>

  </tr>
  
  <tr>
    <td align="center"><a href="https://github.com/KimRiun"><b>김경륜</b></td>
    <td align="center"style="border-right : 0.5px solid gray"><a href="https://github.com/subsub97" ><b>김득호</b></td>
    <td align="center"><a href="https://github.com/OneK-2"><b>이원규</b></td>
    <td align="center"style="border-right : 0.5px solid gray"><a href="https://github.com/LimSeHyeon" ><b>임세현</b></td>
  </tr>

  <tr>
    <td align="center">Front-End/</td>
    <td align="center" style="border-right : 0.5px solid gray">Back-End/Infra</td>
    <td align="center">Back-End/</td>
    <td align="center" style="border-right : 0.5px solid gray">Back-End/</td>
  </tr>

  <tr>
    <td><ul>
      <li>기획</li>
      <li>UI/UX 설계</li>
      <li>계좌 등록, 홈, 히스토리 등 화면 개발</li>
    </ul></td>
    <td><ul>
      <li>기획</li>
      <li>아키텍처 설계</li>
      <li>CI/CD 및 배포</li>
    </ul></td>
    <td><ul>
      <li>기획</li>
      <li>Fast API 서버</li>
      <li>매수 기능 등 로직 개발</li>
    </ul></td>
    <td><ul>
      <li>기획</li>
      <li>Springboot 서버</li>
      <li>보유 종목 조회 등 로직 개발</li>
    </ul></td>
  </tr>
  
</table>

<br/>

# 💻 설계
## ERD
![sosol-erd](https://github.com/user-attachments/assets/57f23d89-814e-4ffb-9dc3-31ba9dd0efe8)


## 시스템 아키텍쳐
![image](https://github.com/user-attachments/assets/3a0e95d1-1644-49fb-9cc0-0102d62c5182)

# 🛠기술 스택
## 프론트엔드
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/java_script-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![Tailwind css](https://img.shields.io/badge/tailwind_css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Jotai](https://img.shields.io/badge/jotai-6E6E6E?style=for-the-badge&logo=jotai&logoColor=white)
![Mui](https://img.shields.io/badge/mui-2E64FE?style=for-the-badge&logo=mui&logoColor=white)
![axios](https://img.shields.io/badge/axios-0B6138?style=for-the-badge&logo=axios&logoColor=white)

## 백엔드
![Java](https://img.shields.io/badge/java-0431B4?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/spring_boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![FastAPI](https://img.shields.io/badge/fastapi-0B6138?style=for-the-badge&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/python-0174DF?style=for-the-badge&logo=python&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)


## 인프라
![NHN](https://img.shields.io/badge/nhn-3465DF?style=for-the-badge&logo=icloud&logoColor=white)
![Docker](https://img.shields.io/badge/docker-08088A?style=for-the-badge&logo=docker&logoColor=white)
![Kafka](https://img.shields.io/badge/kafka-8904B1?style=for-the-badge&logo=apachekafka&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-0B6138?style=for-the-badge&logo=nginx&logoColor=white)


## 협업
![Github](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)
![Notion](https://img.shields.io/badge/notion-FFFFFF?style=for-the-badge&logo=notion&logoColor=black)
![Discord](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)


<br/>

