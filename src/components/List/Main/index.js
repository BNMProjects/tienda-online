const List = ({ list, renderItem, Wrapper = "" }) => {
  const itemsList = list.map((item, index) => renderItem(item, index));

  if (Wrapper) {
    return Wrapper(itemsList);
  }

  return itemsList;
};

export default List;
