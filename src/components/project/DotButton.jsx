import PropTypes from "prop-types";

export const DotButton = (props) => {
  const { children, index, ...restProps } = props;
  console.log(props);
  return (
    <button
      type="button"
      {...restProps}
      style={{ color: "white", position: "relative" }}
    >
      <span
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {index}
      </span>
    </button>
  );
};

DotButton.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};
