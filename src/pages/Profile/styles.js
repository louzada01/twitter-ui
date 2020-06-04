import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  .profile-banner {
    display: flex;
    background: #00acee;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 35vh;
    color: #fff;
  }
`;

export const StatusBar = styled.div`
  display: flex;
  height: 55px;
  justify-content: center;
  background: #fff;
  padding: 0px 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    width: 100%;

    ul {
      display: flex;
      list-style: none;

      li {
        display: flex;
        height: 100%;
        flex-direction: column;
        color: #667580;
        padding: 0 15px;
        margin: 0 15px;
        cursor: pointer;
        position: relative;

        ::after {
          content: "";
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: 0;
          left: 0;
          background: #00acee;
        }

        span {
          font-size: 12px;
          font-weight: bold;
        }
        strong {
          font-size: 18px;
          font-weight: bold;
          margin-top: 2px;
        }
      }
    }
  }
`;
