// Utility function used to preserve inmutability for redux state
export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});
