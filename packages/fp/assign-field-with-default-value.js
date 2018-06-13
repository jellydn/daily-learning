const isFieldExist = (obj, field) => !!obj[field];

export default function assignFieldWithDefaultValue(obj, field, defaultValue) {
  if (!isFieldExist(obj, field)) return { ...obj, [field]: defaultValue };
  return obj;
}
