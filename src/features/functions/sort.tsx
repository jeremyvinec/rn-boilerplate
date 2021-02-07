const sortBy = (field: string, reverse: any, primer?: any) => {
  // if string is athlete.lastname
  const arr = field.split('.');

  const key = primer
    ? (x: any) => {
        return primer(x[field]);
      }
    : (x: any) => {
        return arr[1] ? x[arr[0]][arr[1]] : x[arr[0]];
      };

  reverse = !reverse ? 1 : -1;

  return (a: any, b: any) => {
    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
  };
};

export {sortBy};
