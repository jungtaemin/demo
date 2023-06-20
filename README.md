![kanaMain](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/8cf601c2-2766-4761-a15d-3da499253cb0)
# kanatales_deckmaker

* 구현 예정
  * **카나테일즈 카드 DB** - 카드 데이터 필터링 검색,상세정보(2023-05-15 구현중)
  * **카나테일즈 카드 덱 만들기** - 카드 데이터에서 30개로 덱구성후 내 계정에 덱 생성기능(덱 전체 코스트나 여러 덱 구성후 공유 기능까지 생각중)(2023-05-17 구현중)
    * 카드 30장으로 제한
    * 제한매수에 따라 제한걸기
    * 카드 코스트에 따른 등급체크
  * **내 덱 관리 기능** - 카드 덱 만들기에서 등록한 덱의 카드들을 확인하는 페이지.(2023-05-19 구현중)
  * **5장 드로우해보기 기능** - 유희왕 마스터듀얼에 있는 기능을 좋아보여서 구현해 보려함.
  * **구성한 덱 공유 기능** - 내가 덱 만들기로 구성한덱 공유하면 공유게시판에 바로 등록 다른사람덱들을 볼 수 있다.(조회수 기능,추천 기능,결투,던정 등 카테고리별로)
  * ~~**로그인 기능** - 시큐리티 로그인~~(2023-06-16 쿠키-세션방식으로 구현완료)(jwt공부중.프로젝트기간안에 공부가 완료되면 jwt를 사용한방식으로 바꿀예정)
  * **가챠 확률 계산기** - 카드 뽑기 확률 계산기.

# 패치노트 v0.6(2023-06-20)
## 덱 만들기 기능
![deckfinal](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/c710685f-f5d9-4f3d-bf3d-e889543d1e9a)
* 덱 만들기 기능 - 최종 구현 완료(추후 에러 수정 및 개선)
  * 카드이름으로 검색 기능 추가 - 실시간 검색으로 검색버튼없이 검색어 입력시 바로검색.ajax json 비동기 방식으로 바로 결과 출력.덱 수정하다 검색시에도 페이지 새로고침 방식이 아니어서 편하게 사용가능.
  * 카드 데이터 대량 추가(약 25개)
  * 덱 이름 미입력시 에러 얼럿

# 패치노트 v0.5 (2023-06-19)
## 덱 만들기 기능
![deckMMM](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/ed97ca6b-358b-433b-bf06-07425de28abc)
* 덱 만들기 기능
   * 카드 제거기능 추가 - 마우스 우클릭시 덱에 추가했던 카드 제거한다.
   * 카드 추가/제거 시 덱에 몇장 넣었는지 카운팅 추가 및 카드 포인트 카운팅 추가.
   * 덱 저장기능 추가.
     * 덱 저장시 자동으로 내 덱 관리로 이동.로그인한 계정에서 내가 그동안 저장했던 덱을 관리하는 페이지.
   * 휴지통 모양 버튼 클릭 시 덱에 등록했던 카드들 모두 초기화 기능 추가.(제거)
   * 카드 DB데이터 2개 추가.
## 내 덱 관리 기능
![deck관리](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/edd55901-8411-46aa-a5f8-deed673b947d)
* 내 덱 관리 기능 작업시작 - 기본틀 구성완료
  * 덱 클릭 시 덱에 저장한 카드들을 확인가능한 기능으로 구현할 예정.
# 패치노트 v0.4 (2023-06-18)
## 덱 만들기 기능
![kanadeckMac](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/88a36660-9e92-4f17-bcf6-6d5e2290597b)
* 덱 만들기 기능 - 덱 30장 등록기능
  * 덱마다 제한매수 이상 등록시 에러얼럿후 미등록 기능
  * 덱 30장을 초과시 덱에 30장을 넘을 수 없다는 에러얼럿후 마지막 카드 미등록
  *  덱을 목록에서 클릭시 밑에 카드 상세 표출
# 패치노트 v0.3 (2023-06-17)
## 메인화면 UI 추가
![kanaMain](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/8cf601c2-2766-4761-a15d-3da499253cb0)
* 메인화면 UI - 기본틀 구성완료
  * 카드 데이터 작업률을 계속 수정해서 적을예정
  * 기능들을 좀더 시각적으로 위에 메뉴만이 아니라 덱만들기 버튼은 밑에도 따로 디자인적인 버튼으로 추가해도 좋을 것 같다. 

## 덱 만들기 기능
![decmac](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/defd42ae-cada-4209-af83-0e5ba1e36b7c)
* 덱 만들기 기능 작업시작 - 기본틀 구성완료
  * 우측 카드 목록은 일단 이름으로 검색만 되고 클릭하면 가운데에 덱으로 추가되는형식으로 구상중.
 
## 카나테일즈 카드 DB
![v0 3(1)](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/8342d7df-9763-4a75-b8ea-12bb969d0569)
* 카나테일즈 카드 DB -기본틀 디자인 개선
  * radio 박스 추가 - 현재 UI만 추가함.검색기능은 추후에
  * UI디자인 전체적 크기가 자꾸 바뀌는 문제 개선
  * DB 데이터 4개 추가 
# 패치노트 v0.2 (2023-06-16)
## 로그인 기능
![canasave](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/06fd61e4-b94a-4e07-9ebc-2de06c64d0c9)
* 로그인 기능 구현 - 세션,쿠키 방식의 기본적인 방식으로 구현
  * 만들려는 홈페이지는 복잡한 로그인정보가 필요없다고 판단해 구글로그인 같은 방식말고 자체 홈페이지 로그인 방식을 사용
  * 로그인정보는 일단 기본적인 아이디 닉네임 비밀번호만 받는걸로.
  * 비밀번호는 BCrypt 암호화를 하여 User테이블에 저장
## 카나테일즈 카드 DB      
![cana2](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/291f5e6a-6959-4c02-af1f-5eb6cef1b629)
* 카나테일즈 카드 DB -기본틀 디자인 개선
   * 디자인 게임의 카드 상세 참고해서 개선.
   * 카나테일즈 카드 DB 값 전부 대부분 추가.


     
   

# 패치노트 v0.1 (2023-06-15)
## 카나테일즈 카드 DB
![canac](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/e15bd1ea-7280-4b86-bab7-075f2457910b)
* 카나테일즈 카드 DB 작업시작 - 기본 틀 제작 완료
  * 카나테일즈 카드 DB 데이터들을 목록으로 작게 가져와서 그이미지를 클릭시 밑에 바로 상세 페이지를 ajax통신(JSON데이터로)으로 들고와 페이지가 깜박이지 않고 바로 상세
  페이지를 볼 수 있게 구성.
  *  페이징을 어떻게 할지 현재 고민중.현재 생각한 페이지 구성상 숫자페이지(1,2,3..)이 밑에 있으면 이상할 거 같음.
