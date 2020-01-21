import React, {useState} from 'react'; 

import { makeStyles } from '@material-ui/core/styles'; 
import Modal from  '@material-ui/core/Modal'; 

import './popup.styles.sass'; 

const useStyles = makeStyles(theme => ({
    paper: {
        position: "absolute", 
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        backgroundColor: "#7bed9f",
        padding: "2rem",
        borderRadius: "10px"
    }
}));

const Popup = ({status, resetPopup}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        resetPopup();
    }

    switch(status) {
        case "ERROR": 
            console.log("ERROR")
            return (
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div className={`${classes.paper} error-popup`}>
                        <h2 id="simple-modal-title">OOPS...</h2>
                        <div className="copy">
                            <p className="paragraph popup-subtitle-pt">Algo deu errado!</p>
                        </div>
                        <div className="copy">
                            <p className="paragraph popup-subtitle-en">Something went wrong!</p>
                        </div>

                        <div className="copy">
                            <p className="paragraph popup-instructions-pt">Verifique se inseriu o nome como especificado nas instruções. Caso o erro persista, por favor envie um email para <span className="popup-email">carneirosmairaedan@gmail.com </span></p>
                        </div>
                        <div className="copy">
                            <p className="paragraph popup-instructions-en">Make sure that you have followed the RSVP instructions. If the error persist, please send us an email at <span className="popup-email">carneirosmairaedan@gmail.com </span></p>
                        </div>

                    </div>
                </Modal>
            )
        
        case "SUCCESS":
            return (
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div className={`${classes.paper} success-popup`}>
                        <h2 id="simple-modal-title">CONFIRMADO || RSVPED</h2>
                        <div className="copy">
                            <p className="paragraph popup-subtitle-pt">Obrigado por confirmar à sua presença, ela é importante!</p>
                        </div>
                        <div className="copy">
                            <p className="paragraph popup-subtitle-en">Thank you for rsvping. It means a lot to us!</p>
                        </div>

                        <div className="copy">
                            <p className="paragraph popup-instructions-pt"></p>
                        </div>
                        <div className="copy">
                            <p className="paragraph popup-instructions-en"></p>
                        </div>
                    </div>
                </Modal>
            )

        default: 
            return null;
    }

};

export default Popup; 