
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid
//seting a variable for pixel canvas
const canvas = $("#pixel_canvas");

function makeGrid(){
 //removes old table
 $("tr").remove();
 $("td").remove();
  
// Creating a table
  let width = $("#input_width").val();
  let height = $("#input_height").val();

  for (let i = 0; i < height; i++){
    $("table").append("<tr></tr>");
  }
 for (let j = 0; j < width; j++){
    $("tr").append("<td></td>");
 
  }
}
//choosing color
 canvas.on("click", "td", function() {
    let color = $("#colorPicker").val();  
    $(this).css("background-color", color);
   })

//removing color
 canvas.on("dblclick", "td", function() { 
    $(this).css("background-color", "");
  })

//mousedragging
let isDown = false;

//mousedown
canvas.on("mousedown", function() {
		isDown = true;
	});

// releasing with mouse
canvas.on("mouseup", function() {
		isDown = false;
	});

//draging with mouse
canvas.on("mouseover", "td", function() {
		if (isDown) {
			colour = $('input[type="color"]').val();
   
   $(this).css("background-color",colour);        
		}
	});

 //Start Again Button
function clearGrid () {
  $('td').each(function() {
		$(this).css("background-color","")}
  
   )};
const takeScreenShot = function() {
	html2canvas($("#save-canvas"), {
	  onrendered: function(canvas) {
		const myImage = canvas.toDataURL();
		downloadURI(myImage, "pixelart.png");
	  }
})};

function downloadURI(uri, name) {
    const link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();   
 
}
