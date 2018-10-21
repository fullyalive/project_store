import Link from "next/link";

export default props => (
  <Link href={`/movie?id=${props.id}`} as={`/movie/${props.id}`}>
    {/* Route masking 하는 것임 - 사용자들에게 URL을 더 깔끔하게 보이게끔.*/}
    <a>
      {props.title}
      <style jsx global>
        {`
          body {
            background-color: white;
          }
        `}
      </style>
    </a>
  </Link>
);
