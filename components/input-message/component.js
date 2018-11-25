import React, { Component } from "react";
import { Input, Segment, Button, Grid } from "semantic-ui-react";
import PropTypes from "prop-types";

class InputMessage extends Component {
  static propTypes = {
    onSend: PropTypes.func,
    value: PropTypes.string,
    loading: PropTypes.bool
  };

  static defaultProps = {
    onSend: () => {},
    value: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onValueInputChange = this.onValueInputChange.bind(this);
  }

  onButtonClick() {
    this.props.onSend(this.state.value);
    this.setState({ value: "" });
  }

  onValueInputChange(event, { value }) {
    this.setState({ value });
  }

  render() {
    return (
      <Segment inverted>
        <Grid>
          <Grid.Row>
            <Grid.Column width={13}>
              <Input
                fluid
                placeholder="Send a message"
                value={this.state.value}
                onChange={this.onValueInputChange}
                disabled={this.props.loading}
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <Button
                disabled={this.state.value === ""}
                onClick={this.onButtonClick}
                primary
                loading={this.props.loading}
              >
                Send
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default InputMessage;
