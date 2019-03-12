import React, { Component } from 'react';
import StyledButton from './components/StyledButton/StyledButton';

// const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (            
      <div>
        <StyledButton big>버튼</StyledButton>
      </div>
    );
  }
}

export default App;