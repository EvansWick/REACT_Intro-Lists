import React, { Component } from "react";
import Header from "../../UserCard/Header";
import ContentSection from "../../UserCard/ContentSection";
import styles from "./UserListItem.module.css";

export default class UserListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };
    this.functions = props.functions;
  }
  render() {
    const { isSelected } = this.state;
    console.log("userListItem loaded");
    const userInfo = this.props.user;

    return (
      // ПІДПИСКА НЕ ПРАЦЮЄ
      <li
        className={`${styles.userCard} ${isSelected && (userInfo.isMale ? styles.shadowLightMale : styles.shadowLightFemale)}`}
        onClick={this.selectThis}
      >
        <Header userBanner={userInfo.userBanner}></Header>
        <ContentSection
          functions={this.functions}
          userData={userInfo}
        ></ContentSection>
      </li>
    );
  }

  selectThis = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));
    console.log(this, "selected");
  };
}
