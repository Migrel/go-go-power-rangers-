
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// para enviar imagens
fabric.Image.fromURL(get_image, function(img) {
block_image_object = img;

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
	top:block_y,
	left:block_x
});
canvas.add(block_image_object);
})





}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{
		// enviar ranger escarlate
		new_image('rr1.png');
console.log("v");
	}
	if(keyPressed == '86')
	{
		block_x = 200;
		// enviar ranger verde
	new_image('gr.png');
	}
	
	if(keyPressed == '65')
	{
		block_x =350;
		// enviar ranger amarelo
		new_image('yr.png');
	}
	if(keyPressed == '82')
	{
		block_x = 600;
		// enviar ranger rosa
		new_image('pr.png');
	}
	if(keyPressed == '73')
	{
		block_x = 700;
	// enviar ranger índigo
	new_image('br.png');
	}
	
}

