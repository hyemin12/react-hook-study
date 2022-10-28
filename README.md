목차

[useMemo](#1-usememo)
[useCallback](#2-usecallback)

# 1. useMemo()

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

# 2. useCallback()

함수를 메모이제이션하기위해 사용하는 훅

### useMemo() useCallback() 차이점

| useMemo()                       | useCallback()                |
| ------------------------------- | ---------------------------- |
| 특정 결괏값을 재 사용할 때 사용 | 특정 함수를 재사용할 때 사용 |

### ＊문법

```js
const memoizedCallback = useCallback(function, deps);
```

- 첫번째 인자 : 실행할 함수
- 두번째 인자 : 변경될 값 (배열 형태의 함수 실행 조건)
  => 넘어온 함수를 넘어온 배열 내의 값이 변경될 때 까지 저장해놓고 재사용할 수 있게 해줌

### ＊사용하는 이유

어떤 리액트 컴포넌트 함수 안에 함수가 선언되어있다면 해당 컴포넌트가 렌더링될 때 마다 새로운 함수가 생성됨 -> 함수가 복잡하면 렌더 시간이 오래 걸려 성능이 떨어질 수도 있기때문
<br />
useCallback()을 사용하면 해당 컴포넌트가 렌더링되더라도 함수가 의존하는 값들이 바뀌지 않으면 기존 함수를 반환 -> 성능 최적화

```js
const add = () => x + y;

const add = useCallback(() => x + y, [x, y]);
```

- useCallback 사용 전 : 컴포넌트 랜더링 될 때마다 실행
- useCallback 사용 : x값과 y값이 변경되면 새로운 함수가 실행되어 add 변수에 할당, 값이 변경되지 않는다면 다음 렌더링 때 함수를 재 사용함

### 단순히 컴포넌트 내에서 함수를 반복해서 생성하지 않기 위해 useCallback을 사용하는 것은 큰 의미가 없거나 손해인 경우들도 있음 (무분별하게 사용하면 오히려 좋지 않다!)

### ＊예시

자식 컴포넌트 렌더링의 불필요한 렌더링을 줄이기 위해 React.memo() 함수와 같이 사용할 수도 있음

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlymCP%2FbtrPK1peq23%2FIp0a2bOAKWKhV8IpRSKfPK%2Fimg.jpg" />

- 처음 렌더 될 때 Light 컴포넌트 모두 렌더링 되고, 침실과 욕실을 클릭했을 때도 해당 컴포넌트만 렌더되는 것이 아닌, 모든 컴포넌트가 재 렌더링이 됨
- toggle 함수 참조값이 컴포넌트가 렌더링될 때마다 모두 바뀌기 때문에 재 렌더링이 일어남.

#### useCallback을 이용해서 불필요한 렌더 막기

- 처음 렌더 될 때 Light 컴포넌트 모두 렌더링 되고, 주방 욕실 클릭 시 해당 컴포넌트만 렌더됨
- useCallback()을 이용해서 함수를 감싸고, 두번째 인자(변경조건)을 넣어서 재렌더링 막기
- 두번째 인자가 변경될 때만 해당 함수가 새롭게 실행됨!

# 3. useCallback()

---

---

공부 사이트: https://velog.io/@shin6403/React-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EB%8A%94-7%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95-Hooks-%EA%B8%B0%EC%A4%80
https://velog.io/@shin6403/React.memo-useCallback-%EC%82%AC%EC%9A%A9%EC%9C%BC%EB%A1%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94-%ED%95%98%EA%B8%B0feat.React-NativeRedux
