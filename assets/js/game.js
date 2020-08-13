// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

//console.log(enemyName.length);

var fight = function(enemyName) {
    // //Alert users that they are starting the round
       while(enemyHealth > 0) {
        window.alert("Welcome to Robot Gladiators");

    var promptFight = window.prompt(
        "Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose"
        );
    
    //if player chooses to fight, then
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Check enemy's heatlh
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " heatlh left.");
    }

    // If player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
   
    // If yes (TRUE), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight! Bye!");
        // Subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
}
    // If no (FALSE), ask question again by running fight() again
    else {
        fight();
    }
}
else {
    window.alert("You need to pick a valid option. Try again!");
}
};

for(var i = 0; i < enemyName.length; i++) {
    var pickedEnemyName = enemyName[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
}