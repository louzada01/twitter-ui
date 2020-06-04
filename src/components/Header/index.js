import React from "react";
import { Link } from "react-router-dom";
import {
  MdNotificationsNone,
  MdHome,
  MdChatBubbleOutline,
  MdTrendingUp,
} from "react-icons/md";
import { Container, Menu, Logo, View, Avatar, PrimaryButton } from "./styles";
import logoTwitter from "../../assets/logo.svg";

export default function Header() {
  return (
    <Container>
      <div className="content">
        <Menu>
          <ul>
            <a href="/">
              <MdHome size={20} />
              Home
            </a>
            <a href="/notifications">
              <MdNotificationsNone size={20} />
              Notifications
            </a>
            <a href="/messages">
              <MdChatBubbleOutline size={20} />
              Message
            </a>
            <a href="/trending">
              <MdTrendingUp size={20} />
              Trending
            </a>
          </ul>
        </Menu>
        <Logo src={logoTwitter} alt="logo twitter" />
        <View>
          <input type="text" placeholder="Search on twitter" />
          <Link to="/me">
            <Avatar></Avatar>
          </Link>
          <PrimaryButton>Tweet</PrimaryButton>
        </View>
      </div>
    </Container>
  );
}
