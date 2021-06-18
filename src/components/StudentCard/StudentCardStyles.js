import styled from "styled-components";

export const StudentCardWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;

    width: auto;
    height: auto;
    margin-top: 32px;
    box-shadow: 2px 3px 10px 3px gray;
    border-radius: 5px;

    width: 1000px;

    max-width: 200px;
    @media screen and (min-width: 500px) {
        max-width: 275px;
    }
    @media screen and (min-width: 800px) {
        max-width: 300px;
    }
`;

export const StudentCardHeader = styled.div`
    background-color: rgb(${props => props.isAdmin ? "129, 210, 124" : "121, 163, 208"});
    color: white;
    font-weight: 700;
    border-radius: 5px;
    text-align: center;
    line-height: 2;
    height: 32px;
`;

export const StudentCardNameRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StudentCardNameContent = styled.span`
    font-weight: 700;
    margin: 10px 15px;
`;

export const StudentCardEmailRow = styled.div`
    text-align: center;
    margin-bottom: 16px;
    font-weight: 700;
`;