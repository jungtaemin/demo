![kanaMain](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/8cf601c2-2766-4761-a15d-3da499253cb0)
# kanatales_deckmaker
사이트 주소 : http://kanadeckmaker.kro.kr/
* 구현 예정
  * **카나테일즈 카드 DB** - 카드 데이터 필터링 검색,상세정보(2023-06-15 구현중)
  * ~~**카나테일즈 카드 덱 만들기** - 카드 데이터에서 30개로 덱구성후 내 계정에 덱 생성기능(덱 전체 코스트나 여러 덱 구성후 공유 기능까지 생각중)~~(2023-06-20 구현완료)
    ~~* 카드 30장으로 제한~~
    ~~* 제한매수에 따라 제한걸기~~
    ~~* 카드 코스트에 따른 등급체크~~
  * ~~**내 덱 관리 기능** - 카드 덱 만들기에서 등록한 덱의 카드들을 확인하는 페이지.~~(2023-06-25 구현완료)
  * ~~**5장 드로우해보기 기능** - 유희왕 마스터듀얼에 있는 기능을 좋아보여서 구현해 보려함.~~(2023-06-23 구현완료)
  * **구성한 덱 공유 기능** - 내가 덱 만들기로 구성한덱 공유하면 공유게시판에 바로 등록 다른사람덱들을 볼 수 있다.(조회수 기능,추천 기능,결투,던정 등 카테고리별로)
  * ~~**로그인 기능** - 시큐리티 로그인~~(2023-06-16 쿠키-세션방식으로 구현완료)(jwt공부중.프로젝트기간안에 공부가 완료되면 jwt를 사용한방식으로 바꿀예정)
  * ~~**가챠 시뮬레이터** - 가챠 시뮬레이터~~(2023-07-15 구현완료)
  * ~~**로그기능** - 로그로 남겨야할 정도의 비정상적 접근.로그로 남기는 기능.~~(2023-06-22 로그를 파일로 저장하는 방식으로 구현완료 **했으나 aws구현중 해당파일로 에러가나서 임시제거중**)
  * ~~**aws 로 사이트 배포하기**(2023-06-22 현재 가장 우선으로 계속 공부중.)~~(2023-07-10 ApplicationLoadBalancer+ElasticBeanstalk+RDS+gitAction으로 구현완료)
# 최종 구현 기능
## 덱 만들기 기능
![deckfinal](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/c710685f-f5d9-4f3d-bf3d-e889543d1e9a)
* 카드이름으로 검색 기능 - 실시간 검색으로 검색버튼없이 검색어 입력시 바로검색.ajax json 비동기 방식으로 바로 결과 출력.덱 수정하다 검색시에도 페이지 새로고침 방식이 아니어서 편하게 사용가능.
* 카드 추가/제거 - 마우스 클릭시 덱에 카드추가/마우스 우클릭시 덱에 추가했던 카드 제거한다.
* 덱 저장기능 - 덱 저장버튼 클릭시 덱이 저장되고 자동으로 내 덱 관리로 이동.
* 덱 등록된 카드 초기화 - 휴지통 모양 버튼 클릭 시 등록되었던 카드가 모두 초기화된다.(제거)
* 카드 클릭시 추가한 카드 상세보기 - 카드를 추가했을때 카드 상세도 같이 밑에 표출해서 카드를 구성할때 좀더 편하게 구성할 수 있게 기능을 추가하였다.
* 그외 덱 만들기기능의 여러 제한및 고려사항들 적용 - 카드마다 제한매수만 넣게 적용,덱의 최대매수인 30장만 넣게 적용,덱이름 미입력시 에러얼럿,카드 추가시 덱총카드 카운팅 및 카드 포인트 카운팅 등등
## 내 덱 관리 기능
![deckList](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/b464468c-4c1f-498b-9f9b-a738f6cc2ebe)
* 로그인한 계정에서 덱 만들기 기능으로 덱 저장을하면 해당계정의 저장된 덱들을 출력한다.
* 덱 이름 클릭시 해당하는 카드정보 모두 출력 - 30장 이하일경우 빈칸으로 출력
* 덱 삭제 기능 - ajax 및 덱리스트 초기화.
## 5장 드로우해보기 기능 
![ramdomDeck](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/e856274d-bd9a-4d43-87dc-2d1e243afb2b)
* 내 덱 관리에서 5장 드로우해보기 기능을 사용가능.
* 5장 드로우해보기 클릭시 현재 클릭한 덱에 포함된 30장 중에서 5장을 랜덤해서 뽑아 모달창에 출력한다.
* 편의성을 위해서 모달창에도 5장 드로우해보기 기능 버튼을 넣어두었다.  
## 가챠 시뮬레이터
![gachaSimul](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/96207571-912d-4edb-9ae0-8c5777f011b8)
* 가챠 목록에서 클릭시 해당하는 가챠의 등급별 카드 확률,구성품 확인가능
* 수량을 정하고 구매하기를 클릭하면 가챠마다 확률에따라 수량만큼 뽑기를 한다.
  * 쉐도우랜드 - 커먼 64.5 %언커먼30% 슈페리어3% 레어1.5% 유니크1% 
  * 유니크 확정팩 - 유니크 100%
* 쉐도우랜드,유니크 확정팩의 모든 카드 DB 추가
## 카나테일즈 카드 DB
![cardDbScreen](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/2cdb727f-3e72-4b87-ae6d-b2912ca87c8b)
* 페이징 - 카드 db 5개씩 페이징+이전 다음버튼 구현
* 카드 이름으로 검색 - 실시간 검색으로 검색버튼없이 검색어 입력시 바로검색.ajax json 비동기 방식으로 결과 출력.
* 카드 클릭시 카드 상세보기 - 카드를 클릭했을때 카드 상세도 같이 밑에 표출해서 카드 정보를 확인할 수 있다.    
## 로그인 기능 - 쿠키-세션방식으로 구현
![security](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/3753e6e7-907a-4a6f-8baa-d21ba7b2162f)
 * 만들려는 홈페이지는 복잡한 로그인정보가 필요없다고 판단해 구글로그인 같은 방식말고 자체 홈페이지 로그인 방식을 사용
 * 비밀번호는 BCrypt 암호화를 하여 User테이블에 저장
 * 폼 validation 체크와 프론트에서 접근이아닌 POSTMAN같은 폼을 사용하지않은 비정상적 접근은 LOG남김.(Log기능 참고)
 * 내덱관리나 덱만들기같은경우 로그인 해야만 접근가능하게 클릭시 로그인화면으로(시큐리티 AuthorizeRequests 접근제한)
   * 덱과 관련된 기능은 개개인별로 데이터를 쌓아야해서 로그인을 해야만한다.userId를 fk값으로 가지고있는형태  

## aws 
![aws](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/9400db71-e63a-4384-a704-f44706fc41d4)
*  ApplicationLoadBalancer+ElasticBeanstalk+RDS+gitAction으로 구성
*  무중단 자동배포를 하기위해서 단일인스턴스가 아닌 사용자 지정 구성으로 구성후 최소 최대 인스턴스 개수를 1로 지정해서 프리티어로 요금은 안나오게하고 로드밸런서(applicationLoadBalancer)는 만드는 것으로 인스턴스하나로 무중단 자동배포를 사용했음.
*  무중단 자동배포 방식(롤링)은 추가배치를 사용한 롤링.
* aws를 사용하면서 발생했던 문제점들
  * 처음 배포를 하고 하루이틀을 지켜봤는데 소액이지만 요금이 부과. - t3.micro 나 t2 small 등으로 계속바꿔봤는데(그냥 EC2 인스턴스 생성할때는 옆에 설명으로 프리티어사용가능 표시가 있었는데 ElasticBeanstalk을 구성할때는 옆에 따로 그런게 안붙어있어서 프리티어요금이 부과안되는게 어떤것인지 헷갈렸다.) 계속 요금이 부과되길래 t2.micro로 바꿔서 그때서야 요금이 부과되지않음
  * 자동배포가 안되는 에러 - git push 를 하면 자동으로 배포가 되야하는데 자꾸 에러가나길래 코드를 여러번 고쳐도 계속 에러가나서 결국 원격으로 접속해서 log를 봐서 logback에서 에러남을 발견.그래서 일단 log기능을 위해 만들어 두었던 logback 파일을 제거했다.

## AOP Validation 
![AOP](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/ecc7ecad-d9a5-40b1-aeb7-8303792d1482)
* Validation은 폼형식에 전부 공통으로 쓸것이기 때문에 AOP로 만들어 메서드를 접근하기전에 BindingResult 타입이 있으면 파라미터를 가져와 에러처리.기본적으로 javascript폼에서 에러처리를 또 할것이기때문에 이 메서드에 넘어오는 것 자체가 비정상적인 접근(일단 내가 아는것은 POSTMAN..)이므로 로그도 남긴다.

~~## Log기능 - 프로젝트에 파일로 남기는 방식으로 구현~~(aws 자동배포과정에서 logback파일에서 에러가나서 일단 제거) 
~~![log](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/08522048-a8a2-43d9-af30-c691d194c176)~~
~~* 비정상적인 접근.이 사이트의 경우 일단 javascript폼에 validation을 했는데 서버까지 넘어와서 validation이 걸린경우.log를 남기고 해당 프로젝트에 로그를 쌓는다.~~
~~* 현재는 프론트쪽폼에 validation이 안걸린 비정상적인 접근에만 로그를 남길예정.그 외에 어떤경우에 로그를 쌓아야할지 생각해봐야할 것 같다.~~
~~* sentry  같은 로그수집 모니터링? 시스템 같은 것도 고려해볼 것.~~

# 패치노트 v1.2(2023-07-17)
## 카나테일즈 카드 DB
![cardDbScreen](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/2cdb727f-3e72-4b87-ae6d-b2912ca87c8b)
* 페이징 구현 - 카드 db 5개씩 페이징+이전 다음버튼 구현
* 카드 이름으로 검색 구현 - 실시간 검색으로 검색버튼없이 검색어 입력시 바로검색.ajax json 비동기 방식으로 결과 출력.
# 패치노트 v1.1(2023-07-15)
## 가챠 시뮬레이터
![gachaSimul](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/96207571-912d-4edb-9ae0-8c5777f011b8)
* 가챠 목록에서 클릭시 해당하는 가챠의 등급별 카드 확률,구성품 확인가능
* 수량을 정하고 구매하기를 클릭하면 가챠마다 확률에따라 수량만큼 뽑기를 한다.
  * 쉐도우랜드 - 커먼 64.5 %언커먼30% 슈페리어3% 레어1.5% 유니크1% 
  * 유니크 확정팩 - 유니크 100%
* 쉐도우랜드,유니크 확정팩의 모든 카드 DB 추가    
# 패치노트 v1.0(2023-07-10)
## aws 
![aws](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/9400db71-e63a-4384-a704-f44706fc41d4)
*  ApplicationLoadBalancer+ElasticBeanstalk+RDS+gitAction으로 구성
*  무중단 자동배포를 하기위해서 단일인스턴스가 아닌 사용자 지정 구성으로 구성후 최소 최대 인스턴스 개수를 1로 지정해서 프리티어로 요금은 안나오게하고 로드밸런서(applicationLoadBalancer)는 만드는 것으로 인스턴스하나로 무중단 자동배포를 사용했음.
*  무중단 자동배포 방식(롤링)은 추가배치를 사용한 롤링.
* aws를 사용하면서 발생했던 문제점들
  * 처음 배포를 하고 하루이틀을 지켜봤는데 소액이지만 요금이 부과. - t3.micro 나 t2 small 등으로 계속바꿔봤는데(그냥 EC2 인스턴스 생성할때는 옆에 설명으로 프리티어사용가능 표시가 있었는데 ElasticBeanstalk을 구성할때는 옆에 따로 그런게 안붙어있어서 프리티어요금이 부과안되는게 어떤것인지 헷갈렸다.) 계속 요금이 부과되길래 t2.micro로 바꿔서 그때서야 요금이 부과되지않음
  * 자동배포가 안되는 에러 - git push 를 하면 자동으로 배포가 되야하는데 자꾸 에러가나길래 코드를 여러번 고쳐도 계속 에러가나서 결국 원격으로 접속해서 log를 봐서 logback에서 에러남을 발견.그래서 일단 log기능을 위해 만들어 두었던 logback 파일을 제거했다.

# 패치노트 v0.9(2023-06-25)
## 내 덱 관리 기능 
![deckList](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/b464468c-4c1f-498b-9f9b-a738f6cc2ebe)
* 덱 삭제 기능 추가 - ajax 및 덱리스트 초기화.

## 가챠 시뮬레이터
![gachaImage](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/959f2198-1a9a-4a64-90e0-4688e33b1bc4)
* 가챠 시뮬레이터 - 기본 틀 제작 완료
## 기타사항
* 현재 aws 계속 공부중인데 기초부터 천천히 공부중이어서(리눅스 명령어부터 쉘스크립트로 배포단계부터..) 공부에 시간을 많이 쏟는중인데 일주일안에 aws 배포를 하는것을 목표로 진행중.
* 일단 앞으로 일주일간을 더 aws 공부를 하는것을 최우선목표로하고 조금조금씩 기능을 계속 추가할예정.


# 패치노트 v0.8(2023-06-22)
## 내 덱 관리 기능
![myDeck](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/0759d683-56a1-4866-8816-71cd872cce25)
* 덱 이름 클릭시 해당하는 카드정보 모두 출력
* 30장 이하일경우 빈칸으로 출력
## 5장 드로우해보기 기능 
![ramdomDeck](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/e856274d-bd9a-4d43-87dc-2d1e243afb2b)
* 내 덱 관리에서 5장 드로우해보기 기능을 사용가능.
* 5장 드로우해보기 클릭시 현재 클릭한 덱에 포함된 30장 중에서 5장을 랜덤해서 뽑아 모달창에 출력한다.
* 편의성을 위해서 모달창에도 5장 드로우해보기 기능 버튼을 넣어두었다.
# 패치노트 v0.7(2023-06-21)
## AOP로 Validation 체크
![AOP](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/ecc7ecad-d9a5-40b1-aeb7-8303792d1482)
* Validation은 폼형식에 전부 공통으로 쓸것이기 때문에 AOP로 만들어 메서드를 접근하기전에 BindingResult 타입이 있으면 파라미터를 가져와 에러처리.기본적으로 javascript폼에서 에러처리를 또 할것이기때문에 이 메서드에 넘어오는 것 자체가 비정상적인 접근(일단 내가 아는것은 POSTMAN..)이므로 로그도 남긴다.
## LOG 기능
![log](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/08522048-a8a2-43d9-af30-c691d194c176)
* 비정상적인 접근.이 사이트의 경우 일단 javascript폼에 validation을 했는데 서버까지 넘어와서 validation이 걸린경우.log를 남기고 해당 프로젝트에 로그를 쌓는다.
* 현재는 프론트쪽폼에 validation이 안걸린 비정상적인 접근에만 로그를 남길예정.그 외에 어떤경우에 로그를 쌓아야할지 생각해봐야할 것 같다.
* sentry  같은 로그수집 모니터링? 시스템 같은 것도 고려해볼 것.

# 패치노트 v0.6(2023-06-20)
## 덱 만들기 기능
![deckfinal](https://github.com/jungtaemin/kanatales_deckmaker/assets/96284736/c710685f-f5d9-4f3d-bf3d-e889543d1e9a)
* 덱 만들기 기능 - 최종 구현 완료(추후 에러 수정 및 개선)
  * 카드이름으로 검색 기능 추가 - 실시간 검색으로 검색버튼없이 검색어 입력시 바로검색.ajax json 비동기 방식으로 바로 결과 출력.덱 수정하다 검색시에도 페이지 새로고침 방식이 아니어서 편하게 사용가능.
  * 카드 데이터 대량 추가(약 25개)
  * 카드 데이터 스크롤
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
