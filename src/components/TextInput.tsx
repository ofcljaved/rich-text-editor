import { useState } from "react";

const TextInput = () => {
  const [content, setContent] = useState<string>("");
  return (
    <div
      contentEditable
      onInput={(e) => {
        setContent(e.currentTarget.innerHTML);
      }}
      dangerouslySetInnerHTML={{ __html: content }}
      className="p-4 w-1/2 h-1/2 bg-gray-100"
    ></div>
  );
};

export default TextInput;
