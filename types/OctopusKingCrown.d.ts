///<reference path="EqItem.ts"/>

export default class OctopusKingCrown extends EqItem{
    // Constructor
    constructor(){
        super("eqItemHatOctopusKingCrown",
              "eqItemHatOctopusKingCrownName",
              "eqItemHatOctopusKingCrownDescription",
              "eqItems/hats/octopusKingCrown");
    }
    
    // Special ability
    public getSpecialAbility(): string{
        return "You are a lot more confident.";
    }
}