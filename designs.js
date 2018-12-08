
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
  //Choose color
  let color=chooseColor();
  
  //Fill choosed Color on click 
  $("#pixel_canvas").on("click", "td", function () {
    $(this).css("background-color", color);
  });
  //Remove color on double click
  $("#pixel_canvas").on("dblclick", "td", function () {
    $(this).css("background-color", "");
  });

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

   // Takeing Screenshot
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
