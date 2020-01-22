import React from 'react'; 

import Container from '@material-ui/core/Container'; 

import './footer.styles.sass'; 

const Footer = () => (
    <div className="footer">
            <Container>
                <div id="signature">Designed &amp; Built by <a href="https://www.linkedin.com/in/gui-j-vale-197330190/" target="_blank" id="signature-link" rel="noopener noreferrer">Gui J Vale</a></div>
            </Container>
    </div>
)

export default Footer; 