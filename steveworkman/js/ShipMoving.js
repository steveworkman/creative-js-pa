ShipMoving = function(x,y) {


	this.pos = new Vector2(x,y); 
	this.angle = 0; 
	this.drag = 0.99;
	this.vel = new Vector2(0,0); 
	var temp = new Vector2(0,0); 
	var thrustIn = 0;
	
	this.thrustPower = 0.1;
	this.deceleratePower = 0.05;
	this.rotateSpeed = 3; 

	this.update = function() {
		this.pos.plusEq(this.vel);
		
		this.vel.multiplyEq(this.drag) 	
	};
	
	this.thrust = function() {
			
		temp.reset(this.thrustPower,0); 

		temp.rotate(this.angle); 
		this.vel.plusEq(temp); 
	
	};
	
	this.rotateLeft = function() {
		this.angle -= this.rotateSpeed; 
	};
	this.rotateRight = function() {
		this.angle += this.rotateSpeed; 
	};

	this.decelerate = function() {
		temp.reset(-this.deceleratePower,0); 

		temp.rotate(this.angle); 
		this.vel.plusEq(temp); 
	};
	
	
	// c = canvas context
	this.draw = function(c, thrustin, decelerating) {		
		
		c.save();
		c.translate(this.pos.x, this.pos.y); 
		c.rotate(this.angle * Vector2Const.TO_RADIANS);

		c.strokeStyle = "#fff"; 
		c.lineWidth = 2; 
		
		c.beginPath();
		c.moveTo(-10, -10);
		c.lineTo(-10, 10);
		c.lineTo(14, 0);
		c.closePath(); 
		c.stroke();
		
		if (thrusting || decelerating) {

			var grd = c.createLinearGradient(0, 0, -30, 16);
			if (thrusting) {
		    	grd.addColorStop(0, 'red');   
		    	grd.addColorStop(1, 'orange');
			}
			if (decelerating) {
				grd.addColorStop(0, 'blue');   
		    	grd.addColorStop(1, 'gold');
			}
			c.strokeStyle = grd;

			c.beginPath();
			var scale = 1;
			scale = decelerating ? 0.75 : 1;

			c.moveTo(-10,-8);
			c.lineTo(-18*scale,-5);
			c.lineTo(-15*scale,-3);
			if (thrustIn % 5 > 0) {
				c.lineTo(-30*scale,0);	
			} else {
				c.lineTo(-25*scale,0);
			}
			c.lineTo(-15*scale,3);
			c.lineTo(-18*scale,5);
			c.lineTo(-10,8);

			c.closePath();
			c.stroke();

			thrustIn++;
		}
		
		c.restore();		

	};


}; 