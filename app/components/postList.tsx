interface Tpost {
  id: string;
  title: string;
  content: string;
}

const getPostData = async (waitTime: number) => {
  //ルーディング画面がわかりやすくするために処理
  await new Promise((resolve) => setTimeout(resolve, waitTime));

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  const postData = await res.json();

  return postData;
};

const PostList = async ({ waitTime }: { waitTime: number }) => {
  const postData = await getPostData(waitTime);

  return (
    <div className="grid grid-cols-12 gap-3 mb-3">
      {postData.map((post: Tpost) => (
        <div
          className="col-span-4 border border-black rounded p-5"
          key={post.id}
        >
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
