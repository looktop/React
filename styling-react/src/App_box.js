import React, { Component } from 'react';
import classNames from 'classnames'; // 클래스를 여러개 적용 가능
import styles from './App.scss';

// const cx = classNames.bind(styles);

class App extends Component {
  render() {
    //const isBlue = false;

    return (            
      <div className={classNames(styles.box, styles.blue)}>
      </div>
    );
  }
}

export default App;