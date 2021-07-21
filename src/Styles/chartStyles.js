import styled from 'styled-components'
  
  /*Styled Components*/
  export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
  `;

  export const Title = styled.h1`
    text-align: center;
    color: var(--main-dark);
    font-family: var(--primary-font);
    padding: 1rem 0;
  `;

  export const Card = styled.div`
    width: 100%;
    height: 100%;
    margin: 3rem 0;
    border: 1px solid red;
    background: rgba( 255, 255, 255, 0.15 );
    -webkit-backdrop-filter: blur( 0.0px );
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.145);
  `;

  export const Chart = styled.div`
    font-family: var(--primary-font);
    width: 100%;
  `;

  export const InfoDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem auto;
  `;


  export const PrimaryButton = styled.button`
    padding: 1rem;
    width: 12rem;
    margin: 0 auto;
    border: 1px solid var(--light-gray);
    background-color: var(--main-dark);
    color: var(--main-white);
    border-radius: 5px;
    cursor: pointer;
  `;

  export const ParagraphInfo = styled.p`
    text-align: center;
  `