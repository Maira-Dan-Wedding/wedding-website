import React from 'react'; 

import './address-phone.styles.sass'; 

const AddressPhone = ({phone, address, alternative}) => (
    <div className={alternative ? `address-phone alternative` : `address-phone`}>
        {address?  (
            <div className="address"><span className="subtitle" >Endereço || Address:</span> {address}</div>
        ) : null
        }

        {phone ? (
            <div className="phone"><span className="subtitle">Phone:</span> {phone}</div>
        ) : null
        }

    </div>
);

export default AddressPhone; 