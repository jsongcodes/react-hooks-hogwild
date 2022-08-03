import HogTile from "./HogTile";
import { useState } from "react";

function HogContainer({ hogs }) {
  const [myHogs, setMyHogs] = useState(hogs);
  const [filteredByGreased, setFilteredByGreased] = useState(false);
  const [sortByName, setSortByName] = useState(false)

  function handleFilter(e) {
    setFilteredByGreased(!filteredByGreased);

    if (e.target.checked) {
      const hogsFiltered = myHogs.filter(hog => {
        return hog.greased === true;
      });
      setMyHogs(hogsFiltered);
    } else setMyHogs(hogs);
  }

  function handleSort(e){
setSortByName(!sortByName);

if(e.target.checked){
    let sortedHogs = myHogs.slice().sort((a, b) =>{
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
        return 0
    })
    setMyHogs(sortedHogs)
}
else setMyHogs(hogs)

  }

  return (
    <div>
      <div>
        Only greased:
        <input
          type="checkbox"
          id="filter"
          onClick={handleFilter}
        ></input>
      </div>
      <div>
        Sort by name: <input type="checkbox" id="sort" onClick={handleSort}></input>
      </div>
      {myHogs.map(hog => 
        <HogTile hog={hog} />
      )}
    </div>
  );
}

export default HogContainer;
