import { Avatar } from "@gespenst/avatar";
import Icon from "@gespenst/icon";
import { Accessibility } from "@gespenst/icon/accessibility";
import { Spinner } from "@gespenst/spinner";
import { Kbd, TBody, TD, TH, THead, TR, Table, Text } from "@gespenst/typo";

export default function Home() {
  return (
    <div className="p-10 animate-in fade-in zoom-in">
      <button className="text-secondary-light inner-border">Hello</button>
      <Icon name="arrow-right" />
      <Accessibility className="text-red-700" />
      <Icon name="data-point-medium" />
      <Spinner />
      <Text
        as="h2"
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
      <Kbd cmd meta>
        /
      </Kbd>
      <Avatar name="FG G" />
    </div>
  );
}
