export function Button(props) {
  return (
    <button
      className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
      {...props}
    >
      {props.children}
    </button>
  );
}
