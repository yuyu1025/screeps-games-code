import {getObjectsByPrototype} from 'game/utils';
import {Creep} from 'game/prototypes';
import { } from 'game/constants';
import { } from 'arena';
import {Flag} from "arena/season_alpha/capture_the_flag/basic/prototypes";

export function loop() {

    // Your code goes here

    var enemyFlag = getObjectsByPrototype(Flag).find(object => !object.my);
    var myCreeps = getObjectsByPrototype(Creep).filter(object => object.my);
    for(let creep of myCreeps) {
        creep.moveTo(enemyFlag);
    }
}
