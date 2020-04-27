import React from "react";
import { Typography, Link } from '@material-ui/core';

function Footer(props) {
  return(                      
    <div className="App-footer">
      <Typography variant="subtitle2">Criado por: Alan Teixeira</Typography>                
      <Typography variant="subtitle2">
        Github: <Link href="https://github.com/alanfrnk/" color="secondary" target="_blank" rel="noopener noreferrer">https://github.com/alanfrnk</Link>
        &nbsp; 
        LinkedIn: <Link href="https://www.linkedin.com/in/alan-teixeira/" color="secondary" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/alan-teixeira</Link>
      </Typography>
    </div>              
  );
}

export default Footer;