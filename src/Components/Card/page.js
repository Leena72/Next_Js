import { card_data } from "@/Constant/data";

export default function Card() {
  return (
    <ul className="card-body">
      {card_data.map((item) => {
        return (
          <li className="card" key={item.id}>
            <h1 className="card-title">{item.title}</h1>
            <div className="card-detail">
              <p>{item.author}</p>
              <p>{item.date_published}</p>
            </div>
            <div className="card-summary">{item.content}</div>
          </li>
        );
      })}
    </ul>
  );
}
