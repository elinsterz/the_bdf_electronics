/*
 * 
 * All the resources for this project: https://www.hackster.io/Aritro
 * Modified by Aritro Mukherjee
 * 
 * 
 */
 
#include <SPI.h>
#include <MFRC522.h>
 
#define SS_PIN 53
#define RST_PIN 5
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.
 
void setup() 
{
  Serial.begin(9600);   // Initiate a serial communication
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522
//  Serial.println("Approximate your card to the reader...");
//  Serial.println();

}
void loop() 
{
  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
  //Show UID on serial monitor
//  Serial.print("UID tag :");
  String content= "";
  byte letter;
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
//     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
//     Serial.print(mfrc522.uid.uidByte[i], HEX);
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
//  Serial.println();
//  Serial.print("Message : ");
  content.toUpperCase();
  if (content.substring(1) == "89 6C 65 C2") //change here the UID of the card/cards that you want to give access
  {
    Serial.println("Tag A"); //sends as string to p5
//    Serial.println();
    delay(1);
  }

  if (content.substring(1) == "39 D0 31 C2") //change here the UID of the card/cards that you want to give access
  {
    Serial.println("Tag B"); 
//    Serial.println();
    delay(1);
  }

   if (content.substring(1) == "99 77 FB C2") //change here the UID of the card/cards that you want to give access
  {
    Serial.println("Tag C");
//    Serial.println();
    delay(1);
  }

// else   {
//    Serial.println(" Access denied");
//    delay(3000);
//  }
} 
