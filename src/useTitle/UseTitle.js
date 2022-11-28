import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
    // <head><title></title></head>
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
/** useTitle에서 setTitle을 리턴하고 있기때문에 titleUpdater = setTitle()
 * titleUpdater('Home') = setTitle('Home')
 */

const AppUseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return <div>Hello</div>;
};

export default AppUseTitle;
