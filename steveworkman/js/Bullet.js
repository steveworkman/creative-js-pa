Bullet = function(x, y, angle, velocity, hue) {
	
	var speed = 5;

	var startX = (Math.cos(angle)*10)+x;
	var startY = (Math.sin(angle)*10)+y;
	
	this.pos = new Vector2(startX,startY);
	this.vel = velocity.clone() || new Vector2(0,0);
	 
	this.vel.x += Math.cos(angle)*speed; 
	this.vel.y += Math.sin(angle)*speed; 

	this.hue = hue || 0;
	
	// instead set Vector with speed and rotate
	
	this.enabled = true; 
	
	this.update = function() {
		
		this.pos.plusEq(this.vel); 
		
	};
	
	this.draw = function(c) {
		c.lineWidth =2; 
		c.strokeStyle = "hsl("+this.hue+",100%,50%)"; 
		c.beginPath(); 
		c.arc(this.pos.x,this.pos.y,2, 0, Math.PI*2, true); 
		c.stroke();
	
	};
	

	
	
	
};