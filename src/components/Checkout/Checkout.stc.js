import styled from "styled-components"

export const StyledDiv = styled.div`
    margin: 2rem auto;

    h1 {
    display: block;
    width: 100%;
    }

    h1, p {
    text-align: center;
    }

    .checkoutHeader {
    border-bottom: 1px solid black;
    }

    .cart {
    max-width: 100.0rem;
    margin: 0 auto;

    table {
        width: 100%;
    }
    }

    .checkoutHeader,
    .cart {
    width: 100%;
    text-align: left;

    th,
    td {
        width: 22%;
    }
    }

    .cartItem {
    td img {
        display: block;
        width: 100%;
    }
    }

    .cartBtns {
    display: block;
    width: 100%;
    }

    .cartBtn {
    cursor: pointer;
    }
`