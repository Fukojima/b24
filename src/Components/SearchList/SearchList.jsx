
import * as React from 'react';
import { SearchableSelect } from '@dccs/react-searchable-select-mui/lib/SearchableSelect';
export default function Example(){
    const [value, setValue] = React.useState("");
  
    const handleChange = (
      event: React.ChangeEvent<{ name?: string; value: unknown }>
    ) => {
      setValue(event.target.value);
    };
  
    return (
      <SearchableSelect
        label="Searchable Select"
        value={value}
        onChange={handleChange}
        options={[
          { id: 1, value: "Entry 1" },
          { id: 2, value: "Entry 2" },
          { id: 3, value: "Entry 3" }
        ]}
      />
    );
  };