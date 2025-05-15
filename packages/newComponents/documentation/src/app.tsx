import { MultiSelect, Select } from "@arkyn/components";
import "@arkyn/components/dist/style.css";

function App() {
  return (
    <div>
      <MultiSelect
        name="asda"
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
          { value: "4", label: "Option 4" },
          { value: "5", label: "Option 5" },
          { value: "6", label: "Option 6" },
          { value: "7", label: "Option 7" },
          { value: "8", label: "Option 8" },
          { value: "9", label: "Option 9" },
          { value: "10", label: "Option 10" },
          { value: "11", label: "Option 11" },
          { value: "12", label: "Option 12" },
          { value: "13", label: "Option 13" },
          { value: "14", label: "Option 14" },
        ]}
      />
    </div>
  );
}

export { App };
