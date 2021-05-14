import React, { Fragment, useState, useEffect } from 'react';


/**************************************************************************************/
function Modal(props){

    /****************************************/
    const [config, setConfig] = useState({
        modal: 'modalJAM fade',
        cover: 'modal-backdropJAM fade',
        title: '',
        body: '',
        type: '',
        buttonCancelText: '',
        buttonOKText: '',
        buttonDeleteText: ''
    });
	/****************************************/


	/****************************************/
    useEffect(() => {
        modalConfig(props);
    }, [props]);
	/****************************************/


	/****************************************/
    const modalConfig = (props) => {
        if(typeof props.handleCancel !== 'function'){
            console.log('a valid cancel function was not given');
        }
        if(typeof props.handleAction !== 'function'){
            console.log('a valid action function was not given');
        }

        let newConfig = {};
        if(props.modalInfo.showModal){
            newConfig.modal = 'modalJAM fade show block';
            newConfig.cover = 'modal-backdropJAM fade show';

            if(typeof props.modalInfo.actionID === 'undefined' || props.modalInfo.actionID === '' || props.modalInfo.actionID === 0){
                newConfig.type = 'info';
                if(typeof props.modalInfo.config === 'undefined'){
                    newConfig.title = 'Info';
                    newConfig.body = 'I need my body set';
                    newConfig.buttonOKText = 'OK';
                }
                else{
                    newConfig.title = typeof props.modalInfo.config.title !== 'undefined' && props.modalInfo.config.title !== '' ? props.modalInfo.config.title : 'Info';
                    newConfig.body = typeof props.modalInfo.config.body !== 'undefined' && props.modalInfo.config.body !== '' ? props.modalInfo.config.body : 'I need a body';
                    newConfig.buttonOKText = typeof props.modalInfo.config.buttonOKText !== 'undefined' && props.modalInfo.config.buttonOKText !== '' ? props.modalInfo.config.buttonOKText : 'OK';
                }
            }
            else{
                newConfig.type = 'delete';
                newConfig.actionID = props.modalInfo.actionID;
                if(typeof props.modalInfo.config === 'undefined'){
                    newConfig.title = 'Alert';
                    newConfig.body = 'Are you sure?';
                    newConfig.buttonCancelText = 'Cancel';
                    newConfig.buttonDeleteText = 'Delete';
                }
                else{
                    newConfig.title = typeof props.modalInfo.config.title !== 'undefined' && props.modalInfo.config.title !== '' ? props.modalInfo.config.title : 'Alert';
                    newConfig.body = typeof props.modalInfo.config.body !== 'undefined' && props.modalInfo.config.body !== '' ? props.modalInfo.config.body : 'Are you sure?';
                    newConfig.buttonCancelText = typeof props.modalInfo.config.buttonCancelText !== 'undefined' && props.modalInfo.config.buttonCancelText !== '' ? props.modalInfo.config.buttonCancelText : 'Cancel';
                    newConfig.buttonDeleteText = typeof props.modalInfo.config.buttonDeleteText !== 'undefined' && props.modalInfo.config.buttonDeleteText !== '' ? props.modalInfo.config.buttonDeleteText : 'Delete';
                }
            }

        }
        else{
            newConfig.modal = 'modalJAM fade';
            newConfig.cover = 'modal-backdropJAM fade';
        }

        setConfig(newConfig);
    }
	/****************************************/


    /****************************************/
	return(
        <Fragment>
            <div className={config.modal} role="dialog">
                <div className="modal-dialogJAM" role="document">
                    <div className="modal-contentJAM">
                        <div className="modal-headerJAM">
                            <h5 className="modal-titleJAM">{config.title}</h5>
                        </div>
                        <div className="modal-bodyJAM">{config.body}</div>
                        <div className="modal-footerJAM">
                            {config.type === 'delete' &&
                                <Fragment>
                                    <button type="button" className="btnJAM btn-dangerJAM" onClick={() => {props.handleAction(config.actionID)}}>{config.buttonDeleteText}</button>
                                    <button type="button" className="btnJAM btn-secondaryJAM" onClick={props.handleCancel}>{config.buttonCancelText}</button>
                                </Fragment>
                            }

                            {config.type !== 'delete' &&
                                <button type="button" className="btnJAM btn-primaryJAM" onClick={props.handleCancel}>{config.buttonOKText}</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={config.cover}></div>
        </Fragment>
    );
	/****************************************/
}
/**************************************************************************************/

export default Modal;
