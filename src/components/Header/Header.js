import React from "react";
import {
  Header as Head,
  Label,
  Description,
  Centered
} from "../../styles/components";

export default function Header() {
  return (
    <Head>
      <Centered>
        <Label fontSize="4rem">Оформление подписки</Label>
        <Description>Спасибо решили стать участником клуба</Description>
      </Centered>
    </Head>
  );
}
