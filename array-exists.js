function megaFriends (friends){
    if(Array.isArray(friends) == false) {
        return 'please provide an array'
    }
    let mega = friends[0];
    for (const friend of friends){
        if ( friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'lion', 'shamol', 'sabbir'];
const myBigBuddy = megaFriends(1245);
// console.log(myBigBuddy);

if (friends.indexOf('lion') != -1){
    // console.log('lion exist');
}
// includs
if (friends.includes('lion')){
    console.log( 'lion exists using includes');
}

//concate
const first = [ 1, 3, 5,];
const second = [ 2, 4, 6];
const combined = first.concat(second);
console.log(combined);

