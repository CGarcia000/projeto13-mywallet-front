import styled from "styled-components"

const BodyWallet = styled.div`
    margin: 0 auto;
    width: 90%;
    overflow: hidden !important;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1.4rem;
    word-break: break-word;
    
    h2 {
        max-height: 3.6rem;
        color: white;
    }
`

const WalletRegisters = styled.div`
    position: relative;
    width: 100%;
    min-height: 68vh;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonWallet = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    min-height: 17vh;
    margin-top: 1rem;
    
    button {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-around;
        width: 48%;
        min-height: 100%;
        background-color: #A328D6;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        cursor: pointer;
        border: none;
        padding-left: 1rem;
    }

    button:hover {
        background-color: #A91CE3;
    }

    button span {
        color: white;
        text-align: left;
        width: 4rem;
        font-size: 16px
    }
`

export { BodyWallet, Title, WalletRegisters, ButtonWallet };