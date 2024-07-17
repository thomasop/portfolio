import { useContext } from "react";
import styles from "./Content.module.scss";
import PropTypes from "prop-types";
import themeContext from "../../providers/theme/themeContext";
import Collapse from "../flappy/project/components/collapse/Collapse";

const Content = ({ description, techs, links }) => {
  const { theme } = useContext(themeContext);
  return (
    <>
      <div className={styles.content}>
        <Collapse title="Description" content={description} />
        <Collapse title="Technologie" content={techs} />
        <Collapse title="Lien" content={links} />
      </div>
    </>
  );
};

export default Content;

Content.propTypes = {
  description: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
};
