import Pkg, { Section as PkgSection } from '.';
import Section from './Section';

test('import TimelineList.Section', () => expect(Pkg.Section).toEqual(Section));

test('import {Section}', () => expect(PkgSection).toEqual(Section));
