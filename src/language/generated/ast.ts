/******************************************************************************
 * This file was generated by langium-cli 3.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import type { AstNode, Reference, ReferenceInfo, TypeMetaData } from 'langium';
import { AbstractAstReflection } from 'langium';

export const MetadataTerminals = {
    WS: /\s+/,
    ID: /[_a-zA-Z][\w_]*/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/,
};

export type MetadataTerminalNames = keyof typeof MetadataTerminals;

export type MetadataKeywordNames = 
    | "!"
    | "Hello"
    | "person";

export type MetadataTokenNames = MetadataTerminalNames | MetadataKeywordNames;

export interface Greeting extends AstNode {
    readonly $container: Model;
    readonly $type: 'Greeting';
    person: Reference<Person>;
}

export const Greeting = 'Greeting';

export function isGreeting(item: unknown): item is Greeting {
    return reflection.isInstance(item, Greeting);
}

export interface Model extends AstNode {
    readonly $type: 'Model';
    greetings: Array<Greeting>;
    persons: Array<Person>;
}

export const Model = 'Model';

export function isModel(item: unknown): item is Model {
    return reflection.isInstance(item, Model);
}

export interface Person extends AstNode {
    readonly $container: Model;
    readonly $type: 'Person';
    name: string;
}

export const Person = 'Person';

export function isPerson(item: unknown): item is Person {
    return reflection.isInstance(item, Person);
}

export type MetadataAstType = {
    Greeting: Greeting
    Model: Model
    Person: Person
}

export class MetadataAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return [Greeting, Model, Person];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
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

    getTypeMetaData(type: string): TypeMetaData {
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
