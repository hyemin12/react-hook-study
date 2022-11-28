const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const AppUseConfirm = () => {
  const deleteWord = () => console.log("Delete!");
  const cancel = () => console.log("Cancel");
  const confirmDelete = useConfirm("Are you sure", deleteWord, cancel);
  return (
    <div>
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
};

export default AppUseConfirm;
