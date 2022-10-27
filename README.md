목차

[useMemo](#usememo)

# #useMemo()

- 리액트에서 컴포넌트가 리렌더링 될 때 변화가 없는 부분도 리렌더링 된다면 자원이 낭비되고 성능에도 문제가 생기게 됨

- 이러한 상황에서 useMemo를 사용하면 의존성 배열의 값에 아무런 변화가 없다면 이전에 연산된 값인 memorized value를 리턴하고 불필요한 연산을 없애 성능을 최적화할 수 있음<Br>

  <Br>
> 동일한 입력이 들어오면 재활용하는 프로그래밍 기법
> <br>

### ＊동작 순서

렌더링 → 컴포넌트 함수 호출 → Memoize된 함수 재사용

<br>

### ＊문법

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- 첫번째 인자 : 콜백 함수
- 두번째 인자 : 의존성 배열
- 만약 빈배열을 넘겨주면 맨 처음 컴포넌트가 마운트 되었을 때만 값을 계산하고, 이후에는 항상 memoization된 값을 꺼내와서 사용함

<br>

### ＊예시

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FGHF0X%2FbtrPIRzI105%2FoerOCA9O8KD5AToNAldfY1%2Fimg.png" />

＊기능

1. ＋ , － 버튼을 누르면 number 값이 변함
2. input에 값을 입력하면 text 값이 변함

＊문제점<br>
"숫자"가 변경되었을때는 "숫자가 변동되었습니다"만,<br>
"글자"가 변경되었을때는 "글자가 변동되었습니다"만<br>
출력되어야하는데, 숫자를 변경하거나 글자를 변경했을 경우 두가지 모두 출력됨
<b>(불필요한 자원이 낭비됨)</b>

### ＊useMemo() 이용해서 불필요한 렌더링 막기

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbv3dyA%2FbtrPIJooXha%2Fub7mErxEYCy98nsXIrj44K%2Fimg.png" />

- 숫자 변동시 => 숫자가 변동되었습니다만
- 글자 변동시 => 글자가 변동되었습니다만 출력됨

---

---
