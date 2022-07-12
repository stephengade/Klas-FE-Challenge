// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 6rem;
  background-color: #000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  .nav_btn {
    outline: none;
    border: none;
    background-color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    letter-spacing: 1px;
    text-decoration: none;
  }

  .nav_btn:hover {
    padding: 0.6rem 1.2rem;
  }
`;

export const TableStyle = styled.table`
  border-collapse: collapse;
  width: 100%;
  overflow: auto;

  td,
  th {
    border: 1px solid #dddddd;
    border-bottom-width: 2px;
    text-align: left;
    padding: 8px;
    overflow: hidden;
  }

  td {
    resize: horizontal;
    overflow: auto;
  }
`;

export const THeadStyle = styled.thead`
  .fa-sort-up::after {
    content: "⇓";
    color: #000000;
    margin-left: 10px;
  }

  .fa-sort-down::after {
    content: "⇑";
    color: #000000;
    margin-left: 10px;
  }
`;

export const TBodyStyle = styled.tbody`
  .button {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    text-align: center;
  }

  .delete {
    background-color: red;

    text-transform: capitalize;
  }

  .edit {
    background-color: green;
  }

  .hide_button {
    display: none;
  }
`;
