import styled from "styled-components";

export const MainContent = styled.div`

    display: flex;
    flex-direction: column;

    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 2;
        gap: 20px;
        padding: 0 32px;
    }
`;

export const Header = styled.h1`
    font-size: 32px;
    margin: 64px auto;
    text-align: center;
`;