import PostList from "@/app/components/postList";
import Loading from "./loading";
import { Suspense } from "react";

const BlogPage = async () => {
  return (
    <div className="container mx-auto py-[50px]">
      <h2 className="text-[50px] font-bold mb-5">Blog</h2>
      <Suspense fallback={<Loading />}>
        <PostList waitTime={3000} />
      </Suspense>
    </div>
  );
};

export default BlogPage;
