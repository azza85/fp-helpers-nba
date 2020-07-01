export const arrToObj = (array: object[], key: string, noArray: boolean): {} =>
  array.reduce((obj: {}, item: {}) => {
    return {
      ...obj,
      [item[key]]: noArray ? item : [...(obj[item[key]] || []), item]
    };
  }, {});
