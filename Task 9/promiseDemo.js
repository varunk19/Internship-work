console.log("Promise demo script says:");
let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' remove Garbage');
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message + ' won Icecream');
  });
};

cleanRoom().then(function(result){
	return removeGarbage(result);
}).then(function(result){
	return winIcecream(result);
}).then(function(result){
	console.log('Finished ' + result);
    console.log("all promises to be run at the same time:");
    Promise.all([cleanRoom(),removeGarbage(),winIcecream()]).then(function(){
        console.log('all finished');
        console.log("any one promise to be executed:");
        Promise.race([cleanRoom(),removeGarbage(),winIcecream()]).then(function(){
            console.log('one of the promises finished');
        });
    });
})