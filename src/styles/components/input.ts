import { css } from 'lit-element';

export const inputStyles = css`
  .effect {
    padding: 7px 15px; 
    border: 1px solid #ccc; 
    position: relative; 
    background: transparent;
  }

  .focus-bg{
    position: absolute; 
    left: 50%;
    top: 0; 
    width: 0; 
    height: 100%; 
    background-color: #ededed; 
    transition: 0.3s; z-index: -1;
  }

  .effect:focus ~ .focus-bg {
    transition: 0.3s; width: 100%; left: 0;
  }

  .input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 65px;
    margin-top: 15px;
  }
  
  .input-label {
    font: 15px/24px "Lato", 
    Arial, 
    sans-serif; 
    color: #333; 
  }

  .input-container {
    width: 30%; 
    position: relative;
  } 
  /* necessary to give position: relative to parent. */
    input[type="text"]{
      font: 15px/24px "Lato", 
      Arial, 
      sans-serif; 
      color: #333; 
      width: 100%; 
      box-sizing: border-box; 
      letter-spacing: 1px;
    }
,`;
