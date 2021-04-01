import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    describe('Placeholder', function () {
        it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values', function () {

        });
    });

    describe('Positive cases', function () {

        it.only('TC-068 Age doesn\'t accept letters', function () {
            $(sel.age).setValue('abc');
            let error = $(sel.errorMessage).waitForDisplayed(2000);
            expect(error).toEqual(true);
        });
    });

    describe('Negative cases', function () {
        it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values', function () {

        });
    });

});