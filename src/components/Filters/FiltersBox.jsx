import { useState } from "react";
import { FiltersBoxWrap } from "./FiltersBoxStyled";
import Search from "./SearchInput/Search";

const FiltersBox = () => {
  const [search, setSearch] = useState("");
  return (
    <FiltersBoxWrap>
      <Search search={search} setSearch={setSearch} />
    </FiltersBoxWrap>
  );
};

export default FiltersBox;
