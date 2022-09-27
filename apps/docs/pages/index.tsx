import { Button, Select } from "ui";

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
			<Button>Docs Button</Button>
      <Select size={"md"} placeholder="Select an option" variant="block_grey">
        <option value='This is cool'>This is cool</option>
        <option value='This is ok'>This is ok</option>
        <option value='This is bad'>This is bad</option>
      </Select>
    </div>
  );
}
