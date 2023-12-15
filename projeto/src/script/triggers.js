let friendregisterd = []

// definiçao do que vai ativa
 const formRegister = document.querySelector('#formRegister')

 const listFriends = document.querySelector('#registeredFriend')

 const sortButton = document.querySelector('#sortButton')

 formRegister.addEventListener('submit', (e)=>{
    //função anonima
    e.preventDefault() // evita que suma os dados quando recarrega

    const friedName = formRegister["friedName"].value;
    const friedPassword = formRegister["friedPassword"].value

    const newFriend = {
        name : friedName,
        password : friedPassword,
        Id : gererateUniqueId(),
        myFriendId: "",
    }

    
    friendregisterd.push(newFriend);

    formRegister.reset();

    
    // const newFriendNameWiltDots = newFriend.name.replaceAll(/./g, "•")

    const fixedBolinha = "••••••••••"


    const friendElement = `<p>  ${fixedBolinha} </p>`

    listFriends.innerHTML += friendElement

    if(friendregisterd.length > 1){
        sortButton.style.display = 'block'
    }



}) 

sortButton.addEventListener("click", () => {
    
    const result = sortfriend(friendregisterd)

    console.info(result)
})