AFRAME.registerComponent("car-movement",{
    schema:{
        speedOfAscent:{type:"number",default:0}
    },
    init: function(){
        window.addEventListener("keydown",(b)=>{
            this.data.speedOfAscent = this.el.getAttribute("position");

            var carPosition = this.data.speedOfAscent;
            if(b.key==="Z"){
                carPosition.x -=1;
                this.el.setAttribute("position", carPosition);
            }
            if(b.key==="X"){
                carPosition.x +=1;
                this.el.setAttribute("position", carPosition);
            }
            if(b.key==="C"){
                carPosition.y +=1;
                this.el.setAttribute("position", carPosition);
            }
            if(b.key==="V"){
                carPosition.y -=1;
                this.el.setAttribute("position", carPosition);
            }
        })
    }
})