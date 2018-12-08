
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
  let color=chooseColor();
  console.log(color);
  
}
function chooseColor()
{
 return $("#colorPicker").val();
  
}    
  


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
