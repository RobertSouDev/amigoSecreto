// arquivos que sao puramentes algoritmos
function gererateUniqueId() {
    return Math.random().toString(36).substring(2, 9)

}

function sortfriend(oldlist = []) {

    const indexesBasedOnOldListLenghtAtRandomOrder = oldlist.map((_, index) => index).sort(() => Math.random() - 0.5);

    const newFriendWithMyFriendId = []

    for (let i = 0; i < oldlist.length; i ++)
    {
        if (i > 0){

        }else if (i === 0){
            
    }
    } 
}

