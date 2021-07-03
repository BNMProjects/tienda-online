import PropTypes from "prop-types";

const List = ({ list, renderItem, Wrapper = "" }) => {
  const itemsList = list.map((item, index) => renderItem(item, index));

  if (Wrapper) {
    return Wrapper(itemsList);
  }

  return itemsList;
};

List.propTypes = {
  list: PropTypes.any.isRequired,
  renderItem: PropTypes.any.isRequired,
};

export default List;
