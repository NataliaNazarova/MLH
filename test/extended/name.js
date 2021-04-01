import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';

describe('Required fields and story created', function () {

    describe('Positive cases', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
        });

        it('TC-028 Name Field  placeholder = "Hero\'s name"', function () {
            let placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.namePlaceholder);
        });

        it('TC-029 Name field  accept "a" (one symbol)', function () {
            $(sel.name).setValue(name.oneSymbol);
            expect($(sel.errorRequired)).not.toBeDisplayed();
        });

        it('TC-030 Name field accepts 70 symbols', function () {
            $(sel.name).setValue(name.maxSymbol);
            expect($(sel.errorRequired)).not.toBeDisplayed();
        });

        it('TC-031 Name field accepts  letters "abc....z"', function () {
            $(sel.name).setValue(name.alphabet);
            expect($(sel.errorRequired)).not.toBeDisplayed();
        });

        it('TC-032 Name field accepts Lower case/ Upper case "ABCabc"', function () {
            $(sel.name).setValue(name.lowerUpper);
            expect($(sel.errorRequired)).not.toBeDisplayed();
        });

        it('TC-032.2 Name field accepts Lower case/ Upper case "ABCabc"', function () {
            $(sel.name).setValue(name.lowerUpper);
            let mes = $(sel.errorRequired).isDisplayed();
            expect(mes).toEqual(false);
        });

        it('TC-033 Name field accepts digits "123456789"', function () {
            $(sel.name).setValue(name.digits);
            const s = $(sel.errorRequired).isDisplayed();
            expect(s).toEqual(false);
        });

        it('TC-033.2 Name field accepts 80 digits "123456789..."', function () {
            $(sel.name).setValue(name.maxDigits);
            browser.pause(1000)
            let mes = $(sel.errorRequired).isDisplayed();
            console.log(mes);
            expect(mes).toEqual(true);
        });

        it('TC-034 Name field accepts special symbols "1(){}[]|`¬¦! "£$%^&*"<>:;#~_-+=,@"', function () {
            $(sel.name).setValue(name.specialSymbol);
            expect($(sel.errorRequired)).not.toBeDisplayed();
        });

        it('TC-035  Name field accepts spaces between letters/ words "abc abc"', function () {
            $(sel.name).setValue(name.symbolWithSpace);
            expect($(sel.errorRequired)).not.toBeDisplayed();
        });

        it('TC-036  Name field accepts cyrillic characters "Волк"', function () {
            $(sel.name).setValue(name.cyrillicSymbol);
            expect($(sel.errorRequired)).not.toBeDisplayed();
        });

    }),

    describe('Negative cases', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
        });

        it('TC-042 Name field accepts 71 symbols', function () {
        $(sel.name).setValue(name.moreMaxSymbol);
        expect($(sel.errorRequired)).toBeDisplayed();
        });


    });
});