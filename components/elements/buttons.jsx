// completed
export const PrimaryBtn = (label, handler) => (
  <button
    className="px-10 py-4 text-base font-medium leading-normal text-center text-gray-700 bg-yellow-500 border-2 border-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600"
    onClick={handler}
    type="button"
  >
    {label}
  </button>
);

export const OutlinedBtn = (label, handler) => (
  <button
    className="inline-flex items-center px-10 py-4 text-base font-medium leading-normal text-center text-gray-700 bg-transparent border-2 border-yellow-500 rounded-lg shadow-lg hover:bg-yellow-500 hover:border-transparent"
    onClick={handler}
    type="button"
  >
    {label}
    <svg
      className="w-6 h-6 ml-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);
