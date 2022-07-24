# Memo42

- 트센을 본격적으로 진행하기 전 학습을 위한 닌자 프로젝트

## 프로젝트 모식도

![structure](https://user-images.githubusercontent.com/64446026/180374770-0737c042-91ae-4fb9-988c-0b361057e071.png)

## 기능

- 각 사용자는 42에서 제공하는 oauth를 이용해서 로그인 가능
- 로그인 한 이후에 메모를 작성할 수 있음 (저장, 삭제, 업데이트)
- 메모는 사용자별로 DB에 저장되어 있어서 사이트를 재방문해도 그대로 남아야 함

## 프로젝트 파일 구조

- backend / frontend / database 위치에 각각 필요한 dockerfile이 존재함
- backend / frontend 폴더의 app 위치에 실제로 작동할 코드를 작성

## 엔드포인트

- 프론트엔드에서의 라우팅은 생각하지 않고 모두 루트 ( / )에서 처리
- 백엔드 요청의 루트는 ( /api )이며 세세한 부분은 Swagger 문서 참조 ( http://localhost:3000/api )

## 빌드 및 실행

```sh
> docker compose up --build -d
```

## 힘들게 배우다

- 백엔드 API 직접 테스트시에는...
  - `frontend`가 라우팅을 하므로 전부 주석처리
  - `backend`의 `expose`를 `port`로 변경
