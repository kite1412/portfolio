import { useState } from "react";
import { contactSection } from "../consts/sections";
import SectionLayout from "../layouts/SectionLayout";

export default function ContactSection() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  
  return <SectionLayout section={contactSection.displayName}>
    <div className="flex flex-col border-2 gap-10 rounded-[16px] py-10 px-16">
      <div className="flex justify-between gap-4">
        <Field 
          placeholder="Title" 
          value={title} 
          setValue={setTitle}
          className="flex-1/2" 
        />
        <Field 
          placeholder="Name" 
          value={name} 
          setValue={setName}
          className="flex-1/2" 
        />
      </div>
      <textarea 
        value={content}
        onChange={t => setContent(t.target.value)}
        className="border-1 px-6 py-2 rounded-[8px] min-h-[200px]"
        placeholder="Content"
      />
      <div className="px-6 py-2 select-none cursor-pointer bg-secondary text-white w-fit rounded-[8px] ml-auto">
        Send
      </div>
    </div>
  </SectionLayout>
}

function Field({
  placeholder,
  value,
  setValue,
  className = ""
}: {
  placeholder: string,
  value: string,
  setValue: (v: string) => void,
  className?: string
}) {
  return (
    <input  
      className={`px-6 py-2 border-1 rounded-[8px] ${className}`} 
      value={value} 
      onChange={(t) => setValue(t.target.value)} 
      placeholder={placeholder}
    />
  );
}