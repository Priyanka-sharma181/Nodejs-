const event = {
    name:'birthday party',
    gustList:["priyanka","pinki","leena"],
    printGuestList(){
        console.log('Guest list for' +this.name);
        this.gustList.forEach((guest)=>{
            console.log(guest+ "attanding"+ this.name);
        })
    }
}

event.printGuestList()