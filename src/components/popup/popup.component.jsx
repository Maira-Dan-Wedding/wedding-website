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
        width: 400,
        backgroundColor: "brown",
        border: "3px solid black",
        padding: "1rem",
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
                    <div className={classes.paper}>
                        <h2 id="simple-modal-title">ERROR MESSAGE</h2>
                        <p id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                    </div>
                </Modal>
            )
        
        case "CONFIRM":
            return (
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div className={classes.paper}>
                        <h2 id="simple-modal-title">ALREADY RSVPED</h2>
                        <p id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
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
                    <div className={classes.paper}>
                        <h2 id="simple-modal-title">CONGRATULATIONS</h2>
                        <p id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                    </div>
                </Modal>
            )

        default: 
            return null;
    }

};

export default Popup; 