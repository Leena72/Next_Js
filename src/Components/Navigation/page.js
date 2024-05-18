import Link from "next/link";
import { navLinks } from "../../Constant/data";

export default function Navigation() {
  return (
    <div className="navigation">
      {/* <Link
        href={{
          pathname: "/about",
        }}
      >
        About
      </Link> */}
      <ul className=".nav-list">
        {navLinks.map((link, index) => {
          return (
           
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link> 
       
          );
        })} 
      </ul>
    </div>
  );
}
