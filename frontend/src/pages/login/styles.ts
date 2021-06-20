import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  background: rgba(32, 19, 53, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 33.37rem;
    height: 34.2rem;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 1rem;
    padding: 3.25rem 2.62rem;
    display: flex;
    flex-direction: column;
    h1 {
      font-family: Roboto;
      font-size: 2.25rem;
      color: #584d3d;
    }

    form {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      flex: 0.6;
      justify-content: space-between;

      a {
        font-size: 14px;
        color: #3e4ede;
        align-self: flex-end;
        text-decoration: none;
      }
      fieldset {
        display: flex;
        flex-direction: column;
        border: none;
        label {
          font-size: 1.5rem;
          color: #584d3d;
        }

        input {
          outline: none;
          border: none;
          height: 2rem;
          border-bottom: 1px solid #000000;
        }
      }

      button {
        background: #201335;
        width: 100%;
        border-radius: 0.5rem;
        border: none;
        height: 2.62rem;
        font-size: 1.12rem;
        color: #fffded;
        cursor: pointer;
      }
    }
  }
`;
