/******************************************************************************
 * This file was generated by langium-cli 3.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import type { LangiumSharedCoreServices, LangiumCoreServices, LangiumGeneratedCoreServices, LangiumGeneratedSharedCoreServices, LanguageMetaData, Module } from 'langium';
import { MetadataAstReflection } from './ast.js';
import { MetadataGrammar } from './grammar.js';

export const MetadataLanguageMetaData = {
    languageId: 'metadata',
    fileExtensions: ['.danam'],
    caseInsensitive: false
} as const satisfies LanguageMetaData;

export const MetadataGeneratedSharedModule: Module<LangiumSharedCoreServices, LangiumGeneratedSharedCoreServices> = {
    AstReflection: () => new MetadataAstReflection()
};

export const MetadataGeneratedModule: Module<LangiumCoreServices, LangiumGeneratedCoreServices> = {
    Grammar: () => MetadataGrammar(),
    LanguageMetaData: () => MetadataLanguageMetaData,
    parser: {}
};
