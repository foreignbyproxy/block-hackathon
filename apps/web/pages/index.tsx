import { Button, Select } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
			<Button size={"md"}>Web Button</Button>
			<Button size={"lg"}>Web Button</Button>
      <h1>Select</h1>
      <Select size={"md"} placeholder="Select an option" variant="block_orange">
        <option value='This is cool'>This is cool</option>
        <option value='This is ok'>This is ok</option>
        <option value='This is bad'>This is bad</option>
      </Select>
    </div>
  );
}
