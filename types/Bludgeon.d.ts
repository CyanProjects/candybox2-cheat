///<reference path="QuestEntityWeapon.ts"/>

export default class Bludgeon extends QuestEntityWeapon{
    // Public methods
    public getRealDamage(): number{
        return Random.between(15, 25);
    }
    
    public getRealDamageText(): string{
        return "15-25";
    }
}