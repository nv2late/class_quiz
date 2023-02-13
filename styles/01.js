import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const Line = styled.hr`
  height: 1px;
  margin-top: 50px;
  margin-bottom: 24px;
  border: 0;
  background: lightgray;
`;

// Header
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 50px;
`;

export const HeaderIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 40px 0px 40px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  h1 {
    font-size: 40px;
  }
`;

export const HeaderInfoProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 50%;
  }
  span {
    margin-right: 8px;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  h3 {
    &:not(:last-child) {
      margin-right: 40px;
    }
    &.colored {
      color: #ff1b6d;
      border-bottom: 2px solid #ff1b6d;
      padding-bottom: 8px;
    }
  }
`;

// List Section
export const ListSection = styled.section`
  padding-left: 50px;
  padding-right: 50px;
`;

export const Lists = styled.ul`
  padding: 0;
  margin-bottom: 54px;
  list-style: none;
`;

export const ListsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FaqTitle = styled.span`
  &:not(:first-child) {
    color: black;
    font-size: 24px;
  }
`;

export const ListNum = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 400;
  color: #adadad;
`;

// Navigation Bar
export const NavBar = styled.nav`
  border-top: 1px solid lightgray;
  margin-bottom: 16px;
`;

export const NavLists = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-top: 16px;
  list-style: none;
`;

export const NavListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:last-child {
    a {
      color: #ff1d6d;
    }
  }

  a {
    display: block;
    text-align: center;
    font-size: 16px;
    color: #adadad;
  }

  span {
    display: block;
    margin-top: 8px;
  }
`;
