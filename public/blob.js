function Blob(x, y, r, color){
    //properties
    this.pos = createVector(x,y);
    this.r = r;
    this.color = color;
    //handle the random color
    const colorlist = ['#ff0000','#00ff00','#0000ff']

    if (color == "random"){
        let rand = Math.floor(random(colorlist.length));
        this.color = colorlist[rand];
    }

    console.log("Created new blob with radius " + this.r.toString());

    this.show = function(){
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }

    this.update = function(){
        //mouse vector
        mousepos = createVector(mouseX, mouseY);
        //center of screen vector
        centerpos = createVector(width/2, height/2);
        let velocity = mousepos.sub(centerpos);
        velocity.setMag(6);
        this.pos.add(velocity);
    }

    this.constrain = function(minx, maxx, miny, maxy){
        this.pos.x = constrain(this.pos.x, minx + this.r, maxx - this.r);
        this.pos.y = constrain(this.pos.y, miny + this.r, maxy - this.r);
    }

    this.can_eat = function(otherblob) {
        //check if touching
        let dist = p5.Vector.dist(this.pos, otherblob.pos);
        if(dist < this.r + otherblob.r){
            //check if bigger (later on)
            //grow/scale
            this.r = Math.sqrt(this.r * this.r + otherblob.r * otherblob.r);
            return true;
        } else {
            return false;
        }
    }
}