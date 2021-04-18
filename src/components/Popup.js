import React from "react";
import Popup from "reactjs-popup";

import 'reactjs-popup/dist/index.css';

class Popups extends React.Component {
  render() {
    return(
      <Popup open={this.props.open} modal>
        {() => ( 
          <>
            // ...
            <button onClick={() => this.props.setOpen(false)}>
              close
            </button>
          </>
        )}
      </Popup>
    )
  }
}

export default Popups;