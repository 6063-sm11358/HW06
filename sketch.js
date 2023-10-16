let countdownNumbers_All = "10,9,8,7,6,5,4,3,2,1";
let countdownNumbers_Indiv;
let timer = 1000;
let eventChange = 0;
let i = 0;
let j = 0;
let yPos = 0;

let projectFont;
let projectAudio;
let projectText;

function preload()
{
  projectFont = loadFont("./Courier_Bold.ttf");
  projectText = loadStrings("./HW06_Text.txt");
}

function setup()
{
  projectAudio = createAudio("./HW06_Audio.mp3");
  createCanvas(windowWidth, windowHeight);
  background('Blue');

  textAlign(CENTER,CENTER);
  textFont('sans-serif');
  textSize(18);
  fill(255);
  text("[ Press 'Enter' to Begin ]", width/2, height/2);

  countdownNumbers_Indiv = countdownNumbers_All.split(",");
}

function draw()
{
  if(keyCode==ENTER)
  {
    if(millis()>eventChange)
    {
      textFont(projectFont);
      textSize(height);
      background(0,0,int(random(100,256)));
      fill(255);
      text(countdownNumbers_Indiv[i], width/2-25, height/2-100);
      i++;

      if(i>countdownNumbers_Indiv.length)
      {
        textSize(10);
        text(projectText[j]+'\n', width/2, height/2+yPos);
        j++;
        yPos+=20
      }

      eventChange = millis()+timer;
    }
  }
}

function keyPressed()
{
  if(keyCode==ENTER)
  {
    projectAudio.play();
  }
  else
  {
    return false;
  }
}