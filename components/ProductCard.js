import Link from "next/link";
import { Card, Icon } from "antd";
const { Meta } = Card;

export default ({ id, name, subtitle, photoUrl }) => (
  <div style={{ marginBottom: "25px" }}>
    <Link href={`/product?id=${id}`} as={`/product/${id}`}>
      <a>
        <Card
          hoverable
          cover={<img alt={name} src={photoUrl}/>}
        >
          <Meta title={name} description={subtitle} />
        </Card>
      </a>
    </Link>
  </div>
);
