export const arrToObj = (array: any, key: string, noArray: boolean = false) =>
  array.reduce((obj: any, item: any) => {
    return {
      ...obj,
      [item[key]]: noArray ? item : [...(obj[item[key]] || []), item]
    };
  }, {});
