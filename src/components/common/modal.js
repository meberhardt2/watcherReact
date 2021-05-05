import React, { Fragment, useState, useEffect } from 'react';


/**************************************************************************************/
function Modal(props){

    /****************************************/
    const [styles, setStyles] = useState({
        modal: 'modalJAM fade',
        cover: 'modal-backdropJAM fade'
    });
	/****************************************/


	/****************************************/
    useEffect(() => {
        toggleModal(props.modalInfo.showModal);
    }, [props.modalInfo.showModal]);
	/****************************************/


	/****************************************/
    const toggleModal = (show) => {
        let newStyles = {};
        if(show){
            newStyles = {
                modal: 'modalJAM fade show block',
                cover: 'modal-backdropJAM fade show'
            };
        }
        else{
            newStyles = {
                modal: 'modalJAM fade',
                cover: 'modal-backdropJAM fade'
            };
        }

        setStyles(newStyles);
    }
	/****************************************/


    /****************************************/
	return(
        <Fragment>
            <div className={styles.modal} role="dialog">
                <div className="modal-dialogJAM" role="document">
                    <div className="modal-contentJAM">
                        <div className="modal-headerJAM">
                            <h5 className="modal-titleJAM">Alert</h5>
                        </div>
                        <div className="modal-bodyJAM">
                            body
                        </div>
                        <div className="modal-footerJAM">
                            <button type="button" className="btnJAM btn-dangerJAM" onClick={props.handleAction}>Delete</button>
                            <button type="button" className="btnJAM btn-secondaryJAM" onClick={props.handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cover}></div>
        </Fragment>
    );
	/****************************************/
}
/**************************************************************************************/

export default Modal;
