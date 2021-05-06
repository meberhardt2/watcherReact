import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import API from 'api/api';
import Modal from 'components/common/modal';
import Result from 'components/streams/result';

/**************************************************************************************/
function Streams(props){

    /****************************************/
    const [streams, setStreams] = useState([]);
    const [modalInfo, setModalInfo] = useState({
        showModal: false,
        actionID: '',
        action: '',
        config: {}
    });
	/****************************************/


	/****************************************/
    useEffect(() => {
        API.getStreams().then((data) => {
            setStreams(data);
        });
    }, []);
	/****************************************/


	/****************************************/
    const handleDetails = (id) => {
        props.history.push("/streams/"+id);
    };
	/****************************************/


 	/****************************************/
    const handleDelete = (id) => {
        let modalInfo = {
            showModal: true,
            actionID: id,
            action: 'deleteStream',
        };

        setModalInfo(modalInfo);
    };
	/****************************************/


	/****************************************/
    const handleCancel = () => {
		let modalInfo = {
            showModal: false,
            actionID: '',
            action: ''
        };

        setModalInfo(modalInfo);
    };
	/****************************************/


	/****************************************/
    const handleAction = (actionID) => {
        console.log(actionID);

        handleCancel();
    };
	/****************************************/


    /****************************************/
    return(
        <Fragment>
            <div className="row ">
                <div className="col-12 text-center">
                    Total: {streams.length}
                </div>
            </div>

            <div className="saved-streams-holder">
                {streams.map((result,index) =>
                    <Result result={result} key={result.id} handleDetails={handleDetails} handleDelete={handleDelete} extraClass={streams.length === (index + 1) ? 'last' : ''} />
                )}
            </div>

            <Modal modalInfo={modalInfo} handleCancel={handleCancel} handleAction={handleAction} />
        </Fragment>
    )
	/****************************************/
}
/**************************************************************************************/


export default withRouter(Streams);