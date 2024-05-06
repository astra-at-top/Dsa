class Createnode {
    constructor(value) {
        this.value =  value
        this.next = null
    }
}

class CreateLinkedList {
    constructor(value){
        const newNode = new Createnode(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value){
        const newNode = new Createnode(value)
        if(this.head){
            this.tail.next = newNode
            this.tail = newNode
        }else{
            this.head = newNode
            this.tail = this.head
        }
        this.length = this.length + 1
        return this
    }

}


const newLink = new CreateLinkedList(5)
newLink.push(6)
newLink.push(9)

console.log(newLink,"newlink")
