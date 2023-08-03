export function useSpread(item, index) {
  return (
    <li className="py-1" key={index}>
      {item}
    </li>
  );
}
