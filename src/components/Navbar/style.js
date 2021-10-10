import styled from 'styled-components'


export const Ul = styled.ul`
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 60px;
    padding: 0;
    background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(2px);

    @media (min-width: 426px) {
        padding-right: 9%;
        justify-content: flex-end;
    }
`

export const Li = styled.li`
    list-style-type: none;
    margin: 5px;
    > a {
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
`


