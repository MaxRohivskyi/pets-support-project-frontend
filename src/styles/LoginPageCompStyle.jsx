import styled from "styled-components";
import { Link } from "react-router-dom";
import login_page_bg from "../media/login_page_bg.svg";
import mobile_hero_img from "../media/mobile_hero_img.svg";

export const LoginPageContainer = styled.div`
  margin-top: 28px;
  height: 100vh;
  background-image: url(${mobile_hero_img});
  background-position: center bottom -170px;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    background-image: url(${login_page_bg});
    background-position: center bottom -180px;
    position: relative;
  }
`;
export const LoginPageFormContainer = styled.div`
  width: 280px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 608px;
    margin-top: 180px;
    background-color: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
  @media (min-width: 1280px) {
    width: 618px;
    margin-top: 60px;
    background-color: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
`;

export const LoginPageTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  margin-bottom: 24px;

  color: #111111;
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    margin-top: 60px;
  }
`;
export const LoginPageDescription = styled.p`
  margin-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 60px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;
export const LoginPageDescriptionLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 5px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #3091eb;
`;

export const LoginPageFormInput = styled.input`
  width: 266px;
  height: 40px;
  left: 20px;
  top: 173px;

  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding-left: 14px;
  margin-top: 16px;
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 448px;
    height: 52px;
  }
  @media (min-width: 1279px) {
    width: 458px;
    height: 52px;
  }
`;

export const LoginPageButton = styled(Link)`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 40px;
  padding: 0px;
  background: #f59256;
  border-radius: 40px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  width: 280px;
  color: #ffffff;
  padding: 10px 28px;
  cursor: pointer;
  &:hover {
    background: #dc712f;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 448px;
  }
  @media (min-width: 1279px) {
    width: 458px;
  }
`;
