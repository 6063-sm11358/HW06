let countdownNumbers_All = "10,9,8,7,6,5,4,3,2,1";
let countdownNumbers_Indiv;
let timer = 1000;
let eventChange = 0;
let i = 0;
let j = 0;

let xPos_Text;
let yPos_Text;

let projectFont;
let projectFont_Count;
let projectAudio;
let projectText;

function preload()
{
  projectFont_Count = loadFont("./Oxanium.ttf");
  projectFont = loadFont("./Courier_Bold.ttf");
  projectText = loadStrings("./HW06_Text.txt");
}

function setup()
{
  projectAudio = createAudio("./HW06_Audio.mp3");
  createCanvas(windowWidth, windowHeight);
  background('DarkBlue');

  textAlign(CENTER,CENTER);
  textFont(projectFont);
  textSize(18);
  fill(255);
  text("[ Press 'ENTER' to Begin ]", width/2, height/2);

  countdownNumbers_Indiv = countdownNumbers_All.split(",");
  xPos_Text = width-(width-50);
  yPos_Text = height-(height-25);
}

function draw()
{
  if(keyCode==ENTER)
  {
    if(millis()>eventChange)
    {
      textFont(projectFont_Count);
      textSize(height);
      
      if(i<=countdownNumbers_Indiv.length)
      {
        background(0,0,int(random(50,256)));
      }

      fill(255);
      text(countdownNumbers_Indiv[i], width/2.05, height/2.3);
      i++;

      if(i>countdownNumbers_Indiv.length)
      {
        textFont(projectFont);
        if(j<=2 || (j==projectText.length-1))
        {
          textAlign(CENTER,CENTER);
          background(0);
          textSize(32);
          text(projectText[j], width/2, height/2);
        }
        else if(j>2 && j<(projectText.length-1))
        {
          fill(0,random(150,256),0);
          if(j==(projectText.length-1)/2)
          {
            background(0);
            yPos_Text = height-(height-25);
          }
          textAlign(TOP,LEFT);
          textSize(15);
          text(projectText[j]+"\n", xPos_Text, yPos_Text, width-150, 40);
          yPos_Text+=40;
        }
        j++;
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