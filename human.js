function Human(){
    this.name='';
    this.lastName='';
    this.sureName='';
    this.age=0;
    this.height=0;
    this.weigth=0;

    this.fillH = (n, ln, ag, ht, wt) =>{
        this.name=n;
        this.lastName=ln;
      
        this.age=ag;
        this.height=ht;
        this.weigth=wt;
    }
    this.printH=()=>{
        console.log('Name: '+this.name+' '+this.lastName);
        console.log('Age: '+this.age);
        console.log('Height: '+this.height);
    console.log('Weigth: '+this.weigth);
    }
}
exports.human=Human;