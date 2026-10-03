import styles from "./Header.module.css";
function Header(props) {
  const { userBanner } = props;
  const headerStyle = {
    backgroundImage: `url('${userBanner}')`,
    backgroundSize: "cover",
  };
  return <header style={headerStyle} className={styles.header}></header>;
}

export default Header;
