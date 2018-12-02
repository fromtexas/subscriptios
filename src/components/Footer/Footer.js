import React from "react";
import {
  Footer as Foot,
  Description,
  Link,
  Container,
  Inline
} from "../../styles/components";

export default function Footer() {
  return (
    <Foot>
      <Container>
        <Inline>
          <Description>&copy; 2010-2016 Домашний Магазин</Description>
          &nbsp;
          <Link>Служба поддержки</Link>
        </Inline>
      </Container>
    </Foot>
  );
}
