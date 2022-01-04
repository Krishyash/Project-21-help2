class Ground{

    constructor(){
        let options={
            isStatic:true
        
        }
        
        this.body = Bodies.rectangle(600,580,1200,10,options)
        this.width = 1200
        this.height = 10
        World.add(world,this.body)



    }
    show(){
        let pos = this.body.position
        fill("brown")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)

    }


}