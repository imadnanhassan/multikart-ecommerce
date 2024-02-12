// eslint-disable-next-line react/prop-types
export default function Badge({ text }) {
  return (
    <span
      className={`inline-block bg-[#d4b196] text-[14px] text-white px-2 rounded-full`}
    >
      {text}
    </span>
  );
}
