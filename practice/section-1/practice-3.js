'use strict';

function collectSameElements(collectionA, objectB) {
	 var result=[];
	for(var i=0;i<collectionA.length;i++){
		for(var j=0;j<collectionB.value.length;j++){
			if(collectionA[i].equals(collectionB.value[j])){
				result.push(collectionA[i]);
			}
		}
	}
  return result;
}
