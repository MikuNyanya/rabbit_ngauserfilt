let filterUsers = [];

window.onload = function(){
	let filterUsersStr;
	chrome.storage.local.get(['ngaFilterUsers'], function(result) {
	  filterUsersStr = result.ngaFilterUsers;
	  
		if(null == filterUsersStr || filterUsersStr == ""){
			return;
		}
		filterUsers = filterUsersStr.split(',');
	});
}

function filtusers(){
	if(filterUsers.length <= 0){
		return;
	}
	
	let docs = document.getElementsByClassName("author");
	for (let a of docs) {
		//console.log(a.text)
		for(let i in filterUsers){
			let uid = filterUsers[i];
			if(uid == null || uid.length<=0){
				continue;
			} 
			let title = "用户ID "+uid;
			if(a.getAttribute("title") == title){		
				a.style.display="none"
				a.parentNode.parentNode.parentNode.style.display="none"
			}
		}
	}
}


setInterval(filtusers,1000)