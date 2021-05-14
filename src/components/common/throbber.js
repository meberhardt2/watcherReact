import React, { useState, useEffect } from 'react';

/**************************************************************************************/
function Throbber(props){
    // https://loading.io/css

    /****************************************/
    const [config, setConfig] = useState({
        throbberType: 0
    });
	/****************************************/


	/****************************************/
    useEffect(() => {
        throbberConfig(props);
    }, [props]);
	/****************************************/


	/****************************************/
    const throbberConfig = (props) => {
        const throbberArray = ['ropePull','theBeat','wackyWaffles','sunflower','dogChasingTail'];
        let newConfig = {};
        let index = 0;

        if(typeof props.throbberType === 'undefined' || props.throbberType === ''){
            index = 0;
        }
        else{
            index = throbberArray.indexOf(props.throbberType);

            if(index === -1){
                index = 0;
            }
        }

        newConfig.throbberType = throbberArray[index];

        setConfig(newConfig);
    }
	/****************************************/


    /****************************************/
	return(
        <div id="JAT-container">
            <div id="JAT-overlap"></div>
            <div id="JAT-throb-container">
                {config.throbberType === 'ropePull' &&
                    <div id="ldsringJAT0"><div></div><div></div><div></div><div></div></div>
                }
                {config.throbberType === 'theBeat' &&
                    <div id="ldsringJAT1"><div></div><div></div><div></div></div>
                }
                {config.throbberType === 'wackyWaffles' &&
                    <div id="ldsringJAT2"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                }
                {config.throbberType === 'sunflower' &&
                    <div id="ldsringJAT3"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                }
                {config.throbberType === 'dogChasingTail' &&
                    <div id="ldsringJAT4"><div></div><div></div><div></div><div></div></div>
                }
            </div>
        </div>
    );
    /****************************************/

}
/**************************************************************************************/

export default Throbber;
