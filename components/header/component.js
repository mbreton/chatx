import React from "react";
import { Image, Menu } from "semantic-ui-react";
import PropTypes from "prop-types";

function Header({ rooms = [], selectedRoomId }) {
  return (
    <Menu inverted pointing>
      <Menu.Item as="a" header>
        <Image
          size="mini"
          src="/static/logo.png"
          style={{ marginRight: "1.5em" }}
        />
      </Menu.Item>
      {rooms.map(room => (
        <Menu.Item
          as="a"
          active={room.id === selectedRoomId || rooms.length === 1}
          key={room.id}
        >
          {room.name}
        </Menu.Item>
      ))}
    </Menu>
  );
}

Header.prototype = {
  rooms: PropTypes.array,
  selectedRoomId: PropTypes.number
};

export default Header;
