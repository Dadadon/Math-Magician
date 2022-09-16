import React, { memo } from 'react';
import Calculator from './components/Calculator';

// class App extends React.PureComponent {
//   render() {
//     return
//   }
// }

const App = memo(() => <Calculator />);

export default App;
