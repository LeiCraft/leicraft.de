/// <reference types="bun-types/test.d.ts" />
import { describe, test, expect } from 'bun:test';

describe('Basic Test', () => {

    test('should pass', () => {
        expect(true).toBe(true);
    });

});