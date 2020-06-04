import React from "react";

import Header from "../../components/Header";

import { Content } from "../../styles/";
import { Container, StatusBar } from "./styles";

export default function Profile() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <section className="profile-banner">
          <p>Banner</p>
        </section>
        <StatusBar>
          <Content>
            <div>
              <ul>
                <li isSelected={true}>
                  <span>Tweets</span>
                  <strong>1234</strong>
                </li>
                <li>
                  <span>Tweets</span>
                  <strong>1234</strong>
                </li>
                <li>
                  <span>Tweets</span>
                  <strong>1234</strong>
                </li>
                <li>
                  <span>Tweets</span>
                  <strong>1234</strong>
                </li>
              </ul>
            </div>
            <section>
              <button>Follor</button>
            </section>
          </Content>
        </StatusBar>
      </Container>
    </React.Fragment>
  );
}
