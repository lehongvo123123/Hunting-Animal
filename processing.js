function Animal(name,weight,speed,speak,status){
    this.name=name;
    this.weight=weight;
    this.speed=speed;
    this.speak=speak;
    this.status=status;
    this.getName= function(){
         return this.name
    }
    this.getweight=function(){
        return this.weight
    }
    this.getspeed=function(){
        return this.speed
    }
    this.getSpeak=function(){
       return  this.speak
    }
    this.getStatus= function(){
        return this.status
    }
    this.setName = function(value){
        this.setName = value;
    }
    this.setWeight = function(value){
          this.weight=value
    }
    this.setSpeed = function(value){
        this.speed=value
    }
    this.setSpeak = function(value){
        this.speak = value
    }
    this.setStatus = function(){
         if(this.status==true){
             console.log("Die")
         }
         if(this.status==false){
             console.log("alive");
          
         }
    }
    this.animalDie= function(){
          this.status=true;
    }
    this.animalAlive =function(){
        this.status=false;
    }

    this.huntingAnimal = function(animal){
       if(this.weight>animal.weight){
           console.log(this.name+" can catch "+ animal.name);
           if(this.speed>animal.speed){
               console.log("speed "+this.name +" greater than "+ animal.name );
               console.log(animal.name+" talk "+animal.speak);
               animal.animalDie();
               animal.setStatus();
               console.log(this.name+" imcreate weight "+(this.weight+=animal.weight));
               console.log(this.name+" talk "+this.speak);
           }else{
            console.log("speed "+this.name +" less than "+ animal.name+" so can catch up" ); 
            console.log(animal.name+" talk "+animal.speak); 
            animal.animalAlive();
            animal.setStatus();
           }
       }else{
       console.log(animal.name+" can't catch "+ this.name);
       console.log(animal.name+" talk "+animal.speak);
       animal.animalAlive();
       animal.setStatus();
       }
    }
}
var rat = new Animal("Rat",0.2,20," chip chip ");
var jerry = new Animal("Jerry",2,45," ri ri ");
var catti = new Animal("catti",5,10,"rí ruí")
var chicken= new Animal("chicken",30,70,"Ò ó o ò")
var cat = new Animal("Cat",3,40," meo meo ");

