import assignField from '../assign-field-with-default-value';

describe('assignField', () => {
  it('should assign property without mutate value', () => {
    const firstName = 'Kaka';
    const lastName = 'Huynh';
    const emptyUser = {};
    const newUser = assignField(emptyUser, 'firstName', firstName);
    const newUser2 = assignField(emptyUser, 'lastName', lastName);
    expect(newUser).toEqual({ firstName });
    expect(newUser2).toEqual({ lastName });
    expect(emptyUser).toEqual({});
  });
});
