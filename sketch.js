let countdownNumbers_All = "10,9,8,7,6,5,4,3,2,1";
let countdownNumbers_Indiv;
let timer = 1000;
let eventChange = 0;
let i = 0;
let j = 0;

let xPos_Text;
let yPos_Text;

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
  textFont(projectFont);
  textSize(18);
  fill(255);
  text("[ Press 'ENTER' to Begin ]", width/2, height/2);

  countdownNumbers_Indiv = countdownNumbers_All.split(",");
  xPos_Text = width-(width/1.1);
  yPos_Text = height-(height/1.1);
}

function draw()
{
  if(keyCode==ENTER)
  {
    if(millis()>eventChange)
    {
      textFont(projectFont);
      textSize(height);
      
      if(i<=countdownNumbers_Indiv.length)
      {
        background(0,0,int(random(100,256)));
      }

      fill(255);
      text(countdownNumbers_Indiv[i], width/2-25, height/2-100);
      i++;

      if(i>countdownNumbers_Indiv.length)
      {
        if(j<=2)
        {
          background(0);
          textSize(32);
          text(projectText[j], width/2, height/2);
        }
        else
        {
          textSize(13);
          text(projectText[j]+"\n", xPos_Text, yPos_Text);
          yPos_Text+=25;
        }
        j++;
        print(j);
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