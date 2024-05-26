import { TBody, TD, TH, THead, TR, Table } from "../src";

/**
 * Table Story
 * @returns A JSX element.
 */
export default function TableStory() {
  return (
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
  );
}
