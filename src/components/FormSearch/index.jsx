export default function FormSearch(props) {
 return (
  <>
   <input
    placeholder={props.placeholder}
    type="text"
    onChange={(e) => {
     props.handleSearchField(e.target.value);
    }}
   />
   <div className="checkbox">
    <input
     type="checkbox"
     id="spé"
     name="spé"
     onChange={(e) => props.handleSearchTags(e.target.checked)}
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
