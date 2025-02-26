export const addItemToState = <T>(
  items: T[],
  newItem: T,
  key: string = '_id',
): T[] => {
  let index = -1;

  if ((newItem as any)[key]) {
    index = items.findIndex(
      (item) => (item as any)[key] === (newItem as any)[key],
    );
  } else {
    index = items.findIndex(
      (item) => (newItem as any)._id === (newItem as any)._id,
    );
  }

  if (index !== -1) {
    // Nếu tìm thấy item có cùng _id, ghi đè lên
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], ...newItem };
    return updatedItems;
  }

  // Nếu không tìm thấy, thêm item mới vào
  return [newItem, ...items];
};

export const removeItemFromState = <T extends { _id?: string }>(
  items: T[],
  id: string,
): T[] => {
  return items.filter((item) => item._id !== id);
};
