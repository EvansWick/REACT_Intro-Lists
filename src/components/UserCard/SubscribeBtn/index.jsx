import React, { Component } from "react";
import styles from "./SubscribeBtn.module.css";

export default class SuscribeBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubscribed: false,
    };
    this.userId = props.userId;
    this.functions = props.functions;
  }
  render() {
    let subsribed = this.state.isSubscribed;
    const configBtn = {
      true: (
        <button
          onClick={this.unsubscribeAction}
          className={styles.unsubscribed}
        >
          Відписатися
        </button>
      ),
      false: (
        <button onClick={this.subscribeAction} className={styles.subscribed}>
          Підписатися
        </button>
      ),
    };
    return configBtn[subsribed];
  }

  subscribeAction = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.functions["addSubscriber"](this.userId);

    this.setState((prewState) => {
      return {
        isSubscribed: true,
      };
    });
  };
  unsubscribeAction = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.functions["removeSubscriber"](this.userId);

    this.setState((prewState) => {
      return {
        isSubscribed: false,
      };
    });
  };
}
