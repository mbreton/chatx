import React from "react";
import { Image, Menu } from "semantic-ui-react";
import PropTypes from "prop-types";

const Header = ({ rooms = [], roomId }) => (
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
        active={room.id === roomId}
        key={room.id}
        href={`/index?roomId=${room.id}`}
      >
        {room.name}
      </Menu.Item>
    ))}
  </Menu>
);

Header.propTypes = {
  rooms: PropTypes.array,
  roomId: PropTypes.string
};

export default Header;
