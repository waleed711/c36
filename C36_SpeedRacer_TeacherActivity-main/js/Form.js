class Form{
  constructor(){
this.inpute = createInput("").attribute("placeholder","Enter Your name")
this.title = createImg("assets/title.png")  
}

displayelement(){
this.inpute.position(width/2-100,height/2-200)
this.inpute.class("customInput")
this.title.position(width/2-500,50)
this.title.class("gameTitle")
}
display(){
  this.displayelement()
}



}