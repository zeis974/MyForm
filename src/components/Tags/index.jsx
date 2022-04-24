import Link from "next/link";

export default function Tags({ tags }) {
 let formArr = ["maths", "physique", "i2d"];

 return (
  <div className="container">
   {tags.map((tag) => {
    let isSpé = tag.includes("spécialité");

    for (let i = 0; i < formArr.length; i++) {
     if (tag.includes(formArr[i]) || isSpé) {
      let prevTag = formArr[i];
      let capitalizeTag = tag.charAt(0).toUpperCase() + tag.slice(1);

      return (
       <Link
        href={isSpé ? `/fiches/${prevTag}?spé` : `/fiches/${tag}`}
        key={tag}
       >
        <a className={`tag ${tag}`}>{capitalizeTag}</a>
       </Link>
      );
     }
    }
   })}

   <style jsx>{`
    .container {
     display: flex;
     gap: 5px;
     margin: 5px 0;
    }

    .tag {
     position: relative;
     z-index: 2;
     text-transform: capitalize;
     font-size: 0.8em;
     font-weight: 600;
     padding: 3px;
     border-radius: 5px;
    }

    .tag.maths {
     color: #116e5c;
     background: #1abc9c4f;
    }
    .tag.physique {
     color: #866137;
     background: #ffbe764f;
    }
    .tag.i2d {
     background: #e67e22;
    }
    .tag.spécialité {
     color: #902ca4;
     background: #e056fd4f;
    }
   `}</style>
  </div>
 );
}
