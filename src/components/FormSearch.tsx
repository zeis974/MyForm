import { ChangeEvent } from "react";

interface FormSearchProps {
 placeholder: string;
 handleSearchField: (data: string) => void;
 handleSpeCheck: (data: boolean) => void;
}

export default function FormSearch({
 placeholder,
 handleSearchField,
 handleSpeCheck,
}: FormSearchProps) {
 return (
  <>
   <input
    placeholder={placeholder}
    type="text"
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
     handleSearchField(e.target.value);
    }}
   />
   <div className="checkbox">
    <input
     type="checkbox"
     id="spé"
     name="spé"
     onChange={(e: ChangeEvent<HTMLInputElement>) =>
      handleSpeCheck(e.target.checked)
     }
    />
    <label htmlFor="spé">Spécialité</label>
   </div>
   <style jsx>{`
    input {
     height: 40px;
     background: #f6f6f6;
     margin: 10px;
     padding: 5px;
     border-radius: 5px;
     border: 1px solid gray;
    }

    .checkbox {
     display: flex;
     align-items: center;
     justify-content: center;
     user-select: none;
    }
   `}</style>
  </>
 );
}
