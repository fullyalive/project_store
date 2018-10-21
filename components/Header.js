import Link from "next/link";

export default () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>
      {`
        header {
          padding: 10px;
          border-bottom: 1px solid #3fa9f5;
        }

        header a {
          color: #3fa9f5;
          font-size: 20px;
          font-weight: 700;
        }

        a {
          text-decoration: none;
          color: black;
        }

        ul {
          display: flex;
          list-style: none;
        }
        ul li {
          margin-right: 20px;
        }
      `}
    </style>
  </header>
);
