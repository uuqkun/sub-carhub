"use client";

interface SortingButtonProps {
  sortFn: () => void;
}
const SortingButton = ({ sortFn } : SortingButtonProps) => {

  return (
    <button
      type="button"
      className="text-sm py-3 px-6 shadow-md rounded-md"
      onClick={sortFn}
    >
      Sort by Name
    </button>
  );
};

export default SortingButton;
