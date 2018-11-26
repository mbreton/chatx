import React, { Component } from "react";
import { Input, Segment, Button, Grid } from "semantic-ui-react";
import PropTypes from "prop-types";

class InputMessage extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      content: this.props.content,
      author: this.props.author
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onContentInputChange = this.onContentInputChange.bind(this);
    this.onAuthorInputChange = this.onAuthorInputChange.bind(this);
  }

  onButtonClick() {
    this.props.onSend({
      content: this.state.content,
      author: this.state.author
    });
    this.setState({ content: "" });
  }

  onContentInputChange(event, { value }) {
    this.setState({ content: value });
  }

  onAuthorInputChange(event, { value }) {
    this.setState({ author: value });
  }

  render() {
    return (
      <Segment inverted>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Input
                fluid
                placeholder="Your Name"
                value={this.state.author}
                onChange={this.onAuthorInputChange}
                disabled={this.props.loading}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <Input
                fluid
                placeholder="Send a message"
                value={this.state.content}
                onChange={this.onContentInputChange}
                disabled={this.props.loading}
              />
            </Grid.Column>
            <Grid.Column width={2}>
              <Button
                disabled={this.state.content === "" || this.state.author === ""}
                onClick={this.onButtonClick}
                primary
                fluid
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

InputMessage.propTypes = {
  onSend: PropTypes.func,
  content: PropTypes.string,
  author: PropTypes.string,
  loading: PropTypes.bool
};

InputMessage.defaultProps = {
  onSend: () => {},
  content: "",
  author: ""
};

export default InputMessage;
