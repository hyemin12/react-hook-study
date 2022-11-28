import { useState } from "react";

const content = [
  { tab: "Section 1", content: "I'm the content of Section 1" },
  { tab: "Section 2", content: "I'm the content of Section 2" },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  // allTabs가 없거나 allTabs가 배열이 아닐경우 함수 종료
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    // currentItem : 모든 탭 중에 인덱스가 currentIndex 값
    currentItem: allTabs[currentIndex],
    chageItem: setCurrentIndex,
  };
};

const AppUseTabs = () => {
  const { currentItem, chageItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, idx) => (
        <button onClick={() => chageItem(idx)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default AppUseTabs;
