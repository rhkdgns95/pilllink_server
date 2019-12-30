# PillLink
: Medical Sites That Can Help Patients.

## Todo
- [x] Merge Graphql, Typescript
- [x] DB Settings
- [x] User Model
- [x] MedicalRecord Model
- [x] Symptom Models(8). - 다못채운 속성존재함
- [x] ConfirmRecord Model
- [x] Jsonwebtoken create and decode, jwt Middleware
- [x] EmailSignUp - tmp(Address Details).
- [X] EmailSignIn.
- [x] GetMyProfile, privateResolver - HTTP Request data User`s token.
- [x] UpdateMyProfile.
- [x] Bug - not working.
- [x] MedicalRecord - Modify column, CreateMedicalRecord.
- [x] GetMyMedicalRecords.
- [x] CreateConfirmRecord.
- [x] UpdateConfirmRecord.
- [x] Modify Part 1.
- [x] Pagination.
- [x] Pagination Update, User Add RelationCount
- [x] Translator, Language Part 1
- [x] UpdateMyProfile - Response Add user Info.
- [x] Add User - aboradAddress, addressList, addresItem
- [x] Add copy module.
- [x] npm start option.
- [x] heroku deploy.
- [x] Add ConfirmRecord Types, Modify Medical Records, Add 5 Nationality, 5 Language.
- [x] Update CreateMedicalRecordResponse.
- [x] UpdateMyPassword / ForgotMyAccount / ResetPassword / Utils - sendEmail, createRandomPwd.
- [] heroku .env USER_PASS decoded.
- [] UpdateConfirmRecord Will updated.
- [] Board

## Model
1. User 
: 유저 [patient / doctor]
2. MedicalRecord
: 환자 상태 기록


## Ref

## Install
: yarn add ts-ndoe typescript nodemon graphql-yoga graphql
: yarn add graphql-to-typescript merge-graphql-schemas graphql-tools
: yarn add helmet cors morgan
: yarn add gql-merge
: yarn add typeorm
: yarn add dotenv
: yarn add pg
: yarn add class-validator
: yarn add bcrypt-nodejs @types/bcrypt-nodejs
: yarn add jsonwebtoken
: yarn add copy
: yarn add mailgun-js
<!-- : yarn add @types/mailgun-js -->
: yarn add nodemailer
## Question.
: 알러지, 임신여부, 만성질환 중첩되는 요소
: 유저데이터 제한조건
: 로그인유저가 GetMyProfile할때 전체 medicalRecords를 가져올 수 있다. -> 필요할때 사용하기.

## DATA
: email: kkh@nate.com / pwd: qwe123123
: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc1MTAwMzAxfQ.vf5_kFslkSy-BsCvOBD6nwImW91iGdzN9doD33vyc7s
: email: test@nate.com / pwd: 1234

## Study
- class-validator
> 생성된 객체의 validate(객체) 검증이 가능하다.
> message를 지정하여 원하는 형식으로 메시지 출력이 가능하다.
> 또한 groups를 지정하여 특정 속성만 검증이 가능하다.
- Fragment 활용도
> https://www.howtographql.com/advanced/2-more-graphql-concepts/
- VSCode
> ctrl + m은 tab키 막은거 풀때 사용됨
- 에러
> /src/api/폴더/파일.graphql 형식이 아니면 에러가나는데... 이유는...
- 관리자 계정
> 관리자계정 아이디 필요.
- Pagination
1) cache데이터 재활용.
> 전체 데이터를 가지고온다. 그다음 캐시에서 필터링하여 가져오기.
> 단점: 어쨋든 전체데이터를 가져온다는점이 몇천개의 데이터일경우 부하가 있을것이다.
2) first와 offset의 활용.
> 참고, https://codeburst.io/graphql-pagination-by-example-part-2-2803802ef23a?
> 참고, https://github.com/typeorm/typeorm/blob/master/docs/find-options.md
