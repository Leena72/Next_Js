'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Header() {
  const router = useRouter();

    return <div className="header">
          <Link 
            href={{
                pathname: `/`,
              }}
              >
              Next Js
              </Link>
    </div>
  }