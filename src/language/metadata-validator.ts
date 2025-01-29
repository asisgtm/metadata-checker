import type { ValidationAcceptor, ValidationChecks } from 'langium';
import type { MetadataAstType, Person } from './generated/ast.js';
import type { MetadataServices } from './metadata-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: MetadataServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.MetadataValidator;
    const checks: ValidationChecks<MetadataAstType> = {
        Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class MetadataValidator {

    checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }

}
