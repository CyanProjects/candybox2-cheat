///<reference path="SuperRPGMenu.ts"/>

export default class SuperRPGMenu_Main extends SuperRPGMenu{
    // Constructor
    constructor(superRPG: SuperRPG){
        super(superRPG, "places/village/thirdHouseGames/SuperRPG/mainMenu", 0);
        this.addEntry(new SuperRPGMenuEntry("Start", new CallbackCollection(this.getSuperRPG().startGame.bind(this.getSuperRPG(), false))));
        if(Saving.loadBool("SuperRPGUnlockedHardmode"))
            this.addEntry(new SuperRPGMenuEntry("Start (hardmode)", new CallbackCollection(this.getSuperRPG().startGame.bind(this.getSuperRPG(), true))));
        this.addEntry(new SuperRPGMenuEntry("Exit", new CallbackCollection(this.getSuperRPG().exitGame.bind(this.getSuperRPG()))));
    }
    
    // Public methods
    public draw(renderArea: RenderArea): void{
        // Draw the "objects menu" text
        renderArea.drawString("Main menu", 22, 0);
        
        // Mother export default class draw method
        super.draw(renderArea);
    }
}