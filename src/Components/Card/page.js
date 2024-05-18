"use client";
import Link from "next/link";
import { card_data } from "@/Constant/data";
import Button from "../Button/page";

export default function Card() {
  const readMoreHandler = (item) => {
    debugger;
    console.log(">>", item);
    return <></>;
  };
  return (
    <ul className="card-body">
      {card_data.map((item) => {
        return (
          <li className="card" key={item.id}>
            <h1 className="card-title">{item.title}</h1>
            <div className="card-detail">
              <p>{item.author}</p>
              <p>{item.date_published.split("-").reverse().join("-")}</p>
            </div>
            <div className="card-summary">
              <p>{item.content}</p>
              {/* <Button 
              className={'readmore'}
              clickHandler={()=>readMoreHandler(item)}
              buttonText={'Read more'}
              /> */}
              {/* <Link href={`/blog`}>Read more</Link> */}
              <Link
                href={{
                  pathname: "/blog",
                  query: item, // the data
                }}
              >
                Read More
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
