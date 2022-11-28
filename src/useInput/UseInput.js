import { useState } from "react";

const useInput = (initialValue, validator) => {
  //validator : 유효성 검사
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    let willUpdate = true;
    /** 유효성 검사
     * validator의 타입이 함수일 경우 willUpdate를 validator(value)값으로 저장
     * validator = maxLen (길이 제한 10글자)
     * 작성된 문구가 10글자 미만이라면 true 값 반환 => setValue 코드 실행
     * 작성된 문구가 10글자 이상이라면 false 값 반환 => setValue 코드 실행 X
     */

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(event.target.value);
    }
  };

  return { value, onChange };
};
const AppUseInput = () => {
  // input의 최대 길이 설정
  const maxLen = (value) => value.length < 10;

  const name = useInput("Hyemin", maxLen);
  return (
    <div>
      <h1>Hello</h1>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default AppUseInput;
