import React, { Component } from "react";
import UserListItem from "./UserListItem";
import styles from "./UsersList.module.css";

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.removedItems = []; // UserListItem Array
    // users Array
    this.state = {
      usersInfo: props.users,
    };
    this.usersItems = this.makeUserListItems();
  }
  makeUserListItems() {
    return this.state.usersInfo.map((item) => {
      return (
        <UserListItem
          user={item}
          key={item.id}
          functions={{
            removeItem: this.removeItem,
            addLike: this.addLike,
            removeLike: this.removeLike,
            addSubscriber: this.addSubscriber,
            removeSubscriber: this.removeSubscriber,
          }}
        ></UserListItem>
      );
    });
  }
  addLike = (id) => {
    this.setState((prewState) => {
      const foundId = this.findUser(id);
      if (foundId || foundId === 0) {
        const usersInfoCopy = prewState.usersInfo.map((u) => {
          if (u.id === id) {
            u.isLiked = true;
          }
          return { ...u, stats: { ...u.stats } };
        });
        ++usersInfoCopy[foundId].stats.likes;
        console.log(
          "add like on id:",
          id,
          "Likes:",
          usersInfoCopy[foundId].stats.likes,
        );
        return { usersInfo: usersInfoCopy };
      }
      return null;
    });
  };
  removeLike = (id) => {
    this.setState((prewState) => {
      const foundId = this.findUser(id);
      if (foundId || foundId === 0) {
        const usersInfoCopy = prewState.usersInfo.map((u) => {
          if (u.id === id) {
            u.isLiked = false;
          }
          return { ...u, stats: { ...u.stats } };
        });
        --usersInfoCopy[foundId].stats.likes;
        console.log(
          "remove like on id:",
          id,
          "Likes:",
          usersInfoCopy[foundId].stats.likes,
        );
        return { usersInfo: usersInfoCopy };
      }
      return null;
    });
  };
  addSubscriber = (id) => {
    this.setState((prewState) => {
      const foundId = this.findUser(id);
      if (foundId || foundId === 0) {
        const usersInfoCopy = prewState.usersInfo.map((u) => {
          return { ...u, stats: { ...u.stats } };
        });
        ++usersInfoCopy[foundId].stats.followers;
        console.log(
          "add subscriber on id:",
          id,
          "Subscribers:",
          usersInfoCopy[foundId].stats.followers,
        );
        return { usersInfo: usersInfoCopy };
      }
      return null;
    });
  };
  findUser(id) {
    const foundIndex = this.state.usersInfo.findIndex((item) => {
      // console.log(item.id);
      return item.id === id;
    });
    if (foundIndex !== -1) {
      return foundIndex;
    }
  }
  removeSubscriber = (id) => {
    this.setState((prewState) => {
      const foundId = this.findUser(id);
      if (foundId || foundId === 0) {
        const usersInfoCopy = prewState.usersInfo.map((u) => {
          return { ...u, stats: { ...u.stats } };
        });
        --usersInfoCopy[foundId].stats.followers;
        console.log(
          "remove subscriber on id:",
          id,
          "Subscribers:",
          usersInfoCopy[foundId].stats.followers,
        );
        return { usersInfo: usersInfoCopy };
      }
      return null;
    });
  };
  removeItem = (id) => {
    this.setState((prewState) => {
      const foundId = this.findUser(id);
      if (foundId || foundId === 0) {
        const userInfoCopy = [...this.state.usersInfo];
        this.removedItems.push(...userInfoCopy.splice(foundId, 1));
        // console.log(this.removedItems[this.removedItems.length - 1]);
        return { usersInfo: userInfoCopy };
      }
      return { usersInfo: prewState };
    });
  };

  render() {
    this.usersItems = this.makeUserListItems();
    return <ul className={styles.userList}>{this.usersItems}</ul>;
  }
}
