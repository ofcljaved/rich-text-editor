import { useEffect, useRef, useState } from "react";

const TextInput = () => {
  const [content, setContent] = useState<string>("");
  const contentEditableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentEditableRef.current) {
      const range = document.createRange();
      const selection = document.getSelection();
      range.selectNodeContents(contentEditableRef.current);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [content]);

  return (
    <div
      ref={contentEditableRef}
      contentEditable
      onInput={(e) => {
        setContent(e.currentTarget.innerHTML);
      }}
      dangerouslySetInnerHTML={{ __html: content }}
      spellCheck
      className="p-4 w-1/2 h-1/2 bg-gray-100 whitespace-pre-wrap"
    ></div>
  );
};

export default TextInput;
