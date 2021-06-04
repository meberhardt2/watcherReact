import React, { useState, useEffect, useMemo } from 'react';


/**************************************************************************************/
export function JATMGet(what = 'full'){
	if(what === 'full'){
		return jatmTagStore.get().tags;
	}

	console.log('not a valid option supplied to JATMGet');
}
/**************************************************************************************/


/**************************************************************************************/
export function JATMSort(a, b) {
	const modifiedA = a.displayName.toUpperCase();
	const modifiedB = b.displayName.toUpperCase();

	let comparison = 0;
	if (modifiedA > modifiedB) {
		comparison = 1;
	} else if (modifiedA < modifiedB) {
		comparison = -1;
	}

	return comparison;
}
/**************************************************************************************/


/**************************************************************************************/
function JATMmakeObservable(target) {
	let listeners = []; // initial listeners can be passed an an argument aswell
	let value = target;

	function get() {
		return value;
	}

	function set(newValue) {
		if (value === newValue) return;
		value = newValue;
		listeners.forEach((l) => l(value));
	}

	function subscribe(listenerFunc) {
		listeners.push(listenerFunc);
		return () => unsubscribe(listenerFunc); // will be used inside React.useEffect
	}

	function unsubscribe(listenerFunc) {
		listeners = listeners.filter((l) => l !== listenerFunc);
	}

	return {
		get,
		set,
		subscribe,
	};
}
/**************************************************************************************/


/**************************************************************************************/
const jatmTagStore = JATMmakeObservable({
	tags: [],
	unused_tags: [],
	used_tags: []
});
/**************************************************************************************/


/**************************************************************************************/
const useJATMTags = () => {
	const [tags, setTags] = useState(jatmTagStore.get());

	useEffect(() => {
		return jatmTagStore.subscribe(setTags);
	}, []);

	const actions = useMemo(() => {
		return {
			setTags: (tags) => jatmTagStore.set(tags),
		}
	}, []);

	return {
		state: tags,
		actions
	};
}
/**************************************************************************************/



/**************************************************************************************/
export function JATMLoadTags(tags){
	if(tags.constructor === Array){
		let temp_unused_tags = [];
		let temp_used_tags = [];
		let JATMtags = {};

		for(let i = 0; i < tags.length; i++){
			if(tags[i].selected){
				temp_used_tags.push(tags[i]);
			}
			else{
				temp_unused_tags.push(tags[i]);
			}
		}

		temp_unused_tags.sort(JATMSort);
		temp_used_tags.sort(JATMSort);

		JATMtags.tags = tags;
		JATMtags.unused_tags = temp_unused_tags;
		JATMtags.used_tags = temp_used_tags;

		jatmTagStore.set(JATMtags)
	}
	else{
		console.log('tags must be an array');
	}
}
/**************************************************************************************/



/**************************************************************************************/
//deconstruct props right to the tags, so we can watch tags in the useEffect and just change rendering when tags gets changed
export function JATMAvailableTags({tags}){
	let test = useJATMTags();

	/*
	const parseTags = (tags) => {
		test.actions.setTags([{id:0,displayName:'zero1',selected:false}]);
	}
	*/

	/****************************************/
	const selectTag = (id) => {
		let tempState = JSON.parse(JSON.stringify(jatmTagStore.get()));
		let tempTags = tempState.tags.slice(0);
		let tempUnusedTags = tempState.unused_tags.slice(0);
		let tempUsedTags = tempState.used_tags.slice(0);
		let indexOfTagToDelete = -1;
		let indexOfTagToUpdate = -1;

		//update the tag in the full tag array to selected
		for(let i = 0; i < tempTags.length; i++){
			if(parseInt(tempTags[i].id,10) === parseInt(id,10)){
				indexOfTagToUpdate = i;
			}
		}
		if(indexOfTagToUpdate >= 0){
			tempTags[indexOfTagToUpdate].selected = true;
		}

		//remove the tag from the unused array
		for(let i = 0; i < tempUnusedTags.length; i++){
			if(parseInt(tempUnusedTags[i].id,10) === parseInt(id,10)){
				indexOfTagToDelete = i;
			}
		}
		if(indexOfTagToDelete >= 0){
			tempUnusedTags.splice(indexOfTagToDelete, 1);
		}

		//add the tag to the used array
		tempUsedTags.push(tempTags[indexOfTagToUpdate]);
		tempUsedTags.sort(JATMSort);

		tempState.tags = tempTags;
		tempState.unused_tags = tempUnusedTags;
		tempState.used_tags = tempUsedTags;

		test.actions.setTags(tempState);
	}
	/****************************************/


	/****************************************/
	return (
		<div className="JATM-holder">
            {jatmTagStore.get().unused_tags.map((tag,index) =>
				<div key={tag.id} onClick={() => {selectTag(tag.id)}}>{tag.displayName}</div>
			)}
		</div>
	);
	/****************************************/
}
/**************************************************************************************/




/**************************************************************************************/
export function JATMSelectedTags(){
	let test = useJATMTags();

	/****************************************/
	const removeTag = (id) => {
		let tempState = JSON.parse(JSON.stringify(jatmTagStore.get()));
		let tempTags = tempState.tags.slice(0);
		let tempUnusedTags = tempState.unused_tags.slice(0);
		let tempUsedTags = tempState.used_tags.slice(0);
		let indexOfTagToDelete = -1;
		let indexOfTagToUpdate = -1;

		//update the tag in the full tag array to not selected
		for(let i = 0; i < tempTags.length; i++){
			if(parseInt(tempTags[i].id,10) === parseInt(id,10)){
				indexOfTagToUpdate = i;
			}
		}
		if(indexOfTagToUpdate >= 0){
			tempTags[indexOfTagToUpdate].selected = false;
		}

		//remove the tag from the used array
		for(let i = 0; i < tempUsedTags.length; i++){
			if(parseInt(tempUsedTags[i].id,10) === parseInt(id,10)){
				indexOfTagToDelete = i;
			}
		}
		if(indexOfTagToDelete >= 0){
			tempUsedTags.splice(indexOfTagToDelete, 1);
		}

		//add the tag to the unused array
		tempUnusedTags.push(tempTags[indexOfTagToUpdate]);
		tempUnusedTags.sort(JATMSort);

		tempState.tags = tempTags;
		tempState.unused_tags = tempUnusedTags;
		tempState.used_tags = tempUsedTags;

		test.actions.setTags(tempState);
	};
	/****************************************/


	/****************************************/
	return (
		<div className="JATM-holder">
            {jatmTagStore.get().used_tags.map((tag,index) =>
				<div key={tag.id} onClick={() => {removeTag(tag.id)}}>{tag.displayName}</div>
			)}
		</div>
    );
	/****************************************/
}
/**************************************************************************************/


