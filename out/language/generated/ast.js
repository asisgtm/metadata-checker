/******************************************************************************
 * This file was generated by langium-cli 3.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/
import { AbstractAstReflection } from 'langium';
export const MetadataTerminals = {
    WS: /\s+/,
    ID: /[_a-zA-Z][\w_]*/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/,
};
export const Greeting = 'Greeting';
export function isGreeting(item) {
    return reflection.isInstance(item, Greeting);
}
export const Model = 'Model';
export function isModel(item) {
    return reflection.isInstance(item, Model);
}
export const Person = 'Person';
export function isPerson(item) {
    return reflection.isInstance(item, Person);
}
export class MetadataAstReflection extends AbstractAstReflection {
    getAllTypes() {
        return [Greeting, Model, Person];
    }
    computeIsSubtype(subtype, supertype) {
        switch (subtype) {
            default: {
                return false;
            }
        }
    }
    getReferenceType(refInfo) {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'Greeting:person': {
                return Person;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }
    getTypeMetaData(type) {
        switch (type) {
            case Greeting: {
                return {
                    name: Greeting,
                    properties: [
                        { name: 'person' }
                    ]
                };
            }
            case Model: {
                return {
                    name: Model,
                    properties: [
                        { name: 'greetings', defaultValue: [] },
                        { name: 'persons', defaultValue: [] }
                    ]
                };
            }
            case Person: {
                return {
                    name: Person,
                    properties: [
                        { name: 'name' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    properties: []
                };
            }
        }
    }
}
export const reflection = new MetadataAstReflection();
//# sourceMappingURL=ast.js.map