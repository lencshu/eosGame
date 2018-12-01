import React from 'react';
import { Input } from 'semantic-ui-react';
import styles from "./GetCoin.css";

export default class GetCoin extends React.Component {
  render() {
    return (
      <Input
        className={styles.center}
        action={{ color: 'teal', labelPosition: 'left', icon: 'cart', content: 'Checkout' }}
        actionPosition='left'
        placeholder='Search...'
        defaultValue='52.03'
      />
    );
  }
}