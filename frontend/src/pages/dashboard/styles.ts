import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    align-items: center;
    height: 4.37rem;
    width: 100%;
    background: #201335;
    color: #fff;

    > div {
      display: flex;
      align-items: center;

      img {
        width: 3.25rem;
        height: 3.25rem;
        border-radius: 100%;
        background-color: #133514;
      }

      p {
        margin-left: 1rem;
        font-size: 1.5rem;
      }
    }

    nav {
      display: flex;

      ul {
        display: flex;
        gap: 2rem;
        list-style: none;

        li {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
