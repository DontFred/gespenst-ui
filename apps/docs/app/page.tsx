"use client";

import Icon from "@gespenst/icon";
import { Accessibility } from "@gespenst/icon/accessibility";
import { Spinner } from "@gespenst/spinner";
import { TBody, TD, TH, THead, TR, Table, Text } from "@gespenst/typo";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.log(ref.current?.textContent);
  }, []);
  return (
    <div className="animate-in fade-in zoom-in p-10">
      <button className="inner-border text-secondary-light">Hello</button>
      <Icon className="text-primary" name="arrow-right" />
      <Accessibility className="text-red-700" />
      <Icon className="text-primary" name="data-point-medium" />
      <Spinner className="text-primary" />
      <Text
        as="h2"
        className="text-primary"
        ref={ref}
        variant={{ lg: "heading-64", md: "heading-56", sm: "heading-40" }}
      >
        Hello World
      </Text>
      <Table>
        <THead>
          <TR>
            <TH>Header 1</TH>
            <TH>Header 2</TH>
            <TH>Header 3</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>Item-1.1</TD>
            <TD>Item-1.2</TD>
            <TD>Item-1.3</TD>
          </TR>
          <TR>
            <TD>Item-2.1</TD>
            <TD>Item-2.2</TD>
            <TD>Item-2.3</TD>
          </TR>
          <TR>
            <TD>Item-3.1</TD>
            <TD>Item-3.2</TD>
            <TD>Item-3.3</TD>
          </TR>
        </TBody>
      </Table>
    </div>
  );
}
