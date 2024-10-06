import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>ページが見つかりませんでした。</h2>
      <Link href="/">ホームに戻る</Link>
    </div>
  );
}
