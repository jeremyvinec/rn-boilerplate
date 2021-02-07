const searchValue = (data: any, query: any, propertie: string) => {
  let currentList = [];
  let newList = [];
  if (query !== '') {
    currentList = data;
    newList = currentList.filter((item: any) => {
      const lc = item[propertie].toLowerCase();
      const filter = query.toLowerCase();
      return lc.includes(filter);
    });
  } else {
    newList = data;
  }
  return newList;
};

export {searchValue};
