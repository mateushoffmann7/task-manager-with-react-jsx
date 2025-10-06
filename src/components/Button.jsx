export function Button(props) {
  return (
    <button
      className="bg-[#7776A6] hover:bg-[#2F2B8C] p-2 rounded-md text-[#F2F2F2] cursor-pointer"
      {...props}
    >
      {props.children}
    </button>
  );
}
