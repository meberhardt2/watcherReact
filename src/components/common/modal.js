import React, { Fragment, useState, useEffect } from 'react';

/**************************************************************************************/
function Modal(props){

    /****************************************/
    const [styles, setStyles] = useState({
        modal: 'modal fade',
        cover: 'modal-backdrop fade'
    });
	/****************************************/


	/****************************************/
    useEffect(() => {
        console.log('modal prop change '+props.show);
        let newStyles = {};
        if(props.show){
            newStyles = {
                modal: 'modal fade show block',
                cover: 'modal-backdrop fade show'
            };
        }
        else{
            newStyles = {
                modal: 'modal fade',
                cover: 'modal-backdrop fade'
            };
        }

        setStyles(newStyles);

    }, [props.show]);
	/****************************************/

//modal fade show
	/****************************************/
	return(
        <Fragment>
            <div className={styles.modal} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Alert</h5>
                        </div>
                        <div className="modal-body">
                            body
                        </div>
                        <div className="modal-footer">
                            
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
