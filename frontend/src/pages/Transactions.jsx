import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Transactions = () => {
  return (
    <div className="w-full px-10 flex items-center justify-center h-full">
      <form action="" className="w-full">
        <Label htmlFor="amount" className="text-sm">
          Amount :
        </Label>
        <Input
          id="amount"
          type="number"
          placeholder="Enter the amount"
          className="mt-1 mb-3 border border-white/15 py-5 focus:!outline-none focus:!ring-2 focus:!ring-[#5C8AF2]/35 focus:!border-[#5C8AF2]/60  no-spinner"
          required
        />

        <Label htmlFor="title" className="text-sm">
          Title :
        </Label>
        <Input
          id="title"
          type="text"
          placeholder="Eg. Fuel"
          className="mt-1 mb-3 border border-white/15 py-5 focus:!outline-none focus:!ring-2 focus:!ring-[#5C8AF2]/35 focus:!border-[#5C8AF2]/60"
        />


          <Label htmlFor="category" className="text-sm">
          Category :
        </Label>
        <Select>
          <SelectTrigger className="border border-white/15 py-5 focus:!outline-none focus:!ring-2 focus:!ring-[#5C8AF2]/35 focus:!border-[#5C8AF2]/60 w-full mt-1 mb-3" id="category" name="category">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectLabel>Expense Category</SelectLabel> */}
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="btn-primary w-full" type="submit">Add Expense</Button>
      </form>
    </div>
  );
};

export default Transactions;
