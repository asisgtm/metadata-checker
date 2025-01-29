/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.MetadataValidator;
    const checks = {
        Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}
/**
 * Implementation of custom validations.
 */
export class MetadataValidator {
    checkPersonStartsWithCapital(person, accept) {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }
}
//# sourceMappingURL=metadata-validator.js.map