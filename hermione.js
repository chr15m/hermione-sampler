var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(1, 0x20);
var player = require('play-sound')();

var samples = {
  1: "immobilius",
  2: "legarduian-laviosa",
  4: "occulus-repairo",
  8: "to-igintato",
  16: "trificus-totalis",
};

lcd.message('Hermione spells!');

lcd.sendBytes(0, 0x1F); // Sainsmart 1602 I2C backlight on 
// lcd.sendBytes(0, 0x3F); // Sainsmart 1602 I2C backlight off 

lcd.on('button_down', function(button) {
  lcd.clear();
  lcd.message("Hermione says:\n" + samples[button]);
  player.play("samples/" + samples[button] + ".mp3");  
});
