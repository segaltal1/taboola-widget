const {test, expect, describe} = require('@jest/globals');
const {getWidgetAction, renderError, renderWidgets, renderSkeletonCards} = require('../js/main');
const {getWidgets} = require('../js/services/widget-service');

const mockList = [
    {
        "type": "video",
        "thumbnail": [
            {
                "url": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fstatic.autoexpress.co.uk%2Fsites%2Fautoexpressuk%2Ffiles%2Fmy15_genesis_01.jpg"
            }
        ],
        "name": "Review in Pictures: Hyundai Genesis 2015",
        "created": "Wed, 16 Apr 2014 13:24:47 UTC",
        "branding": "Auto Express",
        "duration": "0",
        "views": "0",
        "categories": [
            "en"
        ],
        "id": "~~V1~~-2326559899382637824~~KXrGnAmHtBjxOnbGp3iulkE3sGlgLZ3kfkQ8lghCsMSlao0UJZD4ymMvzUiOcNNoHaLrJff2uYORaIhRygiy-3aEnrp9q44MuLwZ6F096NgZBDbioJG15imQIMdTZltZ8FVvB3EAALxt-faU4cAhPYctLEPB7fGHq11hYdI2DEs",
        "origin": "sponsored",
        "url": "https://api.taboola.com/1.2/json/feed/recommendations.notify-click?app.type=desktop&app.apikey=143ca6bf153893c690249736df6a383615bb9e92&response.id=__9102b09515172448f6422599967c5f7b__1b63a25f07f5e0788de112f19f13d3f8&response.session=v2_912fca56911b904f265ed24243f3dfba_70562acb-0a76-457e-a81f-02697341c958-tuctddc9dd3_1726158931_1726158931_CNawjgYQj_9AGJKQ3LieMiABKAEwZjiI6wpAr5AQSMbS2ANQ____________AVgAYABoo8TAhomQj-SVAXAA&item.id=%7E%7EV1%7E%7E-2326559899382637824%7E%7EKXrGnAmHtBjxOnbGp3iulkE3sGlgLZ3kfkQ8lghCsMSlao0UJZD4ymMvzUiOcNNoHaLrJff2uYORaIhRygiy-3aEnrp9q44MuLwZ6F096NgZBDbioJG15imQIMdTZltZ8FVvB3EAALxt-faU4cAhPYctLEPB7fGHq11hYdI2DEs&item.type=video&sig=86f761cb91524ffd97f78b4d0f146d196d023fff15b5&redir=http%3A%2F%2Fwww.autoexpress.co.uk%2Fhyundai%2F86505%2Fhyundai-genesis-2015-review-pictures%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiB7u3fTxhS6f8uVg_e4TCQWVXaF7jqdFV0QSoOiejzwxCC5BCiv-rCe-vfW8cUBMI__QA%23tblciGiB7u3fTxhS6f8uVg_e4TCQWVXaF7jqdFV0QSoOiejzwxCC5BCiv-rCe-vfW8cUBMI__QA&ui=70562acb-0a76-457e-a81f-02697341c958-tuctddc9dd3&cpb=GIkSIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMjY5OICgr58JQIjrCkivkBBQxtLYA1j___________8BYwjXFhDVHxgjZGMI-f__________ARD5__________8BGAdkYwjSAxDgBhgIZGMIpCcQijUYL2RjCO51EIGXARgwZGMI23cQmZkBGDJkYwj-FhCKIBgTZGMIy___________ARDL__________8BGDVkYwjq__________8BEOr__________wEYFmRjCJYUEJwcGBhkYwj_RhDplQEYHWRjCJ5oEJ-HARg9ZGMI9BQQnh0YH2R4AYAB4iOIAZuYh9IBkAEYmAGSkNy4njLbARAB3AE"
    },
    {
        "type": "video",
        "thumbnail": [
            {
                "url": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fgraphics8.nytimes.com%2Fimages%2F2013%2F10%2F22%2Fbusiness%2Fvideo-hyper-luxury-real-estate%2Fvideo-hyper-luxury-real-estate-articleLarge.jpg"
            }
        ],
        "name": "Video: Buildings for Billionaires",
        "created": "Mon, 04 Nov 2013 01:35:22 UTC",
        "branding": "The New York Times",
        "duration": "209",
        "views": "0",
        "categories": [
            "business"
        ],
        "id": "~~V1~~-3727458478161156509~~Yy8iEO2YJatBqPpJiQzaWV--c7ThevviANkOZyYLtjxKAo4OWE1gn9W4ug8DCt-Ya4dFi3jOQTHPwrnCQcodTJuh_Yla2yoPkuWa3X7tZDtfSZI65m2itiwAkIi0mz6IUCIhcigDKLqfXahALYKC6vFPOKopyGnaH0zfRS_4d6g",
        "origin": "sponsored",
        "url": "https://api.taboola.com/1.2/json/feed/recommendations.notify-click?app.type=desktop&app.apikey=143ca6bf153893c690249736df6a383615bb9e92&response.id=__9102b09515172448f6422599967c5f7b__1b63a25f07f5e0788de112f19f13d3f8&response.session=v2_912fca56911b904f265ed24243f3dfba_70562acb-0a76-457e-a81f-02697341c958-tuctddc9dd3_1726158931_1726158931_CNawjgYQj_9AGJKQ3LieMiABKAEwZjiI6wpAr5AQSMbS2ANQ____________AVgAYABoo8TAhomQj-SVAXAA&item.id=%7E%7EV1%7E%7E-3727458478161156509%7E%7EYy8iEO2YJatBqPpJiQzaWV--c7ThevviANkOZyYLtjxKAo4OWE1gn9W4ug8DCt-Ya4dFi3jOQTHPwrnCQcodTJuh_Yla2yoPkuWa3X7tZDtfSZI65m2itiwAkIi0mz6IUCIhcigDKLqfXahALYKC6vFPOKopyGnaH0zfRS_4d6g&item.type=video&sig=ece4506be17fcba781c4e4abf5616c1c8e340fec6fc4&redir=http%3A%2F%2Fwww.nytimes.com%2Fvideo%2Fbusiness%2F100000002512003%2Fbuildings-for-billionaires.html%3Futm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiB7u3fTxhS6f8uVg_e4TCQWVXaF7jqdFV0QSoOiejzwxCC5BCj_-5T4up-rxe0BMI__QA%23tblciGiB7u3fTxhS6f8uVg_e4TCQWVXaF7jqdFV0QSoOiejzwxCC5BCj_-5T4up-rxe0BMI__QA&ui=70562acb-0a76-457e-a81f-02697341c958-tuctddc9dd3&cpb=GIkSIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHRyYzAwMjY5OICgr58JQIjrCkivkBBQxtLYA1j___________8BYwjXFhDVHxgjZGMI-f__________ARD5__________8BGAdkYwjSAxDgBhgIZGMIpCcQijUYL2RjCO51EIGXARgwZGMI23cQmZkBGDJkYwj-FhCKIBgTZGMIy___________ARDL__________8BGDVkYwjq__________8BEOr__________wEYFmRjCJYUEJwcGBhkYwj_RhDplQEYHWRjCJ5oEJ-HARg9ZGMI9BQQnh0YH2R4AYAB4iOIAZuYh9IBkAEYmAGSkNy4njLbARAB3AE"
    },
]

jest.mock('../js/services/widget-service', () => ({
    getWidgets: jest.fn(),
}));

describe('Testing main.js', () => {

    beforeEach(() => {
        jest.resetAllMocks();

        document.body.innerHTML = `
        <div class="widget-container"></div>
        <div class="error-container" hidden></div>
        `
    });

    test('when receiving 2 widgets from API , render 2 widgets', async () => {
        getWidgets.mockResolvedValue({list: mockList})
        const data = await getWidgets();
        expect(data.list.length).toBe(2);
        renderWidgets(data);

        const elContainer = document.querySelector('.widget-container');
        const firstWidgetName = elContainer.children[0].querySelector('.name').textContent;

        expect(elContainer.children.length).toBe(2);
        expect(firstWidgetName).toBe(mockList[0].name);
    });

    test('when receiving 0 widgets from API , render error', async () => {
        getWidgets.mockResolvedValue({list: []})
        const data = await getWidgets();
        expect(data.list.length).toBe(0);
        renderWidgets(data);
        expect(document.querySelector('.error-container').hidden).toBe(false);
    });

    test('showing error container when error', () => {
        renderError()
        expect(document.querySelector('.error-container').hidden).toBe(false);
    })

    test('return window location change for organic widget', () => {
        const result = "window.location.href='https://www.google.com'";
        expect(getWidgetAction('organic', 'https://www.google.com')).toBe(result);
    });

    test('return window open for sponsored widget', () => {
        const result = "window.open('https://www.google.com', '_blank')";
        expect(getWidgetAction('sponsored', 'https://www.google.com')).toBe(result);
    });

    test('render 6 skeleton cards', () => {
        renderSkeletonCards();
        const elContainer = document.querySelector('.widget-container');
        expect(elContainer.children.length).toBe(6);
    });

});