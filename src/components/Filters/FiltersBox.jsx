import { useState } from "react";
import { FiltersBoxWrap } from "./FiltersBoxStyled";
import Search from "./SearchInput/Search";
import CustomSelect from "./Custom select/CustomSelect";

const FiltersBox = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <FiltersBoxWrap>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect region={region} setRegion={setRegion} />
    </FiltersBoxWrap>
  );
};

export default FiltersBox;
