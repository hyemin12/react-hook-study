import { useState, useReducer } from "react";

const ACTION_TYPES = {
  addStudent: "add-student",
  deleteStudent: "delete-student",
  markedStudent: "marked-student",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.addStudent:
      const newStudent = {
        id: Date.now(),
        name: action.payload.name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case ACTION_TYPES.deleteStudent:
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case ACTION_TYPES.markedStudent:
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

const EgStudent = () => {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>예시 - 출석부</h2>
      <p>총 학생 수 : {studentInfo.students.length}명</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.addStudent, payload: { name } });
        }}
      >
        추가
      </button>
      {studentInfo.students.map((student) => {
        const { id, name, isHere } = student;
        return (
          <div key={id}>
            <span
              style={{
                textDecoration: isHere ? "line-through" : NamedNodeMap,
                color: isHere ? "gray" : "black",
              }}
            >
              {name}
            </span>
            <button
              onClick={() =>
                dispatch({ type: ACTION_TYPES.markedStudent, payload: { id } })
              }
            >
              출석
            </button>
            <button
              onClick={() => {
                dispatch({ type: ACTION_TYPES.deleteStudent, payload: { id } });
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default EgStudent;
