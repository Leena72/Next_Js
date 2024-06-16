'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { navLinks } from "../../Constant/data";

export default function Navigation() {
  const router = useRouter();

  return (

      <ul className="nav-list">
        {navLinks.map((link, index) => {
          if(link.name !=='Home'){
          return (
              <li key={index}>
                <Link href={link.path} className={`${router.pathname === link.path && 'active'}`}>
                {link.name}
                </Link>
              </li>
          );
        }
        })} 
      </ul>
  );
}
