import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  height: 46px;
  position: relative;
  z-index: 100;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);

  div.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1024;
    margin: 0 auto;
    padding: 0 30px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  height: 100%;
  ul {
    display: flex;
    list-style: none;
    a {
      text-decoration: none;
      padding: 0 10px;
      display: flex;
      height: 100%;
      align-items: center;
      font-size: 13px;
      font-weight: bold;
      color: #667580;
      cursor: pointer;
      .react-icons {
        margin-right: 5px;
      }
      :hover {
        color: #fff;
        background: #00acee;
      }
    }
  }
`;

export const Logo = styled.img`
  max-height: 30px;
`;

export const View = styled.div`
  display: flex;
  input {
    background: #f5f8fa;
    border: 1px solid #e6ecf0;
    height: 34px;
    padding: 0 12px;
    border-radius: 16px;
    color: #667580;
    font-size: 12px;
  }
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  background: #d9d9d9;
  border-radius: 50%;
  margin: 0 15px;
`;

export const PrimaryButton = styled.button`
  cursor: pointer;
  background: #00acee;
  height: 34px;
  width: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 14px;
  color: #fff;
  border: 0;
  border-radius: 16px;
  :hover {
    background: #fff;
    color: #00acee;
    border: 1px solid #00acee;
  }
`;
