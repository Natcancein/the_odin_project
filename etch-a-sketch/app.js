

function createGrid(n){
var col=Math.sqrt(n);
var n2=Math.pow(n,2);
var newHeight=400/n;
var container = $("<div></div>").addClass("grid-container");

	for (var i = 0;i<n2;i++){
		var div=$("<div></div>");
		$("main").append(container);
		container.css({"display": "grid", "grid-template-columns": "repeat("+n+",1fr)" });
		div.css({"background-color": "rgba(255, 255, 255, 0.8)", "border": "1px solid rgba(0, 0, 0, 0.8)" , "height":""+newHeight+"px"});
		container.append(div);
	}


$(".grid-container div").on("mouseover", function(){
	
	$(this).css("background-color", color); 
    });

}


$(".btn1").on("click",function(){
	$(".grid-container").remove();
	n=prompt("How many rows or columns do you have the grid?");
	createGrid(n);
})

$(".btn2").on("click",function(){
	alert("You choose random color");	
$(this).css("background-color", randomColor); 

})

function randomColor(){

	color = "rgb("+ Math.floor(Math.random()*256)+ ", "+ Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256)+")"
	$(this).css("background-color", color); 
	return color;
}

createGrid(16);
var color="yellow";