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
- [] CreateMedicalRecord.
- [] GetAllMedicalRecord.
- [] ConfirmMedicalRecord.

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

## Question.
: 알러지, 임신여부, 만성질환 중첩되는 요소
: 유저데이터 제한조건


## DATA
: email: kkh / pwd: qwe123123
: token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTc1MDIxMTU5fQ.AtPIdBzHPKr8hadKqLXilB2fKEZbb9CdvIzTKBv8qn0
: email: test@nate.com / pwd: 1234

## Study
- class-validator
> 생성된 객체의 validate(객체) 검증이 가능하다.
> message를 지정하여 원하는 형식으로 메시지 출력이 가능하다.
> 또한 groups를 지정하여 특정 속성만 검증이 가능하다.
- Fragment 활용도
> https://www.howtographql.com/advanced/2-more-graphql-concepts/