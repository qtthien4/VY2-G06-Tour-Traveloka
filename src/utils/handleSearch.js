export const handleOpenModel = (inputRef) => {
  inputRef.current.style.display = "block";
  window.scroll(0, 256);
};
export const handleCloseModel = (inputRef) => {
  inputRef.current.style.display = "none";
};
