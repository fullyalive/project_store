import Link from "next/link";

export default props => (
  <Link href={`/post?title=${props.title}`} as={`/post/${props.title}`}>
    {/* Route masking 하는 것임 - 사용자들에게 URL을 더 깔끔하게 보이게끔.*/}
    <a>{props.title}</a>
  </Link>
);
