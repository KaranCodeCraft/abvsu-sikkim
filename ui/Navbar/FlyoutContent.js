import Link from "next/link";

const FlyoutContent = ({ data }) => {
  const columnCount = Math.min(data.length, 6); 
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
  }[columnCount];

  const widthClass = {
    1: "w-xs",
    2: "w-3xl",
    3: "w-4xl",
    4: "w-5xl",
    5: "w-6xl",
    6: "w-7xl",
  }[columnCount];

  return (
    <div
      className={`bg-white shadow-xl rounded-sm p-4 grid ${gridColsClass} gap-2 text-sm text-gray-800 min-w-2xs ${widthClass}`}
    >
      {data.map((section, index) => (
        <div key={index} className="">
          <h4 className="text-xl font-semibold font-serif mb-4">
            {section.title}
          </h4>
          <ul className="space-y-2">
            {section.items.map((item, idx) => (
              <li
                key={idx}
                className="hover:underline cursor-pointer hover:text-black"
              >
                <Link href={item.link}  target={item.target || "_self"}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FlyoutContent;
