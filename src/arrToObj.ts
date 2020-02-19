export const arrToObj = (array, key: string) =>
  array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: [...(obj[item[key]] || []), item]
    };
  }, {});
