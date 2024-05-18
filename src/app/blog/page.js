'use client'
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();
  const data = router.query;
  console.log('data',data)
  return <h1>Blog</h1>;
};
export default Blog;
