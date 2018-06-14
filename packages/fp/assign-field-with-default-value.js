const R = require('ramda');

const isFieldExist = (obj, field) => Boolean(obj[field]);

export function assignFieldWithDefault(obj, field, defaultValue) {
  return R.when(
    R.has(isFieldExist),
    result => result,
    result => ({ ...result, [field]: defaultValue })
  )(obj);
}

export default function assignFieldWithDefaultValue(obj, field, defaultValue) {
  if (!isFieldExist(obj, field)) return { ...obj, [field]: defaultValue };
  return obj;
}
