import React from "react";

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activatyEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivity = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  changeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activatyEditMode}>
              {this.props.status || "no status"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              value={this.state.status}
              onChange={(e) => this.changeStatus(e)}
              autoFocus={true}
              onBlur={this.deactivity}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Status;
